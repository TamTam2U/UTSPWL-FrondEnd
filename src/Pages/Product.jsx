/* eslint-disable no-unused-vars */
import React from "react";
import SideBarDash from "../Components/SideBarDash";
import Table from "../Components/Table";

const Product = () => (
  <SideBarDash>
    <div className="flex flex-col">
      <p className="text-4xl text-purple-600 font-bold">Product</p>
      <div className="flex justify-end mt-20 mb-6">
        <button className="flex justify-center py-2 item-center w-40 h-9 bg-purple-600 text-white rounded-lg  text-sm">
          Add Product
        </button>
      </div>
      <Table></Table>
    </div>
  </SideBarDash>
);
export default Product;
