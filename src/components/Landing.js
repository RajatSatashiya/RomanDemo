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
            <a href="/explore">
              <div className="btnLanding">Click To Explore</div>
            </a>
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

        <div className="rightImagePanel">
          <img src="./images/colosseum.png" className="coloImg"></img>
        </div>
      </div>

      <div className="colosseum">
        <div>
          <div className="title">Colosseum - The Heart of Theatres</div>
          Colosseum, also called Flavian Amphitheatre, giant amphitheatre built
          in Rome under the Flavian emperors. Construction of the Colosseum was
          begun sometime between 70 and 72 CE during the reign of Vespasian. It
          is located just east of the Palatine Hill, on the grounds of what was
          Nero’s Golden House. The artificial lake that was the centrepiece of
          that palace complex was drained, and the Colosseum was sited there, a
          decision that was as much symbolic as it was practical. Vespasian,
          whose path to the throne had relatively humble beginnings, chose to
          replace the tyrannical emperor’s private lake with a public
          amphitheatre that could host tens of thousands of Romans.
        </div>
        <img
          src="https://cdn.britannica.com/03/98303-050-C8036C9D/Interior-Colosseum-Rome.jpg"
          className="descImage"
        ></img>
      </div>

      <div className="colosseum2">
        <div>
          <div className="title">Aetas Romana (The Music you played above)</div>
          Our homage to ancient Rome. Aetas Romana is Latin and means "the age
          of Rome". With this song we tried to embed something that takes us all
          back to the time in which Rome was at its peak and stretched from
          Britannia to Syria over snow-covered plains to scorching deserts. The
          song itself is not like Illyricum, which was meant to be as
          traditional as possible. In this song the creator chose a composing
          style closer to movie scores, which gives much more room for dramatics
          and feelings of awe and mystery. The first 4min are actually a
          different scale than most of the later parts, it starts with an
          Arabian scale and then transitions into Aeolian minor which is a
          classic European scale. So in a sense it can be seen as if you'd
          travel from the East into the centre of the Roman Empire as the song
          progresses.
        </div>
        <img
          src="https://i.pinimg.com/originals/5c/37/88/5c3788211456b6c6b68cbc2774eb73d8.jpg"
          className="descImage"
        ></img>
      </div>

      <div className="colosseum2">
        <div>
          <div className="title">Quintus Gallus</div>
          This was an easter egg in our project. If you registered to our site,
          you must have received a Welcome mail from Quintus Gallus. Quintus
          Roscius (ca. 126 BC – 62 BC) was a Roman actor. The cognomen Gallus is
          dubious, as it appears only once as a scholia in a manuscript of
          Cicero's Pro Archia. Quintus Roscius Gallus was one of the most famous
          actors in ancient Rome. In fact, his name continued to be used to
          describe a brilliant actor until the nineteenth century c.e.—as modern
          critics might use "an Olivier" to designate an especially gifted
          actor. His cognomen ("last name") Gallus usually denoted someone who
          was a freedman (the son of a former slave), but Roscius was born to a
          prosperous family in Latium, what is now the area south of Rome. Most
          of the biographical information about him comes from the great Roman
          statesman Cicero, who defended Roscius in court on a charge of
          business fraud in 69 b.c.e. or thereabouts. He was extremely handsome
          with a slight squint, and was especially renowned for his venustas
          ("grace of movement"). He may have tutored Cicero in the art of
          elocution when Cicero was a young student, but he was aristocratic
          enough to be part of the inner circle of Sulla, the Roman dictator,
          who made him a knight in 81 b.c.e. Roscius preferred acting in
          comedies to tragedies, perhaps because comic roles required more
          physicality, but he was known for his tragic performances as well. As
          the great actor grew older, he slowed down his movements and was
          renowned for his "old man" voice.
        </div>
        <img
          src="https://alchetron.com/cdn/quintus-roscius-gallus-2d9b1475-c97f-4753-95cc-63bc149b2e9-resize-750.jpeg"
          className="descImage2"
        ></img>
      </div>
    </>
  );
}

export default Landing;
