export default function Work(props) {
  const works = props.works;
  return (
    <main>
      <div className="title-box work-width">
        <h1 className="work-margin">宿泊施設</h1>
        <div className="work-cards">
          {works.map((work) =>
            work.type === "accommodation" ? (
              <div className="work-card">
                <div className="work-box">
                  <img src={work.thumbnailImageUrl} alt="" />
                  <div className="mask">
                    <a href={`/work/${work.path}`}>
                      <div className="caption">{work.caption}</div>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
      <div class="title-box work-width">
        <h1 class="work-margin">住宅</h1>
        <div className="work-cards">
          {works.map((work) =>
            work.type === "house" ? (
              <div className="work-card">
                <div className="work-box">
                  <img src={work.thumbnailImageUrl} alt="" />
                  <div className="mask">
                    <a href={`/work/${work.path}`}>
                      <div className="caption">{work.caption}</div>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
      <div class="title-box work-width">
        <h1 class="work-margin">デザイン</h1>
        <div className="work-cards">
          {works.map((work) =>
            work.type === "design" ? (
              <div className="work-card">
                <div className="work-box">
                  <img src={work.thumbnailImageUrl} alt="" />
                  <div className="mask">
                    <a href={`/work/${work.path}`}>
                      <div className="caption">{work.caption}</div>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </main>
  );
}
