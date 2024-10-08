"use server";

import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { updateUser, getUserByEmail } from "@/lib/users";
import { cookies } from "next/headers";

export async function updateUserInfo(prevState, formData) {
  const email = formData.get("email");
  const name = formData.get("name");
  const oldPassword = formData.get("oldPassword");
  const password = formData.get("newPassword");
  const confirmPassword = formData.get("confirmPassword");

  const existingUser = getUserByEmail(cookies().get("email").value);
  console.log(">>>>>>>>>>>>>123", existingUser);
  const isValidPassword = verifyPassword(existingUser.password, oldPassword);
  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address.";
  }

  if (name.trim().length <= 0) {
    errors.name = "Please enter name";
  }

  if (password && password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  } else if (password && password.trim() !== confirmPassword.trim()) {
    errors.password = "Passwords don't match";
  }
  if (!isValidPassword) {
    errors.oldPassword = "Passwords don't match";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  const hashedPassword = hashUserPassword(password);
  try {
    updateUser(name, email, hashedPassword);
    cookies().set('email',email)
    cookies().set('name',name)
  } catch (error) {
    console.log(error);
  }
}
