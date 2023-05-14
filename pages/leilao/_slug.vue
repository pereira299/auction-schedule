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
          <div class="flex flex-row">
            <i class="fas fa-phone-alt mr-1 mt-1"></i>
            <p>{{ phone }}</p>
          </div>
          <div class="flex flex-row">
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
        />
        <StyledButton
          text="Regulamento"
          :rounded="true"
          class="w-full mt-2 font-bold"
        />
      </div>
    </article>
    <section class="w-8/12 bg-white rounded p-5 h-fit">
      <header class="flex flex-row justify-between mb-5">
        <SectionTitle title="Imagens do leilão" class="text-black" />
        <StyledButton text="Quero participar" :rounded="true" />
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
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/templates/BaseLayout.vue'
import SectionTitle from '@/components/atoms/SectionTitle/index.vue'
import StyledButton from '@/components/atoms/Button/index.vue'
import ImageDialog from '@/components/molecules/Dialog/ImageDialog.vue'

export default {
  name: 'LeilaoDetailsPage',
  components: {
    BaseLayout,
    SectionTitle,
    StyledButton,
    ImageDialog,
  },
  asyncData({ params }) {
    const { slug } = params
    const name = slug.replaceAll('-', ' ')
    return { name }
  },
  data() {
    return {
      name: '',
      poster: '/images/leilao.png',
      company: 'Leilões Minsk',
      address: 'Rua 1, 123 - Centro - Minsk',
      phone: '(11) 1234-5678',
      whatsapp: '(11) 9 1234-5678',
      openDialog: false,
      indexDialog: 0,
      images: [
        {
          link: '/images/leilao.png',
          description: 'Imagem do leilão 1',
        },
        {
          link: '/images/leilao.png',
          description: 'Imagem do leilão 2',
        },
        {
          link: '/images/leilao.png',
          description: 'Imagem do leilão 3',
        },
        {
          link: '/images/leilao.png',
          description: 'Imagem do leilão 4',
        },
        {
          link: '/images/leilao.png',
          description: 'Imagem do leilão 5',
        },
        {
          link: '/images/leilao.png',
          description: 'Imagem do leilão 6',
        },
      ],
      broadcasts: [
        {
          id: 1,
          name: 'Lance Rural',
          image: '/images/lance-rural.png',
          link: 'https://www.youtube.com/watch?v=1q8mzW0W8qI',
        },
        {
          id: 2,
          name: 'YouTube',
          image: '/images/youtube.png',
          link: 'https://www.youtube.com/watch?v=1q8mzW0W8qI',
        },
        {
          id: 3,
          name: 'Camargo Agronegócios',
          image: '/images/icon.png',
          link: 'https://www.youtube.com/watch?v=1q8mzW0W8qI',
        },
      ],
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
  },
}
</script>

<style></style>
