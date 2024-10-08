"use client";
import React from "react";
import Link from "next/link";
import { useFormState } from "react-dom";
import InputField from "@/components/InputField";
import { login } from "@/actions/auth-actions";


function AuthLoginForm() {
  const [formState, formAction] = useFormState(login, {});

  return (
    <div className="w-min">
      <form action={formAction}>
        <h1 className="text-3xl font-bold mb-3">Login</h1>
        <h5 className="text-sm font-bold text-[#828282] pb-2">
          Please login to your account
        </h5>
        <InputField label="Email or Phone" type="email" name="email" />
        <InputField label="Password" type="password" name="password" />
        {formState.errors && (
          <ul id="form-errors">
            {Object.keys(formState.errors).map((error) => (
              <li className="text-xs text-red-600" key={error}>
                {formState.errors[error]}
              </li>
            ))}
          </ul>
        )}
        <div>
          <p className="text-sm font-bold pt-6  pb-2 text-background text-right cursor-pointer">
            Forgot Password?
          </p>
          <button
            type="submit"
            className="bg-background w-[320px] h-[50px] rounded-xl text-white text-base font-bold mt-8"
          >
            Login
          </button>
        </div>
        <div className="font-bold text-sm text-center mt-8">
          <span className="text-[#828282]">Dont't have an account? </span>
          <Link className="text-background cursor-pointer" href="/register">
            Create an Account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AuthLoginForm;
