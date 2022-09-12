<template>
    <div v-if="isOpen" >
      <div
          class="
          fixed h-full w-full
          top-0 z-10 left-0 m-0
          flex justify-center items-center
          bg-black bg-opacity-80
          transition-all"
          @click="emit('close')">
        <slot/>
      </div>
    </div>
</template>

<script setup lang="ts">
import {defineEmits} from "vue";

defineProps<{
  isOpen: {
    type: Boolean,
    default: false
  }
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>