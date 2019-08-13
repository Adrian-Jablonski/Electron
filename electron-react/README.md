# Electron app created with React

https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3

To resolve "'BROWSER' is not recognized as an internal or external command, [0] operable program or batch file." error, use 
"electron-dev": "concurrently \"SET BROWSER=none && yarn start\" \"wait-on http://localhost:3000 && electron .\"" 
in package.json file