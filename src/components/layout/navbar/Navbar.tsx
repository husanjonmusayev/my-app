import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Styles from "@/styles";
import Image from "next/image";
import { Search } from "@/components/common/search";
import { LeftWrapper, NavbarWrap, RightWrapper } from "./navbar.s";
interface INavbarProps {}

export const Navbar: FC<INavbarProps> = ({}) => {

  interface Superhero {
    name: string;
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

  return (
    <>
      <Styles.Container>
        <NavbarWrap>
          <LeftWrapper>
            <Link href="/">
              <Image
                src="/imgs/logo.svg"
                width={150}
                height={36}
                alt="logo img"
              />
            </Link>
            <Search />
          </LeftWrapper>
          <RightWrapper>
            <Styles.Paragrph>
              {user !== null ? user.name : "No user found"}
            </Styles.Paragrph>
            <Image
              src="/imgs/userImage.svg"
              alt="icon"
              width={24}
              height={24}
            />
          </RightWrapper>
        </NavbarWrap>
      </Styles.Container>
    </>
  );
};
