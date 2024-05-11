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
  const emailRef = useRef<HTMLInputElement>(null);
  const keyRef = useRef<HTMLInputElement>(null);
  const secretRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  // validate function

  function Validate(
    usernameRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    keyRef: React.RefObject<HTMLInputElement>,
    secretRef: React.RefObject<HTMLInputElement>
  ): boolean {
    if (!usernameRef.current?.value.trim()) {
      alert("usernameingizni kiriting");
      return false;
    }
    if (!emailRef.current?.value.trim()) {
      alert("emailingizni kiriting");
      return false;
    }
    if (!keyRef.current?.value.trim()) {
      alert("kiy kalitini kiriting");
      return false;
    }

    if (!secretRef.current?.value.trim()) {
      alert("Sirli so'zni kiriting");
      return false;
    }

    return true;
  }

  // register function

  function hendalSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    //  validate form

    if (Validate(usernameRef, emailRef, keyRef, secretRef)) {
      // user interface

      interface UserData {
        username: string | undefined;
        email: string | undefined;
        key: string | undefined | number;
        secret: string | undefined | number;
      }

      // user object

      let data: UserData = {
        username: usernameRef.current?.value.trim(),
        email: emailRef.current?.value.trim(),
        key: keyRef.current?.value.trim(),
        secret: secretRef.current?.value.trim(),
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
    emailRef.current!.value = "";
    keyRef.current!.value = "";
    secretRef.current!.value = "";
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
          <label htmlFor="fname">Email</label>
          <br />
          <input
            ref={emailRef}
            type="email"
            id="fname"
            placeholder="Emailingizni kiritigng"
          />
          <br />
          <br />
          <label htmlFor="fname">Key</label>
          <br />
          <input
            ref={keyRef}
            type="text"
            id="fname"
            placeholder="Kalitingizni kiritigng"
          />
          <br />
          <br />
          <label htmlFor="fname">Secret</label>
          <br />
          <input
            ref={secretRef}
            type="text"
            id="fname"
            placeholder="Maxfiy so'zni kiritigng"
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
