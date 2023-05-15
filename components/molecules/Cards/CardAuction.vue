<template>
  <article
    class="p-5 px-3 flex shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-100 rounded justify-around"
    :class="{
      'flex-row': row,
      'flex-col': !row,
    }"
  >
    <figure
      :class="{
        'w-4/12': row,
        'w-full mb-3': !row,
      }"
    >
      <img :src="image" alt="imagem do leilão" :class="!row ? 'h-40 mx-auto' : ''" />
    </figure>
    <div 
        :class="{
            'w-7/12': row,
            'w-full': !row,
        }"
    >
      <div class="flex flex-row justify-between mb-3">
        <CardDate :date="date" />
        <div class="w-auto ml-2">
          <h3 class="font-bold text-xl mb-3">{{ title }}</h3>
          <address class="flex flex-row">
            <i class="fa-solid fa-location-dot text-md mt-1 mr-1"></i>
            <p>{{ city }}</p>
          </address>
          <time class="flex flex-row">
            <i class="fa-regular fa-clock text-md mt-1 mr-1"></i>
            <p>{{ time }}</p>
          </time>
        </div>
      </div>
      <StyledButton :text="btnText" :rounded="true" :class="'w-full ' + btnClass" />
    </div>
  </article>
</template>

<script>
import CardDate from '@/components/molecules/Cards/CardDate.vue'
import StyledButton from '@/components/atoms/Button/index.vue'

export default {
  name: 'CardAuction',
  components: {
    CardDate,
    StyledButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
      validator: (value) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/
        // stay only with the date part
        const date = value.split('T')[0]
        return regex.test(date) && date.length === 10
      },
    },
    image: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
      required: true,
    },
    btnClass: {
      type: String,
      required: true,
    },
    row: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    time() {
      const date = new Date(this.date)
      return (
        date.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        }) + ' (horário de Brasília)'
      )
    },
  },
}
</script>

<style></style>
