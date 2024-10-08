"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";
import downloadImg from "@/app/assets/download.svg";
import visibility from "@/app/assets/visibility.svg";

const servies = ["Transaction ID", "Date", "Amount", "Status", "Action"];
const data = [
  { id: 2011002039111, date: "22-09-2021", amt: "1,780", status: "Approved" },
  { id: 2011002039112, date: "23-09-2021", amt: "2,780", status: "Approved" },
  { id: 2011002039113, date: "24-09-2021", amt: "3,780", status: "Rejected" },
  { id: 2011002039114, date: "25-09-2021", amt: "4,780", status: "Approved" },
  { id: 2011002039115, date: "26-09-2021", amt: "5,780", status: "Approved" },
  { id: 2011002039116, date: "27-09-2021", amt: "6,780", status: "Rejected" },
];

function Details() {
  const [isModalOpen, setModal] = useState(false);
  const [selectedData, setData] = useState({});

  const openModal = (data) => {
    setModal(true);
    setData(data);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <div className="bg-white rounded-xl p-6 mt-6 shadow-sm mx-6 ">
        <div className="w-full text-center flex">
          {servies.map((item) => (
            <div key={item} className="text-[#828282] text-sm font-bold w-1/5">
              {item}
            </div>
          ))}
        </div>
        <div className="text-center bg-[#E0E0E0] rounded-xl mt-3">
          {data.map((item) => (
            <div key={item.id} className="flex">
              <div className="w-1/5 p-3 ">{item.id}</div>
              <div className="w-1/5 p-3 ">{item.date}</div>
              <div className="w-1/5 p-3 ">{item.amt}</div>
              <div
                className={`p-3 w-1/5  ${
                  item.status === "Approved"
                    ? "text-[#008000]"
                    : "text-[#FF0000]"
                }`}
              >
                {item.status}
              </div>
              <div className="w-1/5 p-3 flex justify-center">
                <Image
                  src={visibility}
                  alt="eye icon"
                  className="mx-2 cursor-pointer"
                  onClick={() => openModal(item)}
                />
                <Image
                  src={downloadImg}
                  alt="download icon"
                  className="mx-2 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && <Modal data={selectedData}  closeModal={closeModal}/>}
    </div>
  );
}

export default Details;
