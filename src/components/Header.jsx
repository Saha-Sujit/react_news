import React from "react";

function Header() {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="https://img.icons8.com/cute-clipart/64/undefined/news.png" />
          <span class="ml-3 text-xl">NewsApp</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
        <a
          href="https://github.com/saha-sujit"
          class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          GitHub Link
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;