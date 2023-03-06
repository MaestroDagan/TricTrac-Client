<template>
  <h1>Play</h1>

  <div>
    <div>
      <label for="username"><strong>username</strong></label>
    </div>
    <input type="text" id="username" />
  </div>

  <button @click="startMatchmaking">Start Matchmaking</button>
</template>

<script setup lang="ts">
import { getUsernameExists } from '../utils';

async function startMatchmaking() {
  const username = (document.getElementById('username') as HTMLInputElement)
    .value;
  if (username.length < 3) {
    alert('Username must be at least 3 characters long');
    return;
  }
  if (username.length > 20) {
    alert("Username can't be more than 20 characters long");
    return;
  }
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    alert('Username can only contain letters and numbers');
    return;
  }
  if (await getUsernameExists(username)) {
    alert('Username already exists');
    return;
  }

  window.location.assign(
    `http://localhost:3000/matchmaking/start?username=${username}`
  );
}
</script>
