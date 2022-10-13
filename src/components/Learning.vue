<template>
  <canvas ref="canvas"></canvas>
</template>

<script lang="ts">
import { initCanvas } from '../babylon/learning/init';
let _this: any;
export default {
    created() {
        _this = this;
    },
    mounted: () => {
        const canvas: HTMLCanvasElement = (_this || { $refs: { canvas: null } }).$refs.canvas;
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
