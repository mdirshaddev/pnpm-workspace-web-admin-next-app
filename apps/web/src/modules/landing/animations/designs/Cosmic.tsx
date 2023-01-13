import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Stars from '../shaders/Stars';

export default function ComicScene(): JSX.Element {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
      <OrbitControls />
    </Canvas>
  );
}
