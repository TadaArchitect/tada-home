// import headerImg from "images/name.jpeg";
// import backImg from "../images/workBack.png";

export default function Detail(props) {
  const work = props.work;
  return (
    <main>
      <div className="title-box detail-titleBox">
        <h1>{work.title}</h1>
      </div>
      <div className="detail-box">
        <div className="detail-img">
          {work.images.map((image) => (
            <a href={image.imageUrl}>
              <img src={image.thumbnailImageUrl} alt="サムネイルイメージ" />
            </a>
          ))}
        </div>
        <div className="detail-text">{work.text}</div>
      </div>
      <p className="detail-image">
        <a href="/work">
          <img src="/images/workBack.png" alt="" />
        </a>
      </p>
    </main>
  );
}
