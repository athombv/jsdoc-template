# Homey JSDoc Template

## How to configurate JS Docs project
1. Add required devDependencies to your project in package.json:
```json
{
  "devDependencies": {
    "concurrently": "^5.1.0",
    "homey-jsdoc-template": "github:athombv/homey-jsdoc-template#1.1",
    "jsdoc": "^3.6.6",
    "jsdoc-ts-utils": "^1.1.2",
    "serve": "^11.3.1",
    "watch": "^1.0.2"
  }
}
```

2. Add scripts in package.json
```json
{
  "scripts": {
    "serve": "concurrently \"serve build/\" \"npm run build:watch\"",
    "build": "jsdoc --configure ./docs/jsdoc.json",
    "build:clean": "rm -rf ./build",
    "build:watch": "watch \"npm run build:clean && npm run build\" lib docs \"node_modules/homey-jsdoc-template\""
  }
}
```
3. Don't forget to run `npm install` 😁

## How to make updates to template
1. Clone this repository

2. Link this repository to your current project by:
```bash
npm link homey-jsdoc-template
```
note: you have to relink the repository each time after you run `npm install` 

