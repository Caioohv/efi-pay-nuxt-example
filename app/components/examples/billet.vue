<template>
  <USeparator
    orientation="horizontal"
    class="h-12"
    type="dashed"
    color="low-accent"
    label="Boleto"
  />
  <div class="card">
    <UButton
      loading-auto
      loading-icon="i-lucide-loader"
      class="rounded-full w-40 mb-2"
      @click="emitir()"
    >
    <span class="text-center text-xs w-full">{{ texto }}</span>
    </UButton>

    <span class="mb-2 w-full">
      <span class="text-extrabold text-sm text-primary">POST </span>
      <span class="text-extrabold text-xs">/v1/charge/one-step</span>
      <br>
      <span class="text-extrabold text-xs text-primary">Payment method: </span>
      <span class="text-extrabold text-xs">banking_billet </span>
    </span>

    <UTextarea :rows="6" v-model="conteudo" size="sm" disabled class="w-full bg-gray-800 rounded-lg" />

    <div v-if="qrcode" class="w-full flex flex-col items-center mt-4">
      <p>QRCode gerado:</p>
      <img :src="qrcode" class="w-30 mt-4" />
    </div>


  </div>
</template>

<script setup>
import { ref } from "vue";

var texto = ref("Emitir boleto");
var conteudo = ref("{  }");
var qrcode = ref("");

async function emitir() {
  texto.value = "emitindo...";
  let charge = await emitBilletOneStep();
  conteudo.value = charge.content;
  qrcode.value = charge.qrcode;
  texto.value = "Emitir novamente";
}
</script>

<style scoped></style>
