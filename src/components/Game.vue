<template>
    <canvas ref="canvas"></canvas>
</template>

<script lang="ts">
// import { App } from '@game';
import { App } from '../babylon/game';
let _this: any;
export default {
    created(){
        _this = this;
    },
    mounted: () => {
        const canvas: HTMLCanvasElement = ( _this || { $refs: { canvas: null } }).$refs.canvas;
        new App(canvas);
    }
}
</script>
