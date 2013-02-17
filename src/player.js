var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.cells = [[x, y]];
};


Player.prototype.colorize = function(color, game) {
  for(var i = 0; i < this.cells.length; i++){
    var cell = this.cells[i];
    var x    = cell[0];
    var y    = cell[1];
    game.map[x][y].color = color;
    ctx.fillStyle = game.map[x][y].color;
    ctx.fillRect(x*size+4,y*size+4,size-10,size-10);
  };
};

Player.prototype.fill = function(color, game){
  this.colorize(color, game);
  this.tiles = [];
  for(var i = 0; i < this.cells.length; i++){
    var cell = this.cells[i];
    var x    = cell[0];
    var y    = cell[1];
    for(var yy = y-1; yy <= y+1 ; yy++){
      if((yy < 0) || (yy > game.height-1)){
        continue;
      }
      for(var xx = x-1; xx <= x+1 ; xx++){
        if((xx < 0) || (xx > game.width-1)){
          continue;
        }
        this.tiles.push([xx, yy]);
      }
    }
  }
};
