interface canvasConfig {
  height: number;
  width: number;
}

function initCanvas(canvas: HTMLCanvasElement, config?: canvasConfig) {
  if (config) {
    canvas.height = config.height;
    canvas.width = config.width;
  }
}

export { initCanvas };
