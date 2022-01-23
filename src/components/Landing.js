import "./Landing.css";
import { Suspense, useState, useRef, useEffect } from "react";
import {
  OrbitControls,
  Stars,
  Environment,
  PresentationControl,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import Model from "./Model";

function Landing() {
  const audioPlayer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  });

  return (
    <>
      <audio src="./music/AetasRomana.mp3" ref={audioPlayer}></audio>
      <div className="landing">
        <div className="leftPanel">
          <div className="projTitle">The Roman Walks</div>
          <div className="button">
            <div
              className="btnLanding"
              onClick={() => {
                setIsPlaying(!isPlaying);
              }}
            >
              Play Music
            </div>
            <div className="btnLanding">Click To Explore</div>
          </div>
          <div className="desc">
            Walk amongst the Romans and explore the beauty of the world's
            largest Amphitheatre ever - The Colosseum. Feel the roots of theatre
            and immerse yourself in the experience of Ancient Rome.
          </div>
        </div>

        {/* <div className="rightPanel">
          <Canvas>
            <pointLight position={[10, 5, 5]} />
            <pointLight position={[0, 5, -15]} />

            <Suspense fallback={null}>
              <Model />
            </Suspense>
            <OrbitControls makeDefault />
          </Canvas>
        </div> */}
        {/* <div className="rightPanel">
          <img src="./images/colosseum.png" className="coloImg"></img>
        </div> */}
      </div>
    </>
  );
}

export default Landing;
