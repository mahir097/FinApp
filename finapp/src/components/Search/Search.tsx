import React, {
  ChangeEvent,
  MouseEvent,
  SyntheticEvent,
  useState,
} from "react";

interface Props {
  handleClick: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <input
        type="text"
        value={props.search}
        onChange={(e) => props.handleChange(e)}
      />
      <button onClick={(e) => props.handleClick(e)}>Search</button>
    </div>
  );
};

export default Search;
