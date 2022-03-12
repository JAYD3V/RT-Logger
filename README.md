# VIBRANT

#### PACKAGE META
- **Version:** v0.0.0 *beta*
- **License:** MIT _(aka opensource)_
- **Contact:** _W3Dojo@Gmail.com_
- **Repository:** _Https://www.GitHub.com/JAYD3V/VIBRANT.git_
- **Issues/Bugs:** _Https://www.GitHub.com/JAYD3V/VIBRANT/issues_

---

Vibrant is a Library that styles the terminal output logged by running Node.js processes. Vibrant is a new package, released in early April of 2022, and is still in beta. If you download, and give this package a test drive, any issues reported, whether they are bugs, or spelling errors in the documentation is greatly appreciated. Suggestions will be warmly welcomed too.

---

### TABLE of CONTENTS
1. SUPPORT
    - 1.2 Linux Platforms
    - 1.3 Windows Platforms
2. ...
3. ...
4. ...

<br>
<br>

## 1.0 &nbsp;|&nbsp; SUPPORT & PLATFORMS
Vibrant follows three **ANSI Color standards**, consequently; any terminal that uses **Vibrant** must implement at-least one of the three standards. Fortunately, most all terminals support ANSI's oldest Color Standard, which is the ANSI 16x Color Standard. I personally cannot remember a terminal, other than the old MS-DOS terminals that were around when I was a kid, that didn't support ANSI 16x Color. All other Color Modules built for Node.js ouput, also make use of ANSI standards, so this excerpt applies to any coloring of the terminals output while using Node.js.

The other two standards are **ANSI's 24-bit TrueColor Standard** and **ANSI's 256x Color Standard**. The two standards I just mentioned support many more colors than the _ANSI 16x Color_, but public software that makes use of the newer 2 standards, cannot just simply assume everyone's terminal will have implimented the standards. This problem is easily solved for Linux systems, as Linux has an Environment Variable named `$TERM` that identifies the ANSI color standard that the terminal is currently implimenting. I am currently working on a solution for Windows Powershell, but I am confident that verifying support on windows won't be too difficult.

&nbsp;

---
### 1.1 &nbsp;|&nbsp; LINUX SUPPORT

If your on a linux system, you can see what standard your terminal supports by executing the following command

### `echo $TERM`
###### You should see one of the following, or somthing similar, printed in your terminals output: **`xterm-256color`** _-or-_ **`xterm`.**

&nbsp;

##### Custom Configure The Standard Used:

If your terminal supports a standard, but its not working, you can try custom configuring your environment. When a users platform is **Linux**, the ANSI Standard can be configured by setting the _`$TERM` Env Variable._ in the user's _BASH Configuration Document_. `.bashrc` is located in the users home directory, the path is always `~/.bashrc`.

1. Open the file using your preferred editor (I usually use VSCode via `$ code ~/.bashrc`, or NANO via `nano ~/.bashrc`)

2. Once the config-file is open, prepend one of the following statements to the very end of the file: (Note _Do not add both export statements, use either_ 1, _or_ 2).
```
# FILE: ~/.bashrc

# (1) ANSI 24-bit TrueColor Standard
export TERM=xterm

# (2) ANSI 256xColor Standard
export TERM=xterm-256color
```

###### NOTE: _After configuring `~/.bashrc` use the command `source ~/.bashrc` to refresh the file so that the new configuration is applied to the environment._

<br>

