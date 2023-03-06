<template>
  <div style="display: flex" :style="{ transform: `rotate(${rotate}deg)` }">
    <div
      :style="defaultStyle"
      style="border-bottom: 200px solid var(--red)"
    ></div>
    <div
      :style="defaultStyle"
      style="border-bottom: 200px solid var(--green)"
    ></div>
    <div
      :style="defaultStyle"
      style="border-bottom: 200px solid var(--red)"
    ></div>
    <div
      :style="defaultStyle"
      style="border-bottom: 200px solid var(--green)"
    ></div>
    <div
      :style="defaultStyle"
      style="border-bottom: 200px solid var(--red)"
    ></div>
    <div
      :style="defaultStyle"
      style="border-bottom: 200px solid var(--green)"
    ></div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['rotate'],
  setup(props) {
    const rotate = props.rotate ?? 0;
    return {
      rotate,
      defaultStyle: {
        height: '0px',
        width: '0px',
        borderLeft: '37.5px solid transparent',
        borderRight: '37.5px solid transparent',
      },
    };
  },
};
</script>
