describe("Bitmap", function() {
  var grid;

  it("should find closed path", function() {
    var map = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0],
    [0,0,1,1,1,1,1,0],
    [0,0,1,0,0,0,1,0],
    [0,0,1,1,0,0,1,0],
    [0,0,1,0,0,0,1,0],
    [0,0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0]
    ];
  bitmap = new Bitmap(map);
  expect(bitmap.closedPath()).toEqual(true);
  });

  it("should find closed path", function() {
    var map = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0],
    [0,0,1,1,1,1,1,0],
    [0,0,1,0,0,0,1,0],
    [0,0,1,1,0,0,0,0],
    [0,0,1,0,0,0,1,0],
    [0,0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0]
    ];
  bitmap = new Bitmap(map);
  expect(bitmap.closedPath()).toEqual(true);
  });

  it("should not find any closed path", function() {
    var map = [
    [0,1,1,0,0,0,0,0],
    [0,1,1,0,0,0,0,0],
    [0,1,1,0,0,0,0,0],
    [0,1,1,0,0,0,0,0],
    [0,1,1,0,0,0,0,0],
    [0,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
    ];
  bitmap = new Bitmap(map);
  expect(bitmap.closedPath()).toEqual(false);
  });

  it("should not find any closed path", function() {
    var map = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0],
    [0,0,1,1,1,1,1,0],
    [0,0,1,0,0,0,1,0],
    [0,0,1,0,0,1,0,0],
    [0,0,1,0,0,0,1,0],
    [0,0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0]
    ];
  bitmap = new Bitmap(map);
  expect(bitmap.closedPath()).toEqual(false);
  });

  it("should return 3 neighbours from a corner", function() {
    var map = [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,0,1],
    [2,3,4,5]
    ];

  bitmap = new Bitmap(map);
  expect(bitmap.neighbours(0,0)).toEqual([4,1,5]);
  });
});
