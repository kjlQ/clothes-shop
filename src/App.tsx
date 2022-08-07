import React,{useState} from "react";
import './App.scss';

export default function App() {
  const [ show , setShow] = useState(false)
  const video =  require("./assets/video/walkin-girl.mp4");
  return (
      <div className="App">
          <div className="video">
            <video src={video} loop muted autoPlay />
            <div className="overlay" />
          </div>

          <div className={show ? "header" : "header not-show"}>
              <div className="links">
                  <div className="links__button">
                      <button>
                          Home
                      </button>
                  </div>
                  <div className="links__button">
                      <button>
                          Shop
                      </button>
                  </div>
                  <div className="links__button">
                      <button>
                          About us
                      </button>
                  </div>
                  <div className="show__header" onClick={()=>setShow(!show)}>
                      <button>
                          Menu
                      </button>
                  </div>
              </div>

          </div>
      </div>
  );
}
