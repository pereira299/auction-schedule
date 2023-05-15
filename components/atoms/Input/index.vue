<template>
  <div class="flex flex-col" :class="inputClass">
    <label
      :for="'#' + id"
      :class="{
        'text-black': !focus,
        'text-minsk-500 font-bold': focus,
      }"
      >{{label}}</label
    >
    <input
      :id="id"
      :type="type"
      class="py-3 px-2 border border-gray-400 rounded-lg outline-minsk-500"
      :placeholder="placeholder"
      :value="value"
      @focus="onFocus"
      @blur="onBlur"
    />
  </div>
</template>

<script>
export default {
  name: 'StyledInput',
  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    inputClass: {
      type: String,
      required: false,
      default: '',
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      value: '',
      focus: false,
      id: 0,
    }
  },
  mounted() {
    this.id =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
  },
  methods: {
    onFocus() {
      this.focus = true
    },
    onBlur() {
      this.focus = false
    },
  },
}
</script>

<style></style>
