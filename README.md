# routing-example

This project is bootstrapped by [aurelia/new](https://github.com/aurelia/new).

This is an example with 2 levels of navigation.

```
Home | Artists
       /    \  
    List   Detail ( id )
       
```
List is the "default" child page of Artists. If a user clicks on "Artists" in the menu or breadcrumb he or she whould
be redirected to the Artist / List page. Clicking on an artist in the list should take the user to the artist detail 
page. 

problem description:

If the user is on the artist detail page and clicks on the Artist link in the main menu, the user is presented with
an "empty" artist page, with no content in the au-viewport and no error message in the console.



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
