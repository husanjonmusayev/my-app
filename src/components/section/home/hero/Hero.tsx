import { FC, useState } from "react";
import { HeroWrapper, LeftItem, LeftWrapper, RightWrapper } from "./hero.s";
import Styles from "@/styles";
import { Button } from "@/components/common/Button/Button";

interface IHero {}

export const Hero: FC<IHero> = ({}) => {
  let [counter, SetCounter] = useState(0);
  return (
    <HeroWrapper>
      <LeftWrapper>
        <LeftItem>
          <Styles.ParagrphH2>You’ve got</Styles.ParagrphH2>
          <Styles.ParagrphH3>{counter} book</Styles.ParagrphH3>
        </LeftItem>
        <Styles.Paragrph>Your books today</Styles.Paragrph>
      </LeftWrapper>
      <RightWrapper>
        <Button
          title="+  Create a book"
          padding="10px 24px"
          color="white"
          bacground="#6200EE"
        />
      </RightWrapper>
    </HeroWrapper>
  );
};
