<template>
  <div class="bg-minsk-500 rounded-lg divide-y w-full max-lg:px-2  max-lg:my-2 lg:w-20 h-fit divide-white text-center py-2" :class="dateClass">
    <p class="uppercase text-white font-bold">
      <time :datetime="date" class="pb-1">
        <b class="lg:text-4xl font-semibold">{{ day }}</b>
        <br class="hidden lg:block"/>
        {{ month }}
      </time>
    </p>
    <small class="text-white uppercase text-xs w-full pt-1">
        {{ weekday }}
    </small>
  </div>
</template>

<script >
export default {
  name: 'CardDate',
  props: {
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
    dateClass: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    dateObj() {
      return new Date(this.date ?? new Date())
    },
    day() {
      return Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
      }).format(this.dateObj)
    },
    month() {
      return Intl.DateTimeFormat('pt-BR', {
        month: 'short',
      }).format(this.dateObj)
    },
    weekday() {
      return Intl.DateTimeFormat('pt-BR', {
        weekday: 'long',
      }).format(this.dateObj).replace('-feira', '')
    },
  },
}
</script>

<style></style>
