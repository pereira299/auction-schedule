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

    <div class="bg-minsk-500 w-screen py-4 flex flex-row max-lg:justify-center">
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
          <li v-for="item in navs" :key="item.id" class="text-white">
            <a :href="item.link">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>
      <StyledButton text="Meu cadastro" class="hidden lg:block" />
    </div>
  </header>
</template>

<script>
import StyledButton from '@/components/atoms/Button'

export default {
  name: 'StyledHeader',
  components: {
    StyledButton,
  },
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
          link: '/agenda',
        },
        {
          id: 3,
          name: 'Pregão online',
          link: '/pregao',
        },
        {
          id: 4,
          name: 'Resultados',
          link: '/resultados',
        },
      ],
    }
  },
}
</script>

<style></style>
