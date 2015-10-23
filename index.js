var game = new Phaser.Game(1920,1080,Phaser.AUTO,'asda',{ preload: preload, create: create, update: update });

function preload()
{
	game.load.image('cosa','assets/cieloestrellado-01.png');
}
function create()
{
	game.add.sprite(0,0,'cosa');
	game.add.text(0,0,luis);
}
function update()
{

}