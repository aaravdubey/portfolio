import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { Points as ThreePoints } from "three";

export default function StarsBg() {
  return (
    <Canvas
      className="!absolute h-full appear"
      camera={{ position: [0, 0, 1] }}
    >
      <Stars />
    </Canvas>
  );
}

function Stars() {
  const ref = useRef<ThreePoints>(null);
  const [sphere] = useState<Float32Array>(
    () =>
      random.inSphere(new Float32Array(5000), { radius: 1.5 }) as Float32Array
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
