<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const MusicPlayer = defineAsyncComponent(() => import('./components/MusicPlayerBase.vue'))

const Footer = defineAsyncComponent(() => import('./components/FooterBase.vue'))

const CountDown = defineAsyncComponent(() => import('./components/CountdownBase.vue'))

const Header = defineAsyncComponent(() => import('./components/HeaderBase.vue'))
</script>

<template>
  <main class="h-screen max-w-full font-mono relative">
    <!-- Header Start -->
    <Header />
    <!-- Header End -->

    <!-- Kids Profile Start -->
    <div class="w-full h-full bg-pink_1 text-center p-10">
      <p class="md:text-5xl text-3xl leading-relaxed mb-5">The Birthday Kid</p>
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="1000"
        data-aos-duration="1000"
      >
        <img
          src="./assets/images/kid.jpg"
          class="w-56 rounded-t-full mx-auto my-5 leading-relaxed shadow-custom"
          alt="Nada Safaira Rizqin"
        />
        <p class="leading-relaxed text-xl font-bold">Nada Safaira Rizqin</p>
      </div>
    </div>
    <!-- Kids Profile End -->

    <!-- Countdown start -->
    <div id="countdown" class="w-full h-[80%] bg-brown_2 text-center p-10">
      <img src="./assets/images/birthday-cake.png" alt="birthday-cake" class="w-16 mx-auto my-5" />
      <h1 class="md:text-5xl text-3xl leading-relaxed mb-10">Menghitung Hari</h1>
      <CountDown />
    </div>
    <!-- Countdown End -->

    <!-- Location Start -->
    <div id="location" class="w-full bg-pink_1 py-10">
      <h1 class="text-center text-5xl leading-relaxed mb-5">Lokasi</h1>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
        class="md:w-[60%] w-full h-full bg-white rounded-3xl m-auto flex flex-col md:flex-row justify-center gap-x-10 p-8 shadow-custom"
      >
        <figure class="md:w-[30%] mb-5">
          <img src="./assets/images/flower.jpg" class="w-full" alt="flower" />
        </figure>
        <div class="md:w-[70%]">
          <p class="text-2xl mb-5">Ulang Tahun</p>
          <div class="flex gap-x-5 text-left mb-5">
            <figure class="w-9">
              <img src="./assets/images/calendar.png" class="w-full" alt="calender-icon" />
            </figure>
            <div>
              <p class="text-pink-500 text-lg">Sabtu, 25 Mei 2024</p>
              <p>13:00 - 16:00 WIB</p>
            </div>
          </div>
          <div class="flex gap-x-5 text-left mb-5">
            <figure class="w-20">
              <img src="./assets/images/location.png" alt="place-icon" />
            </figure>
            <div class="text-justify">
              <p class="text-pink-500 text-lg">Merci Cafe Kavling DPR</p>
              <p>
                Jl. Kav. DPR III No.23, Nggrekmas, Pagerwojo, Kec. Buduran, Kabupaten Sidoarjo, Jawa
                Timur 61252
              </p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2316978932113!2d112.70830380858177!3d-7.439596273267348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e14b37f53761%3A0x118fd865b5031b4a!2sMerci%20Cafe!5e0!3m2!1sid!2sid!4v1715329195536!5m2!1sid!2sid"
            height="300"
            style="border: 0"
            class="mx-auto mb-10 w-full"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <button
            class="bg-pink_1 hover:bg-pink_2 transition-colors text-lg w-full py-1 rounded-xl mb-5"
          >
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=-7.438897409795245,112.71049858837978&dir_action=navigate"
              >Arahkan ke Lokasi</a
            >
          </button>
        </div>
      </div>
    </div>
    <!-- Location End -->

    <!-- Footer start -->
    <Footer />
    <!-- Footer end -->

    <!-- Aside start -->
    <MusicPlayer />
    <!-- Aside end -->
  </main>
</template>
