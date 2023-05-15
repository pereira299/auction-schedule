<template>
  <BaseLayout main-class="bg-gray-200">
    <SectionTitle title="Agenda de leilões" class="mt-14 mx-12" />
    <section class="px-10">
      <ul class="w-full flex flex-row flex-wrap justify-between">
        <li v-for="(item, i) in agenda" :key="i" class="w-3/12 ml-2 mb-10">
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
import CardAuction from '~/components/molecules/Cards/CardAuction.vue'
import BaseLayout from '~/components/templates/BaseLayout.vue'
import SectionTitle from '~/components/atoms/SectionTitle/index.vue'

export default {
  components: { BaseLayout, CardAuction, SectionTitle },
  data() {
    return {
      agenda: [
        {
          id: 1,
          title: 'Leilão de gado de corte',
          city: 'São Paulo',
          date: '2021-10-10T10:00:00',
          image: 'images/leilao.png',
        },
        {
          id: 2,
          title: 'Leilão de gado de corte',
          city: 'São Paulo',
          date: '2021-10-10T10:00:00',
          image: 'images/leilao.png',
        },
        {
          id: 3,
          title: 'Leilão de gado de corte',
          city: 'São Paulo',
          date: '2021-10-10T10:00:00',
          image: 'images/leilao.png',
        },
        {
          id: 4,
          title: 'Leilão de gado de corte',
          city: 'São Paulo',
          date: '2021-10-10T10:00:00',
          image: 'images/leilao.png',
        },
        {
          id: 5,
          title: 'Leilão de gado de corte',
          city: 'São Paulo',
          date: '2021-10-10T10:00:00',
          image: 'images/leilao.png',
        },
        {
          id: 6,
          title: 'Leilão de gado de corte',
          city: 'São Paulo',
          date: '2021-10-10T10:00:00',
          image: 'images/leilao.png',
        },
        {
          id: 7,
          title: 'Leilão de gado de corte',
          city: 'São Paulo',
          date: '2021-10-10T10:00:00',
          image: 'images/leilao.png',
        },
        {
          id: 8,
          title: 'Leilão de gado de corte',
          city: 'São Paulo',
          date: '2021-10-10T10:00:00',
          image: 'images/leilao.png',
        },
      ],
    }
  },
}
</script>

<style></style>
