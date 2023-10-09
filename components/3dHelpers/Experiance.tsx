import {
  ContactShadows,
  Environment,
  OrbitControls,
  useCursor,
} from "@react-three/drei";

import { Suspense, useState } from "react";
import { Model } from "./Plane";
import Image from "next/image";
export const WebGiViewer = () => {
  const [onFloor, setOnFloor] = useState(false);
  useCursor(onFloor);

  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <ContactShadows blur={2} />
      <OrbitControls />
      <mesh
        rotation-x={-Math.PI / 20}
        position-y={-0}
        onPointerEnter={() => setOnFloor(true)}
        onPointerLeave={() => setOnFloor(false)}
      >
        <Suspense fallback={null}>

        <Model/>
        </Suspense>
      </mesh>
    
    </>
  );
};