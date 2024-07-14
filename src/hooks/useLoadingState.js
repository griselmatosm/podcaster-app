import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";

export const useLoadingState = () => {
  const { setIsLoading: setIsLoadingContext } = useContext(LoadingContext);

  const setIsLoadingState = (isLoading) => {
    if (!isLoading) {
      setTimeout(() => setIsLoadingContext(isLoading), 500);
    } else {
      setIsLoadingContext(isLoading);
    }
  };

  return setIsLoadingState;
};
