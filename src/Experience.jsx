import {
  ContactShadows,
  Float,
  PresentationControls,
  Environment,
  Html,
  OrbitControls,
  Text,
  Image,
} from "@react-three/drei";
import MacbookNew from "./MacbookNew";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Experience() {
  return (
    <>
      <ambientLight color={"0x030A16"} />
      <color args={["#343357"]} attach="background" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          {/* screen light */}
          <rectAreaLight
            width={2.5}
            height={1.56}
            intensity={65}
            color={"#000000"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          {/* laptop */}
          <MacbookNew scale={1.1} />
          <Text
            font="./bangers-v20-latin-regular.woff"
            position={[2, 0.6, 0.75]}
            rotation-y={-1.25}
            fontSize={0.8}
            maxWidth={2}
          >
            Moonsu Rhino Jo
          </Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} />
    </>
  );
}
