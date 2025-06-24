import { useNavigate } from "react-router-dom";
import "./WritePost.css"
import "../App.css"
import { useEffect,useState,useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css'


const WritePost=({posts})=>{
  const navigate=useNavigate();
  const editorRef=useRef();

  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');

  useEffect(()=>{
    // 잘 입력되나요?
    // console.log(title)
    // console.log(description)
  },[title,description])

  // 두개를 합칠까...?
  const ChangeTitle =(e)=>{
    setTitle(e.target.value)
  }
  const ChangeDescription=(e)=>{
    setDescription(e.target.value);
  }

// 등록 버튼 눌렀을 때 
  const HandleSubmit=()=>{
    const contentMarkdown = editorRef.current.getInstance().getMarkdown();
    const contentHTML = editorRef.current.getInstance().getHTML();
    const newPost={
      id:Date.now(),
      title,
      descriptionMarkdown:contentMarkdown,
      descriptionHTML:contentHTML,
      author:"임시사용자",
      createdAt: new Date().toISOString().split("T")[0],
      views:0,
      likes:0,
      comments:0,
    }
    console.log("작성된 게시물",newPost)
    navigate("/") // 작성했으면 메인으로 보내기
    posts.push(newPost)
  }
  

  return(
    <div className="write-post-container">
      <h1>작성 중... </h1>
        <input 
          className="write-post-input" 
          type='text' 
          placeholder="제목"
          value={title} 
          onChange={(e)=>ChangeTitle(e)}
        />
        <Editor 
         ref={editorRef}
        previewStyle="vertical"
        height="400px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        initialValue=''
        key="create"
        />
        {/* 버튼들 */}
      <div className="write-button-group">
          {/* 취소버튼 -> BoardMain으로 */}
        <button 
          className="cancel-button" 
          onClick={()=>navigate('/')}>취소</button>
          {/* 등록버튼, 등록 후 BoardMain으로 */}
        <button 
          className="submit-button"
          onClick={HandleSubmit}>등록</button>
      </div>
    </div>
  )
}


export default WritePost;