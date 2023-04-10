class Start extends Phaser.Scene {

    constructor() {
        super("zone_Start");
    }
    preload() {
        this.load.image("Phaser_tuilesdejeu", "assets/photo.png");
        this.load.tilemapTiledJSON("nord", "assets/json/zone1.json");
        this.load.tilemapTiledJSON("sud", "assets/json/zone3.json");
        this.load.tilemapTiledJSON("est", "assets/json/zone2.json");
        this.load.tilemapTiledJSON("ouest", "assets/json/zone4.json");
        this.load.tilemapTiledJSON("start", "assets/json/startZone.json");
        this.load.tilemapTiledJSON("temple", "assets/json/temple.json");
 



        this.load.spritesheet('perso', 'assets/sprite.png',
        { frameWidth: 42, frameHeight: 51 });
    }
    create() {
        this.carteDuNiveau = this.add.tilemap("start");
        this.tileset = this.carteDuNiveau.addTilesetImage(
            "photo",
            "Phaser_tuilesdejeu"
        );
        const calque_start = this.carteDuNiveau.createLayer(
            "start",
            this.tileset
        );
        calque_start.setCollisionByProperty({ isSolid: true })

        const calque_Change = this.carteDuNiveau.createLayer(
            "Change",
            this.tileset
        );
        calque_Change.setCollisionByProperty({ isSolid: true })
        calque_Change.setVisible(false)

        
        this.player.setCollideWorldBounds(true);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, calque_start);

        this.physics.world.setBounds(0, 0, 1600, 1600);
        this.cameras.main.setBounds(0, 0, 1600, 1600);
        this.cameras.main.startFollow(this.player);

        this.anims.create({
            key: 'anim',
            frames: this.anims.generateFrameNumbers('perso', {start:0,end:9}),
            frameRate: 9,
            repeat: -1
        });
       
      


    }
    update() {
        if (this.cursors.left.isDown && this.cursors.down.isDown) {
            this.player.setVelocityX(-260); //alors vitesse négative en X
            this.player.setVelocityY(260);
            this.player.anims.play('anim', true);
        }
        else if (this.cursors.right.isDown && this.cursors.down.isDown) {
            this.player.setVelocityX(260); //alors vitesse négative en X
            this.player.setVelocityY(260);
            this.player.anims.play('anim', true);
        }
        else if (this.cursors.left.isDown && this.cursors.up.isDown) {
            this.player.setVelocityX(-260); //alors vitesse négative en X
            this.player.setVelocityY(-260);
            this.player.anims.play('anim', true);
        }
        else if (this.cursors.right.isDown && this.cursors.up.isDown) {
            this.player.setVelocityX(260); //alors vitesse négative en X
            this.player.setVelocityY(-260);
            this.player.anims.play('anim', true);
        }

        else { // sinon
            this.player.setVelocityY(0);
            this.player.setVelocityX(0);
        }

    }
    switchNord() 
    {
        this.scene.start("nord");
    }
    switchSud() 
    {
        this.scene.start("sud");
    }
    switchEst() 
    {
        this.scene.start("est");
    }
    switchWest() 
    {
        this.scene.start("ouest");
    }
    switchTemple() 
    {
        this.scene.start("temple");
    }
};
