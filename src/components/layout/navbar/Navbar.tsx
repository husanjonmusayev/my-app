import Link from "next/link";
import { FC } from "react";
import mock from "@/mock";
interface INavbarProps {}

export const Navbar: FC<INavbarProps> = ({}) => {
 

  return (
    <>
      <div>
        <ul>
          {mock.navItems.map(({ text, url }, index) => (
            <li key={index}>
              <Link href={url}>
                <p>{text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
