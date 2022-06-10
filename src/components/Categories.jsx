import React, { useState } from "react";
import News from "./News";

function Categories() {
  const [catName, setCatName] = useState({ data: "" });
  const categories = [
    {
      id: 1,
      name: "All",
      slug: "",
    },
    {
      id: 2,
      name: "Technology",
      slug: "technology",
    },
    {
      id: 3,
      name: "Sports",
      slug: "sports",
    },
    {
      id: 4,
      name: "Business",
      slug: "business",
    },
    {
      id: 5,
      name: "Entertainment",
      slug: "entertainment",
    },
  ];

  return (
    <>
      <h2 className="mt-2 text-center text-2xl font-bold">Categories</h2>
      <div className="mt-4 flex justify-center">
        {categories.map((category) => {
          return (
            <>
              <button
                className="text-white bg-black p-4 rounded-2xl mx-2 hover:bg-slate-800"
                onClick={() => {
                  setCatName({ data: category.slug });
                }}
              >
                {category.name}
              </button>
            </>
          );
        })}
      </div>
      <News catname={catName.data} />
    </>
  );
}

export default Categories;
