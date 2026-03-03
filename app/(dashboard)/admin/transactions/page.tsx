"use client";

import { useState } from "react";
import TransactionTable from "../component/transactions/transaction-table";
import TransactionModal from "../component/transactions/transaction-modal";

const TransactionManagement = () => {
    const [isOpen, setIsOpen] = useState(false);
    
        const handleCloseModal = () => {
            setIsOpen(false);
        };

        const handleViewDetails = () => {
            setIsOpen(true);

        };
        

    return (
        <div>
            <div className="mb-10">
                    <h1 className="font-bold text-2xl">Transactions</h1>
                    <p className="opacity-50">Verify incoming payment and manage orders</p>
            </div>
            
            
            <TransactionTable onViewDetails={handleViewDetails} /> 
            <TransactionModal isOpen={isOpen} onClose={handleCloseModal}/>
        </div>

    );
};

export default TransactionManagement;