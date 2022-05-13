# webcomponents 101 Part 3: Reusable ES6 Modules with TypeScript

[![Continuous Build](https://github.com/quatico-solutions/webcomponents-101-part3/actions/workflows/continuous-build.yml/badge.svg?event=push)](https://github.com/quatico-solutions/webcomponents-101-part3/actions/workflows/continuous-build.yml)


An introduction to TypeScript for Java developers. This example project is a Java and TypeScript hybrid setup. It uses Maven to build the and TypeScript to compile the script files.

This workshop gives an introduction to TypeScript particularly for Java developers. It explains specifics of the TypeScript language itself and introduces fundamental features, like type annotations, generic type signatures, type guards and assertions functions. It also gives an overview of how typing can be defined using specific utility types, union vs. intersection types, and type aliases vs. interfaces.
We'll practice how reusable ES6 modules can be made type-safe, using typing for properties, generics in type and function signatures, and control flow branching with type guards.

## Contents

* Overview of language TypeScript
* Basic typing with classes and interfaces
* Extending interfaces and classes
* Function types and function parameters
* Generic typing and signatures
* Differentiating types and classes, type guards, assertions functions

## Getting Started

Before we start, we need to install `yarn >=1.22.0 < 2`, `node >=16`, `Maven >=3.3.9`, and `Java >= 11`. Make sure
your can execute the following commands from the command-line:

```bash
node --version  # e.g. v16.12.1
yarn -v         # e.g. 1.22.18
java -version   # e.g. openjdk version "11.0.15"
mvn -v          # e.g. Apache Maven 3.3.9
```

## Build script files with TypeScript

All script files in `./src/main/typescript`. To get started all you need to do is run `yarn` and `yarn build`.
You can use the following additional `yarn` commands:

* `clean` - Clean all build folders in the project.
* `lint` - Lint all script files in the project.
* `build` - Run the TypeScript compiler to build script file to `./target/scripts`.
* `build:java` - Clean all build folders and builds all script and Java files to `./target`.
* `test` - Run Jest to test all script files in the project.
* `test:java` - Run Jest to test all script files in the project.
* `test:watch` - Run Jest in watch mode to test modified script files in the project.
* `dist:scripts` - Build all script files in the project for production.
* `dist` - Build all script and Java files in the project for production.

You can run every command in the project directory using `yarn`, .e.g. `yarn lint` to lint all files. You can also run
commands individually for each exercise or solution.

Check for linting errors for an individual exercise or solution using `yarn lint:exercise-name` or `yarn lint:solution-name`. For example:

* `lint:exercise1`: Lint all script files for exercise 1.
* `lint:exercise2`: Lint all script files for exercise 2.
* `lint:exercise3`: Lint all script files for exercise 3.
* `lint:solution1`: Lint all script files for solution 1.
* `lint:solution2`: Lint all script files for solution 2.
* `lint:solution3`: Lint all script files for solution 3.

Run the code for an individual exercise or solution using `yarn run:exercise-name` or `yarn run:solution-name`. For example:

* `run:exercise1`:  Run script files for exercise 1.
* `run:exercise2`:  Run script files for exercise 2.
* `run:exercise3`:  Run script files for exercise 3.
* `run:solution1`:  Run script files for solution 1.
* `run:solution2`:  Run script files for solution 2.
* `run:solution3`:  Run script files for solution 3.

Run Jest to test the code for an individual exercise or solution using `yarn test:exercise-name` or `yarn test:solution-name`. For example:

* `test:exercise1`: Run Jest to test all script files for exercise 1.
* `test:exercise2`: Run Jest to test all script files for exercise 2.
* `test:exercise3`: Run Jest to test all script files for exercise 3.
* `test:solution1`: Run Jest to test all script files for solution 1.
* `test:solution2`: Run Jest to test all script files for solution 2.
* `test:solution3`: Run Jest to test all script files for solution 3.
