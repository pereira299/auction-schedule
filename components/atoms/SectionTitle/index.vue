<template>
  <div class="border-l-8 pl-3 py-2 mb-3 border-sun-500">
    <h2 class=" uppercase text-xl text-black">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
