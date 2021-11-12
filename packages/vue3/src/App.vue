<template>
  <div>
    <div>{{ grind }}</div>
    <p>{{ props.name }}</p>
    <p>{{ props.labels }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import { core } from '@x-grind/core';

interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  name: 'lx',
  labels: () => ['one', 'two']
})

const grind = ref(core());
</script>