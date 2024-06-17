import { useState, useRef, useEffect } from "react";
import { Delaunay } from "d3-delaunay";

type Coordinate = {
  x: number;
  y: number;
};

// create SimpleTriangle type
type SimpleTriangle = {
  a: Coordinate;
  b: Coordinate;
  c: Coordinate;
};

// initialize points, point velocities, and triangles to be drawn
const points: Coordinate[] = [];
const pointsVelocity: Coordinate[] = [];
const triangles: SimpleTriangle[] = [];

// const [gradientBottomColour, setGradientBottomColour] = useState("#104a85");
// const [gradientTopColour, setGradientTopColour] = useState("#abbdcc");
// let gradientBottomColour = "#104a85";
// let gradientTopColour = "#abbdcc";

// // initialize gradient start and end colours
// const [wantedGradientBottomColour, setWantedGradientBottomColour] =
//   useState("#104a85"); // #210f3b, #1b1752, #104a85, #145ca6
// const [wantedGradientTopColour, setWantedGradientTopColour] =
//   useState("#abbdcc"); // #88bdb0, #ffffff, #a1b1bf, #abbdcc
// let wantedGradientBottomColour = "#210f3b";
// let wantedGradientTopColour = "#88bdb0";

// const [gradientChangeStep, setGradientChangeStep] = useState({
//   r: 0,
//   g: 0,
//   b: 0,
// });

interface Props {
  scrollSpeed?: number;
  topColour: number[];
  bottomColour: number[];
}

// movingBackground component responsible for the background to the website
function Background({ scrollSpeed = 0, topColour, bottomColour }: Props) {
  const gradientTopColourRef = useRef([136, 189, 176]); // ocean 171, 189, 204, original 136, 189, 176
  const gradientBottomColourRef = useRef([33, 15, 59]); // ocean 16, 74, 133, original 33, 15, 59

  const wantedGradientBottomColourRef = useRef(bottomColour);
  const wantedGradientTopColourRef = useRef(topColour);

  useEffect(() => {
    wantedGradientBottomColourRef.current = bottomColour;
    wantedGradientTopColourRef.current = topColour;
    console.log("Should have changed colour to", topColour, bottomColour);
  }, [topColour, bottomColour]);

  // create canvas reference to pass to the canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // initialize width and height
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const scrollSpeedRef = useRef(scrollSpeed);

  useEffect(() => {
    scrollSpeedRef.current = scrollSpeed;
  }, [scrollSpeed]);

  // generate 150 random points on initial render
  useEffect(() => {
    generateRandomPoints(150, window.innerWidth, window.innerHeight);
    // begin animation loop
    animate();
  }, []);

  useEffect(() => {
    // add event listeners for window resize and mouse movement
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
  }, []);

  const prevScrollSpeedRef = useRef(scrollSpeedRef.current);

  // function run to animate the points
  const animate = () => {
    // update point locations and velocities
    const speed =
      scrollSpeedRef.current === prevScrollSpeedRef.current
        ? 0
        : scrollSpeedRef.current;
    updatePoints(speed);
    // Update the ref directly
    prevScrollSpeedRef.current = scrollSpeedRef.current;
    // update gradient colours
    updateGradientColours(
      gradientBottomColourRef,
      gradientTopColourRef,
      wantedGradientBottomColourRef,
      wantedGradientTopColourRef
    );
    // generate triangles
    generateTriangles();
    // draw triangles to the background canvas
    drawToBackground(
      canvasRef,
      window.innerWidth,
      window.innerHeight,
      triangles,
      gradientBottomColourRef,
      gradientTopColourRef
    );

    // schedule next animation frame
    requestAnimationFrame(animate);
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: -10,
        overflow: "hidden",
        left: "0px",
      }}
    >
      {/* create canvas and pass in the canvas reference */}
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
}

function coloursAreClose(
  colour1: number[],
  colour2: number[],
  epsilon: number
) {
  return (
    Math.abs(colour1[0] - colour2[0]) < epsilon &&
    Math.abs(colour1[1] - colour2[1]) < epsilon &&
    Math.abs(colour1[2] - colour2[2]) < epsilon
  );
}

