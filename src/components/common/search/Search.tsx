import { FC, useEffect, useState } from "react";
import { Input, SearchWrapper } from "./search.s";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setStoreData } from "@/context/state";
import { useSearchApiRequestMutation } from "@/pages/api/search";

interface ISearch {}

export const Search: FC<ISearch> = ({}) => {
  const [search, { isLoading, error, data }] = useSearchApiRequestMutation();
  const dispatch = useDispatch();

  interface Superhero {
    name: string;
    secret: string;
    key: string;
  }

  const [user, setUser] = useState<Superhero | null>(null);

  useEffect(() => {
    function getCookie(key: string) {
      const name = key + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArr = decodedCookie.split(";");
      for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i];
        while (cookie.charAt(0) == " ") {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
          return JSON.parse(cookie.substring(name.length, cookie.length));
        }
      }
      return null;
    }
    setUser(getCookie("user"));
  }, []);

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

  const searchBook = async () => {
    //  cripto js run

    const crypto = require("crypto");

    function generateMD5Sign(method: string, url: string, userSecret: string) {
      const inputString = method + url + userSecret;
      const hash = crypto.createHash("md5").update(inputString).digest("hex");
      return hash;
    }
    const method = "GET";
    const url = `/books/${searchTerm}`;
    const userSecret = user?.secret;

    const md5Sign = generateMD5Sign(method, url, userSecret as string);

    //  tray

    try {
      const response = await search({
        url: searchTerm,
        key: user?.key,
        sign: md5Sign,
      });

      if ("data" in response) {
        if (!response.data.data.legth) {
          alert("bunday kitob mavjud emas");
        }
      } else {
        if (response.error) {
          console.log(78, error);
        }
      }
    } catch (error) {
      console.log(92, error);
    } finally {
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchBook();
      dispatch(setStoreData(data));
      setSearchTerm("");
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
