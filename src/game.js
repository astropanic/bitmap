var Game = function(width, height, size) {
  this.width  = width;
  this.height = height;
  this.size   = size;
  this.map   = new Array(this.width);
  for(var i = 0; i < this.width; i++){
    this.map[i] = new Array(this.height);
    for(j = 0; j < this.height; j++){
      this.map[i][j] = {};
    }
  };
};

Game.prototype.near = function(x,y){
  var cells = [];
  for(yy = y-1; yy <= y+1 ; yy++){
    if(yy > -1 && yy < height){
      for(xx = x-1; xx <= x+1 ; xx++){
        if(xx > -1 && xx < width){
          if(x != xx || y != yy){
            ctx.fillStyle = "white";
            ctx.fillRect(xx*size+2,yy*size+2,size-6,size-6);
          };
        }
      }
    }
  }
  return cells;
}

