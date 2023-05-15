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
            :link="item.link"
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
import api from '~/services/api'

export default {
  components: { BaseLayout, CardAuction, SectionTitle },
  async asyncData() {
    const { data } = await api.get('auctions')

    const auctions = data.data.map(
      (auction) => {
        const slug = auction.name.toLowerCase().replace(/ /g, '-')

        return {
          id: auction.id,
          title: auction.name,
          city: auction.city,
          date: auction.date + 'T' + auction.time,
          image: 'https://bis365.com.br/bid365/storage/' + auction.image,
          link: `/leiloes/${slug}-${auction.id}`,
        }
      }
    )
    return {
      agenda: auctions,
    }
  },
}
</script>

<style></style>
