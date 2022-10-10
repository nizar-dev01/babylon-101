<template>
  <canvas ref="canvas"></canvas>
</template>

<script lang="ts">
import { initCanvas } from './babylon/init';
export default {
  mounted() {
    const canvas:HTMLCanvasElement | any = this.$refs.canvas;
    initCanvas(canvas, {
      height: window.innerHeight,
      width: window.innerWidth
    });
  }
}
</script>

<style>

</style>
