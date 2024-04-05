import React from "react";
import ChatOpener from "@/components/ChatOpener";

export default function Home() {
  return (
      <div className=" flex w-full bg-[#ece5dd] ">
        <div className="lg:w-[42%] h-screen md:h-full bg-white w-full">
          <div className=" h-screen">
           <ChatOpener />
          </div>
        </div>
      </div>
  );
}
