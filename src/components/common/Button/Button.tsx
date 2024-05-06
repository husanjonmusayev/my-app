import { FC } from "react";
import { BTN } from "./button.s";

interface IButton {
  color: string;
  title: string;
  bacground: string;
  padding: string;
}

export const Button: FC<IButton> = ({ color, title, bacground, padding }) => {
  return (
    <>
      <BTN
        style={{
          color: `${color}`,
          backgroundColor: `${bacground}`,
          padding: `${padding}`,
        }}
      >
        {title}
      </BTN>
    </>
  );
};
