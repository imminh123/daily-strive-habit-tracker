import React, { KeyboardEventHandler, useRef } from "react";

export const Search = ({inputClassName}: {inputClassName?: string}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress: KeyboardEventHandler = (event) => {
    if(event.key == 'Enter') {
      if(searchInputRef.current) {
        console.log(searchInputRef.current.value);
        searchInputRef.current.value = "";
      }
    }
  } 

  return (
      <div className={`mx-auto w-full sm:max-w-xs`}>
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1 rounded-full shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className={`block w-full rounded-full border-gray-300 pl-10 text-sm p-3 focus:outline-none ${inputClassName}`}
            placeholder="Search for new habits ..."
            onKeyDown={handleKeyPress}
            ref={searchInputRef}
          />
        </div>
      </div>
  );
};
