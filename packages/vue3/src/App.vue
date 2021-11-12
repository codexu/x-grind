<template>
  <div>{{ grind }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { core } from '@x-grind/core';

export default defineComponent({
  name: "Grind",
  setup() {
    const grind = ref(core());
    return { grind }
  }
});
</script>