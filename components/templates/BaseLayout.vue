<template>
  <div>
    <StyledHeader />
    <main class="min-h-screen pt-28" :class="mainClass">
      <slot />
    </main>
    <StyledFooter />
  </div>
</template>

<script>
import StyledHeader from '@/components/organisms/Header'
import StyledFooter from '@/components/organisms/Footer'

export default {
  name: 'BaseLayout',
  components: {
    StyledHeader,
    StyledFooter,
  },
  props: {
    mainClass: {
      type: String,
      required: false,
      default: '',
    },
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
    }
  },
}
</script>