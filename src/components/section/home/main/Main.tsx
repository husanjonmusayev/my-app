import Styles from "@/styles";
import { FC, useEffect, useState } from "react";
import { LoaderWrapper, MainWrapper, DefaultWrapper } from "./main.s";
import { MainCard } from "@/components/common/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteBookMutation } from "@/pages/api/deliteBook";
import { setStoreData } from "@/context/state";

// import { setStoreData } from "@/context/state";

interface IMain {}

export const Main: FC<IMain> = () => {
  const [deleteApi, { isLoading, error, data }] = useDeleteBookMutation();
  const dispatch = useDispatch();

  interface StoreState {
    storeReducer: {
      data: string[];
    };
  }

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

  const getData: { data: string[] } = useSelector(
    (state: StoreState) => state.storeReducer
  );

  const deliteBook = async (e: number) => {
    //  cripto js run

    const crypto = require("crypto");

    function generateMD5Sign(method: string, url: string, userSecret: string) {
      const inputString = method + url + userSecret;
      const hash = crypto.createHash("md5").update(inputString).digest("hex");
      return hash;
    }
    const method = "DELETE";
    const url = `/books/${e}`;
    const userSecret = user?.secret;

    const md5Sign = generateMD5Sign(method, url, userSecret as string);

    //  tray

    try {
      const response = await deleteApi({
        url: e,
        key: user?.key,
        sign: md5Sign,
      });

      if ("data" in response) {
        console.log(85, response.data);
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

  const handleFunction = (arg: number) => {
    deliteBook(arg);
    dispatch(
      setStoreData(
        getData.data.filter((el: any) => {
          return el.book.id != arg;
        })
      )
    );
  };

  return (
    <Styles.Container>
      <MainWrapper>
        <>
          {isLoading ? (
            <LoaderWrapper>
              <div className="loader">
                <svg viewBox="0 0 80 80">
                  <circle id="test" cx="40" cy="40" r="32"></circle>
                </svg>
              </div>
              <div className="loader triangle">
                <svg viewBox="0 0 86 80">
                  <polygon points="43 8 79 72 7 72"></polygon>
                </svg>
              </div>
              <div className="loader">
                <svg viewBox="0 0 80 80">
                  <rect x="8" y="8" width="64" height="64"></rect>
                </svg>
              </div>
            </LoaderWrapper>
          ) : getData.data ? (
            getData.data.map((el: any) => (
              <MainCard handleFunction={handleFunction} data={el} />
            ))
          ) : (
            <DefaultWrapper>
              <h1>Malumot mavjud emas</h1>
            </DefaultWrapper>
          )}
        </>
      </MainWrapper>
    </Styles.Container>
  );
};
