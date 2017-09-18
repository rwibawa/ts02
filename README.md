# Ts02
Exercise with Angular stable (v4.4.1)

## 1. Setup
[Angular - QuickStart](https://angular.io/guide/quickstart)

### Install ng-cli
```bash
$ nvm install stable
$ nvm list
$ nvm use stable

$ npm install -g @angular/cli
$ ng new ts02
  create ts02/README.md (1095 bytes)
  create ts02/.angular-cli.json (1122 bytes)
  create ts02/.editorconfig (245 bytes)
  create ts02/.gitignore (516 bytes)
  create ts02/src/assets/.gitkeep (0 bytes)
  create ts02/src/environments/environment.prod.ts (51 bytes)
  create ts02/src/environments/environment.ts (387 bytes)
  create ts02/src/favicon.ico (5430 bytes)
  create ts02/src/index.html (291 bytes)
  create ts02/src/main.ts (370 bytes)
  create ts02/src/polyfills.ts (2480 bytes)
  create ts02/src/styles.css (80 bytes)
  create ts02/src/test.ts (1085 bytes)
  create ts02/src/tsconfig.app.json (211 bytes)
  create ts02/src/tsconfig.spec.json (304 bytes)
  create ts02/src/typings.d.ts (104 bytes)
  create ts02/e2e/app.e2e-spec.ts (286 bytes)
  create ts02/e2e/app.po.ts (208 bytes)
  create ts02/e2e/tsconfig.e2e.json (235 bytes)
  create ts02/karma.conf.js (923 bytes)
  create ts02/package.json (1309 bytes)
  create ts02/protractor.conf.js (722 bytes)
  create ts02/tsconfig.json (363 bytes)
  create ts02/tslint.json (3040 bytes)
  create ts02/src/app/app.module.ts (314 bytes)
  create ts02/src/app/app.component.css (0 bytes)
  create ts02/src/app/app.component.html (1075 bytes)
  create ts02/src/app/app.component.spec.ts (986 bytes)
  create ts02/src/app/app.component.ts (207 bytes)
Installing packages for tooling via npm.
Installed packages for tooling via npm.
Project 'ts02' successfully created.

$ cd ts02/
$ ng serve --open
** NG Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

$ tree -I 'node_modules'
.
├── README.md
├── e2e
│   ├── app.e2e-spec.ts
│   ├── app.po.ts
│   └── tsconfig.e2e.json
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
└── tslint.json
```
Using the `--open` (or just `-o`) option will automatically open your browser on [http://localhost:4200/](http://localhost:4200/).

## 2. ng-cli reference
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
