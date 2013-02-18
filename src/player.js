window.include = function(x, y){
  var found = false;
  for(var i = 0 ; i < x.length ; i++){
    if(_.isEqual(x[i], y)){
      found = true;
    }
  }
  return found;
}

var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.cells = [{x:0, y:0}];
};


Player.prototype.colorize = function(color, game) {
  for(var i = 0; i < this.cells.length; i++){
    var cell = this.cells[i];
    var x    = cell.x
    var y    = cell.y;
    game.map[x][y].color = color;
    ctx.fillStyle = game.map[x][y].color;
    ctx.fillRect(x*size+4,y*size+4,size-10,size-10);
  };
};

Player.prototype.fill = function(color, game){
  this.tmp = [];
  this.colorize(color, game);
  this.tiles = this.cells;

  while(this.tiles.length > 0){
    var cell = this.tiles.shift();
    var x = cell.x;
    var y = cell.y;

    game.map[x][y].marked = true;


    for(var yy = y-1; yy <= y+1 ; yy++){
      if((yy < 0) || (yy > game.height-1)){
        continue;
      }
      for(var xx = x-1; xx <= x+1 ; xx++){
        if((xx < 0) || (xx > game.width-1)||(xx == x && yy == y)){
          continue;
        }
        if(game.map[xx][yy].marked == true || game.map[xx][yy].color != color){
          continue
        }
        else {
          if(x == xx || y == yy){
            this.tiles.push({x:xx, y:yy});
            this.tmp.push([xx, yy]);
            game.map[xx][yy].marked = true;
          }
        }
      }
    }
  }
  this.cells = this.tmp;
  for(var i = 0; i < this.tmp.length; i++){
    var cell = this.tmp[i];
    var x    = cell[0];
    var y    = cell[1];
    game.map[x][y].color = "white";
    ctx.fillStyle = game.map[x][y].color;
    ctx.fillRect(x*size+4,y*size+4,size-10,size-10);
  };
};

