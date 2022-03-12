[![GitHub Release](https://img.shields.io/github/release/athombv/homey-jsdoc-template?style=flat)]()  

# Homey JSDoc Template

## How to use this template

1. Install as a dev dependency

```bash
$ npm i --save-dev github:athombv/homey-jsdoc-template#
```

2. Add to `jsdoc.json`

```json
{
  "opts": {
    "template": "./node_modules/homey-jsdoc-template"
  }
}
```

## Recommended NPM Scripts

This is the recommended approach of integrating this template in your project, additional to the steps above.

```bash
$ npm i --save-dev concurrently jsdoc serve watch
```

2. Add scripts to `package.json`

```json
{
  "scripts": {
    "serve": "concurrently \"serve docs/\" \"npm run jsdoc:watch\"",
    "build": "npm ci; npm run jsdoc:clean; npm run jsdoc;",
    "jsdoc": "jsdoc --configure ./docs/jsdoc.json;",
    "jsdoc:clean": "rm -rf ./docs",
    "jsdoc:watch": "watch \"npm run jsdoc:clean && npm run jsdoc\" ./lib docs"
  }
}
```

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
