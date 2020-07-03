import React, { useState } from 'react';
import EmployeeCardList from "./components/EmployeeCardList";
import employees from "./employees.json";
import SearchForm from "./components/SearchForm";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import './App.css';


function App() {
  // setting states for sorting and search term
  const [ searchTerm, setSearchTerm ] = useState("")
  const [ sorted, setSorted ] = useState(false);
  const [ data, setEmployees ] = useState(employees);

  function handleSearchTerm(event)  {
    setSearchTerm(event.target.value)
}

  function handleSortByName() {
    // sort array ascending or descending by name
    if(!sorted) {
      setEmployees(data.sort((a,b) => (a.name > b.name) ? 1: -1));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
      setSorted(false);
    }
  }

  function handleSortByDept() {
    // sort array ascending or descending by deparment
    if(!sorted) {
      setEmployees(data.sort((a,b) => (a.name > b.name) ? 1: -1));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
      setSorted(false);
    }
  }

  // filtered employees variables only stores employee names that start with the matching string
  const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
  return (
    <div className="App">
         <div className="head">
         <h1 className="title">Employee Directory</h1>
         <p className="mb-16 text-md">Sort by Name,Department or Search for an employee</p>
         </div>
         <SearchForm
           onSearch={handleSearchTerm}
           searchterm={searchTerm}
           handleSortByName={handleSortByName}
           handleSortByDept={handleSortByDept}
         />
         <Wrapper>
         <EmployeeCardList data={filteredEmployees} />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
