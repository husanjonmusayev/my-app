import Styles from "@/styles";
import { FC } from "react";
import Link from "next/link";
import {
  RegisterForma,
  RegisterFormFooter,
  RegisterFormWrapper,
  RegisterWrapper,
} from "./register.s";

interface IRegister {}

export const Register: FC<IRegister> = () => {
  return (
    <RegisterWrapper>
      <RegisterFormWrapper>
        <RegisterForma>
          <Styles.ParagrphH2>Sign up</Styles.ParagrphH2>
          <label htmlFor="fname">Username</label>
          <br />
          <input type="text" id="fname" name="fname" placeholder="john doe" />
          <br />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="johndoe@gmail.com"
          />
          <br />
          <br />
          <label htmlFor="lname">Key</label>
          <br />
          <input type="text" id="lname" name="lname" placeholder="Key" />
          <br />
          <br />
          <label htmlFor="lname">Secret</label>
          <br />
          <input type="text" id="lname" name="lname" placeholder="secret" />
          <button>Button</button>
          <RegisterFormFooter>
            <p>Already signed up? </p>
            <Link href="/login">Go to sign up.</Link>
          </RegisterFormFooter>
        </RegisterForma>
      </RegisterFormWrapper>
    </RegisterWrapper>
  );
};
