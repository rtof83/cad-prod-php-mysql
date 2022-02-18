import React, { useEffect, useState } from 'react';
import useItems from '../hooks/items-hooks';
import { Link } from 'react-router-dom';

import * as S from './styled';
import Repositories from './repositories';
import Button from '../components/button';
import Input from '../components/input';

const Home = () => {
  const { itemsState,
          getItems,
          delItem,
          postItem,
          putItem } = useItems();

  const [ update, setUpdate ] = useState(false);
  const [ nameSend, setName ] = useState('');
  const [ messageSend, setMessage ] = useState('');
  const [ id, setId ] = useState('');
  const [ txtButton, setTxtButton ] = useState('Enviar');

  const [ title, setTitle ] = useState('');

  async function handleSend() {
    if (nameSend !== '' && messageSend !== '') {
      if (update) {
        postMessage(id, nameSend, messageSend);
        setUpdate(false);
      } else {
        putItem(Date.now().toString(), nameSend, messageSend);
      }
    } else {
      alert('Atenção! Os campos Nome e Mensagem devem ser preenchidos!');
    }

    handleUpdate('', '', '', false, 'Enviar');
  }

  async function handleDelete(id, name) {
    const tableName = title === 'Produtos' ? 'product' : 'tag';

    if (window.confirm(`Excluir ${name}?`)) {
      await delItem(tableName, id);
      title === 'Produtos' ? handleProduct() : handleTag()
    }
  }

  const handleUpdate = (id, name, message, update, button) => {
    // setId(id);
    // setName(name);
    // setMessage(message);
    // setUpdate(update);
    // setTxtButton(button);
  }

  const keyPress = (e) => {
    if (e === 'Enter') { handleSend() }
  }

  const handleProduct = () => {
    getItems('product');
    setTitle('Produtos');
  }

  const handleTag = () => {
    getItems('tag');
    setTitle('Tags');
  }

  useEffect(() => {
    handleProduct()
  }, [])

  return (
    <S.HomeContainer>
      <S.Title id='lblMessage'>Itens Cadastrados</S.Title>
      <S.Content>

      <Button btnkey={'prod'}
              id={'btnProd'}
              fn={handleProduct}>

          Produtos
      </Button>

        
      <Button btnkey={'tag'}
              id={'btnTag'}
              fn={handleTag}>

          Tags
      </Button>

      <S.Divider />

      </S.Content>

      <Repositories title={title}
                    disabled={update}
                    fnDel={handleDelete}
                    fnUpdate={handleUpdate}
      />
    </S.HomeContainer>
  );
  }

export default Home;