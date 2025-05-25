<template>
  <USeparator
    orientation="horizontal"
    class="h-12"
    type="dashed"
    color="low-accent"
    label="Cartão"
  />
  <div class="card">
    <UButton
      loading-auto
      loading-icon="i-lucide-loader"
      class="rounded-full w-40 mb-2"
      @click="emitir()"
      :disabled="!loaded"
    >
      <span class="text-center text-xs w-full">{{ texto }}</span>
    </UButton>

    <span class="mb-2 w-full">
      <span class="text-extrabold text-sm text-primary">POST </span>
      <span class="text-extrabold text-xs">/v1/charge/one-step</span>
      <br />
      <span class="text-extrabold text-xs text-primary">Payment method: </span>
      <span class="text-extrabold text-xs">credit_card </span>
      <br />
    </span>

    <UTextarea
      :rows="6"
      v-model="conteudo"
      size="sm"
      disabled
      class="w-full bg-slate-900 rounded-lg"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

let CardInfo = null;
let loaded = ref(false);

onMounted(async () => {
  loaded.value = true;
  if (process.client) {
    const { default: EfiPay } = await import("payment-token-efi");

    CardInfo = await EfiPay.CreditCard.setAccount(
      "cf38611a1bff726c44afe5553587150a"
    )
      .setEnvironment("sandbox")
      .setCreditCardData({
        brand: "visa",
        number: "4485785674290087",
        cvv: "123",
        expirationMonth: "05",
        expirationYear: "2029",
        holderName: "Gorbadoc Oldbuck",
        holderDocument: "94271564656",
        reuse: false,
      })
      .getPaymentToken();
  }
});

var texto = ref("Cobrança via cartão");
var conteudo = ref("{  }");

async function emitir() {
  texto.value = "emitindo...";
  conteudo.value = await emitCardOneStep(CardInfo.payment_token);
  texto.value = "Emitir novamente";
}
</script>

<style scoped></style>
