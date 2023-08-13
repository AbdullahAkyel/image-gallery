import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(
      "https://im.haberturk.com/2021/06/29/3118865_5cc14870dc34f868072b175aa088f327_640x640.jpg"
    );
  }, []);

  return (
    <div className="App">
      <h1>IMAGE GALLERY</h1>
      <div className="main">
        <img src={image} alt="" />
      </div>
      <div className="down">
        <img
          onClick={() => {
            setImage(
              "https://www.yurtdisiegitim.net/wp-content/uploads/2018/02/italyada-yemek-kulturu.jpg"
            );
          }}
          src="https://www.yurtdisiegitim.net/wp-content/uploads/2018/02/italyada-yemek-kulturu.jpg"
          alt=""
        />
        <img
          onClick={() => {
            setImage(
              "https://cdn.yemek.com/uploads/2016/04/caponata-italyan-mutfagi.jpg"
            );
          }}
          src="https://cdn.yemek.com/uploads/2016/04/caponata-italyan-mutfagi.jpg"
          alt=""
        />
        <img
          onClick={() => {
            setImage(
              "https://cdn.yemek.com/uploads/2015/05/gnocchi-tarifi.jpg"
            );
          }}
          src="https://cdn.yemek.com/uploads/2015/05/gnocchi-tarifi.jpg"
          alt=""
        />
        <img
          onClick={() => {
            setImage(
              "https://im.haberturk.com/2021/06/29/3118865_5cc14870dc34f868072b175aa088f327_640x640.jpg"
            );
          }}
          src="https://im.haberturk.com/2021/06/29/3118865_5cc14870dc34f868072b175aa088f327_640x640.jpg"
          alt=""
        />
        <img
          onClick={() => {
            setImage(
              "https://cdn2.enuygun.com/media/lib/500x300/uploads/image/risotto-42183.webp"
            );
          }}
          src="https://cdn2.enuygun.com/media/lib/500x300/uploads/image/risotto-42183.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
