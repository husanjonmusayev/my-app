import Styles from "@/styles";
import { FC } from "react";
import { Forma, FormFooter, FormWrapper, LoginWrapper } from "./login.s";
import Link from "next/link";

interface ILogin {}

export const Login: FC<ILogin> = () => {
  return (
    <LoginWrapper>
      <FormWrapper>
        <Forma>
          <Styles.ParagrphH2>Sign in</Styles.ParagrphH2>
          <label htmlFor="fname">Username</label>
          <br />
          <input type="text" id="fname" name="fname" placeholder="john doe" />
          <br />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Repeat the password"
          />
          <br />
          <button>Button</button>
          <FormFooter>
            <p>Already signed up? </p>
            <Link href="/register">Go to sign up.</Link>
          </FormFooter>
        </Forma>
      </FormWrapper>
    </LoginWrapper>
  );
};
