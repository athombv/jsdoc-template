# Homey JSDoc Template

## How to configurate JS Docs project

1. Add required devDependencies to your project in package.json:

```json
{
  "devDependencies": {
    "concurrently": "^5.1.0",
    "homey-jsdoc-template": "github:athombv/homey-jsdoc-template#1.2.2",
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
    "serve": "concurrently \"serve build/\" \"npm run jsdoc:watch\"",
    "build": "npm ci; npm run jsdoc:clean; npm run jsdoc;",
    "jsdoc": "jsdoc --configure ./docs/jsdoc.json;",
    "jsdoc:clean": "rm -rf ./build",
    "jsdoc:watch": "watch \"npm run jsdoc:clean && npm run jsdoc\" lib docs \"node_modules/homey-jsdoc-template\""
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

## Configuration

### Simple analytics

To add an alternative cname host for Simple Analytics add the following rule to `jsdoc.json` or `jsdocrc.json`

```json
{
  "opts": {
    "simpleAnalyticsHost": "your-host.extension"
  }
}
```

## Customization
### Batches / images / videos
If you want to add batches a.o elements like images/ video in top of the readme.md it will break the large intro paragraph. Wrap your intro elements in `<header>` tags to avoid this. 
Example
`readme.md`
```
    <header>
    
    # Your heading
    
    batches/images/etc
    
    </header>
    
    My first large paragraph
```
