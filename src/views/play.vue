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
function startMatchmaking() {
  const username = document.getElementById('username') as HTMLInputElement;
  if (username.value.length < 3) {
    alert('Username must be at least 3 characters long');
    return;
  }

  window.location.assign(
    `http://localhost:3000/matchmaking?username=${username.value}`
  );
}
</script>
