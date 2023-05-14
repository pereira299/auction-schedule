<template>
  <StyledDialog :open="open" @close="closeDialog">
    <button
      class="px-3 py-1 outline-none opacity-50 hover:opacity-95"
      @click.stop="prev"
    >
      <i class="fas fa-chevron-left text-3xl text-white cursor-pointer"></i>
    </button>
    <transition name="fade">
      <figure class="h-screen p-10" @click.stop="">
        <img
          :src="images[currentIndex].link"
          :alt="images[currentIndex].description ?? 'imagem do leilão'"
          class="w-full h-full object-contain"
        />
        <figcaption class="text-center text-white text-lg">
          {{ images[currentIndex].description ?? 'Descrição da imagem' }}
        </figcaption>
      </figure>
    </transition>
    <button
      class="px-3 py-1 outline-none opacity-50 hover:opacity-95"
      @click.stop="next"
    >
      <i class="fas fa-chevron-right text-3xl text-white cursor-pointer"></i>
    </button>
  </StyledDialog>
</template>

<script>
import StyledDialog from '@/components/molecules/Dialog/index.vue'
export default {
  name: 'ImageDialog',
  components: {
    StyledDialog,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
    open: {
      type: Boolean,
      required: true,
      default: false,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  emits: ['close'],
  data() {
    return {
      currentIndex: 0,
    }
  },
  watch: {
    index: {
      handler() {
        this.currentIndex = this.index
      },
      immediate: true,
    },
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>
