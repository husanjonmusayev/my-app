import Styles from "@/styles";
import React, { FC, useRef, useState } from "react";
import Link from "next/link";
import {
  RegisterForma,
  RegisterFormFooter,
  RegisterFormWrapper,
  RegisterWrapper,
} from "./register.s";
import { usePostRegister } from "@/pages/api/register";
import { useRouter } from "next/router";

interface IRegister {}

export const Register: FC<IRegister> = () => {
  const router = useRouter();
  const [mutate, { isLoading: isRegistering }] = usePostRegister();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  // validate function

  function Validate(
    usernameRef: React.RefObject<HTMLInputElement>,
    passwordRef: React.RefObject<HTMLInputElement>
  ): boolean {
    if (!usernameRef.current?.value.trim()) {
      alert("usernameingizni kiriting");
      return false;
    }
    if (!passwordRef.current?.value.trim()) {
      alert("emailingizni kiriting");
      return false;
    }

    return true;
  }

  // register function

  function hendalSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    //  validate form

    if (Validate(usernameRef, passwordRef)) {
      // user interface

      interface UserData {
        username: string | undefined;
        password: string | undefined;
        user_roles: string;
      }

      // user object

      let data: UserData = {
        username: usernameRef.current?.value.trim(),
        password: passwordRef.current?.value.trim(),
        user_roles: "manager",
      };

      // user Register async function

      const handleRegister = async (data: UserData) => {
        try {
          const response = await mutate(data);
          if ("data" in response) {
            router.push("/login");
            setLoading(false);
          } else {
            console.error("Registration failed:", response.error);
          }
        } catch (error) {
          console.error("An error occurred during registration:", error);
        }
      };

      handleRegister(data);
    }

    // Clear forma input

    usernameRef.current!.value = "";
    passwordRef.current!.value = "";
  }

  return (
    <RegisterWrapper>
      <RegisterFormWrapper>
        <RegisterForma onSubmit={hendalSubmit}>
          <Styles.ParagrphH2>Sign up</Styles.ParagrphH2>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            ref={usernameRef}
            type="text"
            id="fname"
            name="username"
            placeholder="john doe"
          />
          <br />
          <br />
          <label htmlFor="fname">Password</label>
          <br />
          <input
            ref={passwordRef}
            type="password"
            id="fname"
            placeholder="********"
          />
          <br />
          <br />
          <button>{loading ? "Loading..." : "Button"}</button>
          <RegisterFormFooter>
            <p>Already signed up? </p>
            <Link href="/login">Go to login.</Link>{" "}
          </RegisterFormFooter>
        </RegisterForma>
      </RegisterFormWrapper>
    </RegisterWrapper>
  );
};
