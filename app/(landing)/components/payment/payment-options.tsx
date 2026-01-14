import React from "react";
import { CardWithHeader } from "../ui/card-with-header";
import { FiCreditCard } from "react-icons/fi";
import { getAllBanks } from "@/app/services/bank.service";

async function PaymentOptions() {
  const banks = await getAllBanks();
  return (
    <CardWithHeader title="Payment Options">
      {banks.map((payment, index) => (
        <div className="flex gap-5 p-5 border-b border-gray-100" key={index}>
          <div className="bg-blue-100 p-4 text-blue-500 w-fit">
            <FiCreditCard size={20} />
          </div>
          <div className="self-center">
            <div className="font-bold">{payment.bankName}</div>
            <div className="text-sm">{payment.accountNumber}</div>
            <div className="text-sm opacity-70">{payment.accountName}</div>
          </div>
          <div className="ml-auto bg-blue-50 text-gray-800 text-xs self-center px-2 py-1">Bank Transfer</div>
        </div>
      ))}
    </CardWithHeader>
  );
}

export { PaymentOptions };
