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
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
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
      } else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
        alert("One of your values is not a number.")
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
  if (color === null) {
    ctx3.clearRect(10, 10, 1024, 128);
    break;
  }
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
   let canvas4 = document.getElementById('student-canvas-4');
   let ctx4 = canvas4.getContext('2d');
   let side1;
   let side2;
   let side3;
   let height;
   let hypotenuse;
   let base;
   let cancel = false;
  let triangleFits = false;
  let validTriangle = false;
  let areNumbers = false;

  while ((!triangleFits || !validTriangle || !areNumbers) && !cancel) {
    side1 = prompt("Side 1: ");
    side2 = prompt("Side 2: ");
    side3 = prompt("Side 3: ");
if (side1 === null || side2 === null || side3 === null) {
  cancel = true;
} else {
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      alert("One of your sides is not a number.");
      continue;
    } else {
      areNumbers = true;
    }
   if (side1 < side3 && side1 < side2) {
     height = side1;
     if (side3 > side2) {
       hypotenuse = side3;
       base = side2;
     } else if (side2 > side3){
       hypotenuse = side2;
       base = side3;
     }
   } else if (side1 > side3 && side1 < side2)  {
     base = side1;
     hypotenuse = side3;
     height = side2;
   } else if (side1 < side3 && side1 > side2) {
     base = side1;
     hypotenuse = side2;
     height = side3;
   } else if (side1 > side3 && side1 > side2) {
     hypotenuse = side1;
       if (side3 > side2) {
         base = side3;
         height = side2;
       } else if (side2 > side3) {
         base = side2;
         height = side3;
       }
   } else {
//left blank on purpose
   }
if (base > canvas4.width - 25 || height > canvas4.height - 25) {
  alert("Your triangle won't fit on the canvas.");
  continue;
} else {
  triangleFits = true;
}
   if (Math.pow(base, 2) + Math.pow(height, 2) !== Math.pow(hypotenuse, 2)) {
   alert("That's not a valid right triangle.");
   continue;
  	 } else {
       validTriangle = true;
     }
   }
}
  if (cancel) {
 ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
  } else {
    ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
    ctx4.beginPath();
    ctx4.moveTo(25, 25);
    ctx4.lineTo(25, parseFloat(height) + 25);
    ctx4.lineTo(parseFloat(base) + 25, parseFloat(height) + 25);
    ctx4.lineTo(25, 25);
    ctx4.stroke();
     }
  };

/*
 * Exercise 5.
 */

 const drawFace = function() {
 let canvas5 = document.getElementById('student-canvas-5');
 let ctx5 = canvas5.getContext('2d');
 let headRadius;
 let eyeRadius;
 let mouthRadius;
 let cancel = false;
 let isNumber = false;
 let smileFits = false;
 let validSmile = false;

 ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
 while ((!smileFits || !isNumber || !validSmile) && !cancel) {
   headRadius = prompt("Radius: ");

 if (headRadius === null) {
 cancel = true;
 } else {
   if (isNaN(headRadius)) {
     alert("One of your sides is not a number.");
   } else {
     isNumber = true;
   }

 if (headRadius * 2 > canvas5.width || headRadius * 2 > canvas5.height) {
 alert("Your smile won't fit on the canvas.");
 } else {
 smileFits = true;
 }
 if (headRadius < 32) {
 alert("Your radius must be at least 32.");
 } else {
     validSmile = true;
   }
 }
 }
 eyeRadius = 0.15 * headRadius;
 mouthRadius = 0.7 * headRadius;
 let faceX = canvas5.width/2;
 let faceY = canvas5.height/2;
 let eyeX1 = faceX - (headRadius * 0.4);
 let eyeX2 = faceX + (headRadius * 0.4);
 let eyeY = faceY - (headRadius * 0.4);

 if (cancel) {
   ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
 } else {
   ctx5.beginPath();
      ctx5.arc(faceX, faceY, headRadius, 0, Math.PI * 2, true); // Outer circle
      ctx5.moveTo(faceX + mouthRadius, faceY);
      ctx5.arc(faceX, faceY, mouthRadius, 0, Math.PI, false);  // Mouth (clockwise)
      ctx5.moveTo(eyeX1 + eyeRadius, eyeY);
      ctx5.arc(eyeX1, eyeY, eyeRadius, 0, Math.PI * 2, true);  // Left eye
      ctx5.moveTo(eyeX2 + eyeRadius, eyeY);
      ctx5.arc(eyeX2, eyeY, eyeRadius, 0, Math.PI * 2, true);  // Right eye
      ctx5.stroke();
    }
 };

/*
 * Exercise 6 (extra credit).
 */

 const drawPyramid = function() {
let canvas6 = document.getElementById('student-canvas-6');
let ctx6 = canvas6.getContext('2d');
let side;
  let x = 10;
  let y = canvas6.height - 10;
  let cancel = false;
   let inBounds = false;

side = prompt("Side: ");

if (side === null) {
  cancel = true;
} else {
  while (side.length < 1) {
  alert("Your block size must be at least 1.");
  side = prompt("Side: ");
}
while (isNaN(side)) {
alert("Your block size is not a number.");
side = prompt("Side: ");
}
  while (!inBounds) {
    if (side * 5 <= canvas6.height - 10) {
      inBounds = true;
    } else {
      alert("Your pyramid won't fit on the canvas.");
      side = prompt("Side: ");
    }
  }
}
  if (cancel === false) {
ctx6.clearRect(0, 0, 1024, 512);
for (let i = 0; i < 5; i++){
ctx6.strokeRect(x + (side * i), y - side, side, side);
}
  x += 0.5 * side;
  for (let i = 0; i < 4; i++) {
ctx6.strokeRect(x + (side * i), y - 2 * side, side, side);
}
  x += 0.5 * side;
  for (let i = 0; i <3; i++) {
ctx6.strokeRect(x + (side * i), y - 3 * side, side, side);
}
  x += 0.5 * side;
  for (let i = 0; i < 2; i++) {
ctx6.strokeRect(x + (side * i), y - 4 * side, side, side);
}
  x += 0.5 * side;
  for (let i = 0; i < 1; i++) {
ctx6.strokeRect(x + (side * i), y - 5 * side, side, side);
}
} else {
  ctx6.clearRect(0, 0, 1024, 512);
}
};
