
Calculator project

Live page can be seen at: https://orzcode.github.io/calc/

What is there to be said? This is a calculator app / project made using Javascript. 

This app was easier to create than one might expect from a calculator, but did involve some lateral thinking when it came to chained / consecutive equations (i.e: pressing another 'operator' such as plus/minus in concussion, instead of having to press 'equals' after every single equation).

The biggest questions this project raised for me were in regards to 'rules' of calculators - beyond the physical maths itself, how should calculators behave? If you press a number button after completing an equation, should it show the number you pressed, or should it _add_ the number you pressed to the number that is currently displayed? If the former - which is probably the standard - then what about if you press the decimal key - should it show "0._x_" or should it add a decimal to the displayed number? Etcetera etcetera. In the end, I decided that this was _my_ calculator and largely decided on these things based on what I like in a calculator and how I think is the best way for them to behave.

Having said that - this is not a super advanced calculator. Nor is it designed to be.

Plenty of console.log statements were used to diagnose certain issues and for future sustainability these have been left (as they will not be visible to the average user).

Includes a custom darkmode toggle and numpad support, which was beyond the goals of the project but were definitely nice-to-haves.


Future feature roadmap:

* Add a “backspace” button, so the user can undo if they click the wrong number.
* Add calculation history
* Add extra functions such as percentages, etcetera.
