<script setup lang="ts">
import { ref, onMounted } from 'vue'
import song from '../assets/bg-song.mp3'

const isPlay = ref(true)
const audio = ref(new Audio(song))

audio.value.loop = true

onMounted(() => {
  audio.value.play().catch((error) => {
    console.error('Playback failed:', error)
    isPlay.value = false
  })
})

const handleClick = () => {
  isPlay.value = !isPlay.value
  if (isPlay.value) {
    audio.value.play().catch((error) => console.error('Playback failed:', error))
  } else {
    audio.value.pause()
  }
}
</script>

<template>
  <aside
    @click="handleClick"
    class="w-16 h-16 bg-pink_2 font-extrabold rounded-full fixed z-20 right-5 bottom-28 cursor-pointer"
  >
    <svg
      v-if="isPlay"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-10 h-10 mx-auto my-3"
    >
      <path
        fill-rule="evenodd"
        d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
        clip-rule="evenodd"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-10 h-10 mx-auto my-3"
    >
      <path
        fill-rule="evenodd"
        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
        clip-rule="evenodd"
      />
    </svg>
  </aside>
</template>
