import React from 'react';
import "./styles/searchForm.css";

function SearchForm({ onSearch, searchTerm, handleSortByName, handleSortByDept }) {
    return (
        <div className="my-6">
            <div className="mb-4">
                <button onClick={handleSortByName} className="button">Name</button>
            </div>
            <div className="mb-4">
                <button onClick={handleSortByDept} className="button">Department</button>
            </div>
            <form>
                <input
                   value={searchTerm} // value attribute contain search term value
                   onChange={onSearch} //onChange attribute uses onSearch prop method let state know there was a change
                   className="rounded py-1"
                   type="text"
                   placeholder="Search employee" />
            </form>

        </div>
    )
}

export default SearchForm;