<template>
  <div class="center-div" style="gap: 0px">
    <Dice :number="number1" />
    <Dice :number="number2" />
  </div>
</template>

<script setup lang="ts">
import Dice from '@/components/dice.vue';

export default {
  props: ['number1', 'number2'],
  setup(props: { number1: string; number2: string }) {
    return props;
  },
};
</script>
