import {
  Scene,
  Engine,
  FreeCamera,
  Vector3,
  MeshBuilder,
  Mesh,
  CubeTexture,
  PBRMaterial,
  Texture,
  SceneLoader,
} from "@babylonjs/core";
import "@babylonjs/loaders";

export default class PBRTextureExample {
  scene: Scene;
  engine: Engine;

  constructor(private canvas: HTMLCanvasElement) {
    // Create the engine and the scene
    this.engine = this.createEngine(this.canvas);
    this.scene = this.createScene();
    this.createEnvironment();
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

    const envTex: CubeTexture = CubeTexture.CreateFromPrefilteredData(
      "./environment/sky.env",
      scene
    );

    scene.environmentTexture = envTex;
    scene.createDefaultSkybox(envTex, true);
    scene.environmentIntensity = 0.5;

    return scene;
  }

  private createEnvironment(): void {
    const ground: Mesh = MeshBuilder.CreateGround(
      "ground",
      { width: 10, height: 10 },
      this.scene
    );

    this.createBarrel();

    ground.material = this.createAsphalt();
  }

  private createAsphalt(): PBRMaterial {
    const pbr = new PBRMaterial("pbr", this.scene);
    pbr.environmentIntensity = 0.25;

    const textures: Texture[] = [];
    const albedoTexture: Texture = new Texture(
      "./textures/asphalt/diffuse.jpg",
      this.scene
    );
    pbr.albedoTexture = albedoTexture;
    textures.push(albedoTexture);

    const bumpTexture: Texture = new Texture(
      "./textures/asphalt/normal.jpg",
      this.scene
    );
    pbr.bumpTexture = bumpTexture;
    textures.push(bumpTexture);

    const metallicTexture: Texture = new Texture(
      "./textures/asphalt/ao_rough.jpg",
      this.scene
    );
    textures.push(metallicTexture);

    const uvScale: number = 2;
    textures.forEach((tex) => {
      tex.uScale = uvScale;
      tex.vScale = uvScale;
    });

    pbr.invertNormalMapX = true;
    pbr.invertNormalMapY = true;

    // pbr.useAmbientOcclusionFromMetallicTextureRed = true;
    // pbr.useRoughnessFromMetallicTextureGreen = true;
    // pbr.useMetallnessFromMetallicTextureBlue = true;

    pbr.roughness = 1;
    return pbr;
  }

  private async createBarrel(): Promise<void> {
    // SceneLoader.ImportMesh(
    //   "",
    //   "./models/",
    //   "barrel.glb",
    //   this.scene,
    //   (meshes) => console.log("Import is done!", meshes)
    // );

    const models = await SceneLoader.ImportMeshAsync(
      "",
      "./models/",
      "barrel.glb",
      this.scene
    );
    console.log(models);
  }
}
