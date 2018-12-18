# mapbox-utils

A module containing a number of useful mapbox-gl-js controls and mapbox-gl-draw modes.

## Table of Contents

- [Build Distribution](#build-distribution)
- [Examples](#examples)

## Build Distribution

1. Run: `yarn install` to install dependencies.
1. Run: `yarn build` to generate the distribution.

## Examples

1. Run: `yarn install` to install dependencies.
1. Run: `yarn build` to generate the distribution.
1. Run: `yarn serve` to start the web server.
1. Go to [Examples](http://localhost:1337/demo)

Each example will open in their own tab.

## Release Strategy

`semantic-release` has been configured via **plugins** to do the following:

- Analyze **Angular style** commit messages
- Generate `CHANGELOG.md` entry
- Increment version in `package.json`
- Commit changes
- Create tag of the form v1.1.1
- Create GitHub release
- **Do NOT** publish to npm registry
