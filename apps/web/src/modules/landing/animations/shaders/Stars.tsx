// Useful links for micro interactions
// https://www.youtube.com/watch?v=lSzfYAQYKU0 (Micro Interactions Anime.js maybe using gsap or framer motion)
// https://www.youtube.com/watch?v=MEO6yQLAgKw (Custom Cursor)

import { useState, useRef } from 'react';

// threejs types
import type {
  Points,
  BufferGeometry,
  Material,
  Euler,
  Vector,
  Vector3
} from 'three';

// Threejs implementation for React App
import { useFrame } from '@react-three/fiber';

// Threejs Helpful Geometry and Controls implementation for React App
import {
  Points as DriePoints,
  PointMaterial as DriePointMaterial
} from '@react-three/drei';

// This is a collection of useful math helpers, random generators, bits and bobs.
import { inSphere } from 'maath/random';

// Scene for Stars
export default function Stars() {
  const starsRef = useRef<Points<BufferGeometry, Material | Material[]> | null>(
    null
  );
  useFrame((state, delta) => {
    const rotation: Euler = starsRef.current?.rotation as Euler;

    // rotation.x -= delta / 10;
    // rotation.y -= delta / 15;
    // rotation.z -= delta * 0.1;
    const particle: Array<number> = starsRef.current?.geometry.getAttribute(
      'position'
    ).array as Array<number>;
    console.log(particle);
    for (let i = 0; i < 5000 * 3; i++) {
      particle[i] += delta * 0.1;
      if (particle[i] < -100 * Math.random()) {
        particle[i] = 0;
      }
    }
    let needUpdate: boolean = starsRef.current?.geometry.getAttribute(
      'position'
    ).needsUpdate as boolean;
    needUpdate = true;
  });
  const [spherePositions] = useState(() => {
    return inSphere(new Float32Array(5000), {
      radius: 2
    }).subarray() as Float32Array;
  });
  console.log();
  return (
    <group rotation={[0, 0, 0]}>
      <DriePoints ref={starsRef} positions={spherePositions}>
        <DriePointMaterial
          transparent
          color='#ffa0e0'
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </DriePoints>
    </group>
  );
}
