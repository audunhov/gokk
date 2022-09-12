<template>
  <div class="flex justify-end">
    <div class="block sm:hidden">
      <button @click="open = true" class="text-4xl">=</button>
      <Modal :isOpen="open" @close="open = false">
        <ul class="space-y-4 text-center w-full">
          <li><a href="/gokk/" class="w-1/2 block m-auto">Hjem</a></li>
          <li><a href="/gokk/about/" class="w-1/2 block m-auto">Om oss</a></li>
          <li><a href="/gokk/join/" class="w-1/2 block m-auto">Bli medlem</a></li>
          <li><a href="/gokk/contact/" class="w-1/2 block m-auto">Kontakt</a></li>
        </ul>
      </Modal>
    </div>

    <div class="hidden sm:block">
      <ul class="space-x-2 text-center flex justify-baseline">
        <li><a href="/gokk/">Hjem</a></li>
        <li><a href="/gokk/about/">Om oss</a></li>
        <li><a href="/gokk/join/">Bli medlem</a></li>
        <li><a href="/gokk/contact/">Kontakt</a></li>
      </ul>
    </div>
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue";
import Modal from "./Modal.vue"
const open = ref(false)
</script>