<template>
  <div>
    <StyledHeader @toggleMenu="changeDrawer" />
    <main class="min-h-screen pt-28" :class="mainClass">
      <slot />
    </main>
    <StyledFooter />
    <StyledDrawer :open="drawer" @close="changeDrawer" />
  </div>
</template>

<script>
import StyledHeader from '@/components/organisms/Header'
import StyledFooter from '@/components/organisms/Footer'
import StyledDrawer from '@/components/organisms/Drawer'

export default {
  name: 'BaseLayout',
  components: {
    StyledHeader,
    StyledFooter,
    StyledDrawer,
  },
  props: {
    mainClass: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      drawer: false,
    }
  },
  head() {
    return {
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js',
          crossorigin: 'anonymous',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
          crossorigin: 'anonymous',
        },
      ],
      title: 'Camargo Agronegócios',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  methods: {
    changeDrawer() {
      this.drawer = !this.drawer
    },
  },
}
</script>