// function to update gradient colours
function updateGradientColours(
  gradientBottomColourRef: React.MutableRefObject<number[] | null>,
  gradientTopColourRef: React.MutableRefObject<number[] | null>,
  wantedGradientBottomColourRef: React.MutableRefObject<number[] | null>,
  wantedGradientTopColourRef: React.MutableRefObject<number[] | null>
) {
  const epsilon = 1;
  if (
    coloursAreClose(
      gradientBottomColourRef.current!,
      wantedGradientBottomColourRef.current!,
      epsilon
    ) &&
    coloursAreClose(
      gradientTopColourRef.current!,
      wantedGradientTopColourRef.current!,
      epsilon
    )
  ) {
    return;
  }

  if (
    gradientBottomColourRef.current !== null &&
    gradientTopColourRef.current !== null
  ) {
    const newGradientBottomColour = interpolateColor(
      gradientBottomColourRef.current,
      wantedGradientBottomColourRef.current!,
      0.04
    );
    const newGradientTopColour = interpolateColor(
      gradientTopColourRef.current,
      wantedGradientTopColourRef.current!,
      0.04
    );

    gradientBottomColourRef.current = newGradientBottomColour;
    gradientTopColourRef.current = newGradientTopColour;
  }
}

// function to generate random points
function generateRandomPoints(
  numberOfPoints: number,
  width: number,
  height: number
) {
  // initialize intesity of random velocity
  const velocityIntesity = 0.01;
  // set points and point velocity arrays to empty
  points.length = 0;
  pointsVelocity.length = 0;

  points.push({
    x: 0,
    y: 0,
  });

  points.push({
    x: 0,
    y: height,
  });

  points.push({
    x: width,
    y: 0,
  });

  points.push({
    x: width,
    y: height,
  });

  for (let i = 0; i < 4; i++) {
    pointsVelocity.push({
      x: 0,
      y: 0,
    });
  }
  numberOfPoints -= 4;

  for (let i = 0; i < numberOfPoints; i++) {
    // add randomly placed point with random velocity close to the center of the screen
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
    });
    pointsVelocity.push({
      x: Math.random() * velocityIntesity * 2 - velocityIntesity,
      y: Math.random() * velocityIntesity * 2 - velocityIntesity,
    });
  }
}

// get squared distance between 2 coordinates
function getSquaredDistance(p1: Coordinate, p2: Coordinate) {
  return Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2);
}

// get angle between 2 coordinates
function getAngleBetweenPoints(a: Coordinate, b: Coordinate) {
  return Math.atan2(b.y - a.y, b.x - a.x);
}

// function to generate triangles from points
function generateTriangles() {
  // reset triangle array to be empty
  triangles.length = 0;

  // mapping points to format accepted by d3 library
  const delaunayPoints = Float64Array.from(
    points.flatMap((point) => [point.x, point.y])
  );

  // create delaunay object from the points
  const delaunay = new Delaunay(delaunayPoints);
  // retrieve triangles from the delaunay object
  const dTriangles = delaunay.triangles;

  // convert delaunay triangles to SimpleTriangle type
  for (let i = 0; i < dTriangles.length; i += 3) {
    const a = points[dTriangles[i]];
    const b = points[dTriangles[i + 1]];
    const c = points[dTriangles[i + 2]];

    const triangle = { a, b, c };

    triangles.push(triangle);
  }
}

// function to get colour from gradient using a value from 0 to 1
function interpolateColor(color1: number[], color2: number[], factor: number) {
  const r = color1[0] + factor * (color2[0] - color1[0]);
  const g = color1[1] + factor * (color2[1] - color1[1]);
  const b = color1[2] + factor * (color2[2] - color1[2]);

  return [r, g, b];
}

