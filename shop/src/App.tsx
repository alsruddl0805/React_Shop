import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/reset.css';
import './style/common.scss';
import styled from 'styled-components';

let BgButton = styled.button`
background-color: black;
`

function App() :JSX.Element {
  return (
    <div className="App">
      <div>
      <Login />
      <Button />
      </div>
    </div>
  );
}

function Login() :JSX.Element {
  return (
    <div className="input-wrap">
      <div className="tit">
        <p className="font-500">로그인</p>
      </div>
      <div className="list">
        <ul className="name">
          <li>ID</li>
          <li>PW</li>
        </ul>
        <ul className="input-t">
          <li><input type="text" /></li>
          <li><input type="text" /></li>
        </ul>
      </div>
    </div>
  )
}

function Button() :JSX.Element {
  return (
    <div className="btn-db">
      <BgButton>로그인</BgButton>
      <button>회원가입</button>
    </div>
  )
}

export default App;
