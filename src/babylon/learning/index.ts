interface canvasConfig {
  height: number;
  width: number;
}

import TheScene from "./scene";

function initCanvas(canvas: HTMLCanvasElement, config?: canvasConfig) {
  if (config) {
    canvas.height = config.height;
    canvas.width = config.width;
  }
  const firstScene: TheScene = new TheScene(canvas);
}

export { initCanvas };
