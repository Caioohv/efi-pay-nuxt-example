<template>
  <div>
    <button @click="createCharge">Emitir boleto</button>
  </div>
</template>

<script setup>
const createCharge = async () => {
  const content = await fetch("/api/charges/billet1", {
    method: "post",
  });

  console.log(content);
};
</script>

<style></style>
