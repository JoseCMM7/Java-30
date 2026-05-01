# Analog Clock – CSS + JS

This project is a simple analog clock built with HTML, CSS, and vanilla JavaScript.
It displays the current time using three rotating hands (hours, minutes, and seconds) over a circular clock face.

## Overview

The clock reads the current time from the user's device and updates every second:

* Each hand rotates by a calculated number of degrees based on the current time
* The clock numbers (1–12) are positioned around the circle using CSS
* All rotation and layout is handled with CSS transforms

This project focuses on CSS positioning, the use of custom properties, trigonometric-style layout with transform, and basic time handling in JavaScript 

## Features

* Real-time clock based on the user's local time
* Smooth rotation of the hands using CSS transitions
* Numbers placed around the clock face with a single CSS rule using custom properties
* Fully responsive centering with Flexbox

## How It Works

* The numbers use a custom property `--d` (1 to 12) and are rotated around the center using some calculations
* Each hand is anchored to the center of the clock with transform-origin: bottom center
* JavaScript calculates the initial rotation for each hand and increments it every second using setInterval

## Technologies

* HTML5
* CSS3 (Custom Properties, Flexbox, Transforms)
* JavaScript (ES6, Date API)

## How to Use

1. Open the `index.html` file in your browser
2. The clock will automatically display the current local time
3. The hands will continue updating every second

## Acknowledgment

Personal practice project to explore CSS transforms, custom properties, and the JavaScript Date API.