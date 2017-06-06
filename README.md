# ReactiveFormsExample

In this project we will create a basic Reactive Form with the following Controls and Sync and Async Custom Validators.

## Controls and Validators

1) Project name (should not be empty)
2) Mail (should not be empty and a valid email)
3) Project Status Dropdown: 'Stable', 'Critical' and 'Finished'
4) Submit Button

- Add an Async validator which does not allow "Test" as a project name.
- Add a Sync Validator which does not allow "TestProject" as a project name.
- Implement it as an async validator.
- Uppon submit the form, print value in console.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
