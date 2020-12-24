# _Mr. Roboger's Neighborhood_

#### _Practice website to demonstrate arrays and looping, 2020-12-24_

#### By _**Ash Porter (KirbyPaint)**_

## Description

_The purpose of this website is to demonstrate knowledge of arrays and looping. The program is instructed to:_
1. _Create an array from 0 to the user-defined number._
2. _Take any number in the array containing the digits 1, 2, or 3, and modify them per below specifications, from least to most priority:_
* _If the array element contains a 1 in any digit, transform the array element to "Beep"_
* _If the array element contains a 2 in any digit, transform the array element to "Boop"_
* _If the array element contains a 3 in any digit, transform the array element to "Won't you be my neighbor?"_
3. _Display the modified array on the webpage_

## Setup/Installation Requirements

* _Website tested in the most recent version of both Firefox and Google Chrome_
* _View me at https://kirbypaint.github.io/roboger/ or download the webpage on your local machine by clicking on the green Code button and downloading the files as a zip_

## Specifications

_Describe: arrayify()_
_Test: "Function will take user input and return input as an array containing all digits from 0 to the number submitted by the user."_
_Expect(arrayify(10).toEqual([0,1,2,3,4,5,6,7,8,9,10]);_
_Status: Passed_

_Describe: numToText()_
_Test: "Function will:_
* _import the array created by arrayify(),_ 
* _convert the array to text,_
* _check if the array's current element contains a specific number, and if so,_
* _append the project-specific replacement text to the array,_
* _otherwise it keeps the original array element."_
_Expect(explodeArray(oldArray[50]).toEqual(newArray[0, Beep, Boop, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep, Beep, Boop, Won't you be my neighbor?, Beep, Beep, Beep, Beep, Beep, Beep, Boop, Boop, Boop, Won't you be my neighbor?, Boop, Boop, Boop, Boop, Boop, Boop, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, 40, Beep, Boop, Won't you be my neighbor?, 44, 45, 46, 47, 48, 49, 50]);_
_Status: Passed_

## Known Bugs

_Currently none_

## Support and contact details

_Discord: @KirbyPaint#0751_

## Technologies Used

_HTML, CSS (Bootstrap), JavaScript (jQuery)_

### License

*GNU Public License*

Copyright (c) 2020 **_KirbyPaint_**