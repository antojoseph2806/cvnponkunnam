"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type KalariThreeSceneProps = {
  className?: string;
  mode?: "hero" | "section";
};

const KalariThreeScene = ({ className = "", mode = "hero" }: KalariThreeSceneProps) => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    const group = new THREE.Group();
    const weaponRack = new THREE.Group();
    const scroll = { value: 0 };
    const pointer = { x: 0, y: 0 };

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xdff7bd, 0.86));

    const keyLight = new THREE.DirectionalLight(0xfff7d6, 2.2);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x9be070, 32, 18);
    rimLight.position.set(-4, 1.2, 3);
    scene.add(rimLight);

    const wood = new THREE.MeshStandardMaterial({ color: 0x81562f, roughness: 0.58, metalness: 0.08 });
    const darkWood = new THREE.MeshStandardMaterial({ color: 0x3f2414, roughness: 0.7 });
    const metal = new THREE.MeshStandardMaterial({ color: 0xd8e2cf, roughness: 0.2, metalness: 0.82 });
    const brass = new THREE.MeshStandardMaterial({ color: 0xd5ac55, roughness: 0.34, metalness: 0.58 });
    const cloth = new THREE.MeshStandardMaterial({ color: 0xc43828, roughness: 0.82, metalness: 0.04 });
    const glow = new THREE.MeshStandardMaterial({
      color: 0xd8f2a7,
      emissive: 0x91d35f,
      emissiveIntensity: 0.65,
      roughness: 0.34,
      metalness: 0.12,
    });

    const floor = new THREE.Mesh(
      new THREE.CylinderGeometry(3.6, 4.15, 0.18, 96),
      new THREE.MeshStandardMaterial({
        color: 0x5b351e,
        roughness: 0.9,
        metalness: 0.02,
        opacity: mode === "hero" ? 0.08 : 0.62,
        transparent: true,
      }),
    );
    floor.position.y = -1.54;
    floor.scale.z = 0.72;
    group.add(floor);

    const floorRing = new THREE.Mesh(
      new THREE.TorusGeometry(3.2, 0.018, 8, 128),
      new THREE.MeshStandardMaterial({ color: 0xd8f2a7, emissive: 0x5da040, emissiveIntensity: 0.45 }),
    );
    floorRing.rotation.x = Math.PI / 2;
    floorRing.position.y = -1.37;
    floorRing.scale.z = 0.68;
    group.add(floorRing);

    const makeStaff = (height: number, radius = 0.025, material = wood) => {
      const staff = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, 18), material);
      staff.rotation.z = THREE.MathUtils.degToRad(4);
      return staff;
    };

    for (let i = 0; i < 9; i += 1) {
      const staff = makeStaff(2.55 + (i % 3) * 0.18, i % 4 === 0 ? 0.034 : 0.025, i % 4 === 0 ? darkWood : wood);
      staff.position.set(-1.15 + i * 0.25, -0.1, -0.52 + (i % 2) * 0.06);
      staff.rotation.z = THREE.MathUtils.degToRad(-9 + i * 2.5);
      weaponRack.add(staff);

      if (i % 3 === 0) {
        const spear = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.28, 24), metal);
        spear.position.set(staff.position.x + 0.08, 1.35, staff.position.z);
        spear.rotation.z = staff.rotation.z;
        weaponRack.add(spear);
      }
    }

    const sword = new THREE.Mesh(new THREE.BoxGeometry(0.06, 2.2, 0.018), metal);
    sword.position.set(1.65, -0.12, -0.26);
    sword.rotation.z = THREE.MathUtils.degToRad(-38);
    weaponRack.add(sword);

    const swordHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.44, 18), darkWood);
    swordHandle.position.set(0.98, -1.0, -0.26);
    swordHandle.rotation.z = THREE.MathUtils.degToRad(-38);
    weaponRack.add(swordHandle);

    const shield = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.08, 64), darkWood);
    shield.position.set(-1.98, -0.82, -0.24);
    shield.rotation.x = Math.PI / 2.55;
    shield.rotation.z = THREE.MathUtils.degToRad(-12);
    weaponRack.add(shield);

    const shieldBoss = new THREE.Mesh(new THREE.SphereGeometry(0.14, 32, 16), brass);
    shieldBoss.position.set(-1.98, -0.86, -0.02);
    weaponRack.add(shieldBoss);

    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.42, 32), glow);
    flame.position.set(-2.48, -0.62, 0.24);
    flame.scale.y = 1.25;
    weaponRack.add(flame);

    const lampStem = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.86, 18), brass);
    lampStem.position.set(-2.48, -1.08, 0.24);
    weaponRack.add(lampStem);

    const belt = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.018, 8, 96), cloth);
    belt.position.set(0.48, -0.9, 0.26);
    belt.rotation.x = Math.PI / 2.4;
    belt.rotation.z = THREE.MathUtils.degToRad(18);
    weaponRack.add(belt);

    const curvePoints: THREE.Vector3[] = [];
    for (let i = 0; i < 90; i += 1) {
      const t = i / 89;
      const angle = t * Math.PI * 2.8;
      curvePoints.push(new THREE.Vector3(Math.cos(angle) * (1.05 + t * 1.2), Math.sin(t * Math.PI * 2) * 0.34, Math.sin(angle) * 0.55 + 0.2));
    }
    const urumiCurve = new THREE.CatmullRomCurve3(curvePoints);
    const urumi = new THREE.Mesh(new THREE.TubeGeometry(urumiCurve, 160, 0.012, 8, false), metal);
    urumi.position.set(-0.1, 0.18, 0.35);
    weaponRack.add(urumi);

    group.add(weaponRack);
    scene.add(group);

    const resize = () => {
      const rect = host.getBoundingClientRect();
      renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
      camera.aspect = Math.max(1, rect.width) / Math.max(1, rect.height);
      camera.updateProjectionMatrix();
    };

    const updateScroll = () => {
      const rect = host.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      scroll.value = THREE.MathUtils.clamp((vh - rect.top) / (vh + rect.height), 0, 1);
    };

    const updatePointer = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 2;
    };

    let raf = 0;
    const render = (time: number) => {
      const t = time * 0.001;
      const progress = prefersReducedMotion ? 0.48 : scroll.value;

      camera.position.set(mode === "hero" ? 0.15 : 0, 0.25 + progress * 0.35, mode === "hero" ? 7.6 - progress * 1.1 : 6.4 - progress * 1.8);
      camera.lookAt(0, -0.35, 0);

      const targetScale = mode === "hero" ? 0.68 : 1;
      group.scale.setScalar(targetScale);
      group.rotation.y = -0.82 + progress * 2.35 + pointer.x * 0.12;
      group.rotation.x = -0.1 + Math.sin(t * 0.5) * 0.035 - pointer.y * 0.06;
      group.position.y = (mode === "hero" ? -0.2 : -0.08) + Math.sin(t * 0.9) * 0.035;
      group.position.x = mode === "hero" ? 1.65 : 0;
      group.position.z = mode === "hero" ? -0.25 : 0;

      weaponRack.children.forEach((child, index) => {
        child.position.y += Math.sin(t * 1.4 + index) * 0.0007;
      });

      urumi.rotation.y = progress * Math.PI * 1.8 + Math.sin(t) * 0.25;
      urumi.rotation.z = Math.sin(t * 0.8) * 0.18;
      floorRing.rotation.z = progress * Math.PI * 2 + t * 0.18;
      flame.scale.y = 1.1 + Math.sin(t * 6) * 0.16;
      flame.rotation.y = t * 1.8;

      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(render);
    };

    resize();
    updateScroll();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });
    raf = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
      renderer.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const material = object.material;
          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose());
          } else {
            material.dispose();
          }
        }
      });
      host.removeChild(renderer.domElement);
    };
  }, [mode]);

  return <div ref={hostRef} className={className} aria-hidden="true" />;
};

export default KalariThreeScene;
