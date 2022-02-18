import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const Context = createContext({
  loading: false,
  repositories: [],
});

const Provider = ({ children }) => {
  const [ itemsState, setItemsState ] = useState({
    loading: true,
    exist: 0,
    repositories: []
  });

  const getItems = async (table) => {
    await api.get('views.php', { params: { table: table }})
    .then(({ data }) => {
      setItemsState((prevState) => ({
        ...prevState,
        loading: true,
        repositories: data.records
      }));
    })
    .finally(() => {
     setItemsState((prevState) => ({
      ...prevState,
      loading: !prevState.loading
      }));
    });
  };

  const getExist = async (prodName) => {
    return await api.get('exist.php', { params: { prod_name: prodName }})
            .then(({ data }) => data)
            .catch((e) => e);
  };
  
  const delItem = async (table, id) => {
    setItemsState((prevState) => ({
      ...prevState,
      loading: !prevState.loading
    }));

    await api.delete('deleteitem.php', { data: { table: table, id: id }})
      .then(getItems(table))
      .catch(e => console.log(e))
  }

  const postItem = async (table, name) => {
    setItemsState((prevState) => ({
      ...prevState,
      loading: !prevState.loading
    }));

    await api.post('newitem.php', { table: table, name: name })
      .then(getItems(table))
      .catch(e => console.log(e))
  }

  const postProdTag = async (prodId, tagId) => {
    await api.post('newprodtag.php', { prod_id: prodId, tag_id: tagId })
      .then(getItems('product'))
      .catch(e => console.log(e))
  }

  const putItem = async (table, id, name) => {
    setItemsState((prevState) => ({
      ...prevState,
      loading: !prevState.loading
    }));

    await api.put('updateitem.php', { table: table, id: id, name: name })
      .then(getItems(table))
      .catch(e => console.log(e))
  }

  const contextValue = {
    itemsState,
    delItem,
    postItem,
    postProdTag,
    putItem,
    getItems: useCallback((table) => getItems(table), []),
    getExist
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default Provider;