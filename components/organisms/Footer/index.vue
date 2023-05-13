<template>
  <footer
    class="bg-minsk-900 w-screen pt-3 pb-7 text-poppins flex flex-row justify-evenly"
  >
    <div class="w-3/12">
      <img src="/images/icon.svg" alt="Ícone da marca" class="mx-auto w-2/12" />
      <img
        src="/images/logo.svg"
        alt="Camargo Agronegócios"
        class="mx-auto my-3 w-6/12"
      />
      <p class="text-white text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut
        quam autem voluptate saepe, fugiat sed harum molestias quisquam veniam
        reprehenderit optio voluptas exercitationem.
      </p>
    </div>
    <article class="mt-10">
      <h3 class="text-white text-lg font-normal mb-5">Mapa do site</h3>
      <ul class="text-white text-md">
        <li v-for="item in navs" :key="item.id" class="text-white">
          <a :href="item.link">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </article>
    <article class="mt-10">
      <h3 class="text-white text-lg font-normal mb-5">Links úteis</h3>
      <ul class="text-white text-md">
        <li>FAQ</li>
        <li>Webmail</li>
        <li>Painel de Acesso</li>
      </ul>
    </article>
    <article class="mt-10">
      <h3 class="text-white text-lg font-normal mb-5">Siga-nos</h3>
      <ul class="text-white text-md flex flex-row">
        <li>
          <a href="https://www.youtube.com/channel" target="_blank">
            <img src="/images/youtube.svg" alt="Youtube" class="w-12 my-auto" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/camargoagronegocios/"
            target="_blank"
          >
            <img
              src="/images/instagram.svg"
              alt="Instagram"
              class="w-8 my-auto mt-2"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/camargoagronegocios/"
            target="_blank"
          >
            <img src="/images/twitter.svg" alt="Twitter" class="w-10 my-auto" />
          </a>
        </li>
      </ul>
    </article>
  </footer>
</template>

<script>
export default {
  name: 'StyledFooter',
  data() {
        return {
            navs: [
                {
                    id: 1,
                    name: "Home",
                    link: "/"
                },
                {
                    id: 2,
                    name: "Agenda de Leilões",
                    link: "/agenda"
                },
                {
                    id: 3,
                    name: "Pregão online",
                    link: "/pregao"
                },
                {
                    id: 4,
                    name: "Resultados",
                    link: "/resultados"
                },
                {
                    id: 5,
                    name: "Contato",
                    link: "/contato"
                }
            ]
        }
    }
}
</script>

<style></style>
