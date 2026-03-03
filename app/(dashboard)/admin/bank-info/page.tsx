"use client";

import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import Button from "@/app/(landing)/component/ui/button";
import BankInfoList from "../component/bank-info/bank-info-list";
import BankInfoModal from "../component/bank-info/bank-info-modal";


const BankInfoManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Bank Info Management</h1>
          <p className="opacity-50">
            Manage destination accounts for customer transfers.
          </p>
        </div>
        <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
          <FiPlus size={24} />
          Add Bank Account
        </Button>
      </div>
      <BankInfoList />
      <BankInfoModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default BankInfoManagement;
