<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    "
  >
    <BoardQuarter rotate="180" />
    <div
      style="
        background-color: var(--white);
        height: 10px;
        width: 450px;
        margin: 25px 0;
      "
    ></div>
    <BoardQuarter />
  </div>
</template>

<script setup lang="ts">
import BoardQuarter from '@/components/boardQuarter.vue';
</script>
