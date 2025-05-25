<template>
  <USeparator
    orientation="horizontal"
    class="h-12 mt-24"
    type="dashed"
    color="low-accent"
    label="Sobre o projeto"
  />
  <div class="card">
    <p  class="mb-3 w-full">Para acessar o código desse projeto, basta <a class="text-primary font-bold" href="https://github.com/Caioohv/efi-pay-nuxt-example">clicar aqui</a>.</p>
    <p class="mb-3">Este projeto é apenas uma demonstração de uso da API da Efí Pay, com emissão de boleto e pix, além da cobrança via cartão de crédito.</p>
    <p class="mb-3">Foi usado o ambiente sandbox da Efí, logo, as informações exibidas não possuem valor.</p>
    <p class="mb-3">Além disso, as informações (ver código) usadas para o pagamento, como o número do cartão, endereço e etc. são informações fictícias, sem valor real.</p>
    <p class="w-full">Caso tenha interesse em usar essa api, acesse <a class="text-primary font-bold" href="https://www.sejaefi.com.br">este link</a>.</p>

  </div>
</template>

<script setup></script>

<style scoped></style>
