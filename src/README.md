# Weather_App

Weather App using React JS

### Creating React App

`npx create-react-app .` creat app within the current directory name `react-weather-app`

### Run App

`npm start` Starts the development server

npm run build
Bundles the app into static files for production.

npm test
Starts the test runner.

npm run eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

## INSTALL Tailwind CSS

https://tailwindcss.com/docs/guides/create-react-app

```
npm install -D tailwindcss
npx tailwindcss init
```

### IconScout

Use https://github.com/Iconscout/react-unicons for icons

Install react-unicons using npm.
`npm install --save @iconscout/react-unicons`

To use it add `import UilReact from '@iconscout/react-unicons/icons/uil-react'` inside App.js

## Fonts

Using google fonts Poppins, click on get font and then under "Get embedded code" use the `@import` code from the import option

Now, the index.css will have

```
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');



@layer base {
    html{
        font-family: 'Poppins', sans-serif;
    }
}
```
