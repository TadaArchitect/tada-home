export default function Work(props) {
    const works = props.works;
    return(
        <main>
        <div className="title-box work-width">
            <h1 className="work-margin">宿泊施設</h1>
            {works.map((work => work.type === "accommodation" ? (
                <div className="work-card">
                    <div className="work-box">
                        <img src={work.thumbnailImageUrl} alt=""/>
                        <div className="mask">
                            <a href={`/work/${work.path}`}>
                                <div className="caption">
                                    {work.caption}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            ): <></>))}
            </div>
        <div class="title-box work-width">
            <h1 class="work-margin">住宅</h1>
            {works.map((work => work.type === "house" ? (
                <div className="work-card">
                    <div className="work-box">
                        <img src={work.thumbnailImageUrl} alt=""/>
                        <div className="mask">
                            <a href={`/work/${work.path}`}>
                                <div className="caption">
                                    {work.caption}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            ): <></>))}
            <div class="work-card">
                <div class="work-box">
                    <img src="images/work02.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">北鎌倉の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work03.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">つばさの家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work04.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">大草の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work05.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">辻堂東海岸の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work06.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">館山の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work07.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">回の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work08.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">きいちゃんち</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work09.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">希望の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work10.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">横浜和泉の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work11.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">葉山一色の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work12.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">黒部丘の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work13.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">紅花居</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work14.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">多治見の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work15.jpeg" alt=""/>
                    <div class="mask">
                        <div class="caption">浄明寺の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work16.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">北見方の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work17.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">葉山の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work18.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">梓川の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work19.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">茅ヶ崎東海岸北の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work20.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">舞岡の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work21.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">相模大野の家</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work22.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">弥富の家</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="title-box work-width">
            <h1 class="work-margin">デザイン</h1>
            {works.map((work => work.type === "design" ? (
                <div className="work-card">
                    <div className="work-box">
                        <img src={work.thumbnailImageUrl} alt=""/>
                        <div className="mask">
                            <a href={`/work/${work.path}`}>
                                <div className="caption">
                                    {work.caption}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            ): <></>))}
            <div class="work-card">
                <div class="work-box">
                    <img src="images/work23.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">アイアン手摺</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work24.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">ドアホンカバーを兼ねた錆仕上げ表札</div>
                    </div>
                </div>
                <div class="work-box">
                    <img src="images/work25.jpg" alt=""/>
                    <div class="mask">
                        <div class="caption">家具～家具職人との共作</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}