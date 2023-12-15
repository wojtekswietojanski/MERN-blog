import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styling/bigPost/bigPost.css";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const [containerStyle, setContainerStyle] = useState(
    "https://bi.im-g.pl/im/11/bb/19/z26983185V,Zachod-slonca-nad-Masywem-Annapurny--Po-kolei-od-l.jpg"
  );

  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:4000/posts/" + id).then((response) => {
      response.json().then((postInfoResponse) => {
        setPostInfo(postInfoResponse);
        console.log(postInfoResponse);
      });
    });
  }, []);

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };
  useEffect(() => {
    if (postInfo) {
      if (isValidUrl(postInfo.imgUrl)) {
        setContainerStyle(postInfo.imgUrl);
      }
    }
  }, [postInfo]);

  return (
    postInfo && (
      <div className="postContainer">
        <div
          className="fotoContainer"
          style={{ backgroundImage: `url(${containerStyle})` }}
        ></div>
        <div className="textContainer">
          {postInfo && (
            <>
              <h2>{postInfo.title}</h2>
              <p>
                <b>{postInfo.username}</b> {postInfo.todayFormatted}
              </p>
              <p className="description">{postInfo.content}</p>
            </>
          )}
        </div>
      </div>
    )
  );
};

export default PostPage;
