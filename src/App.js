/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '역삼 우동 맛집';
  // state = 자동 렌더링(자주 변경이 될 요소들)
  let[글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy = copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>
      <button onClick={() => {
        // ... => 괄호를 벗겨달라는 뜻
        let copy = [...글제목];
        copy[0]= '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>
      
      <div className="list">
        <h4>{글제목[0]}<span onClick={() => {따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}<span>😛</span></h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>           
    </div>
  );
}

export default App;
