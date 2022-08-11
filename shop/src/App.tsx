import './App.css';
import './css/reset.css';
import './style/common.scss';
import styled from 'styled-components';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import First from './views/01';
import Second from './views/02';
import Third from './views/03';
import Fourth from './views/04';

interface FontProps {
  size? : string,
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
  font-size: ${p => p.size || 14}px;
  font-weight: bold;
`

function App() :JSX.Element {
  let [name, setName] = useState('');
  let navigate = useNavigate();
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
        <MainBox>
          <Font size="50">WELCOME!</Font>
          <Profile name="tester" />
          <button onClick={() => {navigate('/first')}}>1</button>
          <button onClick={() => {navigate('/second')}}>2</button>
          <button onClick={() => {navigate('/third')}}>3</button>
          <button onClick={() => {navigate('/fourth')}}>4</button>
        </MainBox>
        }></Route>
        <Route path="/first" element={<First/>}></Route>
        <Route path="/second" element={<Second/>}></Route>
        <Route path="/third" element={<Third/>}></Route>
        <Route path="/fourth" element={<Fourth/>}></Route>
      </Routes>
    </div>
  );
}

function Profile(props: {name :string}) :JSX.Element {
  return <div>
      <Font>{props.name}</Font>님, 안녕하세요!
    </div>
}

export default App;
