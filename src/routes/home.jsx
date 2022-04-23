import { Link } from "react-router-dom";
import db from "../firebase";
import { doc, collection, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
// import { useEffect } from "react";



function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // データベースからデータを取得する
    const postData = collection(db, "news");
    getDocs(postData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });

    // リアルタイムで取得
    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => ({...doc.data() })));
    })
  }, []);




  return (
    <main>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="8000">
                <img src="images/1.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src="images/2.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="images/3.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="images/4.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="images/5.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="images/6.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="images/7.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="images/8.jpg" className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>

        <div className="home-text">
            <p><img src="images/hiroshi.jpg" alt=" "/></p>
            <p>はじめまして。多田建築設計事務所の多田博と申します。</p>
            <p><span>「シンプルに住まうことが豊かな人生をもたらす」</span><br/>
                ２０００年、多田建築設計事務所を設立しました。</p>
            <p>２０年経った現在まで、住宅は５０棟以上の住まいづくりに携わってきました。<br/>
                しかし、単純計算すると、住宅設計は、年間3棟です。<br/>
                多くても１年に６棟以上はお受けしていません。<br/>
                この数字からおわかりの通り、決して大きな事務所ではありません。</p>
            <p>それは、常に１件、１件を大切にお客様に寄り添うようにして丁寧に作り続け<br/>
              ていきたいから。</p>
            <p>今まで多くのお客様が、出来上がった住まいを心から気に入ってくださり、<br/>
                仕事でもプライベートでも充実した人生を送っている喜びが、<br/>
                少しずつ日本中に広まっていったのだと思っています。</p>
            <p>素敵なみなさまともご縁をいただけますと嬉しく存じます。</p>
        </div>

        <div className="news">
            <h1>NEWS</h1>
              {posts.map((post) => (
                <div className="news-box" key={post.text}>
                  <p className="time">{post.date}</p>
                  <p className="news-list">{post.link !== "" ? <a href={post.link}>{post.text}</a> : post.text}</p>
                </div>
              ))}
            <a href="https://blog.arttada.com/"><img src="images/blog.png" alt=""/></a>
        </div>

        <div class="sns">
            <a class="houzz-review-widget" data-pro="arttada" data-hzid="58066" data-locale="ja-JP" href="https://www.houzz.jp">Houzz</a>{(function(d,s,id){if(!d.getElementById(id)){var js=d.createElement(s);js.id=id;js.async=true;js.src="//platform.houzz.com/js/widgets.js?"+(new Date().getTime());var ss=d.getElementsByTagName(s)[0];ss.parentNode.insertBefore(js,ss);}})(document,"script","houzzwidget-js")}
        </div>
    </main>
  );
}

export default Home;
