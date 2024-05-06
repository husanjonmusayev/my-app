import { FC, useState } from "react";
import { Input, SearchWrapper } from "./search.s";
import Image from "next/image";
interface ISearch {}

export const Search: FC<ISearch> = ({}) => {
  const [isFocused, setIsFocused] = useState(false);
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
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="text"
        placeholder="Search for any training you want "
      />
    </SearchWrapper>
  );
};
