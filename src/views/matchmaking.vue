<template>
  <h1>Matchmaking</h1>
  <p>Waiting for: {{ time }}s</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  getMatchmaking,
  getQuery,
  createBadRequestPage,
  BadRequestError,
} from '../utils';

interface query {
  username: string | undefined;
}

const time = ref(0);

const { username } = getQuery(window) as query;
if (!username) {
  const msg = 'No username in query.';
  createBadRequestPage(document, msg);
  throw new BadRequestError(msg);
}

const interval = setInterval(async () => {
  const match = await getMatchmaking(username);
  if (match) {
    clearInterval(interval);
    window.location.assign(
      `http://localhost:5173/game?game=${match.join('-')}?user=0`
    );
  }

  time.value += 1;
}, 1000);
</script>
