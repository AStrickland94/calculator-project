# calculator-project

A project to create a functioning calculator using javascript (with html & css)

## Goals

My goal is to make a working calculator that contains functionality for each operator as well as additional keys such as decimals, negative and clear. The functionality will be created using HTML, SCSS and Javascript.

## MVP:

-   HTML/SCSS

1. Create a calculator to be rendered to the html page
2. it should have number keys from 0 to 9
3. It should have operator keys (+, -, /, \*, =)
4. It should have a display rendering the current calculation in a box at the top
5. It should also have a "." key

-   JavaScript

1. Should render the current calculation in a box at the top (calculator display)
2. It should handle decimals
3. It doesn't need to support orders of operation
4. It should not use eval() or Function() constructor (edited)

## Roadblocks

Trying to fit too much into a single function - makes code much more difficult to read and understand, higher chance of bugs

Trying to make existing code work instead of starting afresh - takes longer to code, inefficient, causes issues later on

## Yet to implement / Current issues

If the number repeats in formula then negative will edit the first instance of the number instead of last

Using an operator before any number causes issues with double numbers (single values work by using num2 as 0)

when numbers get too big they break out of their boxes (large values transform to scientific notation)

multiple .'s in one number causes issues

3,6 and 7 react strangely to decimals

calculator is a little small

delete isn't resetting the operator properly
