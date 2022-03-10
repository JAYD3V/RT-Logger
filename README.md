# Vibrant: Color API for Node.js

**VIBRANT** is a color library & API for Node.js. Most people will use it for its color library to elegantly color their console's output, or to for a quick yet tidy means for adding color to their CLI. VIBRANT also has an API aspect to it, which allows developers to quickly write there own functions for coloring output using ANSI Color codes. The module is well documented, and has many features. It is important to note that the module has only been recently released and is in beta. If you pick it up, and try it out, please provide me with any feedback you have &/or bugs that you find, as well as any mistakes in this documentation.

<br>
<br>


## Table of Contents

1. **Class: RefANSICodeByName**
    * **1.1** &nbsp; &nbsp; Member Function: `fgColor(colorName)`
    * **1.2** &nbsp; &nbsp; Member Function: `bgColor(colorName)`
    * **1.3** &nbsp; &nbsp; Member Function: `textStyle(styleType)`

2. **Specific Parameters** & **ANSI Color Support**
    * **2.1** &nbsp; &nbsp; Table Reference for `colorName` & ANSI supported colors
    * **2.2** &nbsp; &nbsp; Table Reference for `styleType` & ANSI supported text-styles

---

<br>
<br>

## Sect 1: Referencing ANSI Codes By Name
#### Topic: "Class RefANSICodeByName"
The **RefANSICodeByName** class converts color-names & style-names into ANSI Escape codes so that color names & style names can be used in string form to apply the colors & styles the reference to terminal output.

This class its-self shouldn't be used in the actual formatting of terminal output, but rather in the creation
of custom functions used to format terminal output.

##### _The output is hello world, but its foreground is yellow, its backround is read, its text is styled to be italic._

<!-- TODO: Add Screen Shot -->

- #### 1.1 &nbsp;~&nbsp; `RefANSICodeByName.fgColor(colorName)`
    * **Static Method**
    * `fgColor()` converts colors names into ANSI Escape codes. The color name passed into fgColor must be an ANSI supported color. Each color ANSI supports coresponds to two specific codes, one for formatting the background color of terminal output, and the other for formatting the foreground color of terminal output. Obviously `fgColor()` returns the code that coresponds to the terminal output's background color. To get the ANSI code that coresponds to the terminal output's foreground color, use `bgColor()`. _fgColor_ typically isn't used in the direct formatting of terminal output, but rather for the building of classes & functions that format terminal output. In other words, there's typically another layer of abstraction above fgColor(). That next layer should be built using fgColor & company.

<br>

- #### **1.2** &nbsp;~&nbsp; `RefANSICodeByName.bgColor(colorName)`
    - **Static Method**
    - `bgColor()` converts colors names into ANSI Escape codes. The color name passed into bgColor must be an ANSI supported color. Each color ANSI supports coresponds to two specific codes, one for formatting the background color of terminal output, and the other for formatting the foreground color of terminal output. Obviously `bgColor()` returns the code that coresponds to the terminal output's background color. To get the ANSI code that coresponds to the terminal output's foreground color, use `fgColor()`. _bgColor_ typically isn't used in the direct formatting of terminal output, but rather for the building of classes & functions that format terminal output. In other words, there's typically another layer of abstraction above bgColor(). That next layer should be built using bgColor & company.

- #### **1.3** &nbsp;~&nbsp; `RefANSICodeByName.textStyle(styleType)`
    - **Static Method**
    - `textStyle()` converts text-style names (_i.e._ italic, bold, etc) into the ANSI escape-code that coresponds to the name passed in as an argument to textStyle. Like the other two **`RefANSICodeByName`** functions, textStyle shouldn't be used to directly format terminal output, but rather to create custom functions that style terminalOutput. In other words, there's typically another layer of abstraction above textStyle(). That next layer should be built using textStyle & company.

##### The following example will print the output seen in image #01

