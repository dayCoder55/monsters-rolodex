import React from 'react';
import "../searchBox/searchBox.style.css";
export const SearchBox =  ( { placeholder,searchWord }) => {
    return (
        <div>
            <input 
            className="search"
            type="seach"
            placeholder={placeholder}
            onChange= {searchWord}
            />
        </div>
    )
}