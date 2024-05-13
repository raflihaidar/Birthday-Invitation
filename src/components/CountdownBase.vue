<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'

const dueDate = ref(new Date('2024-05-25T13:00:00'))

const currentDate = ref(new Date())

const timeDifference = computed(() => {
  const difference = dueDate.value.getTime() - currentDate.value.getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const millisecondsPerSecond = 1000
  const millisecondsPerMinute = millisecondsPerSecond * 60
  const millisecondsPerHour = millisecondsPerMinute * 60
  const millisecondsPerDay = millisecondsPerHour * 24
  const days = Math.floor(difference / millisecondsPerDay)
  const hours = Math.floor((difference % millisecondsPerDay) / millisecondsPerHour)
  const minutes = Math.floor((difference % millisecondsPerHour) / millisecondsPerMinute)
  const seconds = Math.floor((difference % millisecondsPerMinute) / millisecondsPerSecond)

  return { days, hours, minutes, seconds }
})

onMounted(() => {
  const updateCurrentDate = () => {
    currentDate.value = new Date()
  }

  const updateInterval = setInterval(updateCurrentDate, 1000)

  onUnmounted(() => {
    clearInterval(updateInterval)
  })
})
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-y-3">
    <div
      class="flex items-center gap-x-2"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <p class="md:text-6xl text-4xl">{{ timeDifference.days }}</p>
      <p class="text-2xl">Hari</p>
    </div>
    <div
      class="flex items-center gap-x-2"
      data-aos="fade-left"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <p class="md:text-6xl text-4xl">{{ timeDifference.hours }}</p>
      <p class="text-2xl">Jam</p>
    </div>
    <div
      class="flex items-center gap-x-2"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <p class="md:text-6xl text-4xl">{{ timeDifference.minutes }}</p>
      <p class="text-2xl">Menit</p>
    </div>
    <div
      class="flex items-center gap-x-2"
      data-aos="fade-left"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <p class="md:text-6xl text-4xl">{{ timeDifference.seconds }}</p>
      <p class="text-2xl">Detik</p>
    </div>
  </div>
</template>
