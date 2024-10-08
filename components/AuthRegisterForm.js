"use client";
import React from "react";
import { useFormState } from "react-dom";
import Link from "next/link";
import InputField from "./InputField";

import { signup } from "@/actions/auth-actions";

function AuthRegisterForm() {
  const [formState, formAction] = useFormState(signup, {});

  return (
    <div className="w-min">
      <form id="auth-form" action={formAction}>
        <h1 className="text-3xl font-bold mb-3">Create an Account</h1>
        <InputField label="Full Name" name="name" />
        {formState?.errors?.name && (
          <span className="text-xs text-red-600">{formState.errors.name}</span>
        )}
        <InputField type="date" label="Date of Incorporation" name="date" />
        <InputField label="Email" name="email" />
        {formState?.errors?.email && (
          <span className="text-xs text-red-600">{formState.errors.email}</span>
        )}
        <InputField label="Password" name="password" type="password" />
        {formState?.errors?.password && (
          <span className="text-xs text-red-600">
            {formState.errors.password}
          </span>
        )}
        <InputField
          label="Confirm Password"
          type="pasword"
          name="confirmPassword"
        />

        <div>
          <button
            type="submit"
            className="bg-background w-[320px] h-[50px] rounded-xl text-white text-base font-bold mt-8 cursor-pointer"
          >
            Create an Account
          </button>
        </div>
        <div className="font-bold text-sm text-center mt-8 mb-16">
          <span className="text-[#828282]">Already have an account? </span>
          <Link className="text-background cursor-pointer" href="/">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AuthRegisterForm;
