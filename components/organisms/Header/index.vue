<template>
  <header class="w-screen fixed z-50">
    <div
      class="text-white hidden justify-around py-1 bg-minsk-700 lg:flex flex-row w-screen"
    >
      <div></div>
      <div class="flex flex-row divide-x-2 justify-evenly w-auto">
        <a href="tel:08000492000" class="mb-0 mr-2"> 0800 049 2000 </a>
        <a
          href="mailto:atendimento@camargoagronegocios.com.br"
          class="mb-0 pl-2"
        >
          atendimento@camargoagronegocios.com.br
        </a>
      </div>
      <div class="flex flex-row w-1/12 justify-around pl-5">
        <a href="https://www.facebook.com/camargoagronegocios" target="_blank">
          <img src="/images/facebook.svg" alt="Facebook" class="h-6" />
        </a>
        <a
          href="https://www.instagram.com/camargoagronegocios/"
          target="_blank"
        >
          <img src="/images/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/camargoagronegocios/" target="_blank">
          <img src="/images/youtube.svg" alt="Youtube" />
        </a>
      </div>
    </div>

    <div
      class="bg-minsk-500 w-screen py-4 flex flex-row max-lg:justify-between"
    >
      <div class="block lg:hidden p-5" @click="toggleMenu">
        <i  class="fa-solid fa-bars text-5xl text-white"></i>
      </div>
      <div class="w-2/12 lg:w-4/12 flex flex-row">
        <div class="w-5/12">
          <div
            class="w-32 h-32 p-5 pt-3 ml-auto header-icon lg:mx-0 z-20 -m-4 lg:absolute bg-minsk-500 rounded-full"
          >
            <img src="/images/icon.svg" alt="Ícone da marca" class="" />
          </div>
        </div>
        <img
          src="/images/logo.svg"
          alt="Camargo Agronegócios"
          class="hidden lg:block mx-auto"
        />
      </div>
      <nav class="w-8/12 lg:w-6/12 hidden lg:block">
        <ul class="flex flex-row justify-around my-3">
          <li
            v-for="item in navs"
            :key="item.id"
            class="text-white hover:text-sun-500 cursor-pointer"
          >
            <a :href="item.link">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>
      <a class="bg-sun-500 text-minsk-500 px-4 py-2 hidden lg:block" href="/cadastro">
        Cadastre-se
      </a>
      <div class="block lg:hidden"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'StyledHeader',
  data() {
    return {
      showMenu: false,
      navs: [
        {
          id: 1,
          name: 'Home',
          link: '/',
        },
        {
          id: 2,
          name: 'Agenda de Leilões',
          link: '/agenda',
        },
        {
          id: 3,
          name: 'Login',
          link: '/login',
        },
      ],
    }
  },
  emits: ['toggleMenu'],
  methods: {
    toggleMenu() {
      
      this.showMenu = !this.showMenu
      this.$emit('toggleMenu', this.showMenu)
    },
  },
}
</script>

<style></style>
