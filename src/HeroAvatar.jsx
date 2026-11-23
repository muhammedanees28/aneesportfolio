import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Developer() {
 const root=useRef(); const head=useRef();
 useFrame((s,dt)=>{ if(root.current){root.current.rotation.y=THREE.MathUtils.damp(root.current.rotation.y,s.pointer.x*.18,3,dt);root.current.rotation.x=THREE.MathUtils.damp(root.current.rotation.x,-s.pointer.y*.12,3,dt);} if(head.current)head.current.rotation.y=THREE.MathUtils.damp(head.current.rotation.y,s.pointer.x*.1,3,dt);});
 const skin="#b97858", hair="#11131a", jacket="#26384b";
 return <group ref={root} position={[0,-.35,0]}>
  <mesh position={[0,-.72,0]} castShadow><capsuleGeometry args={[.72,.85,8,24]}/><meshStandardMaterial color={jacket} roughness={.4} metalness={.2}/></mesh>
  <mesh position={[0,-.28,.04]} scale={[1.04,.52,.62]}><sphereGeometry args={[.78,40,32]}/><meshStandardMaterial color="#344c62" roughness={.4} metalness={.2}/></mesh>
  <mesh position={[0,-.48,.48]}><torusGeometry args={[.31,.012,8,48,Math.PI]}/><meshStandardMaterial color="#91a7b9" metalness={.5}/></mesh>
  <mesh position={[0,.24,0]}><cylinderGeometry args={[.22,.25,.48,32]}/><meshStandardMaterial color="#925c48"/></mesh>
  <group ref={head} position={[0,.92,0]}>
   {[-1,1].map(s=><mesh key={s} position={[s*.52,-.03,0]} scale={[.15,.23,.13]}><sphereGeometry args={[1,24,24]}/><meshStandardMaterial color={skin}/></mesh>)}
   <mesh castShadow><sphereGeometry args={[.56,48,48]}/><meshStandardMaterial color={skin} roughness={.62}/></mesh>
   <mesh position={[0,.34,-.015]} rotation={[.05,0,-.04]} scale={[1.02,.57,.98]} castShadow><sphereGeometry args={[.57,48,32,0,Math.PI*2,0,Math.PI*.57]}/><meshStandardMaterial color={hair} roughness={.3}/></mesh>
   <mesh position={[-.18,.19,.43]} rotation={[.08,0,-.08]} scale={[.48,.22,.18]}><sphereGeometry args={[1,32,24]}/><meshStandardMaterial color={hair}/></mesh>
   {[-1,1].map(s=><group key={s} position={[s*.2,-.06,.49]}><mesh scale={[.055,.027,.018]}><sphereGeometry args={[1,20,16]}/><meshStandardMaterial color="#17151a"/></mesh><mesh position={[0,.07,0]} scale={[.075,.018,.02]}><sphereGeometry args={[1,20,16]}/><meshStandardMaterial color="#39251f"/></mesh></group>)}
   <mesh position={[0,-.17,.51]}><coneGeometry args={[.045,.18,16]}/><meshStandardMaterial color="#995f4a"/></mesh>
   <mesh position={[0,-.29,.49]} rotation={[0,0,Math.PI]}><torusGeometry args={[.095,.012,8,24,Math.PI]}/><meshStandardMaterial color="#633b34"/></mesh>
  </group>
  <mesh position={[0,-.72,.61]} scale={[.13,.025,.012]}><sphereGeometry args={[1,24,16]}/><meshStandardMaterial color="#55e8ff" emissive="#55e8ff" emissiveIntensity={1.6}/></mesh>
 </group>;
}
function Scene(){return <><ambientLight intensity={1.1}/><directionalLight position={[4,5,5]} intensity={2.3} color="#d8f7ff"/><pointLight position={[-3,1,2]} intensity={24} color="#5b7cff" distance={8}/><pointLight position={[3,-1,-2]} intensity={18} color="#55e8ff" distance={7}/><Float speed={1.35} rotationIntensity={.12} floatIntensity={.28}><Developer/></Float><ContactShadows position={[0,-1.55,0]} opacity={.32} scale={4.5} blur={2.6} far={4}/></>;}
export default function HeroAvatar(){return <div className="hero-canvas" role="img" aria-label="Animated 3D developer avatar"><Canvas dpr={[1,1.6]} camera={{position:[0,.25,5.2],fov:34}} gl={{alpha:true,antialias:true}}><Scene/></Canvas></div>;}
