'use client';

import { FC, useContext } from 'react';

import { useState, useRef } from 'react';

// threejs types
import type { Points, BufferGeometry, Material, Euler } from 'three';

// Threejs implementation for React App
import { Canvas, PointsProps, useFrame } from '@react-three/fiber';

// Threejs Helpful Geometry and Controls implementation for React App
import {
  Points as DriePoints,
  PointMaterial as DriePointMaterial,
  OrbitControls
} from '@react-three/drei';

// This is a collection of useful math helpers, random generators, bits and bobs.
import { inSphere } from 'maath/random';
import Overlay from 'src/components/Overlay';
import { ViewContext } from 'src/contexts/views';

// Setting up camera and frame for threejs rendering
const Cosmic = (): JSX.Element => {
  const { inView } = useContext(ViewContext);
  return (
    <>
      <div
        title='My Three.js Animation'
        className={`fixed inset-0 flex w-screen h-screen ${
          inView ? '-z-20' : 'z-20'
        }`}>
        <Canvas frameloop='always' camera={{ position: [0, 0, 1] }}>
          <Stars />
          <OrbitControls enableZoom={false} />
        </Canvas>
        <Overlay />
      </div>
    </>
  );
};

// Scene for Stars
function Stars(props: PointsProps) {
  const starsRef = useRef<Points<BufferGeometry, Material | Material[]> | null>(
    null
  );
  useFrame((state, delta) => {
    const rotation: Euler = starsRef.current?.rotation as Euler;

    rotation.x -= delta / 10;
    rotation.y -= delta / 15;
  });
  const [spherePositions] = useState(() => {
    return inSphere(new Float32Array(5000), {
      radius: 2
    }).subarray() as Float32Array;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <DriePoints ref={starsRef} positions={spherePositions} {...props}>
        <DriePointMaterial
          transparent
          color='#ffa0e0'
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </DriePoints>
    </group>
  );
}

export default Cosmic;
