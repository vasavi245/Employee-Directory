import React, { useState } from 'react';
import EmployeeCardList from "./components/EmployeeCardList";
import employees from "./employees.json";
import SearchForm from "./components/SearchForm";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import logo from "./logo2.png"
import './App.css';


function App() {
  // setting states for sorting and search term
  const [ searchTerm, setSearchTerm ] = useState("")
  const [ sorted, setSorted ] = useState(false);
  const [ data, setEmployees ] = useState(employees);

  // handling the search term handles the searched item
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
      setEmployees(data.sort((a,b) => (a.department > b.department) ? 1: -1));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a.department > b.department) ? -1 : 1));
      setSorted(false);
    }
  }

  // filtered employees variables only stores employee names that start with the matching string
  const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
  return (
    <div className="App">
         <div className="head">
           <img src={logo} className="img-fluid" alt="logo"/>
         </div>
         <p><strong>Sort by Name,Department or Search for an employee</strong></p>
         { /*handle search term method and searchterm state get passed down to searchform component via props with on search and searchterm props */}
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
