<template>
  <canvas ref="canvas"></canvas>
</template>

<script lang="ts">
import { initCanvas } from '../babylon/learning/init';
export default {
    mounted() {
        const canvas: HTMLCanvasElement | any = this.$refs.canvas;
        initCanvas(canvas, {
            height: window.innerHeight,
            width: window.innerWidth
        });
        console.log("@ Learning Page :)")
    }
}
</script>

<style>

</style>
