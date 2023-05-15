<template>
  <BaseLayout class="bg-gray-200">
    <StyledCarroussel :images="images" />
    <section class="p-10">
      <SectionTitle title="Leilões ao vivo" />
      <ul class="flex flex-row flex-wrap justify-between">
        <li v-for="live in lives" :key="live.id" class="w-5/12">
          <CardAuction
            :title="live.title"
            :city="live.city"
            :row="true"
            :date="live.date"
            :image="live.image"
            :link="live.link"
            btn-text="Assista ao vivo"
            btn-class="uppercase font-bold sm:bg-red-600 hover:bg-red-500 active:bg-red-700 text-white"
          />
        </li>
      </ul>
    </section>
    <section class="p-10">
      <SectionTitle title="agenda de Leilões" />
      <ul class="flex flex-row flex-wrap justify-between">
        <li
          v-for="(item, i) in agenda"
          :key="item.id"
          class="w-5/12 lg:w-3/12 mb-3"
          :class="{
            'ml-3': i > 0,
          }"
        >
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
      <StyledButton text="Ver todos" class="w-full mt-5" link="/leiloes"/>
    </section>
  </BaseLayout>
</template>

<script lang="ts">
import 'static/styles/global.css'
import BaseLayout from '@/components/templates/BaseLayout.vue'
import StyledCarroussel from '@/components/organisms/Carroussel/index.vue'
import SectionTitle from '@/components/atoms/SectionTitle/index.vue'
import CardAuction from '@/components/molecules/Cards/CardAuction.vue'
import StyledButton from '@/components/atoms/Button/index.vue'
import api from '@/services/api'

export default {
  name: 'IndexPage',
  components: {
    BaseLayout,
    StyledCarroussel,
    SectionTitle,
    CardAuction,
    StyledButton,
  },
  async fetch() {
    const { data } = await api.get('home-page')

    const banners = data.data.banners.map((banner: { image_url: String }) => {
      return banner.image_url
    })

    const auctions = data.data.auctions.map(
      (auction: {
        name: String
        id: number
        city: String
        date: String
        time: String
        image: String
      }) => {
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
    const live = await data.data.lots.slice(0,2).map((lots: {
        name: String
        id: number
        city: String
        date_init: String
        hour_init: String
        images: Array<{ filename: String }>
        trading_floor: { zip_code: String }
      }) => {
      const slug = lots.name.toLowerCase().replace(/ /g, '-');
      const image = lots.images.map((image: { filename: String }) => {
        return image.filename
      })[0];
      

      return {
        id: lots.id,
        title: lots.name,
        zip_code: lots.trading_floor.zip_code,
        date: lots.date_init + 'T' + lots.hour_init,
        image: 'https://bis365.com.br/bid365/storage/' + image,
        link: `/ao-vivo/${slug}-${lots.id}`,
      }
    })

    for (const item of live) {
      const zipCode = item.zip_code.replace(/-/g, '');
      // get full address from zip code
      const address = await api.get(`https://viacep.com.br/ws/${zipCode}/json/`);
      
      const addressData = address.data;
      item.city = addressData.localidade + ' - ' + addressData.uf;
    }
    return {
      images: banners,
      agenda: auctions,
      lives: live,
    }
  },
}
</script>
