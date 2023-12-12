import "../styling/post/post.css";

const Post = () => {
  return (
    <div className="postContainer">
      <div className="fotoContainer"></div>
      <div className="textContainer">
        <h2>Tytuł</h2>
        <p>
          <b>Autor</b> 01-01-2023
        </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          placeat cupiditate neque exercitationem mollitia architecto illo?
          Officia cum dolore, earum nulla illo impedit tempora eveniet quo
          inventore perspiciatis rem repudiandae.
        </p>
      </div>
    </div>
  );
};

export default Post;
