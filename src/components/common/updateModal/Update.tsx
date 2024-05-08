import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { FC, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStoreData } from "@/context/state";
import {
  BTN,
  EditWrapper,
  UpdateModalFooter,
  UpdateModalHeader,
  UpdateModalMain,
} from "./update.s";

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

interface IUpdateModal {
  id: number;
}

export const UpdateModal: FC<IUpdateModal> = ({ id }) => {
 
  const imageRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const pagesRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

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

  // obrazes default  book

  let Superhero = {
    id: 78,
    name: "Ben 10",
    slug: "78-ben-10",
    powerstats: {
      intelligence: 10,
      strength: 7,
      speed: 8,
      durability: 10,
      power: 90,
      combat: 80,
    },
    appearance: {
      eyeColor: "-",
      gender: "Male",
      hairColor: "-",
      height: ["-", "0 cm"],
      race: null,
      weight: ["- lb", "0 kg"],
    },
    biography: {
      aliases: ["Ben Ten"],
      alignment: "good",
      alterEgos: "No alter egos found.",
      firstAppearance: "Ben 10 S01E01",
      fullName: "Benjamin Kirby Tennyson",
      placeOfBirth: "-",
      publisher: "DC Comics",
      connections: {
        groupAffiliation: "-",
        relatives: "-",
      },
    },
    images: {
      xs: "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/78-ben-10.jpg",
      sm: "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/78-ben-10.jpg",
      md: "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/78-ben-10.jpg",
      lg: "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/78-ben-10.jpg",
    },
    work: {
      occupation: "-",
      base: "-",
    },
  };

  const [createBook, setCreateBook] = useState(Superhero);
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
    const updatedBook = { ...createBook };
    updatedBook.images.sm =
      imageRef.current?.value ||
      "https://media.istockphoto.com/id/1460007178/photo/library-books-on-table-and-background-for-studying-learning-and-research-in-education-school.webp?b=1&s=170667a&w=0&k=20&c=TRED57BZuROoCEP9kR85pW38PLz32onmM8106OoXeGQ=";
    updatedBook.name = nameRef.current?.value || "Nom berilmadi";
    updatedBook.slug = pagesRef.current?.value || "defaultSlug";

    setCreateBook(updatedBook);

    const updatedBookString = JSON.parse(JSON.stringify(updatedBook));
    const updatedData = [...getData.data, updatedBookString];
    dispatch(setStoreData(updatedData));
    handleClose();
  }

  return (
    <div>
      <EditWrapper onClick={handleOpen}>
        <img src="/imgs/edit.svg" alt="delite icon" />
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
            height: 387,
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
            <h4>book img url</h4>
            <input ref={imageRef} type="url" />
            <h4>book name</h4>
            <input ref={nameRef} type="text" />

            <h4>book pages</h4>
            <input ref={pagesRef} type="text" />
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
