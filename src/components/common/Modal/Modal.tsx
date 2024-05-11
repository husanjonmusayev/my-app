import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BTN, ModalFooter, ModalHeader, ModalMain } from "./modal.s";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSenBookMutation } from "@/pages/api/sendBook";
import { setStoreData } from "@/context/state";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal() {
  const [user, setUser] = useState<Superhero | null>(null);
  const isbnRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [responseData, setResponseData] = useState();
  const [senBook, { isLoading, error, data }] = useSenBookMutation();
  interface Superhero {
    name: string;
    secret: string;
    key: string;
  }

  useEffect(() => {
    function getCookie(key: string) {
      const name = key + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArr = decodedCookie.split(";");
      for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i];
        while (cookie.charAt(0) == " ") {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
          return JSON.parse(cookie.substring(name.length, cookie.length));
        }
      }
      return null;
    }
    setUser(getCookie("user"));
  }, []);

  const sendBook = async () => {
    //  cripto js run

    const crypto = require("crypto");

    function generateMD5Sign(
      method: string,
      url: string,
      body: any,
      userSecret: string
    ) {
      const inputString = method + url + JSON.stringify(body) + userSecret;
      const hash = crypto.createHash("md5").update(inputString).digest("hex");
      return hash;
    }
    const method = "POST";
    const url = "/books";
    const body = { isbn: isbnRef.current?.value };
    const userSecret = user?.secret;

    const md5Sign = generateMD5Sign(method, url, body, userSecret as string);

    //  tray

    let Isbn = { isbn: isbnRef.current?.value };

    try {
      const response = await senBook({
        body: Isbn,
        key: user?.key,
        sign: md5Sign,
      });

      if ("data" in response) {
        console.log(response.data.data)
        alert("maxsulot qo'shildi");
      } else {
        if (response.error) {
          console.log(78, error);
        }
      }
    } catch (error) {
      console.log(78, error);
    } finally {
    }
    // if (isbnRef) isbnRef.current?.value = "";
  };

  interface Superhero {
    id: number;
    name: string;
    slug: string;
    powerstats: {
      intelligence: number;
      strength: number;
      speed: number;
      durability: number;
      power: number;
      combat: number;
    };
    appearance: {
      eyeColor: string;
      gender: string;
      hairColor: string;
      height: [string, string];
      race: string | null;
      weight: [string, string];
    };
    biography: {
      aliases: string[];
      alignment: string;
      alterEgos: string;
      firstAppearance: string;
      fullName: string;
      placeOfBirth: string;
      publisher: string;
      connections: {
        groupAffiliation: string;
        relatives: string;
      };
    };
    images: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    work: {
      occupation: string;
      base: string;
    };
  }
  // data

  interface StoreState {
    storeReducer: {
      data: string[];
    };
  }

  const getData: { data: string[] } = useSelector(
    (state: StoreState) => state.storeReducer
  );

  const [open, setOpen] = useState(false);

  //modal open function

  const handleOpen = () => {
    setOpen(true);
  };

  // modal close function

  const handleClose = () => {
    setOpen(false);
  };

  // Function to update the state
  function handleSubmit() {
    sendBook();

    handleClose();
  }

  return (
    <div>
      <BTN onClick={handleOpen}>+ Create a book</BTN>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 430,
            height: 237,
            border: "none",
            borderRadius: "12px",
          }}
        >
          <ModalHeader>
            <h4>Create a book</h4>
            <img
              onClick={handleClose}
              src="/imgs/close.png"
              width={24}
              height={24}
              alt="close icon"
            />
          </ModalHeader>
          <ModalMain>
            <h4>ISBN</h4>
            <input ref={isbnRef} type="url" />
          </ModalMain>
          <ModalFooter>
            <button onClick={handleClose}>Close</button>
            <button onClick={handleSubmit}>Submit</button>
          </ModalFooter>
        </Box>
      </Modal>
    </div>
  );
}
