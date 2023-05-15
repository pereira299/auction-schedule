<template>
  <StyledDialog :open="open" @close="closeDialog">
    <article
      :class="{
        'w-4/12': size === 'sm',
        'w-6/12': size === 'md',
        'w-8/12': size === 'lg',
        'w-10/12': size === 'xl',
      }"
      class="bg-white rounded p-5 h-fit min-h-1/2"
    >
      <header class="flex flex-row justify-between">
        <h4 class="text-2xl font-bold text-black">{{ title }}</h4>
        <button @click="closeDialog">
          <i class="fas fa-times text-black text-xl"></i>
        </button>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer v-if="hasBtn">
        <StyledButton :text="btnText" :rounded="true" class="ml-auto" />
      </footer>
    </article>
  </StyledDialog>
</template>

<script>
import StyledDialog from '~/components/molecules/Dialog/index.vue'
export default {
  name: 'ModalDialog',
  components: {
    StyledDialog,
  },
  props:{
    title: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
      required: true,
    },
    open: {
      type: Boolean,
      required: true,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: 'md',
      validator: (value) => {
        return ['sm', 'md', 'lg', 'xl'].includes(value)
      },
    },
    hasBtn: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  emits: ['close'],
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style></style>
