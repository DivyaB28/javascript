/**
 * Description
Solving a polynomial is a common activity in the study of algebra and functions. Given a particular function f, its solution is defined as those values in the domain such that 

If there is, then based on the fact that the function is continuous, this simply means that the function cuts through the x-axis and therefore has a root.

The way this root is found is as follows:

The midpoint m of the interval [a,b] is computed.
From the intervals [a,m] and [m,b], which ever has a sign change, that's used as the next interval.
Step 1 and step 2 is repeated until the absolute difference between a and b is less than a given value, usually denoted as ϵ.

x=3, and hence end the iterations.
In the case above, we hit an exact root while computing the midpoint of the given interval and had to likewise end the bisection method with that solution.

Note that this doesn't happen always — sometimes, the x values converge down to such numbers that the difference between them is less than or equal to ϵ.
At that point, the midpoint of these very close values is termed as the root of the given polynomial.

In this exercise, you have to create a bisection() function in order to compute a root of a given polynomial function in a particular interval, if there is a root in the interval.

The polynomial function gets passed as the first argument to bisection(), while the second and third arguments represent the starting and ending points of the interval, respectively.

If there isn't a guarantee that there exists a root of the polynomial in the given interval, i.e. there is no sign change, the function bisection() must return null.

In addition to this, you must take ϵ as 0.0001 in the function.
//  * @param {*} f 
//  * @param {*} x1 
//  * @param {*} x2 
//  * @returns 
 */

function bisection(f, x1, x2) {
  const epsilon = 0.0001;
  let y1 = f(x1);
  let y2 = f(x2);
  // If provided with a root, return that root.
  if (y1 === 0) return x1;
  if (y2 === 0) return x2;

  //if there is a no sign change no root , return null
  if (y1 * y2 > 0) return null;

  //if the difference between x1 and x2 is greater than epsilon, we must continue with the bisection.
  let xMid, yMid;
  let diff = Math.abs(x1 - x2);
  while (diff > epsilon) {
    xMid = (x1 + x2) / 2;
    yMid = f(xMid);

    // If the mid point is a root, return it.
    if (yMid === 0) {
      return xMid;
    }

    // Determine which of the intervals [x1, xMid] and [xMid, x2]
    // has the sign change, and then continue with that interval.
    if (y1 * yMid <= 0) {
      x2 = xMid;
    } else {
      x1 = xMid;
    }

    diff = Math.abs(x1 - x2);
  }
  xMid = (x1 + x2) / 2;
  return Number(xMid.toFixed(3));
}

function f(x) {
  return x ** 2 + 2 * x - 15;
}

console.log(bisection(f, 2, 10));
// bisection(f, 2, 10)
// 3
// bisection(f, -6, -4)
// -5
// bisection(f, 3, 4)
// 3
// bisection(f, -6, 10)
// null
// bisection(f, 100, 1000)
// null

// function f(x) { return (x - 1) * (x + 1) }
// undefined
// bisection(f, 0, 10)
// 1
// bisection(f, -10, 0)
// -1
// bisection(f, -10, 10)
// null
