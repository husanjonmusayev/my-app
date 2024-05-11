import React, { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStoreData } from "@/context/state";
import { Box, Modal } from "@mui/material";
import {
  EditWrapper,
  UpdateModalFooter,
  UpdateModalHeader,
  UpdateModalMain,
} from "./update.s";

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
  const nameRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  // object interface

  

  // get all data

  const getData = useSelector((state: any) => state.storeReducer.data);
 

  // hire update

 

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
