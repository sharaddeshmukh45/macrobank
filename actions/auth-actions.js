"use server";
import { redirect } from "next/navigation";

import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/users";
import { createAuthSession, destroySession } from "@/lib/auth";
import { cookies } from "next/headers";

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const name = formData.get("name");
  const date = formData.get("date");
  const confirmPassword = formData.get("confirmPassword");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (name.trim().length <= 0) {
    errors.name = "Please enter name";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  } else if (password.trim() !== confirmPassword.trim()) {
    errors.password = "Passwords don't match";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  const hashedPassword = hashUserPassword(password);
  try {
    createUser(email, hashedPassword, date, name);
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email: "Chosen email already exists.",
        },
      };
    }
    throw error;
  }

  redirect("/");
}

export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  ;

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    return {
      errors: {
        email: "Could not authenticate user, please check your credentials.",
      },
    };
  }
  
  const isValidPassword = verifyPassword(existingUser.password, password);
  if (!isValidPassword) {
    return {
      errors: {
        password: "Could not authenticate user, please check your credentials.",
      },
    };
  }
  cookies().set('email',existingUser.email)
  cookies().set('name',existingUser.name)
  await createAuthSession(existingUser.id);
  redirect("/dashboard");
}

export async function logout() {
  await destroySession();
  redirect("/");
}
