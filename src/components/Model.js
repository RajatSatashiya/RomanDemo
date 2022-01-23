import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/colloseum.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.colosseum002.geometry}
        material={materials.material_0}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("./models/colloseum.gltf");
