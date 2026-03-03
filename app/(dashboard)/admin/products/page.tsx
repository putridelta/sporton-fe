"use client";

import { FiPlus } from "react-icons/fi";
import ProductTable from "../component/products/product-table";
import { useState } from "react";
import ProductModal from "../component/products/product-modal";
import Button from "@/app/(landing)/component/ui/button";

const ProductManagement = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Product Management</h1>
                    <p className="opacity-50">Manage your inventory, prices and stock </p>
                </div>
                <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
                    <div className="flex gap-2 items-center">
                    <FiPlus size ={24}/>
                    <span>Add Product</span>
                    </div>
                </Button>
            </div>
            
            <ProductTable/>
            <ProductModal isOpen={isOpen} onClose = {handleCloseModal}/>
        </div>

    );
};

export default ProductManagement;