<template>
    <canvas ref="canvas"></canvas>
</template>

<script lang="ts">
import { App } from '@game';

interface Data {
    app: App | null;
}

export default {
    data():Data {
        return {
            app: null
        }
    },
    mounted() {
        const canvas: HTMLCanvasElement | any = this.$refs.canvas;
        this.app = new App(canvas);
    }
}
</script>
