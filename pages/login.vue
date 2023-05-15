<template>
  <BaseLayout main-class="bg-gray-200 flex flex-col justify-center">
    <section class="mx-auto w-10/12 bg-white rounded-lg flex flex-col lg:flex-row h-full">
      <article class="bg-minsk-600 rounded-lg py-10 px-10 w-full lg:w-6/12">
        <h2 class="text-white text-3xl font-bold">
          Olá, seja bem-vindo a nossa plataforma de negócios.
        </h2>
        <p class="text-white text-xl my-5 mt-10">
          Faça o seu cadastro para realizar grandes negócios nos nossos leilões
          e pregões.
        </p>
        <p class="text-white font-light">
          É simples e rápido. basta clicar no botão
        </p>
        <StyledButton
          text="Quero cadastrar"
          :rounded="true"
          class="w-6/12 uppercase mx-auto mt-5 font-bold"
          link="/cadastro"
        />
      </article>
      <article class="bg-white p-5  w-full lg:w-6/12 rounded-r-lg">
        <header class="mb-5">
          <h2 class="font-bold text-3xl">Já estou cadastrado</h2>
          <p class="font-light text-xl">Informe os dados para acessar</p>
        </header>
        <form>
          <StyledInput
            label="E-mail"
            input-class="w-full"
            type="email"
            placeholder="email@exemplo.com"
            required
            validation="required|email"
            @error="(e) => setError(e, 'email')"
            @change="(value) => setEmail(value)"
          />
          <StyledInput
            label="Senha"
            input-class="w-full"
            type="password"
            placeholder="******"
            required
            toggle-pass
            validation="required"
            @error="(e) => setError(e, 'password')"
            @change="(value) => setPassword(value)"
          />
          <div class="flex flex-row justify-between">
            <div class="flex flex-row">
              <input
                id="remember"
                type="checkbox"
                name="remember"
                class="mr-1"
              />
              <label for="remember">Lembrar-me</label>
            </div>
            <a href="#"> Esqueceu a senha? </a>
          </div>
          <p v-if="callback" class="text-red-500 text-sm">{{ callback }}</p>
          <StyledButton
            :text="loading ? 'Carregando...' : 'Acessar'"
            :rounded="true"
            :disabled="!isFormValid || loading"
            class="w-8/12 mx-20 mt-3 uppercase font-bold"
            @click="login"
          />
        </form>
      </article>
    </section>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/templates/BaseLayout'
import StyledButton from '@/components/atoms/Button'
import StyledInput from '@/components/atoms/Input'
import api from '@/services/api'

export default {
  name: 'Login',
  components: {
    BaseLayout,
    StyledButton,
    StyledInput,
  },
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      error: {
        email: '',
        password: '',
      },
      callback: '',
    }
  },
  computed: {
    isFormValid() {
      return (
        this.email && this.password && !this.error.email && !this.error.password
      )
    },
  },
  methods: {
    setEmail(value) {
      this.email = value
    },
    setPassword(value) {
      this.password = value
    },
    setError(value, key) {
      this.error = {
        ...this.error,
        [key]: value,
      }
    },
    login() {
      this.loading = true
      this.callback = ''

      const data = {
        username: this.email,
        password: this.password,
      }

      api
        .post('/auth/login', data)
        .then(() => {
          this.$router.push('/')
          this.loading = false
        })
        .catch((err) => {
          this.callback = err.response.data.message;
          this.loading = false
        })
    },
  },
}
</script>
