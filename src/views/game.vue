<template>
  <DiceDisplay />
  <p>{{ opponent }}</p>
  <div class="center-div">
    <div
      style="background-color: var(--black); height: 500px; width: 1000px"
      class="center-div"
    >
      <BoardHalf />
      <div
        style="background-color: var(--white); height: 460px; width: 10px"
      ></div>
      <BoardHalf />
    </div>
  </div>
  <p>{{ player }}</p>
  <DiceDisplay />
</template>

<script setup lang="ts">
import BoardHalf from '@/components/boardHalf.vue';
import DiceDisplay from '../components/diceDisplay.vue';
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
const player = players[parseInt(user)];
const opponent = players.find((p) => p !== player);
</script>
