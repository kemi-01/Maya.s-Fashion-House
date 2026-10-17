// import { Canvas, useFrame } from "@react-three/fiber";
// import { Float } from "@react-three/drei";
// import { useRef } from "react";
// import * as THREE from "three";

// function StudioArchitecture() {
//   const group = useRef();

//   useFrame((state) => {
//     if (!group.current) return;

//     group.current.rotation.y =
//       Math.sin(state.clock.elapsedTime * 0.25) * 0.08;

//     group.current.rotation.x =
//       Math.sin(state.clock.elapsedTime * 0.2) * 0.025;
//   });

//   return (
//     <Float
//       speed={1}
//       rotationIntensity={0.15}
//       floatIntensity={0.15}
//     >
//       <group ref={group}>
//         {/* your existing studio geometry goes here */}
//       </group>
//     </Float>
//   );
// }

// export default function FashionStudio3D() {
//   return (
//     <Canvas
//       camera={{
//         position: [5, 3.5, 7],
//         fov: 40,
//       }}
//       gl={{
//         antialias: true,
//         alpha: true,
//       }}
//     >
//       <ambientLight intensity={1.5} />

//       <directionalLight
//         position={[5, 5, 5]}
//         intensity={2}
//       />

//       <directionalLight
//         position={[-5, 2, -3]}
//         intensity={1}
//       />

//       <StudioArchitecture />
//     </Canvas>
//   );
// }