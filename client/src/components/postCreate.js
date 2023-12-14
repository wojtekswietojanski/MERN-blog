import { UserContext } from "../userContext";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const { setUserInfo, userInfo } = useContext(UserContext);

  if (!userInfo || Object.keys(userInfo).length === 0) {
    return <Navigate to={"/"} />;
  }
  async function savePost(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/savePost", {
      method: "POST",
      body: JSON.stringify({ title, content, imgUrl }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok == true) {
      alert("Post Created!");
    } else {
      alert("Failed to create a post!");
    }
  }
  return (
    <form action="" onSubmit={savePost}>
      <p>Create a post</p>
      <input
        type="text"
        name="title"
        id="titleInput"
        placeholder="Title"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        name="content"
        id="contentInput"
        placeholder="Content"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <input
        type="text"
        name="imgUrl"
        id="imgUrlInput"
        placeholder="Image Url"
        value={imgUrl}
        onChange={(event) => {
          setImgUrl(event.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default PostCreate;
