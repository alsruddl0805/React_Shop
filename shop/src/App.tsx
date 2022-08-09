import './App.css';
import './css/reset.css';
import './style/common.scss';
import styled from 'styled-components';
import { useState } from 'react';

let BgButton = styled.button`
background-color: black;
`

/*
React + typescript 사용 시 주의 점

1. 일반변수, 함수 만들때 타입지정 신경쓸 것
2. JSX 타입 지정
3. Component 타입 지정 (함수 타입지정 : 파라미터 / return 타입)
*/

let hi :string = '안녕하세요!';
let box :JSX.Element = <div></div>; // JSX 표현하는 타입

function App() :JSX.Element {
  let [name, setName] = useState('');
  
  return (
    <div className="App">
      <div>
      <div>이름 : <input type='text' onChange={(e) => {setName(e.target.value)}}></input></div> 
      <Profile name={name} age="20" />
      </div>
    </div>
  );
}

function Profile(props: {name :string, age :string}) :JSX.Element {
  return <div>{props.name}님, 안녕하세요!</div>
}

export default App;
