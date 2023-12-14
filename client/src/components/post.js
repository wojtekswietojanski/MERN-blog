import "../styling/post/post.css";

const Post = (posts) => {
  const containerStyle = {
    backgroundImage: `url(${posts.imgUrl})`,
  };

  return (
    <div className="postContainer">
      <div className="fotoContainer" style={containerStyle}></div>
      <div className="textContainer">
        <h2>{posts.title}</h2>
        <p>
          <b>{posts.username}</b> {posts.todayFormatted}
        </p>
        <p className="description">{posts.content}</p>
      </div>
    </div>
  );
};

export default Post;