// function to update the point positions
function updatePoints(localScrollSpeed: number) {
  // set constants
  const gravity = 0;
  const intensity = 200;
  const bounceCoefficient = 0.1;
  const wallFriction = 0.95;
  const wallStickiness = 1;
  const dragCoefficient = 0.999;
  const distanceThreshold = 10000;
  const scrollingForce = 0.002;
  const scrollWallTolerance = 2;
  const maxSpeed = 10;

  // loop through all the points
  for (let i = 0; i < points.length; i++) {
    if (
      points[i].y > scrollWallTolerance &&
      points[i].y < window.innerHeight - scrollWallTolerance
    ) {
      // movement based on scroll speed
      pointsVelocity[i].y -= localScrollSpeed * scrollingForce;
    }

    // apply repulsive force from all other points
    for (let j = 0; j < points.length; j++) {
      // skip if is itself
      if (i === j) {
        continue;
      }

      // calculate squared distance, skip if distance is negligable
      const distance = getSquaredDistance(points[i], points[j]);
      if (distance > distanceThreshold) {
        continue;
      }
      // calculate angle to apply the foce
      const angle = getAngleBetweenPoints(points[i], points[j]);

      // apply velocity based on squared distance
      pointsVelocity[i] = {
        x: pointsVelocity[i].x - (Math.cos(angle) / (distance + 5)) * intensity,
        y: pointsVelocity[i].y - (Math.sin(angle) / (distance + 5)) * intensity,
      };
    }
    // update position based on velocity
    points[i].x += pointsVelocity[i].x;
    points[i].y += pointsVelocity[i].y;

    // apply drag
    pointsVelocity[i].x *= dragCoefficient;
    pointsVelocity[i].y *= dragCoefficient;

    // apply gravity
    pointsVelocity[i].y += gravity;

    // add horizontal border collisions
    if (points[i].x < 0) {
      points[i].x = 0;
      // apply bounce
      pointsVelocity[i].x = -pointsVelocity[i].x * bounceCoefficient;
      // apply wall stickiness
      pointsVelocity[i].x *= wallStickiness;
      // apply wall friction
      pointsVelocity[i].y *= wallFriction;
    } else if (points[i].x > window.innerWidth) {
      points[i].x = window.innerWidth;
      // apply bounce
      pointsVelocity[i].x = -pointsVelocity[i].x * bounceCoefficient;
      // apply wall stickiness
      pointsVelocity[i].x *= wallStickiness;
      // apply wall friction
      pointsVelocity[i].y *= wallFriction;
    }

    // add vertical border collisions
    if (points[i].y < 0) {
      points[i].y = 0;
      // apply bounce
      pointsVelocity[i].y = -pointsVelocity[i].y * bounceCoefficient;
      // apply wall stickiness
      pointsVelocity[i].y *= wallStickiness;
      // apply wall friction
      pointsVelocity[i].x *= wallFriction;
    } else if (points[i].y > window.innerHeight) {
      points[i].y = window.innerHeight;
      // apply bounce
      pointsVelocity[i].y = -pointsVelocity[i].y * bounceCoefficient;
      // apply wall stickiness
      pointsVelocity[i].y *= wallStickiness;
      // apply wall friction
      pointsVelocity[i].x *= wallFriction;
    }

    // limit speed
    const speed = Math.sqrt(
      pointsVelocity[i].x * pointsVelocity[i].x +
        pointsVelocity[i].y * pointsVelocity[i].y
    );

    if (speed > maxSpeed) {
      pointsVelocity[i].x *= maxSpeed / speed;
      pointsVelocity[i].y *= maxSpeed / speed;
    }
  }
}

// function to draw triangles to the canvas
function drawToBackground(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  width: number,
  height: number,
  trianglesToDraw: SimpleTriangle[],
  gradientBottomColourRef: React.MutableRefObject<number[] | null>,
  gradientTopColourRef: React.MutableRefObject<number[] | null>
) {
  // create canvas and canvas context objects if website has fully loaded on client side
  const canvas = canvasRef.current!;
  const ctx = canvas.getContext("2d")!;
  // set background
  ctx.fillStyle = "#243333";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "#000000";

  // for each triangle
  for (let i = 0; i < trianglesToDraw.length; i++) {
    // calculate normalized y coordinate
    const averageYNormalized =
      (trianglesToDraw[i].a.y +
        trianglesToDraw[i].b.y +
        trianglesToDraw[i].c.y) /
      3 /
      height;

    const colour = interpolateColor(
      gradientBottomColourRef.current!,
      gradientTopColourRef.current!,
      1 - averageYNormalized
    );

    // get colour from gradient based on normalized y coordinate and set for triangle
    ctx.fillStyle = `rgb(${colour[0]}, ${colour[1]}, ${colour[2]})`;

    // follow path of triangle
    ctx.beginPath();
    ctx.moveTo(trianglesToDraw[i].a.x, trianglesToDraw[i].a.y);
    ctx.lineTo(trianglesToDraw[i].b.x, trianglesToDraw[i].b.y);
    ctx.lineTo(trianglesToDraw[i].c.x, trianglesToDraw[i].c.y);
    ctx.lineTo(trianglesToDraw[i].a.x, trianglesToDraw[i].a.y);
    ctx.closePath();
    // fill triangle
    ctx.fill();
  }
}

// export MovingBackground component
export default Background;
