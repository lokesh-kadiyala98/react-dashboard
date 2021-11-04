<div align="center">
    <h2 align="center">React Dashboard</h2>
    <h5 align="center">Really cool modern Dashboard design.</h5>
</div>

## Demo

[Live App](https://kibmw.csb.app/) :rocket:
[Codesandbox](https://codesandbox.io/s/trusting-cdn-kibmw)

<br/>

## Features

- [x] Well-structured directories and modules.
- [x] Reusable, easily extendable, and readable code.
- [x] Modern user interface.
- [x] Responsive.

<br/>

## Docs

### Theme

File -> `src/App.scss`

- `$app-color-1`
- `$app-color-2`
- `$text-color`
- `$text-color-muted`

### Routes

File -> `src/constants/routes.js`

```
{
    icon: <i className="fa fa-home icon"></i>,
    text: 'Home',
    to: '/'
}
```

- icon: Font-Awesome icon
- text: Copy displayed on the menu
- to: URL to be redirected

### Creating new routes

1. Add the new route to the `src/constants/routes.js` file as above.
2. Create a new component under the `src/components` path.
3. Import the new component to the `src/App.js` file. (Make sure to wrap the component using `withDashboard` HOC)

<br/>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
