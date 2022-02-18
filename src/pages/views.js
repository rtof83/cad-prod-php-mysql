import React, { useEffect, useState } from 'react';
import useMessages from '../hooks/items-hooks';
import { Link, useParams } from 'react-router-dom';

import * as S from './styled';
import Repositories from './repositories';
import Button from '../components/button';
import Input from '../components/input';

const Home = () => {

  const { table } = useParams();

  const { messagesState,
          getMessages,
          delMessage,
          postMessage,
          putMessage } = useMessages();

  const [ update, setUpdate ] = useState(false);
  const [ nameSend, setName ] = useState('');
  const [ messageSend, setMessage ] = useState('');
  const [ id, setId ] = useState('');
  const [ txtButton, setTxtButton ] = useState('Enviar');

  useEffect(() => {
    getMessages(table)
  }, [getMessages]);

  async function handleDelete(id, name) {
    if (window.confirm(`Excluir mensagem de ${name}?`)) delMessage(id)
  }

  const handleUpdate = (id, name, message, update, button) => {
    setId(id);
    setName(name);
    setMessage(message);
    setUpdate(update);
    setTxtButton(button);
  }

  return (
    <S.HomeContainer>
      <S.Title id='lblMessage'>
        {table === 'product' ? 'Produtos Cadastrados' : 'Tag Cadastradas'}
      </S.Title>

      <S.Content>

        <Link to='/cadprod'>
          <Button btnkey={'prod'}
                  id={'btnCadProd'}>

              Novo Produto
          </Button>
        </Link>

        <Link to='/'>
          <Button btnkey={'back'}
                  id={'btnBack'}>

              Voltar
          </Button>
        </Link>

        { update && <Button btnkey={'cancel'}
                            id={'btnCancel'}
                            fn={() => handleUpdate('', '', '', false, 'Enviar')}>

                        {'Cancelar'}
                    </Button> 
        }

      </S.Content>

      <S.ErrorMsg id="loading">{ messagesState.loading && 'carregando...' }</S.ErrorMsg>

      <br />

      <Repositories disabled={update}
                    fnDel={handleDelete}
                    fnUpdate={handleUpdate}
      />
    </S.HomeContainer>
  );
  }

export default Home;