<template>
    <canvas ref="canvas"></canvas>
</template>

<script lang="ts">
import { App } from '../babylon/game/app';
export default {
    mounted() {
        const canvas: HTMLCanvasElement | any = this.$refs.canvas;
        new App(canvas);
        console.log("@ Game Page :)")
    }
}
</script>

<style>

</style>
