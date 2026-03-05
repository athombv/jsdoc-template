# Athom B.V. JSDoc Template

## How to use this template

1. Install as a dev dependency

```bash
$ npm i --save-dev @athombv/jsdoc-template
```

2. Create `./jsdoc.json`:

```json
{
  "opts": {
    "mainpagetitle": "🚨 Your Project Name",
    "template": "./node_modules/@athombv/jsdoc-template"
  },
  "source": {
    "include": [
      "./README.md",
      "./lib",
      "./index.js"
    ]
  },
  "plugins": [
    "plugins/markdown"
  ],
  "templates": {
    "default": {
      "outputSourceFiles": false
    }
  }
}
```

## Recommended NPM Scripts

This is the recommended approach of integrating this template in your project, additional to the steps above.

```bash
$ npm i --save-dev concurrently jsdoc jsdoc-ts-utils serve watch
```

2. Add scripts to `package.json`

```json
{
  "scripts": {
    "serve": "concurrently \"serve build/\" \"npm run jsdoc:watch\"",
    "build": "npm ci; npm run jsdoc:clean; npm run jsdoc;",
    "jsdoc": "jsdoc --configure ./jsdoc.json --destination ./jsdoc/",
    "jsdoc:clean": "rm -rf ./build",
    "jsdoc:watch": "watch \"npm run jsdoc:clean && npm run jsdoc\" ./lib docs"
  }
}
```

## How to make updates to template

1. Clone this repository

2. Link this repository to your current project by:

```bash
npm link @athombv/jsdoc-template
```

> You have to relink the repository each time after you run `npm install`

## Publishing
1. Bump the version on `master` via the [Version workflow](https://github.com/athombv/jsdoc-template/actions/workflows/version.yaml).
2. Merge `master` to `production` — this will automatically publish the release to the GitHub Packages Registry.
3. Create PRs in dependent repos via the [Update Dependents workflow](https://github.com/athombv/jsdoc-template/actions/workflows/update-dependents.yaml). This will automatically discover repos in the `athombv` org that use `@athombv/jsdoc-template` and open PRs to update them to the new version.


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

## Repositories using this template

[GitHub Search](https://github.com/search?q=org%3Aathombv+%22%40athombv%2Fjsdoc-template%22+filename%3A%22package.json%22&type=code)
