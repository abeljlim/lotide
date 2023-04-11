# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @abeljlim/lotide`

**Require it:**

`const _ = require('@abeljlim/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: returns the first element of the array
* `middle(arr)`: returns an array of the one or two middle element(s) of the array
* `tail(arr)`: returns an array of all of the elements except for the first element
* `assertEqual(actual, expected)`: displays a line indicating a pass if the value of actual === the value of expected, and a line indicating failure if the value of actual !== the value of expected
* `eqArrays(arr1, arr2)`: returns true if arr1 and arr2 have the same length and have equal values in all of their elements
* `assertArraysEqual(actual, expected)`: displays a line indicating a pass if eqArrays(actual, expected) returns true, and a line indicating failure if the value of eqArrays(actual, expected) returns false