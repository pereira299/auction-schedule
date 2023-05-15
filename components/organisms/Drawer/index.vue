<template>
  <StyledDialog :open="open" @close="closeDialog" className="px-0">
    <div class="w-screen h-screen bg-minsk-500 p-5">
      <i class="fa-solid fa-xmark text-5xl text-white"></i>
      <nav>
        <ul>
          <li
            v-for="(item, i) in navs"
            :key="i"
            class="text-white text-center hover:text-sun-500 py-5 text-3xl"
          >
            <a :href="item.link">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </StyledDialog>
</template>

<script>
import StyledDialog from '@/components/molecules/Dialog/index.vue'

export default {
  name: 'StyledDrawer',
  components: {
    StyledDialog,
  },
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['close'],
  data() {
    return {
      navs: [
        {
          id: 1,
          name: 'Home',
          link: '/',
        },
        {
          id: 2,
          name: 'Agenda de Leilões',
          link: '/leiloes/',
        },
        {
          id: 3,
          name: 'Login',
          link: '/login',
        },
        {
          id: 4,
          name: 'Cadastro',
          link: '/cadastro',
        },
      ],
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
  },
}
</script>

<style></style>
