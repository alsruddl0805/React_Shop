import './App.css';
import './css/reset.css';
import './style/common.scss';
import styled from 'styled-components';
import { useState } from 'react';

interface FontProps {
  size : string,
}

let MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 24%);
`

let Font = styled.p<FontProps>`
  font-size: ${p => p.size}px;
  font-weight: bold;
`

function App() :JSX.Element {
  let [name, setName] = useState('');
  
  return (
    <div className="App">
      <MainBox>
        <Font size="50">WELCOME!</Font>
      </MainBox>
    </div>
  );
}

function Profile(props: {name :string, age :string}) :JSX.Element {
  return <div>{props.name}님, 안녕하세요!</div>
}

export default App;
