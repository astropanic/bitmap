var Bitmap = function (map) {
  this.map  = map;
  this.size = map[0].length,
  this.closedPath = function(){
    return true;
  },
  this.neighbours = function(x, y) {
    tmp = x;
    x = y;
    y = tmp;
    cells = new Array();
    for(yy = y-1; yy <= y+1; yy ++){
      for(xx = x-1; xx <= x+1; xx ++){
        if(xx>=0 && xx <= this.size && yy>=0 && yy <= this.size && (xx != x || yy != y)){
          cells.push(this.map[xx][yy]);
        }
      }
    }
    return cells;
  }
};
