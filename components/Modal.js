import React from "react";
import downloadImg from "@/app/assets/download.svg";
import Image from "next/image";

function Modal({data, closeModal}) {
  return (
    <div className="absolute top-0 min-h-screen h-full  flex justify-center items-center w-full bg-fade">
      <div className="bg-white min-w-[480px] p-6 rounded-xl">
        <div className="flex justify-between pb-6 border-b-[1px] border-[#E0E0E0]">
          <div className="font-bold">Transaction Details</div>
          <button className="text-[#E4E4E4] text-2xl" onClick={closeModal}>&times;</button>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/2 mt-6 ">
            <p className="text-sm font-bold text-[#828282]">Transaction ID</p>
            <p>{data.id}</p>
          </div>
          <div className="w-1/2 mt-6 ">
            <p className="text-sm font-bold text-[#828282]">Transfer to</p>
            <p>XYZ corporation</p>
          </div>
          <div className="w-1/2 mt-6 ">
            <p className="text-sm font-bold text-[#828282]">Date</p>
            <p>{data.date}</p>
          </div>
          <div className="w-1/2 mt-6 ">
            <p className="text-sm font-bold text-[#828282]">Amount</p>
            <p>{data.amt}</p>
          </div>
          <div className="w-1/2 mt-6 ">
            <p className="text-sm font-bold text-[#828282]">Status</p>
            <p
              className={`${
                data.status === "Approved" ? "text-[#008000]" : "text-[#FF0000]"
              }`}
            >
              {data.status}
            </p>
          </div>
          <div className="w-1/2 mt-6 ">
            <p className="text-sm font-bold text-[#828282]">Action</p>
            <p><Image src={downloadImg} alt="download image"/></p>
          </div>
          <div className="w-1/2 mt-6 ">
            <p className="text-sm font-bold text-[#828282]">Comment</p>
            <p>Against invoice IN00021009</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
