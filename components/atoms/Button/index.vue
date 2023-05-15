<template>
  <button
    v-if="!link || link === '#' || link === ''"
    class="bg-sun-500 disabled:bg-gray-300 disabled:text-gray-400 text-minsk-500 px-4 py-2"
    :disabled="disabled"
    :class="btnClass + (rounded ? ' rounded-md' : '')"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
  <a
    v-else
    class="bg-sun-500 link text-minsk-500 px-4 py-2"
    :class="btnClass + (rounded ? ' rounded-md' : '')"
    :href="link"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'StyledButton',
  props: {
    text: {
      type: String,
      required: false,
      default: 'Button',
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false,
    },
    btnClass: {
      type: String,
      required: false,
      default: '',
    },
    link: {
      type: String,
      required: false,
      default: '#',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style scoped>
.link {
  display: flex;
  justify-content: center;
  vertical-align: middle;
}
</style>
