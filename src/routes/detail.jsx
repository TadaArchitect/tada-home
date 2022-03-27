export default function Detail(props) {
    const work = props.work
    return(
        <main>
            <div class="title-box">
                <h1>{work.title}</h1>
            </div>
            <div class="detail-box">
                <div class="detail-img">
                    {
                        work.images.map((image) => 
                            <a href={image.imageUrl}>
                                <img src={image.thumbnailImageUrl}/>
                            </a>
                        )
                    }
                </div>
                <div class="detail-text">
                    {work.text}
                </div>
            </div>
            <a href="work"><img src="images/workBack.png" alt="" /></a>
        </main>
    );
}