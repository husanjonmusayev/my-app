import Styles from "@/styles";
import { FC, useRef, useState } from "react";
import { Forma, FormFooter, FormWrapper, LoginWrapper } from "./login.s";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLoginMutation } from "@/pages/api/login";

interface ILogin {}

export const Login: FC<ILogin> = () => {
  const router = useRouter();
  const keyRef = useRef<HTMLInputElement>(null);
  const secretRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<Boolean>(false);
  const [login, { isLoading, error, data }] = useLoginMutation();

  // save as cookie
  function setCookie(key: string, value: any, expires: number) {
    const date = new Date();
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
    const expiresStr = "expires=" + date.toUTCString();
    document.cookie =
      key + "=" + JSON.stringify(value) + ";" + expiresStr + ";path=/";
  }

  const crypto = require("crypto");

  // validate function

  function Validate(
    keyRef: React.RefObject<HTMLInputElement>,
    secretRef: React.RefObject<HTMLInputElement>
  ): boolean {
    if (!keyRef.current?.value.trim()) {
      alert("usernameingizni kiriting");
      return false;
    }
    if (!secretRef.current?.value.trim()) {
      alert("emailingizni kiriting");
      return false;
    }

    return true;
  }

  // api call

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation function

    if (!Validate(keyRef, secretRef)) {
      return;
    }

    // button loading

    setLoading(true);

    //  cripto js run

    function generateMD5Sign(method: string, url: string, userSecret: string) {
      const inputString = method + url + userSecret;
      return crypto.createHash("md5").update(inputString).digest("hex");
    }
    const method = "GET";
    const url = "/myself";
    const userSecret = secretRef.current?.value;

    const md5Sign = generateMD5Sign(method, url, userSecret as string);

    //  tray

    try {
      const response = await login({
        key: keyRef.current?.value,
        sign: md5Sign,
      });
      if ("data" in response) {
        setCookie("user", response.data.data, 1);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        router.push("/");
      } else {
        if (response.error) {
          console.log(response.error);
        }
      }
    } catch (error) {
      console.log(78, error);
    } finally {
      setLoading(false);
    }
    if (keyRef.current) keyRef.current.value = "";
    if (secretRef.current) secretRef.current.value = "";
  };

  return (
    <LoginWrapper>
      <FormWrapper>
        <Forma onSubmit={handleLogin}>
          <Styles.ParagrphH2>Sign in</Styles.ParagrphH2>
          <label htmlFor="fname">Kiy</label>
          <br />
          <input
            type="text"
            ref={keyRef}
            id="fname"
            name="fname"
            placeholder="kalit so'zni kiriting"
          />
          <br />
          <br />
          <label htmlFor="lname">Secret</label>
          <br />
          <input
            ref={secretRef}
            type="text"
            id="fname"
            placeholder="maxfiy so'zni kiriting"
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
