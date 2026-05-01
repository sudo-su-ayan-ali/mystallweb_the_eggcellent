import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface DishModelProps {
  color?: string;
  type?: 'egg' | 'plate' | 'box';
  scale?: number;
}

const DishModel: React.FC<DishModelProps> = ({ color = "#FFB800", type = 'egg', scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();

  useFrame(() => {
    if (!meshRef.current) return;

    // Smooth cursor-reactive rotation
    const targetRotationX = (mouse.y * viewport.height) / 10;
    const targetRotationY = (mouse.x * viewport.width) / 10;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.05);

    // Subtle parallax position shift
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, (mouse.x * viewport.width) / 12, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, (mouse.y * viewport.height) / 12, 0.05);
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={scale} castShadow receiveShadow>
        {type === 'egg' && (
          <sphereGeometry args={[1, 64, 64]} />
        )}
        {type === 'plate' && (
          <group>
            {/* The Plate */}
            <mesh position={[0, -0.2, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[1.5, 1.3, 0.2, 64]} />
              <meshPhysicalMaterial 
                color="#0C1F1A" 
                roughness={0.1} 
                metalness={0.8} 
                clearcoat={1} 
                clearcoatRoughness={0.1}
              />
            </mesh>
            {/* The Dish Placeholder (Spheres representing food) */}
            <mesh position={[0, 0.1, 0]} castShadow>
              <sphereGeometry args={[0.6, 32, 32]} />
              <meshPhysicalMaterial color={color} roughness={0.2} metalness={0.5} emissive={color} emissiveIntensity={0.2} />
            </mesh>
          </group>
        )}
        {type === 'box' && (
          <boxGeometry args={[1.5, 1.5, 1.5]} />
        )}
        
        {type !== 'plate' && (
          <meshPhysicalMaterial
            color={color}
            roughness={0.1}
            metalness={0.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={type === 'egg' ? 0.2 : 0} // Slight translucency for egg
            thickness={1}
            ior={1.5}
          />
        )}
      </mesh>
    </Float>
  );
};

export default DishModel;
