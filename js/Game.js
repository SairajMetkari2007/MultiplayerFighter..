class Game{
  constructor(){

  }
getState(){
    var gameStateRef=database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState=data.val();

    })    
}

update(state){
    database.ref('/').update({
        gameState:state
    });
    
}
async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    
}
play(){
    form.hide();
    Player.getPlayerInfo();
       
    background(backgroundImg);
    fighter1 = createSprite(200,580,20,20);
    fighter1.addAnimation('fighter1',fighter1Img);
    fighter1.scale = 2.5   

    if (keyDown('P')){
      fighter1.changeAnimation(fighter1PunchImg);
    }
    drawSprites();
  }

}