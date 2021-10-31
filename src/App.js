import "./App.css";
import imageInSrc from "./imageInSrc.png";
import "./styles.css";

function App() {
  return (
    <>
      <div
        className="wholeThing"
        style={{ border: "solid 1px black", maxWidth: "100vw" }}
      >
        <span>
          <h1 className="title red">Hady Ahmed</h1>
        </span>
        <br />
        <img src={imageInSrc} alt={"no thing to preview"} />
        <br />
        <img src="/imageInPublic.png" alt={"no thing to preview"} />

        <video style={{ width: "320", height: "240" }} controls>
          <source src="/myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default App;
