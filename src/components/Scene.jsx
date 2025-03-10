
import { PerspectiveCamera, Environment } from "@react-three/drei";
import { SphereEnv } from "./SphereEnv";
import { Airplane } from "./Airplane";

function Scene({roll =0, pitch=0, yaw=0}) {
  return (
    <>
      <SphereEnv />
      <Environment background={false} files={"assets/textures/envmap.hdr"} />
      <PerspectiveCamera makeDefault position={[0, 10, 10]} />
      <Airplane roll={roll} pitch={pitch} yaw={yaw}/>
      <directionalLight>
        castShadow
        color={"#f3d29a"}
        intensity={2}
        position={[10, 5, 4]}
        shadow-bias={-0.0005}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.01}
        shadow-camera-far={20}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-camera-left={-6.2}
        shadow-camera-right={6.4}

      </directionalLight>
    </>
  );
}

export default Scene;