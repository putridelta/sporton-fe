
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";
import Input from "../ui/input";
import Button from "@/app/(landing)/component/ui/button";

type TBankInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BankInfoModal = ({ isOpen, onClose }: TBankInfoModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Bank Account">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="input-group-admin">
            <label htmlFor="bankName">Bank Name</label>
            <Input
              type="text"
              id="bankName"
              name="bankName"
              placeholder="e. g. Mandiri, BCA, BRI"
            />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountNumber">Account Number</label>
            <Input
              type="text"
              id="accountNumber"
              name="accountNumber"
              placeholder="123124344234234"
            />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountName">Account Name / Holder</label>
            <Input
              type="text"
              id="accountName"
              name="accountName"
              placeholder="Holder Name as registered on the account"
            />
          </div>
        </div>
        <Button className="ml-auto mt-3 rounded-lg">Create Bank Account</Button>
      </div>
    </Modal>
  );
};

export default BankInfoModal;
