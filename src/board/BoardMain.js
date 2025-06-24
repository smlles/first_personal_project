import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../app/store";
import "./BordeMain.css"
import { Navigate, useNavigate } from "react-router-dom";
import dummyPosts from "../data/dummyPost";
import { useEffect } from "react";



const BoardMain=({posts})=>{
  const dispatch=useDispatch();
  const navigate=useNavigate();

// 상세 페이지로 가기 
const GoPostToDetail=(post)=>{
  navigate(`/posts/${post.id}`)
}

// 작성 페이지로 가기
const GoWritePost=()=>{
  navigate('/write')
}

  return(
    <div className="board-container">
      <h1  >게시글 리스트</h1>
      {/* 리스트 */}
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
          {posts.map((post, index) => (
            <tr key={post.id}>
              <td>{index + 1}</td>
              <td onClick={()=>GoPostToDetail(post)}>{post.title}</td>
              <td>{post.author}</td>
              <td>{post.createdAt}</td>
              <td>{post.views}</td>
              <td>{post.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* 버튼 */}
      <div className="button-group">
        {/* 로그아웃 버튼 */}
        <button onClick={()=>dispatch(logout())} className="logout-btn">🚪 로그아웃</button>
        {/* 글쓰기 버튼 */}
        <button className="write-btn" onClick={GoWritePost}>✍ 글쓰기</button>
      </div>
    </div>


  )
}





export default BoardMain;