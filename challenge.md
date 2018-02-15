## React Challenge

A little challenge to demonstrate your React skills.



### Background

This challenge was designed to mimic a real task you might tackle as a front-end developer in the medical software field, although it has been simplified so that it should only take a few hours of your time (hopefully).

While completing this challenge, try to write the cleanest, easiest-to-read-and-change, most-efficient, most-production-ready code that you are capable of writing. Assume the audience is another developer who will try to run, read, and change your code.

Feel free to modify the (aesthetic) design to your own desires - treat the images below as barebones wireframes. The important part is the functionality.



### Goal

Construct a basic patient list app (using the included, completely fabricated `patients.json` data) with the following capabilities:

##### List
Display a patient list with some important attributes:

![Patient List Wireframe](/wireframes/list.png?raw=true)

##### Detail
When a patient in the list is clicked, it should display the detail page for that patient with more information and a simple weight visualization (like a box-and-whisker plot, without the box) (bubbles in image below are for explanation, and don't need to be included in the final product):

![Patient Detail Wireframe](/wireframes/detail.png?raw=true)



### Requirements

Beyond [React](https://facebook.github.io/react/), feel free to use whatever tech you desire.

Think about incorporating the following into your solution:

- an attractive UI design
- frontend routing that works (with sensible URLs)
- a browser's back button that works as expected
- a readme with run / test / build instructions
- a production webpack build
- ES6 class component syntax
- basic business-logic unit tests
- optimized performance
- flow types
- absence of jQuery



### Hints

- [React Docs](https://facebook.github.io/react/docs/hello-world.html)
- Think carefully about how to break down the UI into React components
- [create-react-app](https://github.com/facebookincubator/create-react-app) might be worth checking out to get up-and-running quickly
- Think about SVG for the weight visualization
- Be careful when working with dates
