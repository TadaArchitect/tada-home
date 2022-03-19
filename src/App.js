import { Link } from "react-router-dom";
import logo from './logo.svg';


function App() {
  return (
    <main>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="8000">
                <img src="images/1.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="images/2.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="images/3.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="images/4.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="images/5.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="images/6.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="images/7.jpg" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src="images/8.jpg" class="d-block w-100" alt="..."/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="home-text">
            <p><img src="images/hiroshi.jpg" alt=" "/></p>
            <p>はじめまして。多田建築設計事務所の多田博と申します。</p>
            <p><span>「シンプルに住まうことが豊かな人生をもたらす」</span>
                ２０００年、多田建築設計事務所を設立しました。</p>
            <p>２０年経った現在まで、住宅は５０棟以上の住まいづくりに携わってきました。
                しかし、単純計算すると、住宅設計は、年間3棟です。
                多くても１年に６棟以上はお受けしていません。
                この数字からおわかりの通り、決して大きな事務所ではありません。</p>
            <p>それは、常に１件、１件を大切にお客様に寄り添うようにして丁寧に作り続けていきたいから。</p>
            <p>今まで多くのお客様が、出来上がった住まいを心から気に入ってくださり、
                仕事でもプライベートでも充実した人生を送っている喜びが、
                少しずつ日本中に広まっていったのだと思っています。</p>
            <p>素敵なみなさまともご縁をいただけますと嬉しく存じます。</p>
        </div>

        <div class="news">
            <h1>NEWS</h1>
            <div class="news-box">
                <p class="time">2021.7</p>
                <p class="news-list"><a href="">三重県桑名市の木造音楽ホールが完成しました。</a></p>
            </div>
            <div class="news-box">
                <p class="time">2021.4</p>
                <p class="news-list"><a href="">三重県桑名市の木造音楽ホールが上棟しました。　</a></p>
            </div>
            <a href="https://blog.arttada.com/"><img src="images/blog.png" alt=""/></a>
        </div>

        {/* <div class="sns">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftadaarchitects%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <a class="houzz-review-widget" data-pro="arttada" data-hzid="58066" data-locale="ja-JP" href="https://www.houzz.jp">Houzz</a><script>(function(d,s,id){if(!d.getElementById(id)){var js=d.createElement(s);js.id=id;js.async=true;js.src="//platform.houzz.com/js/widgets.js?"+(new Date().getTime());var ss=d.getElementsByTagName(s)[0];ss.parentNode.insertBefore(js,ss);}})(document,"script","houzzwidget-js");</script></div>
        </div> */}
    </main>
  );
}

export default App;
