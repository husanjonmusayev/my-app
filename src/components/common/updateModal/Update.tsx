import React, { FC, useEffect, useRef, useState } from "react";
import { Box, Modal } from "@mui/material";
import {
  EditWrapper,
  UpdateModalFooter,
  UpdateModalHeader,
  UpdateModalMain,
} from "./update.s";
import { useUpdateBookMutation } from "@/pages/api/update";

interface IUpdateModal {
  id: number;
}

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

export const UpdateModal: FC<IUpdateModal> = ({ id }) => {
  const [update, { isLoading, error, data }] = useUpdateBookMutation();
  const nameRef = useRef<HTMLInputElement>(null);

  interface Superhero {
    name: string;
    secret: string;
    key: string;
  }

  const [user, setUser] = useState<Superhero | null>(null);

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

  // hire update

  const updateBook = async () => {
    //  cripto js run

    const crypto = require("crypto");

    function generateMD5Sign(
      method: string,
      url: string,
      body: any,
      userSecret: string
    ) {
      const inputString = method + url + body + userSecret;
      const hash = crypto.createHash("md5").update(inputString).digest("hex");
      return hash;
    }
    const method = "PATCH";
    const url = `/books/:id ${id}`;
    const body = { status: nameRef.current?.value };
    const userSecret = user?.secret;

    const md5Sign = generateMD5Sign(
      method,
      url as string,
      body,
      userSecret as string
    );

    let updateBook = { status: nameRef.current?.value };

    //  tray

    try {
      const response = await update({
        body: updateBook,
        url: id,
        key: user?.key,
        sign: md5Sign,
      });

      if ("data" in response) {
        console.log(85, response.data);
      } else {
        if (response.error) {
          console.log(78, error);
        }
      }
    } catch (error) {
      console.log(92, error);
    } finally {
    }
  };

  const [open, setOpen] = useState(false);

  // open function

  const handleOpen = () => {
    setOpen(true);
  };

  // close function

  const handleClose = () => {
    setOpen(false);
  };

  // concatination function

  function handleSubmit() {
    updateBook();
    handleClose();
  }

  return (
    <div>
      <EditWrapper onClick={handleOpen}>
        <img src="/imgs/edit.svg" alt="delete icon" />
      </EditWrapper>
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
            height: 287,
            border: "none",
            borderRadius: "12px",
          }}
        >
          <UpdateModalHeader>
            <h4>Create a book</h4>
            <img
              onClick={handleClose}
              src="/imgs/close.png"
              width={24}
              height={24}
              alt="close icon"
            />
          </UpdateModalHeader>
          <UpdateModalMain>
            <h4>Edit Status</h4>
            <input ref={nameRef} type="text" />
          </UpdateModalMain>
          <UpdateModalFooter>
            <button onClick={handleClose}>Close</button>
            <button onClick={handleSubmit}>Submit</button>
          </UpdateModalFooter>
        </Box>
      </Modal>
    </div>
  );
};
