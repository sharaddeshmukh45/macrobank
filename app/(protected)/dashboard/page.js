"use client";
import React, { useState } from "react";
import Summary from "./Summary";
import Details from "./Details";

function Dashboard() {
  const [isSummaryVisible, setSummaryVisible] = useState(true);
  return (
    <>
      <div className="mx-6 shadow-sm">
        <h1 className="mt-8 text-2xl font-bold">Dashboard</h1>
        <div className="bg-white mt-6 flex h-[60px] items-center rounded-xl overflow-hidden">
          <div
            className={`${
              isSummaryVisible ? "border-t-[3px] border-[#E8544B]" : ""
            } px-6 h-full flex items-center cursor-pointer`}
            onClick={() => setSummaryVisible(true)}
          >
            <p>Summary</p>
          </div>
          <div
            className={`${
              isSummaryVisible ? "" : "border-t-[3px] border-[#E8544B]"
            } px-6 h-full flex items-center cursor-pointer`}
            onClick={() => setSummaryVisible(false)}
          >
            <p>Details</p>
          </div>
        </div>
      </div>
      {isSummaryVisible ? <Summary /> : <Details />}
    </>
  );
}

export default Dashboard;
