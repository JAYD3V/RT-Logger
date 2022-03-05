# ESM Project Template

This is a **project template** (aka pre-configured software environment) for an **ESM Module** that runs in the **Node.js** runtime-environment, and is written in the Statically typed ECMAScript language, **TypeScript**. This template includes a package.json file that has a pre-defined ***dev-dependencies list***, which includes, ESLint, Prettier, TypeScript & Mocha. The template attempts to pre-configure all of the tools, as well as including some configuration for VSCode. This is not a template that will work for every persons intents & purposes, however, for those it does work for, it is a huge time saver.



## Project Template's Tech Stack:

1. **Node.js & NPM**
2. **TypeScript**
3. **ECMAS Module (ESM)**

**NOTE:** _The template assumes the use of VSCode, but does not require it. It also includes some configuration for a VSCode extension project, which can simply be deleted if its not needed._

<br>

## **Development Environment & Tools**

1. ### **Visual Studio Code**, 
    - **VSC/Chrome Debugger Ext**
    - _`.vscode/launch.json`_
    - _`.vscode/settings.json`_
    - _`.vscode/tasks.json`_

2. ### **ESLint**
    - **ESLint NPM Module**
    - _`.eslintrc.json`_
    - _`.eslintignore`_

3. ### **Prettier**
    - **Prettier NPM Module**
    - ***`.prettierrc`***

4. ### **EditorConfig**
    - **`.editorconfig`**

<br>
<br>



## **Dependency List**

##### _The list below includes all dependencies that are auto-installed when the project template's repository is cloned from github._

> ##### **typescript**
> ##### **mocha**
> ##### **semver**
> ##### **prettier**
> ##### **eslint**
> ##### **eslint-config-standard**
> ##### **eslint-plugin-import**
> ##### **eslint-plugin-node**
> ##### **eslint-plugin-promise**
> ##### **@typescript-eslint/eslint-plugin**
> ##### **@typescript-eslint/parser**

<br>

## **Types Included:**

The following types are located inside of the `types` directory @ `${rootDir}/types`. The `types` directory also includes _**any and all**_ locally defined types (typings) @ `${rootDir}/types/typings`

- **@types/node**
- **@types/mocha**
- **@types/json5** (Delete if you use JSONC/JSON instead of JSON5)
- **@types/json-schema** (Delete if your not using schema for implemented JSON)
- **@types/vscode** (Delete if the project is not a VS Code extension)

<br>

## Configurations Included:

- Testing Framework **Mocha**
- Project File Structure for **TypeScript**
- a `tsconfig.json` file
- a `.gitignore` file
- a `.npmignore` file
- a `.npmrc` file

<br>

---

<br>

### Further Details & Notes:

###### * _This template doesn't add any dependencies that are not Development-dependencies, in other words: The project template isn't so much a starting point for a project, or even a project template, as much as it is a pre configured development environment that starts its users off with a blank slate for an ESM module written in TypeScript for Node.js._

###### * _The most work creating this project, has been configuring ESLint. The dependency list above demonstrates the amount of open source work that has been put into making a JavaScript linter work w/ TypeScript, Node.js, & ESM._ 

<br>
<br>
<br>
<br>

---

(end)

<br>