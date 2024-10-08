import React from "react";
import Image from "next/image";
import brandImage from "../app/assets/brandImage.svg";
import bellIcon from "../app/assets/bell.svg";
import SettingsModal from "./SettingsModal";

function Header() {
  return (
    <div className="flex justify-between p-6 h-[72px] bg-white shadow-sm">
      <div className="flex items-center">
        <Image className="mr-8" src={brandImage} alt="brand Image" />
        <h1 className="text-2xl font-bold border-l-[1px] pl-8">
          ABC Pvt. Ltd.
        </h1>
      </div>
      <div className="flex items-center">
        <Image className="mr-8" src={bellIcon} alt="Notification Image" />
        <SettingsModal />
      </div>
    </div>
  );
}

export default Header;
