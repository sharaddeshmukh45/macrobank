import Image from "next/image";
import React from "react";
import bottomCorner from "@/app/assets/bottom.svg";
import topCorner from "@/app/assets/top.svg";
import TeamImage from "@/app/assets/team.svg";
import AuthLoginForm from "@/components/AuthLoginForm";
import './globals.css';


export default function Home() {
  return (
    <div className="h-screen flex">
      <div className="bg-background flex-1 relative">
        <Image
          src={topCorner}
          className="absolute top-0"
          alt="top corner image"
        />
        <div className="flex justify-center items-center  h-full  flex-col">
          <Image src={TeamImage} className="w-4/6" alt="team image" />
          <h1 className="text-[64px] text-white font-black">Micro Bank</h1>
        </div>
        <Image
          src={bottomCorner}
          className="absolute bottom-4 right-4"
          alt="bottom corner image"
        />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <AuthLoginForm />
      </div>
    </div>
  );
}
