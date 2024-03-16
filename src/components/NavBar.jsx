import React from "react";

function NavBar({ setQuery }) {
  // array of object
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Paris",
    },
    {
      id: 3,
      title: "New York",
    },
    {
      id: 4,
      title: "Sydney",
    },
    {
      id: 5,
      title: "Tokyo",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
