<template>
  <dialog
    v-if="open"

    class="w-screen h-screen z-50 backdrop-blur-lg bg-gray-600/60 fixed top-0 left-0 flex flex-row justify-center items-center"
    @click="close"
  >
    <slot class="h-screen p-10"/>
  </dialog>
</template>

<script>
export default {
  name: 'StyledDialog',
  props: {
    open: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
