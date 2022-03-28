export default function Detail(props) {
    const work = props.work
    return(
        <main>
            <div className="title-box">
                <h1>{work.title}</h1>
            </div>
            <div className="detail-box">
                <div className="detail-img">
                    {
                        work.images.map((image) => 
                            <a href={image.imageUrl}>
                                <img src={image.thumbnailImageUrl}/>
                            </a>
                        )
                    }
                </div>
                <div className="detail-text">
                    {work.text}
                </div>
            </div>
            <a href="work"><img src="images/workBack.png" alt="" /></a>
        </main>
    );
}