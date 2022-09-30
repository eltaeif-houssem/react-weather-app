import React, { useRef } from "react";
import "./SearchBar.css";

interface Props {
  onSubmit: (country: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const cityRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const city = cityRef.current?.value;
    if (!city) {
      return;
    }
    onSubmit(city);
    cityRef.current!.value = "";
  };
  return (
    <form className="search-bar" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter a city"
        autoFocus
        required
        ref={cityRef}
      />
      <button>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default SearchBar;
