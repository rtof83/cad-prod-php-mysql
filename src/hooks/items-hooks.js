import { useContext } from "react";
import { Context } from "../providers/provider";

const useItems = () => {
  const { itemsState,
          getItems,
          delItem,
          postItem,
          postProdTag,
          putItem,
          getExist } = useContext( Context );

  return { itemsState,
           getItems,
           delItem,
           postItem,
           postProdTag,
           putItem,
           getExist };
};

export default useItems;