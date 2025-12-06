import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleField = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 2 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 20;
        ref.current.rotation.y -= delta / 25;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00f0ff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
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
            <meshBasicMaterial color="#7000ff" wireframe transparent opacity={0.08} />
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
