window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
  let canvas = document.getElementById('student-canvas-1');
  let ctx = canvas.getContext('2d');
  let write = prompt("Message:");
  if (write === null) {
      ctx.clearRect(0, 0, 1024, 128);
  } else {
  while (write.length > 50){
    alert("Your message is too long. Keep it under 50 characters.");
    write = prompt("Message:");
  }
  ctx.font = '48px sans-serif';
  ctx.clearRect(0, 0, 1024, 128);
  var text = ctx.measureText(write);
ctx.save();
  if (text.width > canvas.width - 30) {
    ctx.scale((canvas.width - 30)/text.width, 1);
  }
  ctx.strokeText(write, 30, 70);
}
ctx.restore();
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
  let canvas2 = document.getElementById('student-canvas-2');
  let ctx2 = canvas2.getContext('2d');
      let cancel = false;
      let width;
      let height;
      let x;
      let y;
      let validInput = false;
while (validInput === false && cancel === false) {
   width = prompt("Width: ");
   height = prompt("Height: ");
   x = prompt("X: ");
   y = prompt("Y: ");
   if (width === null || height === null || x === null || y === null) {
       cancel = true;
   } else {
     width = Number(width);
     height = Number(height);
     x = Number(x);
     y = Number(y);
      if (width < 1 || width > 1024) {
        alert("Your width must be between 1 and 1024.");
      } else if (height < 1 || height > 512) {
        alert("Your height must be between 1 and 512.");
      } else if (x < 1) {
        alert("Your x-coordinate must be between 1 and 1024.");
      } else if (y < 1) {
        alert("Your y-coordinate must be between 1 and 512.");
      } else if (x + width > canvas2.width) {
        alert("Your rectangle won't fit on the canvas.");
      } else if (x + height > canvas2.height) {
        alert("Your rectangle won't fit on the canvas.");
      } else {
        validInput = true;
      }
    }
}
        ctx2.clearRect(0, 0, 1024, 512);
        if (cancel !== true) {
        ctx2.strokeRect(x, y, width, height);
      }
    };

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  let canvas3 = document.getElementById('student-canvas-3');
  let ctx3 = canvas3.getContext('2d');
  let cancel = false;
  let color;

while (cancel === false) {
  color = prompt("Color: ");
  color = color.toLowerCase(color);

  switch (color) {
    case "black":
      ctx3.clearRect(10, 10, 1024, 128);
      ctx3.beginPath();
      ctx3.rect(10, 10, 150, 50);
      ctx3.fillStyle = "black";
      ctx3.fill();
      cancel = true;
      break;
    case "blue":
      ctx3.clearRect(10, 10, 1024, 128);
      ctx3.beginPath();
      ctx3.rect(10, 10, 100, 50);
      ctx3.fillStyle = "blue";
      ctx3.fill();
      cancel = true;
      break;
   case "green":
     ctx3.clearRect(10, 10, 1024, 128);
     ctx3.beginPath();
     ctx3.rect(10, 10, 100, 50);
     ctx3.fillStyle = "green";
     ctx3.fill();
     cancel = true;
     break;
   case "orange":
    ctx3.clearRect(10, 10, 1024, 128);
    ctx3.beginPath();
    ctx3.rect(10, 10, 100, 50);
    ctx3.fillStyle = "orange";
    ctx3.fill();
    cancel = true;
    break;
  case "purple":
    ctx3.clearRect(10, 10, 1024, 128);
    ctx3.beginPath();
    ctx3.rect(10, 10, 100, 50);
    ctx3.fillStyle = "purple";
    ctx3.fill();
    cancel = true;
    break;
  case "red":
    ctx3.clearRect(10, 10, 1024, 128);
    ctx3.beginPath();
    ctx3.rect(10, 10, 100, 50);
    ctx3.fillStyle = "red";
    ctx3.fill();
    cancel = true;
    break;
  case "yellow":
   ctx3.clearRect(10, 10, 1024, 128);
   ctx3.beginPath();
   ctx3.rect(10, 10, 100, 50);
   ctx3.fillStyle = "yellow";
   ctx3.fill();
   cancel = true;
   break;
 default:
   alert(color + " is not a supported color.");
   break;
  }
}
};


/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
