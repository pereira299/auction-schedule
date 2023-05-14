<template>
  <section class="w-screen bg-sun-300">
    <div class="absolute z-10 flex flex-row w-screen justify-between px-20 mt-40">
      <div
        class="rounded-full px-3 py-1 bg-gray-400 opacity-50 hover:opacity-95 shadow"
        @click.prevent="prev"
      >
        <i class="fas fa-chevron-left text-3xl text-white cursor-pointer"></i>
      </div>
      <div
        class="rounded-full px-3 py-1 bg-gray-400 opacity-50 hover:opacity-95 shadow"
        @click.prevent="next"
      >
        <i class="fas fa-chevron-right text-3xl text-white cursor-pointer"></i>
      </div>
    </div>
    <transition name="fade" mode="in-out">
      <img
        :src="images[index]"
        alt="imagem do carousel"
        class="w-screen h-96"
      />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'StyledCarroussel',
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      index: 0,
      timer: null,
    }
  },

  mounted() {
    this.timer = setInterval(() => {
      this.next()
    }, 5000)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    next() {
      this.index = (this.index + 1) % this.images.length
    },
    prev() {
      this.index = (this.index - 1 + this.images.length) % this.images.length
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
