<template>
  <div class="healthbar bg-gray-300 h-8 text-left">
    <div class="text-center transition-width duration-500 ease-in-out bg-green-500 text-white mx-auto h-full inline-block" :style="{ width: health+'%' }">
      <span class="align-middle">{{ health }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    health: Number,
  },
}
</script>
