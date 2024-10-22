import { paymentmethods } from "@/constants";
import React from "react";

const PaymentDetails = () => {
  return (
    <div className="flex flex-col mt-6">
      <div className="rounded-lg transition group border-2 border-n-20 bg-n-20 text-n-1 min-w-[18rem] pointer-events-none flex justify-center items-center py-4 px-4">
        Payment Details
      </div>
      <div className="rounded-lg transition group bg-n-21 text-n-8 min-w-[18rem] pointer-events-none flex justify-center items-center py-2 px-4 shadow-lg mt-10 font-semibold">
        Bank Transfer
      </div>
      <p className="text-sm mt-4 px-3 text-n-12">
        Please use one of the payment options below. An invoice will be sent for
        payment.
      </p>
      <div className="flex w-full justify-center items-center gap-4 px-3 text-n-12">
        <div className="flex flex-col w-full gap-4 mt-6 bg-n-22 rounded-lg text-xs p-2">
          Mini Golf Hire BSB 063 245 Account No 1114 1260
        </div>
        <div className="flex flex-col w-full gap-4 mt-6 bg-n-22 rounded-lg text-xs p-2">
          Payable to Mini Golf Hire. PO Box 4738
        </div>
      </div>
      <hr className="border-n-22 border-2 mt-6 rounded-xl" />
      <div className="rounded-lg transition group bg-n-22 text-n-12 pointer-events-none flex items-center py-2 px-4 shadow-lg mt-6 text-xs mx-3 max-w-[15.5rem]">
        Knox City Centre VIC 3152.
      </div>
      <div className="rounded-lg transition group bg-n-21 text-n-8 min-w-[18rem] pointer-events-none flex justify-center items-center py-2 px-4 shadow-lg mt-6 font-semibold">
        Card Payments
      </div>
      <div className="px-3">
        <ul className="flex gap-4 mt-2 items-center">
          {paymentmethods.map((method) => (
            <li key={method.id || method.name}>
              <img src={method.iconUrl} alt={method.name} width={70} />
            </li>
          ))}
        </ul>
        <p className="text-sm mt-4 px-3 text-n-12">
          For security purposes, please use fax or phone.
        </p>
        <div className="flex flex-col w-full gap-4 mt-6 bg-n-22 rounded-lg text-xs p-2 max-w-[9rem] text-n-12">
          Head office
          <br />
          Mini Golf Hire
          <br />3 Hilson Cl.
          <br />
          Wantirna South
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
