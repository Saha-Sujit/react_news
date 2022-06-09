import React from "react";

function Footer() {
  return (
    <>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="https://img.icons8.com/cute-clipart/64/undefined/news.png" />
            <span class="ml-3 text-xl">NewsApp</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            Made by —
            <a
              href="https://instagram.com/sahasujit14"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Sujit Saha
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
