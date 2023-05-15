<template>
  <BaseLayout class="bg-gray-200">
    <iframe v-if="youtubeLink" width="100%" height="350" :src="youtubeLink">
    </iframe>
    <figure class="w-screen" v-else>
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
        <StyledButton
          text="Catalogo"
          class="mb-3"
          :rounded="true"
          @click="openCatalog = true"
        />
        <StyledButton
          text="Regulamento"
          :rounded="true"
          @click="openRegulation = true"
        />
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
    <ModalDialog
      title="Regulamento"
      :has-btn="false"
      :open="openRegulation"
      @close="hiddenRegulation"
    >
      <p class="m-auto text-center">Regulamento não registrado no sistema</p>
    </ModalDialog>
    <ModalDialog
      title="Catalogo"
      :has-btn="false"
      :open="openCatalog"
      @close="hiddenCatalog"
    >
      <p class="m-auto text-center">Catalogo não registrado no sistema</p>
    </ModalDialog>
  </BaseLayout>
</template>

<script>
import BaseLayout from '~/components/templates/BaseLayout.vue'
import StyledButton from '~/components/atoms/Button/index.vue'
import SectionTitle from '~/components/atoms/SectionTitle/index.vue'
import CardAuction from '~/components/molecules/Cards/CardAuction.vue'
import ModalDialog from '~/components/molecules/Dialog/modalDialog.vue'
import api from '~/services/api'

export default {
  components: {
    BaseLayout,
    StyledButton,
    SectionTitle,
    CardAuction,
    ModalDialog,
  },
  async asyncData({ params }) {
    const { slug } = params
    const id = slug.split('-').slice(-1)[0]

    const { data } = await api.get('/lots/' + id)
    const leilao = await api.get('auctions')

    const auctions = leilao.data.data.slice(0, 3).map((auction) => {
      const slug = auction.name.toLowerCase().replace(/ /g, '-')

      return {
        id: auction.id,
        title: auction.name,
        city: auction.city,
        date: auction.date + 'T' + auction.time,
        image: 'https://bis365.com.br/bid365/storage/' + auction.image,
        link: `/leiloes/${slug}-${auction.id}`,
      }
    })

    const zipCode = data.data.trading_floor.zip_code.replace(/-/g, '')
    // get full address from zip code
    const address = await api.get(`https://viacep.com.br/ws/${zipCode}/json/`)

    const addressData = address.data

    const keys = Object.keys(data.data.trading_floor).filter(
      (key) => key.includes('desk') && data.data.trading_floor[key]
    )
    const phones = keys.map((key) => {
      return {
        number: data.data.trading_floor[key],
        whatsapp: false,
      }
    })

    const ytId = data.data.video.split('v=')[1]
    const link = 'https://www.youtube.com/embed/' + ytId + '?autoplay=1'
    return {
      name: data.data.name,
      city: addressData.localidade + ' - ' + addressData.uf,
      phones,
      youtubeLink: data.data.video ? link : null,
      agenda: auctions,
    }
  },
  data() {
    return {
      openCatalog: false,
      openRegulation: false,
      name: 'Leilão de gado de corte',
      city: 'São Paulo',
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
  methods: {
    hiddenRegulation() {
      this.openRegulation = false
    },
    hiddenCatalog() {
      this.openCatalog = false
    },
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

