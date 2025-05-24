<template>
  <div>
    <button @click="createCharge">Emitir boleto</button>
    <pre>
      <code>
        {{  }}
      </code>
    </pre>
  </div>
</template>

<script setup>
import { ref } from "vue";
var content = ref({});

const createCharge = async () => {
  let res = await fetch("/api/charges/billet1", {
    method: "post",
  });
  content = JSON.stringify(res, null, 2)
};
</script>

<style></style>