```
    const close = '\x1b[0m'; // Ends formatting
    const sumStr = 'ANSI codes are fun!'; // Random string

    const fg = RefANSICodeByName.fgColor('Red');
    const bg = RefANSICodeByName.bgColor('Black');
    const style = RefANSICodeByName.textStyle('bold');

    /* The line below demonstrates formatting a string using ANSI escape
    sequences */
    const escSequence = `\x1b[${style};${fg};${bg}m${sumStr}${close}`;

    console.log(escSequence);
```

###### _Image #01_
[![img #01](https://i.postimg.cc/RFLr81B8/clrmod-exmp-01.png)](https://postimg.cc/HcnP8yj4)
---

###### NOTE: _If you don't format strings printed by the console carefully, you can screw up your command prompt. Its worth practicing for a while before using ANSI codes in any publicly published works. Trust me, i know from experiance..._

<br>
<br>
<br>
<br>

## 2.0 | ANSI Support & Parameters Defined by ANSI Support

&nbsp; &nbsp; &nbsp; &nbsp; The colors/styles that are supported by _ANSI Escape-codes_ are listed bellow. ANSI can be a bit confusing at first because of the way that it targets specific properties of the terminals output. ANSI uses a completely different number for the same color, when it is being used to color the background, than when it is being used to color the foreground. So if we use blue for an example, blue foreground is colored using the code `34`, but if we want to color the background blue we would use `44`.

&nbsp; &nbsp; &nbsp; &nbsp; It also only offers a handful of colors, but it offers two versions of each color, so if we continue to use blue in our example, we would show that, blue foregrounds are styled using the number `34`, and bright blue foregrounds are styled using `94`, and if we wanted a bright blue background we would use `104`

###### _To Summarize:_
  * Standard-blue Foreground = `34`
  * Standard-blue Background = `44`
  * Bright-blue Foreground = `94`
  * Bright-blue Background = `104`

###### NOTE: _You can see that there are some consistant patterns implimented in the standard._ _The ANSI color standard is old, its one of the old still in use. Another old standard is ANSI C._ Its important to point out

##### For example:

The ansi code for Blue Foreground is `34`, and the

---

<br>

##### _The table below lists all of the Supported Colors, Semantics & Shorthands that can be passed to any `colorName` parameter_

|  Output Color    | Argument               | Short   | `fgColor()` | `bgColor()` |
|----------------: |----------------------: | :-----: | :---------: | :---------: |
| **Black**        | &nbsp; `'black'`       |  **k**  |  30         | 40          |
| **Red**          | &nbsp; `'red'`         |  **r**  |  31         | 41          |
| **Green**        | &nbsp; `'green'`       |  **g**  |  32         | 42          |
| **Yellow**       | &nbsp; `'yellow'`      |  **y**  |  33         | 43          |
| **Blue**         | &nbsp; `'blue'`        |  **b**  |  34         | 44          |
| **Magenta**      | &nbsp; `'magenta'`     |  **p**  |  35         | 45          |
| **Cyan**         | &nbsp; `'cyan'`        |  **c**  |  36         | 46          |
| **White**        | &nbsp; `'white'`       |  **w**  |  37         | 47          |
| **Bright Black** | &nbsp; `'brightBlack'` |  **k!** |  90         | 100         |
| **Bright Red**   | &nbsp; `'brightRed'`   |  **r!** |  91         | 101         |
| **Bright Green** | &nbsp; `'brightGreen'` |  **g!** |  92         | 102         |
| **Bright Yellow**| &nbsp; `'brightYellow'`|  **y!** |  93         | 103         |
| **Bright Blue**  | &nbsp; `'brightBlue'`  |  **b!** |  94         | 104         |
| **Bright Purple**| &nbsp; `'brightPurple'`|  **p!** |  95         | 105         |
| **Bright Cyan**  | &nbsp; `'brightCyan'`  |  **c!** |  96         | 106         |
| **Bright White** | &nbsp; `'brightWhite'` |  **w!** |  97         | 107         |

---
