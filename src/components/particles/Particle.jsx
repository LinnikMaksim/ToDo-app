import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
const Particle = ({ lightTheme }) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const colorBg = lightTheme ? "#F9F9F9" : "#26272b";
  const colorItem = lightTheme ? "#000000" : "#ffffff";
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          zIndex: -1,
        },
        background: {
          color: {
            value: colorBg,
            opacity: 0.5,
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
              factor: 150,
              speed: 0.5,
              maxSpeed: 4,
              easing: "ease-out-quad",
            },
          },
        },
        particles: {
          color: {
            value: colorItem,
          },
          links: {
            color: colorItem,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            directions: "none",
            enable: true,
            bounce: false,
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 9 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
