import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useScroll, ScrollControls, Html } from "@react-three/drei";

const CameraController: React.FC = () => {
  const { camera } = useThree();
  const scroll = useScroll();

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(0, 50, scroll.offset);
  });

  return null;
};

const Section: React.FC<{ position: [number, number, number]; title: string; content?: string; color: string; children?: React.ReactNode }> = ({ position, title, content, color, children }) => {
  return (
    <group position={position}>
      <Html transform>
        <div className={`p-6 rounded-lg shadow-lg w-80 text-center border-4 ${color} text-white`}>
          <h2 className="text-3xl font-bold">{title}</h2>
          {content && <p className="mt-2">{content}</p>}
          {children}
        </div>
      </Html>
    </group>
  );
};

const Character: React.FC<{ position: [number, number, number]; emoji: string }> = ({ position, emoji }) => {
  return (
    <group position={position}>
      <Html transform>
        <div className="text-6xl animate-bounce">{emoji}</div>
      </Html>
    </group>
  );
};

const Scene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      {/* Sections with vibrant colors */}
      <Section position={[0, 0, 0]} title="Welcome" content="Scroll to explore my portfolio." color="bg-red-500 border-red-700" />
      <Section position={[10, 0, 0]} title="About Me" content="A passionate developer creating amazing experiences." color="bg-blue-500 border-blue-700">
        <img src="/path/to/your-profile-picture.jpg" alt="Profile" className="w-32 h-32 mx-auto rounded-full mt-4" />
        <div className="flex justify-center gap-4 mt-4">
          {/* React Native Logo */}
          <svg className="w-10 h-10" viewBox="0 0 841.9 595.3" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#61dafb" strokeWidth="30">
              <ellipse cx="420.9" cy="296.5" rx="355" ry="130"/>
              <ellipse cx="420.9" cy="296.5" rx="355" ry="130" transform="rotate(60 420.9 296.5)"/>
              <ellipse cx="420.9" cy="296.5" rx="355" ry="130" transform="rotate(120 420.9 296.5)"/>
            </g>
            <circle cx="420.9" cy="296.5" r="45" fill="#61dafb"/>
          </svg>
          {/* React Logo */}
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#61dafb">
            <circle cx="12" cy="12" r="10" />
          </svg>
          {/* Laravel Logo */}
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#FF2D20">
            <rect width="24" height="24" rx="4" />
          </svg>
          {/* Tailwind CSS Logo */}
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#38B2AC">
            <path d="M12 2C7.03 2 3.44 4.92 2 9c1.44-2.08 3.64-3.5 6.32-3.5 3.08 0 4.92 1.72 5.68 5.16-.8-1.84-2.08-2.88-3.84-3.08-2.48-.28-4.84 1.28-5.76 3.6C3.44 18.08 7.03 22 12 22c4.97 0 8.56-3.92 10-9-1.44 2.08-3.64 3.5-6.32 3.5-3.08 0-4.92-1.72-5.68-5.16.8 1.84 2.08 2.88 3.84 3.08 2.48.28 4.84-1.28 5.76-3.6C20.56 5.92 16.97 2 12 2z" />
          </svg>
        </div>
      </Section>
      <Section position={[20, 0, 0]} title="Projects" content="Showcasing my best work." color="bg-green-500 border-green-700" />
      <Section position={[30, 0, 0]} title="Contact" content="Get in touch!" color="bg-purple-500 border-purple-700" />

      {/* Characters for uniqueness */}
      <Character position={[5, -2, 0]} emoji="🚀" />
      <Character position={[15, 2, 0]} emoji="🎨" />
      <Character position={[25, -2, 0]} emoji="💻" />
      <Character position={[35, 2, 0]} emoji="📬" />
    </>
  );
};

const Main: React.FC = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-gradient-to-r from-pink-500 to-yellow-500">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ScrollControls pages={4} horizontal>
          <CameraController />
          <Scene />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Main;
