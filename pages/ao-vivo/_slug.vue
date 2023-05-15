<template>
  <BaseLayout class="bg-gray-200">
    <figure class="w-screen">
      <img
        src="/images/banner-2.png"
        alt="campo com animais"
        class="w-screen h-96"
      />
    </figure>
    <section class="bg-white shadow rounded flex flex-row justify-between">
      <header>
        <h2 class="text-4xl mb-3">{{ name }}</h2>
        <address class="flex flex-row">
          <i class="fas fa-map-marker-alt text-2xl mt-1 mr-1"></i>
          <p class="text-xl">{{ city }}</p>
        </address>
      </header>
      <div class="flex-col flex">
        <StyledButton text="Catalogo" class="mb-3" :rounded="true" />
        <StyledButton text="Regulamento" :rounded="true" />
      </div>
    </section>
    <section class="bg-white shadow rounded">
      <header>
        <h3 class="text-4xl mb-2">Mesa de lances</h3>
        <p class="text-lg text-gray-500">
          Clique em um dos nossos contatos para dar o seu lance
        </p>
      </header>
      <ul class="flex flex-row flex-wrap justify-between mt-5">
        <li v-for="(item, i) in phones" :key="i" class="mb-2">
          <a
            :href="
              item.whatsapp
                ? 'api.whatsapp.com/send?phone=55' +
                  item.number +
                  '&text=Olá, gostaria de dar um lance no leilão ' +
                  name
                : 'tel:' + item.number
            "
            class="cursor-pointer flex flex-row"
          >
            <i
              class="mt-1 mr-1 text-2xl text-white p-1 rounded-md"
              :class="{
                'fab fa-whatsapp bg-green-500': item.whatsapp,
                'fas fa-phone-alt bg-minsk-500': !item.whatsapp,
              }"
            ></i>

            <p class="text-2xl">{{ item.number }}</p>
          </a>
        </li>
      </ul>
    </section>
    <section>
      <SectionTitle title="Agenda de leilões" class="mt-14 mx-12" />
      <ul class="flex flex-row flex-wrap justify-between">
        <li v-for="item in agenda" :key="item.id" class="w-3/12 ml-3">
          <CardAuction
            :title="item.title"
            :city="item.city"
            :row="false"
            :date="item.date"
            :image="item.image"
            btn-text="Detalhes"
            btn-class="uppercase font-bold sm:bg-sun-500 hover:bg-sun-400 active:bg-sun-600 text-minsk-500"
          />
        </li>
      </ul>
    </section>
  </BaseLayout>
</template>

<script>
import BaseLayout from '~/components/templates/BaseLayout.vue'
import StyledButton from '~/components/atoms/Button/index.vue'
import SectionTitle from '~/components/atoms/SectionTitle/index.vue'
import CardAuction from '~/components/molecules/Cards/CardAuction.vue'

export default {
  components: { BaseLayout, StyledButton, SectionTitle, CardAuction },
  data() {
    return {
      name: 'Leilão de gado de corte',
      city: 'São Paulo',
      phones: [
        {
          number: '(11) 99999-9999',
          whatsapp: true,
        },
        {
          number: '(11) 99999-9999',
          whatsapp: false,
        },
        {
          number: '(11) 99999-9999',
          whatsapp: true,
        },
        {
          number: '(11) 99999-9999',
          whatsapp: true,
        },
        {
          number: '(11) 99999-9999',
          whatsapp: false,
        },
        {
          number: '(11) 99999-9999',
          whatsapp: true,
        },
        {
          number: '(11) 99999-9999',
          whatsapp: true,
        },
        {
          number: '(11) 99999-9999',
          whatsapp: true,
        },
        {
          number: '(11) 99999-9999',
          whatsapp: false,
        },
        {
          number: '(11) 99999-9999',
          whatsapp: true,
        },
      ],
      agenda: [
        {
          id: 1,
          title: 'Leilão de gado de corte',
          city: 'São Paulo',
          date: '2021-10-10T10:00:00',
          image: '/images/leilao.png',
        },
        {
          id: 2,
          title: 'Leilão de gado de corte',
          city: 'São Paulo',
          date: '2021-10-10T10:00:00',
          image: '/images/leilao.png',
        },
        {
          id: 3,
          title: 'Leilão de gado de corte',
          city: 'São Paulo',
          date: '2021-10-10T10:00:00',
          image: '/images/leilao.png',
        },
      ],
    }
  },
}
</script>

<style scoped>
section {
  margin: 1rem 3.5rem 0.5rem 3.5rem;
  padding: 1rem;
  color: black;
}
</style>
