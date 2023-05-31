import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useViewport } from "../hooks";

const Cube = () => {
  const { viewport } = useViewport();
  const width = viewport?.width;
  const isMobile = width <= 768;
  const cubeFontSize = isMobile ? 2 : 3.7;
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#3d1c56"]} />
          <Text ref={textRef} fontSize={cubeFontSize} color="white">
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
