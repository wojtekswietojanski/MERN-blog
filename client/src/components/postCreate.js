import { UserContext } from "../userContext";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const { setUserInfo, userInfo } = useContext(UserContext);

  //   Jeśli ktoś wejdzie na /create niezalogowany to wróci automatycznie do strony główenej
  if (!userInfo || Object.keys(userInfo).length === 0) {
    return <Navigate to={"/"} />;
  }

  async function savePost(event) {
    event.preventDefault();
    // Data
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const todayFormatted = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;
    // Nazwa użytkownika
    const username = userInfo.username;

    const response = await fetch("http://localhost:4000/savePost", {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
        imgUrl,
        username,
        todayFormatted,
      }),
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
