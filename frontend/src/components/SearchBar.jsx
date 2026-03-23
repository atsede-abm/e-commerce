import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {

    const { search, setSearch,showSearch, setShowSearch} =useContext(ShopContext);
    return showSearch ? (
        <div className="border-t border-b bg-gray-50 text-center">

<div className="inline-flex items-center justify-center border border-gray-400 px-5 py-">

</div>
        </div>
    ):null
}
export default SearchBar