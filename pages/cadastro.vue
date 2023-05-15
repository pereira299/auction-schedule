<template>
  <BaseLayout>
    <div class="p-10">
      <header class="mb-10">
        <h2 class="uppercase text-3xl">Formulario para cadastro</h2>
        <p class="text-lg mb-5">
          Para realizar seu cadastro junto com a Camargo Agronegócios, preencha
          todo formulário abaixo.
        </p>
        <p class="text-lg mb-5">
          A análise de cadastro será realizada com as informações e os
          documentos solicitados.
        </p>
        <p class="text-lg font-bold">
          <strong> O cadastro esta sujeito a análise para aprovação. </strong>
        </p>
      </header>
      <form class="">
        <div class="w-full">
          <label for="#pf">
            Pessoa Física
            <input
              id="pf"
              v-model="values.category"
              type="radio"
              name="tipo"
              value="F"
            />
          </label>
          <label for="#pj" class="ml-5">
            Pessoa Jurídica
            <input
              id="pj"
              v-model="values.category"
              type="radio"
              name="tipo"
              value="J"
            />
          </label>
        </div>
        <section class="lg:flex lg:flex-row lg:flex-wrap justify-between">
          <section
            class="flex flex-row flex-wrap justify-between w-full lg:w-5/12"
          >
            <header class="my-3 w-full">
              <h3 class="text-lg uppercase">Dados Básicos</h3>
            </header>
            <StyledInput
              label="Nome"
              input-class="w-full"
              validation="required"
              @error="(e) => setError(e, 'name')"
              @change="(value) => setValue(value, 'name')"
            />
            <StyledInput
              label="CPF"
              input-class="w-5/12"
              validation="required|number|len:11"
              @error="(e) => setError(e, 'cpf')"
              @change="(value) => setValue(value, 'cpf')"
            />
            <StyledInput
              label="Telefone"
              input-class="w-5/12"
              validation="required|number|len:11"
              @error="(e) => setError(e, 'phone')"
              @change="(value) => setValue(value, 'phone')"
            />
            <StyledInput
              label="E-mail"
              input-class="w-full"
              type="email"
              validation="required|email"
              @error="(e) => setError(e, 'email')"
              @change="(value) => setValue(value, 'email')"
            />
            <StyledInput
              label="Senha"
              input-class="w-full"
              type="password"
              toggle-pass
              validation="required|min:8"
              @error="(e) => setError(e, 'password')"
              @change="(value) => setValue(value, 'password')"
            />
          </section>
          <section
            class="flex flex-row flex-wrap justify-between w-full lg:w-5/12"
          >
            <header class="my-3 w-full">
              <h3 class="text-lg uppercase">Endereço</h3>
            </header>
            <StyledInput
              label="CEP"
              input-class="w-full"
              validation="required|number|len:8"
              @error="(e) => setError(e, 'cep')"
              @change="(value) => setValue(value, 'cep')"
            />
            <StyledInput
              label="Logradouro"
              input-class="w-full"
              validation="required"
              @error="(e) => setError(e, 'logradouro')"
              @change="(value) => setValue(value, 'logradouro')"
            />
            <StyledInput
              label="Bairro"
              input-class="w-full"
              validation="required"
              @error="(e) => setError(e, 'bairro')"
              @change="(value) => setValue(value, 'bairro')"
            />
            <StyledInput
              label="Cidade/UF"
              input-class="w-5/12"
              validation="required"
              @error="(e) => setError(e, 'city')"
              @change="(value) => setValue(value, 'city')"
            />
            <StyledInput
              label="Número"
              input-class="w-5/12"
              type="number"
              validation="required|number"
              @error="(e) => setError(e, 'number')"
              @change="(value) => setValue(value, 'number')"
            />
            <StyledInput
              label="Complemento"
              input-class="w-full"
              validation="required"
              @error="(e) => setError(e, 'complemento')"
              @change="(value) => setValue(value, 'complemento')"
            />
          </section>
        </section>
        <label>
          <input
            v-model="values.accept"
            type="checkbox"
            name="termos"
            value="1"
          />
          Li e concordo com os termos apresentados acima, e quero prosseguir com
          o meu cadastro.
        </label>
        <p v-if="callback" class="text-red-500 text-sm">{{ callback }}</p>
        <div class="flex flex-row justify-center w-full">
          <StyledButton
            :text="loading ? 'Carregando...' : 'Cadastrar'"
            :disabled="!isFormValid || loading"
            class="w-6/12 font-bold mt-10"
            :rounded="true"
            @click="register"
          />
        </div>
      </form>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/templates/BaseLayout'
import StyledInput from '@/components/atoms/Input'
import StyledButton from '@/components/atoms/Button'
import api from '@/services/api'

export default {
  name: 'Cadastro',
  components: {
    BaseLayout,
    StyledInput,
    StyledButton,
  },
  data() {
    return {
      values: {
        name: '',
        cpf: '',
        phone: '',
        email: '',
        password: '',
        cep: '',
        logradouro: '',
        bairro: '',
        city: '',
        number: '',
        complemento: '',
        category: 'F',
        accept: false,
      },
      error: {
        name: '',
        cpf: '',
        phone: '',
        email: '',
        password: '',
        cep: '',
        logradouro: '',
        bairro: '',
        city: '',
        number: '',
        complemento: '',
      },
      city_id: '',
      callback: '',
      loading: false,
    }
  },
  computed: {
    isFormValid() {
      const hasErrors = Object.values(this.error).some((error) => !!error)
      const hasEmpty = Object.values(this.values).some((value) => !value)

      return !hasEmpty && !hasErrors
    },
  },
  watch: {
    'values.cep': function (val) {
      if (val.length === 8) {
        this.searchAddress(val)
      }
    },
  },
  methods: {
    setValue(value, field) {
      this.values[field] = value
    },
    setError(error, field) {
      this.error[field] = error
    },
    register() {
      this.loading = true
      this.callback = ''
      const data = {
        email: this.email,
        name: this.name,
        phone: this.phone,
        nif: this.cpf,
        zip_code: this.cep,
        address: this.logradouro,
        city_id: this.city_id,
        password: this.password,
      }
      api
        .post('/clients', data)
        .then(() => {
          this.loading = false
          this.$router.push('/login')
        })
        .catch((err) => {
          this.loading = false
          this.callback = err.response.data.message
        })
    },
    async searchAddress(cep) {
      if (cep.length !== 8) return

      const address = await api.get(`https://viacep.com.br/ws/${cep}/json/`)

      const addressData = address.data

      this.values.logradouro = addressData.logradouro
      this.values.bairro = addressData.bairro
      this.values.city = addressData.localidade + '/' + addressData.uf
      this.city_id = addressData.ibge
      this.values.complemento = addressData.complemento
    },
  },
}
</script>

<style>
main {
  background: url('/images/mancha-1.svg'), url('/images/mancha-2.svg');
  background-repeat: no-repeat;
  background-position: top right, bottom left;
  background-size: 12%, 4%;
}

@media screen and (max-width: 768px) {
  main {
    background-size: 16%, 7%;
  }
}

@media screen and (max-width: 480px) {
  main {
    background-size: 20%, 10%;
  }
}
</style>
