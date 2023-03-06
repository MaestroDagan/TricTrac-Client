import axios from 'axios';

export async function getUsernameExists(username: string) {
  return (
    await axios.get(
      `http://localhost:3000/matchmaking/username-exists?username=${username}`
    )
  ).data.data;
}

export async function getMatchmaking(username: string) {
  return (
    await axios.get(
      `http://localhost:3000/matchmaking/findmatch?username=${username}`
    )
  ).data.data;
}
