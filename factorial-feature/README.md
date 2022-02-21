# Factorial Feature

## Overview
In this project, you will use test-driven development to build a factorial method. You will use the assert module and mocha testing library to drive your development using tests that follow the phases: setup, exercise, and verification.

### How to Calculate Factorial 
You take an integer and you multiply that by all the integers that are less than it.
The factorial of an integer `n` is denoted by an exclamation mark `n!`, so `5!` is equal to:

 `5 × 4 × 3 × 2 × 1 = 120`
 
### Edge Case
An edge case is a problem or situation that occurs only at an extreme (maximum or minimum) operating parameter — you can think of these as special cases that you need to account for. Based on the logic of factorials, you would expect that calculating 0! would look like this:
`0 x 0 = 0`

But mathematically this is not true. In this instance of a factorial method, there is an edge-case which is that 0 factorial (or 0!) is 1.

## Technologies 
+ JavaScript
+ TDD Cycle (red, green, refactor)
+ Mocha keywords (describe, it, assert)
+ Mocha test pattern (setup, exercise, verify)

## Key Learnings
+ I was able to add exactly enough logic to satisfy the specification by using TDD to develop a factorial function by adding the requirements in as tests with descriptive messages. 
+ I also dealt with a known edge case by purposely failing a test and then adding an implementation that allowed me to pass the test.
