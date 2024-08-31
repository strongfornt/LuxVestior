"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";

const Location = () => {
  const [activeTab, setActiveTab] = useState(2);
  return (
    <div className='mt-20'>
        <p className='text-2xl font-bold bg-black w-1/2 mx-auto p-2 rounded-lg text-white text-center mb-8'>Visit Our Store</p>
      {/* Tab List */}
      <div role="tablist" className="tabs tabs-bordered">
        <a
          role="tab"
          className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
          onClick={() => setActiveTab(1)}
        >
          Bangladesh
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
          onClick={() => setActiveTab(2)}
        >
          United State
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 3 ? "tab-active" : ""}`}
          onClick={() => setActiveTab(3)}
        >
          Canada
        </a>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === 1 && (
          <div className='flex flex-row-reverse justify-between'>
            <Image className='w-[600px] h-[400px] rounded-2xl'
              src="https://i.postimg.cc/vZTN1dXh/Accessories.jpg"
              alt="Description of the image"
              width={600}
              height={300}
            />
            <div className='content-center'>
              <h2 className="text-3xl underline mb-3 font-bold">Bangladesh Store</h2>
              <p>
                House #45, Road #12, <br /> Sector #3 Uttara,  Dhaka-1230 <br />
                Bangladesh
              </p>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className='flex flex-row-reverse justify-between'>
            <Image className='w-[600px] h-[400px] rounded-2xl'
              src="https://i.postimg.cc/NfgVcXHW/Cloth1.jpg"
              alt="Description of the image"
              width={600}
              height={300}
            />
            <div className='content-center'>
              <h2 className="text-3xl underline mb-3 font-bold">United State Store</h2>
              <p>
                1234 Maple Street <br /> Springfield, IL 62704 <br />
                USA
              </p>
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div className='flex flex-row-reverse justify-between'>
            <Image className='w-[600px] h-[400px] rounded-2xl'
              src="https://i.postimg.cc/9FJkFfPz/cloth2.jpg"
              alt="Description of the image"
              width={600}
              height={300}
            />
            <div className='content-center'>
              <div >
                <h2 className="text-3xl underline mb-3 font-bold">Canada Store</h2>
                <p>789 Queen Street West <br /> Toronto, ON M5V 2B7 <br />Canada</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Location;
