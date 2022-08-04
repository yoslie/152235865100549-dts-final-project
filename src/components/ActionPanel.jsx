import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SearchIcon } from '@heroicons/react/outline'

const ActionPanel = () => {
  const [query, setCredential] = useState("");

  const textFieldSearchlOnChangeHandler = (event) => {
    setCredential(event.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 lg:max-w-7xl">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Search Restaurant</h3>
      <div className="my-3 sm:flex sm:items-center">
        <div className="w-full sm:max-w-xs">
          <label htmlFor="restaurant" className="sr-only">
            restaurant
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-500 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Cari Restaurant"
              type="text"
              value={query}
              onChange={textFieldSearchlOnChangeHandler}
            />
          </div>
        </div>
        <Link
          to={`/search?q=${query}`}
          className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Search
        </Link>
      </div>
    </div>
  )
}

export default ActionPanel;