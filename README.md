# routing-example

This project is bootstrapped by [aurelia/new](https://github.com/aurelia/new).

This is an example with 2 levels of navigation.

```
Home | Artists
       /    \  
    List   Detail ( id )
       
```
List is the "default" child page of Artists



## Start dev web server

    npm start

## Build the app in production mode

    npm run build

It builds all files to dist folder. To deploy to production server, copy all the `dist/*` files to production root folder.

For example
```
dist/index.html
dist/foo.12345.js
```
Copy to production root folder
```
root_folder/index.html
root_folder/foo.12345.js
```

## Unit Tests

    npm run test

Run unit tests in watch mode.

    npm run test:watch


## Analyze webpack bundle

    npm run analyze
