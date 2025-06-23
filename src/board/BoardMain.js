import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../app/store";
import "./BorderMain.css"
import { Navigate } from "react-router-dom";

// 테스트용 더미 데이타
 const dummyPosts = [
    {
      id: 1,
      title: "첫 번째 게시글입니다",
      author: "user01",
      createdAt: "2025-06-23",
      views: 12,
      likes: 3
    },
    {
      id: 2,
      title: "두 번째 게시글",
      author: "user02",
      createdAt: "2025-06-22",
      views: 45,
      likes: 8
    }
  ];



const BoardMain=()=>{
  const dispatch=useDispatch();

  const logoutHandler=()=>{
    console.log('')
    dispatch(logout());
  }

const GoPostToDetail=()=>{
  
}



  return(
    <div className="board-container">

      <h1  >게시글 리스트</h1>
     
           
      <table className="board-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성시간</th>
            <th>조회수</th>
            <th>좋아요</th>
          </tr>
        </thead>
        <tbody>
          {dummyPosts.map((post, index) => (
            <tr key={post.id}>
              <td>{index + 1}</td>
              <td onClick={GoPostToDetail}>{post.title}</td>
              <td>{post.author}</td>
              <td>{post.createdAt}</td>
              <td>{post.views}</td>
              <td>{post.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-group">
        <button onClick={logoutHandler} classname="logout-btn">🚪 로그아웃</button>
        <button className="write-btn">✍ 글쓰기</button>
      </div>
    </div>


  )
}





export default BoardMain;