"use client";
import { logout } from "@/actions/auth-actions";
import { userContext } from "@/app/(protected)/providers";
import Link from "next/link";
import React, { useState } from "react";

function SettingsModal() {
  const [visible, setVisible] = useState(false);
  const { name, email } = userContext();

  const getInitials = () => {
    const nameArr = name.trim().split(" ");
    if (nameArr.length === 1) {
      return nameArr[0]?.charAt(0);
    } else {
      return nameArr[0]?.charAt(0) + nameArr[nameArr.length - 1]?.charAt(0);
    }
  };

  return (
    <div>
      <button
        onClick={() => setVisible(!visible)}
        className="bg-background rounded-full h-9 w-9 flex justify-center items-center"
      >
        <p className="text-white text-sm uppercase">{getInitials()}</p>
      </button>
      <div
        className={` ${
          visible ? "block" : "hidden"
        } absolute bg-white shadow-sm w-80 right-8 top-16 p-6 rounded-xl`}
      >
        <div className="bg-background rounded-full h-20 w-20 flex justify-center items-center m-auto">
          <p className="text-white text-3xl font-bold uppercase">
            {getInitials()}
          </p>
        </div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-background underline">{email}</p>
        </div>
        <div className="text-sm py-4 border-t border-[#E0E0E0]">
          <Link href="/editProfile">Edit Profile</Link>
        </div>

        <p className="text-sm py-4 border-t border-[#E0E0E0]">Settings</p>
        <form className="w-full py-4 border-t border-[#E0E0E0]" action={logout}>
          <button type="submit" className="text-sm">
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}

export default SettingsModal;
