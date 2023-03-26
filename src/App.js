/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let post = '역삼 우동 맛집';
  // state = 자동 렌더링(자주 변경이 될 요소들)
  let[글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {/* <button onClick={() => {
        let copy = [...글제목];
        copy = copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>
      <button onClick={() => {
        // ... => 괄호를 벗겨달라는 뜻
        let copy = [...글제목];
        copy[0]= '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button> */}
      
      {/* <div className="list">
        <h4>{글제목[0]}<span onClick={() => {따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setModal(!modal)}}>{글제목[2]}</h4>
        {
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        modal == true ? <Modal/> : null
        }
        <p>2월 17일 발행</p>
      </div> */}
         
      {
        // map = 왼쪽 array 자료만큼 내부코드 실행해줌, return 오른쪽에 있는걸 array로 담아줌
        // 두번째 파라미터 = 반복물 돌 때 마다 0부터 1씩 증가하는 정수
        글제목.map(function(a, i){
          return (
          <div className="list" key={i}>
          <h4 onClick={()=>{setModal(!modal); setTitle(i)}}>{ 글제목[i] } 
            <span onClick={(e) => {
              e.stopPropagation()
              let copy = [...따봉];
              copy[i] = copy[i] + 1;
              따봉변경(copy)
            }}>👍</span> {따봉[i]}
          </h4>      
          <p>2월 17일 발행</p>
          <button onClick={()=>{
            let copy = [...글제목];
            // i번째 array데이터 삭제
            copy.splice(i, 1);
            글제목변경(copy);
          }}>삭제</button>
        </div>
      )
        })
      }
  
      
      <input onChange={(e)=>{
        입력값변경(e.target.value);
      }}/>
      <button onClick={(e)=>{
        let copy = [...글제목];
        // array에 추가하는 함수
        copy.unshift(입력값);
        글제목변경(copy)
      }}>글발행</button>
      {
        modal == true ? <Modal title={title} 작명={글제목} 글제목변경_={글제목변경}/> : null
      }
      <Modal2></Modal2>
    </div>
  );
}

// component
// 1. 반복적인 html 축약할때
// 2. 큰 페이지들
// 3. 자주 변경되는 것들
function Modal(props){
  return (
      // return 안에는 한개의 div만 있어야함. div를 두개 이상 병렬로 쓰려면 결국 큰 div안에 가둬야 함 
      <div className="modal">
        <h4>{ props.작명[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
  )
}

class Modal2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render(){
    return(
      <div>안녕{this.state.age}
        <button onClick={()=>{
          this.setState({age:21})
        }}>버튼</button>
      </div>
    )
  }
}

export default App;
