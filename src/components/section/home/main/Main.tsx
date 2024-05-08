import Styles from "@/styles";
import { FC } from "react";
import { MainWrapper } from "./main.s";
import { MainCard } from "@/components/common/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { setStoreData } from "@/context/state";

interface IMain {}

export const Main: FC<IMain> = () => {
  const dispatch = useDispatch()
  interface StoreState {
    storeReducer: {
      data: string[];
    };
  }

  const getData: { data: string[] } = useSelector(
    (state: StoreState) => state.storeReducer
  );

  console.log(getData.data)

  const handleFunction = (arg: number) => {
    dispatch(setStoreData(
      getData.data.filter((el: any) => {
        return el.id != arg;
      })
    ))
  };

  return (
    <Styles.Container>
      <MainWrapper>
        {getData.data.length ? (
          getData.data.map((el: any) => {
            return <MainCard handleFunction={handleFunction} data={el} />;
          })
        ) : (
          <h1>loading ...</h1>
        )}
      </MainWrapper>
    </Styles.Container>
  );
};
