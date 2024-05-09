import Styles from "@/styles";
import { FC } from "react";
import { LoaderWrapper, MainWrapper } from "./main.s";
import { MainCard } from "@/components/common/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { setStoreData } from "@/context/state";

interface IMain {}

export const Main: FC<IMain> = () => {
  const dispatch = useDispatch();
  interface StoreState {
    storeReducer: {
      data: string[];
    };
  }

  const getData: { data: string[] } = useSelector(
    (state: StoreState) => state.storeReducer
  );


  
  const handleFunction = (arg: number) => {
    dispatch(
      setStoreData(
        getData.data.filter((el: any) => {
          return el.id != arg;
        })
      )
    );
  };



  return (
    <Styles.Container>
      <MainWrapper>
        {getData.data.length ? (
          getData.data.map((el: any) => {
            return <MainCard handleFunction={handleFunction} data={el} />;
          })
        ) : (
          <LoaderWrapper>
            <div className="loader">
              <svg viewBox="0 0 80 80">
                <circle id="test" cx="40" cy="40" r="32"></circle>
              </svg>
            </div>

            <div className="loader triangle">
              <svg viewBox="0 0 86 80">
                <polygon points="43 8 79 72 7 72"></polygon>
              </svg>
            </div>

            <div className="loader">
              <svg viewBox="0 0 80 80">
                <rect x="8" y="8" width="64" height="64"></rect>
              </svg>
            </div>
          </LoaderWrapper>
        )}
      </MainWrapper>
    </Styles.Container>
  );
};
