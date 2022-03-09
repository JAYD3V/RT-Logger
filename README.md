# CLI Color-Support

## ANSI Standardized Colors API

#### SECTION CONTENTS
    1. Class ANSIEscapeCode
        a. ANSIEscapeCode.fgColor(colorName)
        b. ANSIEscapeCode.bgColor(colorName)
        c. ANSIEscapeCode.textStyle(styleType)

- **Type:** Class (static)

- **Class:** ANSIEscapeCode
    - **Summary:** - `ANSIEscapeCode` is a static class that provides support for
    referencing ANSI codes by name. This class has two other
     function-members as well:   &


- **Function-members:**
    - `ANSIEscapeCode.fgColor(colorName: str) => num`
        - **Summary:** Converts the name of a color (so long as the colors name is one that's supported by ANSI color standards) into the colors coresponding ANSI Foreground Color Code. It should be noted that background colors, and foreground colors have different codes for the same colors). To see a complete list of the colors supported by ANSI, refer to the table below.

    - `ANSIEscapeCode.bgColor(colorName: str) => num`
    - `ANSIEscapeCode.testStyle(styleType: str) => num`

- The table below lists the colors supported by ANSI, and the three methods above, as well as, the correct semantics to use when referencing a color in one of the methods arguments.

---------------------------------------------------


The first table covers the arguments/colors that can be passed to `ANSIEscapeCode.fgColor(colorName)` & `ANSIEscapeCode.bgColor(colorName)`

###### _The following column descriptions apply to both table below._

- ###### Output color The actual color of the text.

- ###### Argument The correct semantics to use when referencing a color in an argument that is being passed to the parameter of  `ANSIEscapeCode` classes arguments.

- ###### Short An alternate shorthand to pass to the function arguments

|  Output Color  | Argument        | Short | ANSI |
| -------------: | --------------: | :---: | :--- |
|  Black         | &nbsp; black    |  b    |  30  |
|  Red           | &nbsp; red      |  r    |  31  |
|  Green         | &nbsp; green    |  g    |  32  |
|  Yellow        | &nbsp; yellow   |  y    |  33  |
|  Blue          | &nbsp; blue     |  b    |  34  |
|  Purple        | &nbsp; purple   |  p    |  35  |
|  Cyan          | &nbsp; cyan     |  c    |  36  |
|  White         | &nbsp; white    |  w    |  37  |
|  Bright Black  | &nbsp; black!   |  b!   |  40  |
|  Bright Red    | &nbsp; red!     |  r!   |  41  |
|  Bright Green  | &nbsp; green!   |  g!   |  42  |
|  Bright Yellow | &nbsp; yellow!  |  y!   |  43  |
|  Bright Blue   | &nbsp; blue!    |  b!   |  44  |
|  Bright Purple | &nbsp; purple!  |  p!   |  45  |
|  Bright Cyan   | &nbsp; cyan!    |  c!   |  46  |
|  Bright White  | &nbsp; white!   |  w!   |  47  |

---
