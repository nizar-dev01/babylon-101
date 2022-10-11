interface canvasConfig {
  height: number;
  width: number;
}

import { CreateScene } from "./createScene";

function initCanvas(canvas: HTMLCanvasElement, config?: canvasConfig) {
  if (config) {
    canvas.height = config.height;
    canvas.width = config.width;
  }
  const firstScene: CreateScene = new CreateScene(canvas);
}

export { initCanvas };
