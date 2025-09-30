import { useState } from "react";
import classe from "./Search.module.css";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [value, setValue] = useState<string>("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(value);
    }
  };

  return (
    <div className={classe.search}>
      <input
        type="text"
        placeholder="Search for a game..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default Search;
