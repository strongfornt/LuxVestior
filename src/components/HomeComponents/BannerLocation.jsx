import Image from "next/image";
import React from "react";
import Location from "./Location";

const BannerLocation = () => {
  return (
    <div className="">
      <div className="flex p-5 justify-between">
        <div className="flex flex-col text-center">
          <Image
            src="https://i.ibb.co/FHFHZ6n/11.jpg"
            alt="Description of the image"
            width={500}
            height={300}
            priority
          />
          <div className="mt-5">
            <p className="text-xl font-bold">Accessories Gallery</p>
            <p>Shop through our latest selection of fashion</p>

            <button className="mt-5 underline">Shop Collection</button>
          </div>
        </div>

        <div className="flex flex-col text-center">
          <Image
            src="https://i.ibb.co/5kx5vTC/12.jpg"
            alt="Description of the image"
            width={500}
            height={300}
            priority
          />

          <div className="mt-5">
            <p className="text-xl font-bold">Statement Pieces</p>
            <p>Shop through our latest selection of fashion</p>

            <button className="mt-5 underline">Shop Collection</button>
           
          </div>
        </div>
      </div>
      <Location></Location>
    </div>
  );
};

export default BannerLocation;