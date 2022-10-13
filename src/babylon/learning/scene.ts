import {
  Scene,
  Engine,
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Mesh,
  StandardMaterial,
  Texture,
} from "@babylonjs/core";

export default class {
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
      new Vector3(0, 1, -5),
      scene
    );

    camera.attachControl();
    camera.speed = 0.1;

    const hemiLight: HemisphericLight = new HemisphericLight(
      "hemi-light",
      new Vector3(0, 1, 0),
      scene
    );
    hemiLight.intensity = 1;

    const ground: Mesh = MeshBuilder.CreateGround(
      "ground",
      { width: 10, height: 10 },
      scene
    );

    const ball: Mesh = MeshBuilder.CreateSphere("sphere", {
      diameter: 1,
    });

    ball.position = new Vector3(0, 1, 0);

    ball.material = this.createBallMaterial();
    ground.material = this.createGroundMaterial();

    return scene;
  }

  private createGroundMaterial(): StandardMaterial {
    const groundMaterial: StandardMaterial = new StandardMaterial(
      "ground-material",
      this.scene
    );

    const uvScale = 4;
    const textures: Texture[] = [];

    // Diffuse Texture
    const diffuseTex = new Texture("./textures/stone/diffuse.jpg", this.scene);
    groundMaterial.diffuseTexture = diffuseTex;
    textures.push(diffuseTex);

    // Normal Texture
    const normalTex = new Texture("./textures/stone/normal.jpg", this.scene);
    groundMaterial.bumpTexture = normalTex;
    groundMaterial.invertNormalMapX = true;
    groundMaterial.invertNormalMapY = true;
    textures.push(normalTex);

    // AO Texture
    const aoTex = new Texture("./textures/stone/ao.jpg", this.scene);
    groundMaterial.ambientTexture = aoTex;
    textures.push(aoTex);

    // Specular Texture
    const specTex = new Texture("./textures/stone/spec.jpg", this.scene);
    groundMaterial.specularTexture = specTex;
    textures.push(specTex);

    // Set the uvScale
    textures.forEach((tex) => {
      tex.uScale = uvScale;
      tex.vScale = uvScale;
    });

    return groundMaterial;
  }

  private createBallMaterial(): StandardMaterial {
    const ballMaterial: StandardMaterial = new StandardMaterial(
      "ball-material",
      this.scene
    );

    const uvScale = 1;
    const textures: Texture[] = [];

    // Diffuse Texture
    const diffuseTex = new Texture("./textures/metal/diffuse.jpg", this.scene);
    ballMaterial.diffuseTexture = diffuseTex;
    textures.push(diffuseTex);

    // Normal Texture
    const normalTex = new Texture("./textures/metal/normal.jpg", this.scene);
    ballMaterial.bumpTexture = normalTex;
    ballMaterial.invertNormalMapX = true;
    ballMaterial.invertNormalMapY = true;
    textures.push(normalTex);

    // AO Texture
    const aoTex = new Texture("./textures/metal/ao.jpg", this.scene);
    ballMaterial.ambientTexture = aoTex;
    textures.push(aoTex);

    // Specular Texture
    const specTex = new Texture("./textures/metal/spec.jpg", this.scene);
    ballMaterial.specularTexture = specTex;
    textures.push(specTex);

    // Set the uvScale
    textures.forEach((tex) => {
      tex.uScale = uvScale;
      tex.vScale = uvScale;
    });

    ballMaterial.specularPower = 1;

    return ballMaterial;
  }
}
