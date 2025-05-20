import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Exercício 1
/* import styled from "styled-components";

export default function App() {
  return <Menu />;
}

function Menu() {
  return (
    <MenuSld>
      <Item rotulo="Home" />
      <Item rotulo="Cadastro" />
      <Item rotulo="Contato" />
    </MenuSld>
  );
}

interface ItemProps {
  rotulo: string;
}

function Item({ rotulo }: ItemProps) {
  return <ItemSld>{rotulo}</ItemSld>;
}

const MenuSld = styled.div`
  display: flex;
  font-family: tahoma;
  padding: 5px;
  background-color: #444;
  margin-bottom: 5px;
`;

const ItemSld = styled.div`
  padding: 5px;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: gold;
  }
`; */


// Exercício 2
/* import styled from "styled-components";

export default function App() {
  return (
    <>
      <Menu $fundo="navy" $cor="LightBlue" $sobre="red" />
      <Menu $fundo="PaleGreen" $cor="#444" $sobre="lime" />
    </>
  );
} */

/* function Menu(props: MenuProps) {
  return (
    <MenuSld {...props}>
      <Item $rotulo="Home" {...props} />
      <Item $rotulo="Cadastro" {...props} />
      <Item $rotulo="Contato" {...props} />
    </MenuSld>
  );
} */

/* interface ItemProps {
  $rotulo: string;
  $cor: string;
  $sobre: string;
}

interface MenuProps {
  $fundo: string;
  $cor: string;
  $sobre: string;
}

function Item(props: ItemProps) {
  return <ItemSld {...props}>{props.$rotulo}</ItemSld>;
}
 */
/* const MenuSld = styled.div<MenuProps>`
  display: flex;
  font-family: tahoma;
  padding: 5px;
  background-color: ${(props) => props.$fundo};
  margin-bottom: 5px;
`; */
/*
{
  $fundo:"navy",
  $cor:"LightBlue",
  $sobre="red"
}
*/
/* const ItemSld = styled.div<ItemProps>`
  padding: 5px;
  color: ${ props => props.$cor};
  cursor: pointer;

  &:hover {
    color: ${ props => props.$sobre};
  }
`; */
