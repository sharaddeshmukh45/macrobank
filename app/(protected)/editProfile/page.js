"use client";
import React from "react";
import { useFormState } from "react-dom";
import Card from "@/components/Card";
import InputField from "@/components/InputField";
import { updateUserInfo } from "@/actions/user-actions";

function EditProfile() {
  const [formState, formAction] = useFormState(updateUserInfo, {});
  console.log(">>>>>>>>>>>>>>>>", formState?.errors);
  return (
    <form action={formAction}>
      <div className="bg-[#f2f2f2] min-h-screen h-full">
        <div className="mx-6">
          <h1 className="mt-8  text-2xl font-bold">Edit Profile</h1>
          <Card>
            <div className="flex flex-col p-6">
              <InputField label="Name" name="name" />
              {formState?.errors?.name && (
                <span className="text-xs text-red-600">
                  {formState.errors.name}
                </span>
              )}
              <InputField label="Email Address" name="email" type="email" />
              {formState?.errors?.email && (
                <span className="text-xs text-red-600">
                  {formState.errors.email}
                </span>
              )}
              <InputField
                label="Old Password"
                name="oldPassword"
                type="password"
              />
              {formState?.errors?.oldPassword && (
                <span className="text-xs text-red-600">
                  {formState.errors.oldPassword}
                </span>
              )}
              <InputField
                label="New Password"
                name="newPassword"
                type="password"
              />
              {formState?.errors?.password && (
                <span className="text-xs text-red-600">
                  {formState.errors.password}
                </span>
              )}
              <InputField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
              <button
                type="submit"
                className="bg-background w-[320px] h-[50px] rounded-xl text-white text-base font-bold mt-8"
              >
                Update
              </button>
            </div>
          </Card>
        </div>
      </div>
    </form>
  );
}

export default EditProfile;
