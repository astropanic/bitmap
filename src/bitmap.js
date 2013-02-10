var Bitmap = function (map) {
  this._map = map,
  this.map = function(x, y){
    return this._map[x][y];
  },
  this.size = this._map[0].length,
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
          cells.push( {x: xx, y: yy, value: this.map(xx, yy) });
        }
      }
    }
    return cells;
  },

  this.connected = function(x, y){
    return this.neighbours(x, y);
  }
};
