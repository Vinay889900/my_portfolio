import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars, Edges } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleField = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(25000), { radius: 2.8 })); // Ultra density

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 7; // Warp speed
        ref.current.rotation.y -= delta / 10;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00f0ff"
                    size={0.0035}  // Larger, punchier stars
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.9}   // Maximum visibility
                />
            </Points>
        </group>
    );
};

const ConnectingLines = () => {
    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation.x += delta / 30;
        ref.current.rotation.y += delta / 35;
    });

    return (
        <mesh ref={ref} scale={2.5}>
            <icosahedronGeometry args={[1, 1]} />
            <meshBasicMaterial transparent opacity={0} />
            <Edges
                scale={1}
                threshold={15}
                color="#b026ff" // Reverted to Neon Purple
                lineWidth={1.5} // Kept approved thickness
                transparent
                opacity={0.4}   // Kept approved opacity
            />
        </mesh>
    );
};

const Background3D = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: '#050505' }}>
            <Canvas camera={{ position: [0, 0, 2.5] }}>
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
                <ParticleField />
                <ConnectingLines />
                <ambientLight intensity={0.5} />
            </Canvas>
        </div>
    );
};

export default Background3D;
