import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import useItems from '../hooks/items-hooks';
import * as S from './styled';

const Tag = () => {
    const { postItem, putItem } = useItems();
    const { id, name } = useParams();
    const navigate = useNavigate();

    const [ itemName, setItemName ] = useState(name);
    const [ labelBtn ] = useState(id ? 'Atualizar' : 'Cadastrar');

    const handleNewItem = async () => {
        if (itemName) {
            id ? putItem('tag', id, itemName) : postItem('tag', itemName);
            navigate('/');
        } else {
            alert('O campo Nome deve ser preenchido.');
        }
    }

    return (
        <S.HomeContainer>
            <S.Title>{labelBtn} Tags</S.Title>

            {id &&
                <>
                <label>Id: </label>
                <input type='text' name='id' disabled value={id} /><br /><br />
                </>
            }
            <label>Nome: </label>
            <input type='text' name='name' onChange={e => setItemName(e.target.value)} value={itemName} /><br /><br />
            
            <S.Button onClick={handleNewItem}>{labelBtn}</S.Button>

            <Link to='/'>
                <S.Button>voltar</S.Button>
            </Link>
        </S.HomeContainer>
    );
}

export default Tag;