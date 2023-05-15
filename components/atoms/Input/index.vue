<template>
  <div class="flex flex-col" :class="inputClass">
    <label
      :for="'#' + id"
      :class="{
        'text-black': !focus && !error,
        'text-minsk-500 font-bold': focus,
        'text-red-500  shakeX': error && !focus,
      }"
      >{{ label }}</label
    >
    <div
      class="py-3 px-2 border border-gray-400 rounded-lg outline-minsk-500 flex flex-row bg-white"
      :class="{
        'border-minsk-500': focus,
        'border-red-500 shakeX': error && !focus,
      }"
    >
      <input
        :id="id"
        v-model="value"
        :type="showPass ? 'text' : type"
        class="outline-none bg-white"
        :class="{
          'w-full': !togglePass,
          'w-11/12': togglePass,
        }"
        :placeholder="placeholder"
        @focus="onFocus"
        @blur="onBlur"
      />
      <span v-if="togglePass" class="w-fit" @click="showPass = !showPass">
        <i
          class="fas cursor-pointer"
          :class="{
            'text-minsk-500': focus,
            'text-gray-400': !focus,
            'fa-eye': showPass,
            'fa-eye-slash': !showPass,
          }"
          
        ></i>
      </span>
    </div>
    <small
      class="text-red-500 text-xs"
      :class="{
        hidden: !error,
        shakeX: error,
      }"
      >{{ error }}</small
    >
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
    validation: {
      type: String,
      required: false,
      default: '',
    },
    togglePass: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['change'],
  data() {
    return {
      value: '',
      focus: false,
      id: 0,
      error: '',
      showPass: false,
    }
  },
  watch: {
    value() {
      this.$emit('change', this.value)
    },
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
      this.validate(this.value)
    },
    validate(value) {
      if (!this.validation) return

      const validations = this.validation.split('|')
      validations.forEach((validation) => {
        let newError = ''
        const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
        switch (validation) {
          case 'required':
            if (!value) {
              newError = 'Campo obrigatório'
            }
            break
          case 'email':
            if (!regex.test(value)) {
              newError = 'E-mail inválido'
            }
            break
          case 'number':
            if (isNaN(value)) {
              newError = 'Numero inválido'
            }
            break
        }
        if (validation.includes('min:')) {
          const min = parseInt(validation.split(':')[1])
          if (value.length < min) {
            newError = `Mínimo de ${min} caracteres`
          }
        }
        if (validation.includes('max:')) {
          const max = parseInt(validation.split(':')[1])
          if (value.length > max) {
            newError = `Máximo de ${max} caracteres`
          }
        }
        if (validation.includes('len:')) {
          const len = parseInt(validation.split(':')[1])

          if (value.length !== len) {
            newError = `Deve conter ${len} caracteres`
          }
        }

        this.error = newError;
        this.$emit('error', newError)
      })
    },
  },
}
</script>

<style>
.shakeX {
  animation: shakeX 0.5s ease-in-out forwards;
}

@keyframes shakeX {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
