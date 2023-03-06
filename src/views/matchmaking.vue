<template>
  <h1>Matchmaking</h1>
  <p>{{ `Waiting for: ${time}s` }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getMatchmaking, getQuery } from '../utils';

const { username } = getQuery(window);
const time = ref(0);

const interval = setInterval(async () => {
  const match = await getMatchmaking(username);
  console.log(`🚀 ~ file: matchmaking.vue:15 ~ interval ~ match:`, match);
  if (match) {
    clearInterval(interval);
    window.location.assign(
      `http://localhost:5173/game?game=${match.join('-')}?user=1`
    );
  }

  time.value += 1;
}, 1000);
</script>
