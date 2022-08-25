<template>
  <form @submit="handleSubmit">
    <fieldset>
      <legend>&nbsp;Personalia&nbsp;</legend>
      <label for="name">Fullt navn:</label>
      <input type="text" id="name" name="name" /><br /><br />
      <label for="email">Epost:</label>
      <input type="email" id="email" name="email" /><br /><br />
      <label for="birtday">Bursdag:</label>
      <input type="date" id="birtday" name="birtday" /><br /><br />

      <input type="submit" value="Meld inn" />
    </fieldset>
  </form>
</template>

<script setup lang="ts">

const handleSubmit = (event: Event) => {
    event.preventDefault()
    console.log("Hei")
}

</script>

<style>
    
    fieldset {
        @apply border p-5 border-current;
    }
    
    input {
        @apply border-b border-current w-full bg-gray-50;
    }

    input:hover {
        @apply bg-gray-100;
        transition: 200ms;
    }

    input[type=submit] {
        @apply border p-1 border-current cursor-pointer;
    }

</style>