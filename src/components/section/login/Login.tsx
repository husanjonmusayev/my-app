import Styles from "@/styles";
import { FC, useRef, useState } from "react";
import { Forma, FormFooter, FormWrapper, LoginWrapper } from "./login.s";
import Link from "next/link";
import { usePostLogin } from "@/pages/api/login";
import { useRouter } from "next/router";

interface ILogin {}

export const Login: FC<ILogin> = () => {
  const router = useRouter();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<Boolean>(false);
  const [mutate, { isLoading: isRegistering }] = usePostLogin();

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

  // Login function

  function hendalSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    //  validate form

    if (Validate(usernameRef, passwordRef)) {
      // user interface

      interface UserData {
        username: string | undefined;
        password: string | undefined;
      }

      // user object

      let data: UserData = {
        username: usernameRef.current?.value.trim(),
        password: passwordRef.current?.value.trim(),
      };

      // user Register async function

      const handleLogin = async (data: UserData) => {
        try {
          const response = await mutate(data);
          if ("data" in response) {
            localStorage.setItem(
              "user",
              JSON.stringify(response.data.username)
            );
            router.push("/");
            setLoading(false);
          } else {
            console.error("Registration failed:", response.error);
          }
        } catch (error) {
          alert("An error occurred during registration");
        }
      };

      handleLogin(data);
    }

    // Clear forma input

    usernameRef.current!.value = "";
    passwordRef.current!.value = "";
  }

  return (
    <LoginWrapper>
      <FormWrapper>
        <Forma onSubmit={hendalSubmit}>
          <Styles.ParagrphH2>Sign in</Styles.ParagrphH2>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            type="text"
            ref={usernameRef}
            id="fname"
            name="fname"
            placeholder="john doe"
          />
          <br />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            ref={passwordRef}
            type="password"
            id="fname"
            placeholder="********"
          />
          <br />
          <button>{loading ? "Loading..." : "Button"}</button>
          <FormFooter>
            <p>Already signed up? </p>
            <Link href="/register">Go to sign up.</Link>
          </FormFooter>
        </Forma>
      </FormWrapper>
    </LoginWrapper>
  );
};
