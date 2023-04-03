# Mystore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Dependencies Installer and Setup

* PrimeNG
```bash
npm install primeng --save
npm install primeicons --save
```
* Add configuration to apply css in angular.json file.
```
  "styles": [
    "node_modules/primeng/resources/themes/saga-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    "node_modules/primeicons/primeicons.css",
  ],  
```

* Fetching mock data from data.json file in assets folder.


## How to use this project

* Add products to cart (cannot checkout if has no products in cart)
* Fill personal information
  - name is required
  - address is required
  - credit is required and includes 10 digits

