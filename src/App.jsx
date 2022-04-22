import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Header';
import Magazine from './routes/magazine';
import Philosophy from './routes/philosophy';
import Work from './routes/work';
import Detail from './routes/detail';
import Home from './routes/home';
import Profile from './routes/profile';
import Overview from './routes/overview';
import Flow from './routes/flow';
import Footer from './Footer';
import db from "./firebase";
import { doc, collection, getDocs, onSnapshot } from "firebase/firestore";


function App() {

  const [workMap, setWorkMap] = useState(new Map());

  useEffect(() => {
    // データベースからデータを取得する
    const workData = collection(db, "works");
    getDocs(workData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
      const workMap = new Map();
      snapShot.docs.forEach(doc => {
        const work = doc.data();
        work.path = doc.id;
        workMap.set(work.path, work)
      });
      setWorkMap(workMap);
    });

    // リアルタイムで取得
    onSnapshot(workData, (work) => {
      const workMap = new Map();
      workData.docs.forEach(doc => {
        const work = doc.data();
        work.path = doc.id;
        workMap.set(work.path, work)
      });
      setWorkMap(workMap);
    })
  }, []);

  return (
    <>
      <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="philosophy" element={<Philosophy />} />
            <Route path="work" element={<Work works={Array.from(workMap).map(([_, work])=> work)}/>} />
            {Array.from(workMap).map(([path, work]) => <Route key={`${path}`} path={`work/${path}`} element={<Detail work={work}/>}/>)}
            <Route path="magazine" element={<Magazine />} />
            <Route path="profile" element={<Profile />} />
            <Route path="overview" element={<Overview />} />
            <Route path="flow" element={<Flow />} />
          </Routes>
        </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
