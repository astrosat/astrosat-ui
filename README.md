# Astrosat UI Library

A module containing a number of useful mapbox-gl-js controls and mapbox-gl-draw modes.

## Table of Contents

- [Astrosat UI Library](#astrosat-ui-library)
  - [Table of Contents](#table-of-contents)
  - [Build Distribution](#build-distribution)
  - [Examples](#examples)
  - [Development](#development)
    - [Steps](#steps)
  - [Release Strategy](#release-strategy)

## Build Distribution

1. Run: `yarn install` to install dependencies.
1. Run: `yarn build` to generate the distribution.

## Examples

1. Run: `yarn install` to install dependencies.
1. Run: `yarn build` to generate the distribution.
1. Run: `yarn serve` to start the web server.
1. Go to [Examples](http://localhost:1337/demo)

Each example will open in their own tab.

## Development

To maintain or further develop this library we have included [Storybook](https://storybook.js.org/). This is a tool to let you view you components in isolation, while developing them. To start the **Storybook** development server, run `yarn storybook`.

There will come a time when you want to `link` your library to an application. Normally you would use something like `yarn link` in the library and `yarn link "<library name>"` in your application. We have experienced problems doing this however, the error reported complains about using **hooks** but that is a misnomer, the real problem is there are multiple copies of react being used, see [react warning](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react) for more details. The only solution comes from that page:
> This problem can also come up when you use npm link or an equivalent. In that case, your bundler might “see” two Reacts — one in application folder and one in your library folder. Assuming myapp and mylib are sibling folders, one possible fix is to run npm link ../myapp/node_modules/react from mylib. This should make the library use the application’s React copy.

This solution cannot be done with `yarn` you must use `npm` as far as I can tell, this doesn't cause any problems in practice from what I've found. the solution is to make your library use your applications version of `react`, not its own. while having your app use your un-published library code as normal using `yarn link`.

### Steps

1. In **library** and **application** remove the `yarn.lock` and `node_modules` directory. This will ensure your using the latest and greatest dependencies.
1. In **library** and **application** run `yarn` to install necessary dependencies.
1. In **library**, run `npm link <path to application's react in node_modules>` e.g. `npm link ../../orbis/client/node_modules/react`, to link to your application's version of **react**.
1. In **library**, run `yarn link`, this will link your library to a central location (normally under `~/.config/yarn/...`).
1. In **application**, run `yarn link "<library name>"` e.g. `yarn link "@astrosat/astrosat-ui"`

Now you should be able to run **Storybook** in you library and the application (without crashing, complaining about hooks or some other misnomer error message).

## Release Strategy

`semantic-release` has been configured via **plugins** to do the following:

- Analyze **Angular style** commit messages
- Generate `CHANGELOG.md` entry
- Increment version in `package.json`
- Commit changes
- Create tag of the form v1.1.1
- Create GitHub release
- **Do NOT** publish to npm registry
