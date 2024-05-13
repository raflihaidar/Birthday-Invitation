<template>
  <header
    id="header"
    class="w-full h-full flex justify-center items-center bg-hero bg-top relative"
  >
    <section class="w-full text-center text-white z-10">
      <div class="mb-5">
        <p class="text-2xl">Undangan Ulang Tahun</p>
      </div>
      <div>
        <p class="md:text-5xl text-3xl">Nada Safaira Rizqin</p>
        <p class="text-2xl leading-relaxed">Sabtu, 25 Mei 2024</p>
        <p class="text-2xl leading-relaxed">13:00 - 16:00</p>
      </div>
    </section>

    <div class="w-full h-full absolute bg-black opacity-50 top-0"></div>

    <!-- <vue-particles
      id="tsparticles"
      @particles-loaded="particlesLoaded"
      :options="{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            }
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#FFEFEF'
          },
          links: {
            color: '#FFEFEF',
            distance: 150,
            enable: true,
            opacity: 0,
            width: 1
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: 'bounce',
            random: false,
            speed: 6,
            straight: false
          },
          number: {
            density: {
              enable: true
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 5 }
          }
        },
        detectRetina: true
      }"
    /> -->
  </header>
</template>
