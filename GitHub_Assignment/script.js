$(function () {
    
    // Obtain a canvas drawing surface from fabric.js
    var canvas = new fabric.Canvas('c');
 
    // Create a text object. 
    // Does not display it-the canvas doesn't 
    // know about it yet.
    var hi = new fabric.Text('You can move this text and the shapes around, try it! Click the sun to see the gradient.', {
      left: canvas.getWidth() / 2,
      top: canvas.getHeight() / 2   
    });
  
    // Attach it to the canvas object, then (re)display
    // the canvas.  
    canvas.add(hi);

    var rect = new fabric.Rect({
  left: 200,
  top: 200,
  fill: 'red',
  width: 140,
  height: 140
});
canvas.add(rect);

var circle = new fabric.Circle({
  radius: 50, fill: 'yellow', left: 300, top: 100
});
var triangle = new fabric.Triangle({
  width: 180, height: 100, fill: 'blue', left: 180, top: 100
});

canvas.add(circle, triangle);

circle.setGradient('fill', {
  x1: 0,
  y1: -circle.height / 2,
  x2: 0,
  y2: circle.height / 2,
  colorStops: {
    0: '#feff4a',
    1: '#ff6600'
  }
});



        
  });


