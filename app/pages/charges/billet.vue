<template>
  <div>
    <button @click="createCharge">Charges Billet</button>
    <pre>
      {{ contentFirst }}
    </pre>
  </div>
  <div>
    <button @click="createChargeOneStep">One Step</button>
    <pre>
      {{ contentSecond }}
    </pre>
  </div>
</template>

<script setup>
import { ref } from "vue";
var contentFirst = ref('');
var contentSecond = ref('');

const createCharge = async () => {
  console.log('initiating charge')
  let res = await fetch("/api/charges/billet", {
    method: "post",
  });

  let body = await res.json();
  contentFirst.value = JSON.stringify(body.data, null, 2)
};

const createChargeOneStep = async () => {
  console.log('initiating charge')
  let res = await fetch("/api/charges/billetonestep", {
    method: "post",
  });

  let body = await res.json();
  contentSecond.value = JSON.stringify(body.data, null, 2)
};
</script>

<style></style>
