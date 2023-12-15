import "../styling/post/post.css";
import { Link } from "react-router-dom";

const Post = (posts) => {
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  const defaultImageUrl =
    "https://bi.im-g.pl/im/11/bb/19/z26983185V,Zachod-slonca-nad-Masywem-Annapurny--Po-kolei-od-l.jpg";

  const containerStyle = {
    backgroundImage: isValidUrl(posts.imgUrl)
      ? `url(${posts.imgUrl})`
      : `url(${defaultImageUrl})`,
  };

  return (
    <Link to={"posts/" + posts._id} className="postLink">
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
    </Link>
  );
};

export default Post;
