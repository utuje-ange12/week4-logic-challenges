# week4-logic-challenges

JavaScript solutions (plain JS, run with `node roundN.js`) for the Week 4 logic challenges.
Every solution starts with a pseudocode comment (Understand / Examples / Plan) and has at least 3 `console.log` tests, including an edge case. Loops only: no `.map`, `.filter` or `.reduce`.

## Files
- `round1.js` - challenges 1-5 (numbers & conditions)
- `round2.js` - challenges 6-12 (strings)
- `round3.js` - challenges 13-17 (loops & patterns)
- `round4.js` - challenges 18-20 (boss round)

## Challenges solved
| Round | Challenges | Points each | Subtotal |
|---|---|---|---|
| 1 | 1-5 | 1 | 5 |
| 2 | 6-12 | 2 | 14 |
| 3 | 13-17 | 3 | 15 |
| Boss | 18-20 | 5 | 15 |

**Total leaderboard points: 49**

## Solution comparisons (readability vs. cleverness)
- `isLeapYear` (round1.js): step-by-step checks vs. one-line boolean expression.
- `isPalindrome` (round2.js): two pointers vs. compare with `reverseString`.
- `sumTo` (round3.js): loop vs. formula n(n+1)/2.

## The bug that took me longest to find
When I tried to commit challenge 15, Git said "no changes added to commit" even though I had run `git add round3.js`. I had saved the file again after running `git add`, so the new changes were not staged. I found the cause by running `git status`, which listed `round3.js` under "Changes not staged for commit". The fix was to save the file, run `git add round3.js` again and then commit. Now I always follow the order: paste, save, run with node, `git add`, `git commit`.