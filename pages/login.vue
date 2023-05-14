<template>
  <BaseLayout main-class="bg-gray-200 flex flex-col justify-center">
    <section class="mx-auto w-10/12 bg-white rounded-lg flex flex-row h-full">
      <article class="bg-minsk-600 rounded-lg py-10 px-10 w-6/12">
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
        />
      </article>
      <article class="bg-white p-5 w-6/12 rounded-r-lg">
        <header class="mb-5">
          <h2 class="font-bold text-3xl">Já estou cadastrado</h2>
          <p class="font-light text-xl">Informe os dados para acessar</p>
        </header>
        <form>
          <div class="flex flex-col mb-3">
            <label for="email text-lg">E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email@exemplo.com"
              class="py-3 px-2 border border-gray-800 rounded-lg"
            />
          </div>
          <div class="flex flex-col">
            <label for="password text-lg">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="******"
              class="py-3 px-2 border border-gray-800 rounded-lg"
            />
          </div>
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
            <a href="/recuperar-acesso"> Esqueceu a senha? </a>
          </div>
          <StyledButton
            text="Acessar"
            :rounded="true"
            class="w-8/12 mx-20 mt-3 uppercase font-bold"
          />
        </form>
      </article>
    </section>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/templates/BaseLayout'
import StyledButton from '@/components/atoms/Button'

export default {
  name: 'Login',
  components: {
    BaseLayout,
    StyledButton,
  },
}
</script>

<style></style>
