import React from "react";
import Image from "next/image";
import bank from "@/app/assets/bank.svg";
import tab from "@/app/assets/tab.svg";
import dollar from "@/app/assets/dollar.svg";
import star from "@/app/assets/star.svg";
import wallet from "@/app/assets/wallet.svg";
import timeline from "@/app/assets/timeline.svg";
import tax from "@/app/assets/tax.svg";

const servies = [
  { img: wallet, title: "Wallet" },
  { img: timeline, title: "Investments" },
  { img: tax, title: "Tax Payment" },
  { img: dollar, title: "Loans" },
];
const arr = [1, 2, 3, 4, 5];

function Summary() {
  return (
    <div className="mx-6">
      <div className="bg-[#FFF0F3] rounded-xl p-6 mt-3 shadow-sm">
        <div className="text-lg font-bold text-[#1A1A1A]">Summary</div>
        <div className="mt-6 flex">
          <div className="w-1/4">
            <p className="text-[#00000061] text-xs">Account Number</p>
            <p className="text-base font-bold mt-2">67238744</p>
          </div>
          <div className="w-1/4">
            <p className="text-[#00000061] text-xs">Income</p>
            <p className="text-base font-bold mt-2">$20,00,000</p>
          </div>
          <div className="w-1/4">
            <p className="text-[#00000061] text-xs">Spends</p>
            <p className="text-base font-bold mt-2">$11,00,000</p>
          </div>
        </div>
      </div>
      <div className="flex mt-8">
        <p className="text-sm font-bold">Services&nbsp;&nbsp;</p>
        <p className="text-sm italic">Micro bank services for you</p>
      </div>
      <div className="bg-white rounded-xl p-6 mt-3 shadow-sm">
        <div className="text-lg font-bold text-[#1A1A1A]">Current Services</div>
        <div className="mt-6 flex">
          <div className="w-1/5 text-center">
            <Image src={bank} alt="bank icon" className="mx-auto h-[60px]" />
            <p className="mt-[10px]">Current Account</p>
            <div className="flex justify-center">
              {arr.map((item) => (
                <Image key={item} src={star} alt="star icon" />
              ))}
            </div>
          </div>
          <div className="w-1/5 text-center">
            <Image src={tab} alt="bank icon" className="mx-auto h-[60px]" />
            <p className="mt-[10px]">Payroll</p>
            <div className="flex justify-center">
              {arr.map((item) => (
                <Image key={item} src={star} alt="star icon" />
              ))}
            </div>
          </div>
          <div className="w-1/5 text-center">
            <Image src={dollar} alt="bank icon" className="mx-auto h-[60px]" />
            <p className="mt-[10px]">Payments</p>
            <div className="flex justify-center">
              {arr.map((item) => (
                <Image key={item} src={star} alt="star icon" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 mt-6 shadow-sm">
        <div className="text-lg font-bold text-[#1A1A1A]">
          Available Services
        </div>
        <div className="mt-6 flex">
          {servies.map((item) => {
            return (
              <div key={item.title} className="w-1/5 text-center">
                <Image
                  src={item.img}
                  alt="bank icon"
                  className="mx-auto h-[60px]"
                />
                <p className="mt-[10px]">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Summary;
