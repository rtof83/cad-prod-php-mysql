import * as S from '../pages/styled';

function Button(props) {
    return (
        <S.Button key={props.btnkey}
                  type="button"
                  onClick={props.fn}
                  style={{width: '180px', height: '50px'}}>
                      
            {props.children}
        </S.Button>
    )
}

export default Button;