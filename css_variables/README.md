# CSS Variables – Dynamic Sandbox

This project is a simple interactive sandbox designed to manipulate CSS variables (`Custom Properties`) in real time using vanilla JavaScript.

## Overview

Through sliders and selectors, the user modifies the visual properties of a container. JavaScript detects the change, extracts the value along with its unit (`data-unit`), and instantly updates the CSS `:root` dynamically.

## Features

* Smooth, real-time control using the modern `input` event.
* Unit management directly from HTML using `data-*` attributes.
* Global style updates without manipulating individual classes.

## Project Note

Being a purely conceptual and straightforward exercise, it was kept close to the original structure. The only key improvement was code optimization in JavaScript, consolidating the old events (`change` and `mousemove`) into a single, clean listener.

## Technologies

* HTML5
* CSS3 (Native Variables)
* JavaScript (ES6+)

## How to Use

1. Open the `index.html` file in your browser.
2. Move the *Spacing* and *Blur* sliders, or change the *Color* selector.
3. Observe how the container reacts instantly.

## Acknowledgment

Based on the JavaScript30 challenge by Wes Bos.