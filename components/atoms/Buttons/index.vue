<template>
  <button 
    class="bg-sun-500 text-minsk-500 px-4 py-2"
    :class="{
      'rounded-md': rounded,
    }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
    name: "StyledButton",
    props: {
        text: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style></style>
