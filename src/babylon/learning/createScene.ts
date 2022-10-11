import {
  Scene,
  Engine,
  FreeCamera,
  Vector3,
  HemisphericLight,
} from "@babylonjs/core";

export class CreateScene {
  scene: Scene;
  engine: Engine;

  constructor(private canvas: HTMLCanvasElement) {
    // Create the engine and the scene
    this.engine = this.createEngine(this.canvas);
    this.scene = this.createScene();
    // Run render loop
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  private createEngine(canvas: HTMLCanvasElement): Engine {
    return new Engine(canvas, true);
  }

  private createScene(): Scene {
    const scene: Scene = new Scene(this.engine);

    const camera: FreeCamera = new FreeCamera(
      "camera",
      new Vector3(0, 1, 0),
      scene
    );
    camera.attachControl();

    const hemiLight: HemisphericLight = new HemisphericLight(
      "hemi-light",
      new Vector3(0, 1, 0),
      scene
    );
    return scene;
  }
}
