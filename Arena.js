Arena = function(game) {
    // Appel des variables nécéssaires
    this.game = game;
    var scene = game.scene;
        scene.collisionsEnabled = true
        scene.gravity = new BABYLON.Vector3(0.1, 0.1, 0.1);
    
    // Création de notre lumière principale
    var light = new BABYLON.PointLight("DirLight", new BABYLON.Vector3(0, 10, 0), scene);
	light.diffuse = new BABYLON.Color3(1, 1, 1);
	light.specular = new BABYLON.Color3(0.6, 0.6, 0.6);
	light.intensity = 1.5;

    // Créons une sphère 
    var playerBox = BABYLON.Mesh.CreateBox("headMainPlayer", 3, scene);
        playerBox.position = new BABYLON.Vector3(-20, 5, 5);
        playerBox.ellipsoid = new BABYLON.Vector3(2, 2, 2);
        playerBox.checkCollisions = true;
        
    // Ajoutons un sol pour situer la sphere dans l'espace
    var ground = BABYLON.Mesh.CreateGround("ground1", 20, 20, 20, scene);
        ground.checkCollisions = true;
};

