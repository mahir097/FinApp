import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import { searchCompanies } from "./api";
import CardList from "./components/CardList/CardList";
import Search from "./components/Search/Search";
import { CompanySearch } from "./company";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const handleClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
      return;
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };

  return (
    <div className="App">
      <Search
        handleClick={handleClick}
        search={search}
        handleChange={handleChange}
      />
      {serverError && <h1>{serverError}</h1>}
      <CardList />
    </div>
  );
}

console.log(searchCompanies("tsla"));

export default App;
