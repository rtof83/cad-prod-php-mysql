import * as S from './styled';
import ListButton from '../components/listButton';
import useItems from '../hooks/items-hooks';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Repositories(props) {
  const { itemsState } = useItems();

  const [ list, setList ] = useState([]);
  const [ item ] = useState(props.title === 'Produtos' ? 'prod' : 'tag');

  //const [id] = useState(props.match.params.id);

  const sendItem = (sendId, sendName, sendTags) => {
    if (item === 'tag') {
      return `/tag/${sendId}/${sendName}`
    } else {
      //return `/prod/${sendId}/${sendName}/${sendTags}`
      return ''
    }
  }

  useEffect(() => {
    setList(itemsState.repositories);
  }, [itemsState.repositories])

   return (
     <S.List>{ !itemsState.loading && list.length === 0 && 'nenhum registro encontrado.' }
     
     <S.Title>{props.title}</S.Title>

      <Link to={`/prod`}>
        <S.Button>
          Cadastrar Novo Produto
        </S.Button>
      </Link>

      <Link to={`/tag`}>
        <S.Button>
          Cadastrar Nova Tag
        </S.Button>
      </Link>

       { Object.values(list).map(repository => 
       <S.ListItem key={'List_'+repository.id}>
         { `${repository.id} -> ${repository.name} ${repository.tags ? '-> ' + repository.tags.join(', ') : ''}` }

         <ListButton disabled={props.disabled}
                     btnId={'btnDelete'}
                     btnkey={'D'+repository.id}
                     fn={() => props.fnDel(repository.id, repository.name)}>

             {'excluir'}
         </ListButton>

         <Link to={sendItem(repository.id, repository.name, repository.tags)}>
            <ListButton btnId={'btnUpdate'}
                        btnkey={'U'+repository.date}>
                {'alterar'}
            </ListButton>
         </Link>

       </S.ListItem>)}
     </S.List>
   )
}

export default Repositories;