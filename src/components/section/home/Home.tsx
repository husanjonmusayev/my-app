import { FC } from "react";
import { Hero } from "./hero";
import Styles from "@/styles";
import { Main } from "./main";

interface IHome {}

export const Home: FC<IHome> = () => {
  return (
    <Styles.Container>
      <Hero />
      <Main />
    </Styles.Container>
  );
};
