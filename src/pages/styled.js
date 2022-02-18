import styled from 'styled-components';

export const URL = styled.div`
  font-size: 1.5rem;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Title = styled.h1`
  height: 4vh;
  font-size: 1.5rem;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  // width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 2rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;
  margin-right: .3rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  } 
`

export const Button = styled.button`
  height: 2rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: .25rem 0;
  margin-right: .25rem;
  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
`

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`

export const ListItem = styled.li`
  margin: .5rem 0;
  background: #000;
  color: #fff;
  padding: .5rem;
  width: 50rem;
`

export const ListButton = styled.button`
  height: 1.2rem;
  border: 1px solid #000;
  border-radius: .25rem 0;
  float: right;
  vertical-align: middle;
  margin: 0 .3rem 0 0;
`

export const AlertSuccess = styled.p`
  background-color: #d1e7dd;
  color: #0f5132;
  margin: 20px 0;
  border: 1px solid #badbcc;
  border-radius: 4px;
  padding: 7px;
`

export const AlertDanger = styled.p`
  background-color: #f8d7da;
  color: #842029;
  margin: 20px 0;
  border: 1px solid #f5c2c7;
  border-radius: 4px;
  padding: 7px;
`

export const Divider = styled.div`
  margin: 2rem 0;
  height: 1px;
  background: rgba(112, 111, 111, 0.829);
  box-shadow: 0 5px 10px rgba(51, 51, 51, 0.63);
`
