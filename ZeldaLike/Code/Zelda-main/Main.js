class Main extends Phaser.Scene {
    constructor() {
        super("Main");
    }
    preload() {
        this.load.image("bouton", "assets/Bouton.png");
        this.load.image("logo", "assets/Logo.png");
        //this.load.image("Logo", "assets/Logo.png");
        //this.load.image("TitleScreen", "assets/TitleScreen.png")
    }
    create() {
        this.add.image(400, 225, "TitleScreen");
        this.add.image(380, 120, "assets/Logo.png").setScale(0.2);
        this.gameButton = this.add.image(325
            , 325, "bouton").setInteractive().setScale(0.1);
        this.gameButton.on("pointerdown", this.launchGame, this);
    }
    update() {}
    launchGame(){
        console.log("Launch Game");
        this.scene.start('Start', {
            teeth : 0,
            fury : 0,
            health : 100,
            spawnX : 100,
            spawnY : 100,
        });
    }
}