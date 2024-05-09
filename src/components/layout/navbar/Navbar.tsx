import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Styles from "@/styles";
import Image from "next/image";
import { Search } from "@/components/common/search";
import { LeftWrapper, NavbarWrap, RightWrapper } from "./navbar.s";
interface INavbarProps {}

export const Navbar: FC<INavbarProps> = ({}) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (typeof storedUser === "string") {
      setUser(JSON.parse(storedUser));
    }
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
            <Styles.Paragrph>{user}</Styles.Paragrph>
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
