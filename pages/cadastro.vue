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
            <input id="pf" type="radio" name="tipo" value="F" />
          </label>
          <label for="#pj" class="ml-5">
            Pessoa Jurídica
            <input id="pj" type="radio" name="tipo" value="J" />
          </label>
        </div>
        <section class="lg:flex lg:flex-row lg:flex-wrap justify-between">
          <section class="flex flex-row flex-wrap justify-between w-full lg:w-5/12">
            <header class="my-3 w-full">
              <h3 class="text-lg uppercase">Dados Básicos</h3>
            </header>
            <StyledInput label="Nome" input-class="w-full" />
            <StyledInput label="CPF" input-class="w-5/12" />
            <StyledInput label="Telefone" input-class="w-5/12" />
            <StyledInput label="E-mail" input-class="w-full" type="email" />
            <StyledInput label="Senha" input-class="w-full" type="password" />
          </section>
          <section class="flex flex-row flex-wrap justify-between w-full lg:w-5/12">
            <header class="my-3 w-full">
              <h3 class="text-lg uppercase">Endereço</h3>
            </header>
            <StyledInput label="CEP" input-class="w-full" />
            <StyledInput label="Logradouro" input-class="w-full" />
            <StyledInput label="Bairro" input-class="w-full" />
            <StyledInput label="Cidade/UF" input-class="w-5/12" />
            <StyledInput label="Número" input-class="w-5/12" type="number" />
            <StyledInput label="Complemento" input-class="w-full" />
          </section>
        </section>
        <label>
          <input type="checkbox" name="termos" value="1" />
          Li e concordo com os termos apresentados acima, e quero prosseguir com
          o meu cadastro.
        </label>
        <div class="flex flex-row justify-center w-full">
          <StyledButton text="Cadastrar" class="w-6/12 font-bold mt-10" />
        </div>
      </form>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/templates/BaseLayout'
import StyledInput from '@/components/atoms/Input'
import StyledButton from '@/components/atoms/Button'

export default {
  name: 'Cadastro',
  components: {
    BaseLayout,
    StyledInput,
    StyledButton,
  },
  data() {
    return {}
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
