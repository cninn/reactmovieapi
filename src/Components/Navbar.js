import logo from "../logo.png";
import React from "react";


class Navbar extends React.Component {

  
  handleFormSubmit =(event)=>{
    event.preventDefault();
    
  }
  render(){



  return (
    <div className="nav">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="abc" className="flex items-center">
            <img src={logo} className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
             TMDB API WORKSHOP
            </span>
          </a>
       
          <div className="flex md:order-2">
            <form onSubmit={this.handleFormSubmit}>
            <input
            onChange={this.props.searchMovieProp}
           
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ara..."
          
            />
            </form>

          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          ></div>
        </div>
      </nav>
    </div>
  );
}
};
export default Navbar;
