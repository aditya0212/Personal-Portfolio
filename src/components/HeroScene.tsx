import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useMemo, Component, type ReactNode, useState, useEffect } from "react";
import * as THREE from "three";

class WebGLErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() { return this.state.hasError ? null : this.props.children; }
}

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return gl instanceof WebGLRenderingContext || gl instanceof WebGL2RenderingContext;
  } catch {
    return false;
  }
}

function Globe() {
  const wireRef = useRef<THREE.LineSegments>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const wireGeo = useMemo(() => {
    const geo = new THREE.SphereGeometry(1.3, 32, 32);
    return new THREE.WireframeGeometry(geo);
  }, []);

  const particles = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.32;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.05;
      wireRef.current.rotation.x = 0.15;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.05;
      pointsRef.current.rotation.x = 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <lineSegments ref={wireRef} geometry={wireGeo}>
        <lineBasicMaterial color="#7c3aed" transparent opacity={0.12} />
      </lineSegments>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#a78bfa" size={0.018} transparent opacity={0.45} sizeAttenuation />
      </points>
    </group>
  );
}

function Rings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ring1.current) {
      ring1.current.rotation.x = Math.PI / 2.5 + Math.sin(t * 0.3) * 0.05;
      ring1.current.rotation.z = t * 0.04;
    }
    if (ring2.current) {
      ring2.current.rotation.x = Math.PI / 3 + Math.cos(t * 0.2) * 0.03;
      ring2.current.rotation.z = -t * 0.03;
    }
    if (ring3.current) {
      ring3.current.rotation.x = Math.PI / 1.8 + Math.sin(t * 0.15) * 0.04;
      ring3.current.rotation.z = t * 0.02;
    }
  });

  return (
    <>
      <mesh ref={ring1}>
        <torusGeometry args={[1.8, 0.005, 16, 100]} />
        <meshBasicMaterial color="#ec4899" transparent opacity={0.2} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[2.1, 0.004, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.12} />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[2.4, 0.003, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.08} />
      </mesh>
    </>
  );
}

function Starfield() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 250;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 5 - 2;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.003;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#c4b5fd" size={0.008} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

function OrbitingDot({ radius, speed, color, size }: { radius: number; speed: number; color: string; size: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.y = Math.sin(t) * radius * 0.4;
      ref.current.position.z = Math.sin(t) * radius * 0.3;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.7} />
    </mesh>
  );
}

export default function HeroScene() {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    if (!isWebGLAvailable()) {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="hero-glow-core" />
      <div className="hero-glow-accent" />
      <WebGLErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: true, failIfMajorPerformanceCaveat: false, powerPreference: "low-power" }}
          style={{ background: "transparent" }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.15} />
            <pointLight position={[4, 4, 4]} intensity={0.4} color="#a78bfa" />
            <pointLight position={[-4, -2, 3]} intensity={0.25} color="#ec4899" />
            <Starfield />
            <Globe />
            <Rings />
            <OrbitingDot radius={1.7} speed={0.35} color="#06b6d4" size={0.035} />
            <OrbitingDot radius={2.0} speed={-0.25} color="#ec4899" size={0.03} />
            <OrbitingDot radius={2.3} speed={0.2} color="#a78bfa" size={0.025} />
          </Suspense>
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
