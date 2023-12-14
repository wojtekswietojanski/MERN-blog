import Post from "./post";
import { useEffect, useState } from "react";

const IndexPage = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((response) => response.json())
      .then((receivedPosts) => {
        setPosts(receivedPosts);
        console.log(receivedPosts);
      })
      .catch((error) => {
        console.error("Wystąpił błąd podczas pobierania postów:", error);
      });
  }, []);

  return (
    posts && (
      <div>
        {posts.map((post) => (
          <Post key={post._id} {...post} />
        ))}
      </div>
    )
  );
};

export default IndexPage;
