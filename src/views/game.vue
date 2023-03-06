<template>
  <p>{{ opponent }}</p>
  <div class="center-div">
    <div
      style="background-color: var(--black); height: 500px; width: 1000px"
      class="center-div"
    >
      <boardHalf />
      <div
        style="background-color: var(--white); height: 460px; width: 10px"
      ></div>
      <boardHalf />
    </div>
  </div>
  <p>{{ player }}</p>
</template>

<script setup lang="ts">
import boardHalf from '../components/boardHalf.vue';
import { BadRequestError, createBadRequestPage, getQuery } from '../utils';

interface query {
  game: string | undefined;
  user: string | undefined;
}

const { game, user } = getQuery(window) as query;
if (!game || !user) {
  const msg = !game ? 'No game in query.' : 'No user in query.';
  createBadRequestPage(document, msg);

  throw new BadRequestError(msg);
}

const players = game.split('-');
const player = players[user];
console.log(`🚀 ~ file: game.vue:24 ~ player:`, player);
const opponent = players.find((p) => p !== player);
console.log(`🚀 ~ file: game.vue:25 ~ opponent:`, opponent);
</script>
