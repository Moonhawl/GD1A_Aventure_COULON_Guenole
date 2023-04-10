class Nord extends Phaser.Scene {
    constructor() {
        super("zone_Nord");
    }
    preload() { }

    create() {
        this.carteDuNiveau = this.add.tilemap("nord");
        this.tileset = this.carteDuNiveau.addTilesetImage(
            "photo",
            "Phaser_tuilesdejeu"
        );
        const calque_north = this.carteDuNiveau.createLayer(
            "nord",
            this.tileset
        );
        calque_north.setCollisionByProperty({ isSolid: true })

        const calque_Change = this.carteDuNiveau.createLayer(
            "Change",
            this.tileset
        );
        calque_Change.setCollisionByProperty({ isSolid: true })
        calque_Change.setVisible(false)

        
        this.player.setCollideWorldBounds(true);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, calque_north);

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
    switchStart() 
    {
        this.scene.start("start");
    }
    switchOuest() 
    {
        this.scene.start("ouest");
    }
    switchEst() 
    {
        this.scene.start("est");
    }
};