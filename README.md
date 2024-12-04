# Stale Closures in React's useEffect Hook

This repository demonstrates a common error in React applications involving stale closures within the `useEffect` hook.  The issue arises when a callback function within `useEffect` uses variables from its surrounding scope that may change over time but are not updated correctly. This leads to unexpected behavior where the callback uses outdated values, producing incorrect results or preventing the component from updating as intended.

The example showcases a counter component where the interval function inside `useEffect` continues to use the initial `count` value, leading to incorrect state updates.

## How to reproduce:
1. Clone the repo.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the counter; it will not increment as expected because of the stale closure.

## Solution:
The solution involves updating the `useEffect` callback to correctly capture the current value of `count` using functional updates.