import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Link, useParams, useNavigate } from 'react-router-dom';
import useItems from '../hooks/items-hooks';
import * as S from './styled';

const Prod = () => {
    const { postItem, putItem, getItems, itemsState, getExist, postProdTag } = useItems();
    const { id, name, tags } = useParams();
    const navigate = useNavigate();

    const [ itemName, setItemName ] = useState(name);
    const [ labelBtn ] = useState(id ? 'Atualizar' : 'Cadastrar');
    const [ options, setOptions ] = useState([]);
    const [ selected, setSelected ] = useState([]);
    //const [ exist, setExist ] = useState(0);

    const handleNewItem = async () => {

        if (await getExist(itemName)) {
            alert('Produto já existe na base de dados!');
        } else {
            if (itemName && selected.length > 0) {
                //id ? putItem('product', id, itemName) : postItem('product', itemName);
                await postItem('product', itemName);
                const prod_id = await getExist(itemName);
                selected.map(async item => await postProdTag(prod_id, item.value));
                navigate('/');
            } else {
                alert('Todos os campos devem ser preenchidos.');
            }
        }
    }

    useEffect(() => {
        getItems('tag');
        //console.log(Array.from(tags.split(',')));
        //Array.from(tags.split(',')).map(item => teste.push({value: '1', label: item}))
        //setOptions({value: 27, label: 'a'});
    }, [])
    
    useEffect(() => {
        setOptions([]);
        Object.values(itemsState.repositories).map(item => setOptions(options => [...options, { value: item.id, label: item.name }]));
    }, [itemsState.repositories])
        
    return (
        <S.HomeContainer>
            {/* <button onClick={() => console.log(selected)}>check</button> */}
            <S.Title>{labelBtn} Produtos</S.Title>

            <label>Tags: </label>
            <Select
                defaultValue=''
                isMulti
                name="selectTags"
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={e => (setSelected(e))}
            />

            {id &&
                <>
                <label>Id: </label>
                <input type='text' name='id' disabled value={id} /><br /><br />
                </>
            }
            <label>Nome: </label>
            <input type='text' name='name' onChange={e => setItemName(e.target.value)} value={itemName} /><br /><br />
            
            <S.Button onClick={handleNewItem}>{labelBtn}</S.Button>

            <br />

            <Link to='/'>
                <S.Button>voltar</S.Button>
            </Link>
        </S.HomeContainer>
    );
}

export default Prod;