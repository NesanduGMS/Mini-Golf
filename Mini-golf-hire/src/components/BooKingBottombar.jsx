import { bookingHuman, booknowBG, callIcon } from "@/assets";
import React from "react";

const BooKingBottombar = () => {
  return (    
    <div className="relative w-full rounded-lg overflow-hidden mt-20">
      <img src={booknowBG} className="absolute w-full h-full object-cover" />
      <div className="relative flex justify-between">
        <div className="flex flex-col py-15 px-12">
          <h5 className="text-n-1 text-4xl font-extrabold">
            Book Your Enquiry Today
          </h5>
          <div className="flex mt-6 gap-8">
            <div className="border-none bg-n-1 rounded-full w-16 h-16 flex justify-center items-center mt-4">
              <img src={callIcon} className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-n-1 font-semibold text-xl">Get In Touch</h5>
              <div className="text-sm flex gap-15 text-n-1 mt-4">
                <div className="flex flex-col">
                  <p>
                    Email:{" "}
                    <a href="info@minigolfhire.com.au" className="underline">
                      info@minigolfhire.com.au
                    </a>
                  </p>
                  <p>Phone: 1 300 137 967</p>
                  <p>Fax: (03) 9887 1446</p>
                </div>
                <div className="flex flex-col">
                  <p>Mailing Address:</p>
                  <p>PO Box 4738</p>
                  <p>Knox City Centre VIC 3152.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={bookingHuman}
            width={180}
            height={245}
            className="absolute right-10 bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default BooKingBottombar;
