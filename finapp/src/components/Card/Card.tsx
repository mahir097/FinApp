import React, { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import "./Card.css";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

// Props arayüzü
interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

// Card bileşeni
const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }) => {
  return (
    <div className="card" key={id}>
      <img src="" alt="company logo" />
      <div className="details">
        <h2>
          {searchResult.name} ({searchResult.symbol})
        </h2>
        <p>{searchResult.currency}</p>
      </div>
      <p className="info">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
  );
};

export default Card;
