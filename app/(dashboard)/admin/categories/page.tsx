"use client";

import { FiPlus } from "react-icons/fi";
import CategoryTable from "../component/categories/categories-table";
import { useState } from "react";
import Button from "@/app/(landing)/component/ui/button";
import CategorytModal from "../component/categories/category-modal";


const CategoryManagement = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleCloseModal = () => {
            setIsOpen(false);
        };
    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl">Category Management</h1>
                    <p className="opacity-50">Organize your products into categories</p>
                </div>
                <Button className="rounded-lg" onClick = {() => setIsOpen(true)}>
                   <FiPlus size ={24}/>
                    <span>Add Product</span>
                 </Button>
            </div>
            
            <CategoryTable/>
            <CategorytModal isOpen={isOpen} onClose={handleCloseModal}/>
        </div>

    );
};

export default CategoryManagement;