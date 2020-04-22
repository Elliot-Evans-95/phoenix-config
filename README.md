# Phoenix configuration

This is my personal [Phoenix](https://github.com/kasper/phoenix) configuration, written in TypeScript, based on [mafredri's repo](https://github.com/mafredri/phoenix-config) aslo using his [typings](https://github.com/mafredri/phoenix-typings).

## Building

```
yarn && yarn run typings
yarn run build
```

The TypeScript compiler and Webpack will produce `out/phoenix.js` that can be used as Phoenix configuration. 

For development, `yarn start` will run Webpack in watch-mode.
