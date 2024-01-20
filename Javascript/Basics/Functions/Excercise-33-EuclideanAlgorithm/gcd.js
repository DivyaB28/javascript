/**
 *  we want to find 
gcd
(
104
,
16
)
gcd(104,16). Since 
104
m
o
d
16
=
8
104mod16=8, 
gcd
(
104
,
16
)
=
gcd
(
16
,
8
)
gcd(104,16)=gcd(16,8). Next, since 
16
m
o
d
8
=
0
16mod8=0, 
gcd
(
16
,
8
)
=
gcd
(
8
,
0
)
gcd(16,8)=gcd(8,0). And finally, 
gcd
(
8
,
0
)
=
8
gcd(8,0)=8. Ultimately, 
gcd
(104,16)
=
8
gcd(104,16)=8.
 * 
 */

function findGcd(a, b) {
  let r = a % b;
  if (b === 0) return a;

  return findGcd(b, r);
}

console.log(findGcd(104, 16));
