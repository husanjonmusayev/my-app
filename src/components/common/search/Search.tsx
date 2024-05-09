import { FC, useState } from "react";
import { Input, SearchWrapper } from "./search.s";
import Image from "next/image";
import { useGetSearchByNameQuery } from "@/pages/api/search";
import { useDispatch, useSelector } from "react-redux";
import { setStoreData } from "@/context/state";

interface ISearch {}

export const Search: FC<ISearch> = ({}) => {
  const dispatch = useDispatch();

  interface StoreState {
    storeReducer: {
      data: string[];
    };
  }

  const getData: { data: string[] } = useSelector(
    (state: StoreState) => state.storeReducer
  );
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, error } = useGetSearchByNameQuery(searchTerm);

  

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setSearchTerm(searchTerm);
      dispatch(setStoreData([data]));
      
    }
  };

  return (
    <SearchWrapper isFocused={isFocused}>
      {isFocused ? (
        <Image
          src="/imgs/IconBlack.svg"
          alt="search icon"
          width={18}
          height={18}
        />
      ) : (
        <Image
          src="/imgs/SearchIcon.svg"
          alt="search icon"
          width={24}
          height={24}
        />
      )}

      <Input
        onKeyPress={handleKeyPress}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="text"
        placeholder="Search for any training you want "
      />
    </SearchWrapper>
  );
};
