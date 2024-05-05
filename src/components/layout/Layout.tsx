import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { LayoutWrap } from "./layout.s";
import { Navbar } from "./navbar/Navbar";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <LayoutWrap>
      {pathname !== "/login" && pathname !== "/register" && <Navbar />}
      {children}
    </LayoutWrap>
  );
};
