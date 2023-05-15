<template>
  <BaseLayout main-class="bg-gray-200 flex flex-row pt-40 justify-around pb-10">
    <article class="w-3/12 bg-white rounded h-fit">
      <figure class="w-full">
        <img :src="poster" alt="poster do leilão" />
      </figure>
      <div class="p-5">
        <address>
          <h2 class="text-2xl font-bold uppercase text-black mb-2">
            {{ name }}
          </h2>
          <p class="uppercase text-black text-2xl mb-2">{{ company }}</p>
          <p class="uppercase text-black text-2xl mb-2">{{ address }}</p>
          <h5 class="text-black font-light text-lg">Informações</h5>
          <div v-if="!!phone" class="flex flex-row">
            <i class="fas fa-phone-alt mr-1 mt-1"></i>
            <p>{{ phone }}</p>
          </div>
          <div v-if="!!whatsapp" class="flex flex-row">
            <i class="fa-brands fa-whatsapp text-green-500 mr-1 mt-1"></i>
            <p>{{ whatsapp }}</p>
          </div>
        </address>
        <h5 class="font-light text-black text-lg mt-2">Transmissão</h5>
        <ul class="flex flex-row justify-between w-8/12 mb-3">
          <li v-for="(item, i) in broadcasts" :key="i">
            <a :href="item.link">
              <img
                :src="item.image"
                :alt="item.name ?? 'logo da transmissora'"
              />
            </a>
          </li>
        </ul>
        <StyledButton
          text="Ver catalogo"
          :rounded="true"
          class="w-full mt-2 font-bold"
          @click="openCatalog = true"
        />
        <StyledButton
          text="Regulamento"
          :rounded="true"
          class="w-full mt-2 font-bold"
          @click="openRegulation = true"
        />
      </div>
    </article>
    <section class="w-8/12 bg-white rounded p-5 h-fit">
      <header class="flex flex-row justify-between mb-5">
        <SectionTitle title="Imagens do leilão" class="text-black"/>
        <StyledButton text="Quero participar" :rounded="true" link="/login"/>
      </header>
      <ul class="flex flex-row justify-between flex-wrap">
        <li
          v-for="(img, i) in images"
          :key="i"
          class="mb-3 w-3/12 ml-1 cursor-pointer"
          @click="showImage(i)"
        >
          <figure>
            <img :src="img.link" :alt="img.description ?? 'imagem do leilão'" />
            <figcaption class="text-center text-black text-lg">
              {{ img.description ?? 'Descrição da imagem' }}
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>
    <ImageDialog
      :images="images"
      :open="openDialog"
      :index="indexDialog"
      @close="hiddenImage"
    />
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
import BaseLayout from '@/components/templates/BaseLayout.vue'
import SectionTitle from '@/components/atoms/SectionTitle/index.vue'
import StyledButton from '@/components/atoms/Button/index.vue'
import ModalDialog from '@/components/molecules/Dialog/modalDialog.vue'
import ImageDialog from '@/components/molecules/Dialog/ImageDialog.vue'
import api from '@/services/api'

export default {
  name: 'LeilaoDetailsPage',
  components: {
    BaseLayout,
    SectionTitle,
    StyledButton,
    ImageDialog,
    ModalDialog,
  },
  async fetch({ params }) {
    const { slug } = params
    const id = slug.split('-').slice(-1)[0]

    const { data } = await api.get(`auctions/${id}`)

    const zipCode = data.data.zip_code.replace(/-/g, '')
    // get full address from zip code
    const address = await api.get(`https://viacep.com.br/ws/${zipCode}/json/`)

    const addressData = address.data

    const images = data.data.contents
      .filter((content) => typeof content.filename === 'string')
      .map((content) => {
        return {
          link: 'https://bis365.com.br/bid365/storage/' + content.filename,
          description: content.description,
        }
      })
    const broadcasts = []
    switch (data.data.streaming) {
      case '1':
        broadcasts.push({
          id: 2,
          name: 'YouTube',
          image: '/images/youtube.png',
          link: data.data.link,
        })
        break
      case '2':
        broadcasts.push({
          id: 1,
          name: 'Lance Rural',
          image: '/images/lance-rural.png',
          link: data.data.link,
        })
        break

      case '3':
        broadcasts.push({
          id: 3,
          name: 'Camargo Agronegócios',
          image: '/images/icon.png',
          link: data.data.link,
        })
        break
    }
    const res = {
      name: data.data.name,
      poster: 'https://bis365.com.br/bid365/storage/' + data.data.image,
      company: data.data.auctionhouse,
      address: `${addressData.logradouro}, ${addressData.bairro} - ${addressData.localidade}/${addressData.uf}`,
      phone: data.data.phone.replace(
        /(\d{2})(\d{2})(\d{4})(\d{4})/,
        '+$1 ($2) $3-$4'
      ),
      images,
      broadcasts,
    }
    return res
  },
  data() {
    return {
      openDialog: false,
      indexDialog: 0,
      openRegulation: false,
      openCatalog: false,
    }
  },
  methods: {
    showImage(index) {
      this.indexDialog = index
      this.openDialog = true
    },
    hiddenImage() {
      this.openDialog = false
    },
    hiddenRegulation() {
      this.openRegulation = false
    },
    hiddenCatalog() {
      this.openCatalog = false
    },
  },
}
</script>

<style></style>
