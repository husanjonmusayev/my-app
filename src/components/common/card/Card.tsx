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
    id: number;
    name: string;
    slug: string;
    images: any;
    sm: string;
    appearance: any;
    gender: string;
  };
  handleFunction: (arg: any) => void;
}

export const MainCard: FC<ICard> = ({ data, handleFunction }) => {
  const [id, setId] = useState<number>(0);
  // delite function

  const handleClick = (e: number) => {
    handleFunction(e);
  };

  // edite function

  const handleUpdate = (e: number) => {
    setId(e);
    
  };

  return (
    <MainCardWrapper>
      <Card>
        <img src={data.images.sm} alt="image" />
        <h4>{data.name}</h4>
        <URL>
          <p>Cover: </p>{" "}
          <Link href="http://url.to.book.cover">http://url.to.book.cover</Link>
        </URL>
        <p>Pages: {data.slug}</p>

        <CardFotter>
          <p>Eben Upton / 2012</p>
          <button
            style={
              data.appearance.gender === "Male"
                ? { backgroundColor: "red" }
                : { backgroundColor: "green" }
            }
          >
            {data.appearance.gender}
          </button>
        </CardFotter>
      </Card>
      <EditDeliteWrapper>
        <DeliteWrapper
          onClick={() => {
            handleClick(data.id);
          }}
        >
          <img src="/imgs/delite.svg" alt="delite icon" />
        </DeliteWrapper>
        <div
          onClick={() => {
            handleUpdate(data.id);
          }}
        >
          <UpdateModal  id={id} />
        </div>
      </EditDeliteWrapper>
    </MainCardWrapper>
  );
};
