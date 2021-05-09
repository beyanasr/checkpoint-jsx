import './App.css';
import image from './image.png';
import './style.css';

function App() {
  return (
    <div>
    <div style={{border:'solid 1px black', maxWidth: "100vw" }}>
      <h1 className="title-red">Beya</h1>
    <img className="image1" src={image} alt="imageInSrc" />
    <img className="image2" src="imageInPublic.jpg" alt="jsx" />
    </div>
    <video className="video1" width='750' hight='500' controls />

    <source src="/myVideo.mp4" type="video/mp4" />
  </div>
  );
}

export default App;
