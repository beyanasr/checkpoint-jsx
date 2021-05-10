import './App.css';
import image from './image.png';
import video from './myVideo.mp4';

import './style.css';

function App() {
  return (
    <div>
    <div style={{border:'solid 1px black', maxWidth: "100vw" }}>
      <h1 className="title-red">Beya</h1>
    <img className="image1" src={image} alt="imageInSrc" />
    <img className="image2" src="imageInPublic.jpg" alt="jsx" />
    </div>
    <video className="video1" width="750" height="500" controls >
      <source src={video} type="video/mp4"/>
     </video>
  </div>
  );
}

export default App;
