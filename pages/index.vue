<template>
  <BaseLayout>
    <StyledCarroussel :images="images" />
    <section class="p-10">
      <SectionTitle title="Leilões ao vivo" />
      <ul class="flex flex-row flex-wrap justify-between">
        <li v-for="live in lives" :key="live.id" class="w-6/12">
          <CardAuction
            :title="live.title"
            :city="live.city"
            :row="true"
            :date="live.date"
            :image="live.image"
            btn-text="Assista ao vivo"
            btn-class="uppercase sm:bg-red-600 hover:bg-red-500 active:bg-red-700 text-white"
          />
        </li>
      </ul>
    </section>
    <section class="p-10">
      <SectionTitle title="agenda de Leilões" />
      <ul class="flex flex-row flex-wrap justify-between">
        <li v-for="item in agenda" :key="item.id" class="w-3/12 ml-3">
          <CardAuction
            :title="item.title"
            :city="item.city"
            :row="false"
            :date="item.date"
            :image="item.image"
            btn-text="Assista ao vivo"
            btn-class="uppercase sm:bg-sun-500 hover:bg-sun-400 active:bg-sun-600 text-minsk-500"
          />
        </li>
      </ul>
      <StyledButton text="Ver todos" class="w-full mt-5" />
    </section>
  </BaseLayout>
</template>

<script lang="ts">
import "static/styles/global.css"
import BaseLayout from "@/components/templates/BaseLayout.vue"
import StyledCarroussel from "@/components/organisms/Carroussel/index.vue"
import SectionTitle from "@/components/atoms/SectionTitle/index.vue"
import CardAuction from "@/components/molecules/Cards/CardAuction.vue"
import StyledButton from "@/components/atoms/Button/index.vue"

export default {
  name: 'IndexPage',
  components: {
    BaseLayout,
    StyledCarroussel,
    SectionTitle,
    CardAuction,
    StyledButton,
  },
  data() {
    return {
      images: [
        "images/banner-1.png",
        "images/banner-2.png",
      ], 
      lives: [
        {
          id: 1,
          title: "Leilão de gado de corte",
          city: "São Paulo",
          date: "2021-10-10T10:00:00",
          image: "images/leilao.png",
        },
        {
          id: 2,
          title: "Leilão de gado de corte",
          city: "São Paulo",
          date: "2021-10-10T10:00:00",
          image: "images/leilao.png",
        }
      ],
      agenda: [
        {
          id: 1,
          title: "Leilão de gado de corte",
          city: "São Paulo",
          date: "2021-10-10T10:00:00",
          image: "images/leilao.png",
        },
        {
          id: 2,
          title: "Leilão de gado de corte",
          city: "São Paulo",
          date: "2021-10-10T10:00:00",
          image: "images/leilao.png",
        },
        {
          id: 3,
          title: "Leilão de gado de corte",
          city: "São Paulo",
          date: "2021-10-10T10:00:00",
          image: "images/leilao.png",
        },
        {
          id: 4,
          title: "Leilão de gado de corte",
          city: "São Paulo",
          date: "2021-10-10T10:00:00",
          image: "images/leilao.png",
        }
      ]
    }
  }
}
</script>
