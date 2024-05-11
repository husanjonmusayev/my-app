import { FC, useState } from "react";
import {
  Card,
  CardFotter,
  DeliteWrapper,
  EditDeliteWrapper,
  MainCardWrapper,
  URL,
} from "./card.s";
import Link from "next/link";
import { UpdateModal } from "../updateModal";

interface ICard {
  data: {
    book: {
      author: string;
      cover: string;
      id: number;
      pages: number;
      isbn: string;
      published: number;
      title: string;
    };
  };
  handleFunction: (arg: any) => void;
}

export const MainCard: FC<ICard> = ({ data, handleFunction }) => {
  const [id, setId] = useState<number>(0);
 

  

  const handleClick = (e: number) => {
    handleFunction(e);
  };



  // // edite function

  const handleUpdate = (e: number) => {
    setId(e);
  };

  return (
    <MainCardWrapper>
      <Card>
        <h4>{data.book.author}</h4>
        <URL>
          <p>Cover: </p> <Link href={data.book.cover}>{data.book.cover}</Link>
        </URL>
        <p>Pages: {data.book.pages}</p>
        <p>Pages: {data.book.published}</p>
        <p>Pages: {data.book.isbn}</p>
        <CardFotter>
          <p>Eben Upton / {data.book.published}</p>
          <button style={{ backgroundColor: "red" }}>new</button>
        </CardFotter>
      </Card>
      <EditDeliteWrapper>
        <DeliteWrapper
          onClick={() => {
            handleClick(data.book.id);
          }}
        >
          <img src="/imgs/delite.svg" alt="delite icon" />
        </DeliteWrapper>
        <div
          onClick={() => {
            handleUpdate(data.book.id);
          }}
        >
          <UpdateModal id={id} />
        </div>
      </EditDeliteWrapper>
    </MainCardWrapper>
  );
};
