import Link from "next/link";
import { FC } from "react";
import Styles from "@/styles";
import Image from "next/image";
import { Search } from "@/components/common/search";
import { LeftWrapper, NavbarWrap, RightWrapper } from "./navbar.s";
interface INavbarProps {}

export const Navbar: FC<INavbarProps> = ({}) => {
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
            <Image src="/imgs/frem.svg" alt="icon" width={24} height={24} />
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
