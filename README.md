# _Mr. Roboger's Neighborhood_

#### _Practice website to demonstrate arrays and looping, 2020-12-24_

#### By _**Ash Porter (KirbyPaint)**_

## Description

_The purpose of this website is to demonstrate knowledge of arrays and looping. The program is instructed to:_  
1. Create an array from 0 to the user-defined number.  
2. Take any number in the array containing the digits 1, 2, or 3, and modify them per below specifications, from least to most priority:
  * If the array element contains a 1 in any digit, transform the array element to "Beep"
  * If the array element contains a 2 in any digit, transform the array element to "Boop"
  * If the array element contains a 3 in any digit, transform the array element to "Won't you be my neighbor?"
3. Display the modified array on the webpage

## Setup/Installation Requirements

* Website tested in the most recent version of both Firefox and Google Chrome
* View me at https://kirbypaint.github.io/roboger/ or download the webpage on your local machine by clicking on the green Code button and downloading the files as a zip

## Specifications

_Describe: arrayify()_  
Test: "Function will take user input and return input as an array containing all digits from 0 to the number submitted by the user."  
Expect(arrayify(10).toEqual([0,1,2,3,4,5,6,7,8,9,10]);  
Status: Passed  

_Describe: numToText()_  
Test: "Function will:  
* import the array created by arrayify(),  
* convert the array to text,  
* check if the array's current element contains a specific number, and if so,  
* append the project-specific replacement text to the array,  
otherwise it keeps the original array element."  

Expect(explodeArray(oldArray[50]).toEqual(newArray[0, Beep, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep, Beep, Boop, Won't you be my neighbor?, Beep, Beep, Beep, Beep, Beep, Beep, Boop, Boop, Boop, Won't you be my neighbor?, Boop, Boop, Boop, Boop, Boop, Boop, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, 40, Beep, Boop, Won't you be my neighbor?, 44, 45, 46, 47, 48, 49, 50]);  
Status: Passed

## Known Bugs

_Currently none_

## Support and contact details

_Discord: @KirbyPaint#0751_

## Technologies Used

_HTML, CSS (Bootstrap), JavaScript (jQuery)_

### License

*GNU Public License*

Copyright (c) 2020 **_KirbyPaint_**