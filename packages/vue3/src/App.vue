<template>
  <div>{{ grind }}</div>
  <p>{{ props.name }}</p>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import { core } from '@x-grind/core';

const props = defineProps<{
  name: string
}>()

const grind = ref(core());
</script>