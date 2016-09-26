
# reusable-component

> Contained stateless component that renders a simple list with some ordering options.

The component should be droppable straight into both a React Native implementation and a web implementation, as such, this component has no api and the data used to render the list is statically contained in the code.

## Getting started

```sh
npm install
npm run build
```

The install will install all dependencies required for the build. The build creates separate bundles for the native and web solutions and outputs these to separate folders within `/dist`.

In lieu of a private registry for containing the built files simply copy and paste this repository into the `node_modules` directory of the project you want to include this component in. There is an additional complexity related to building this ES2016 code into something either native or the web can understand, there are two `package.json` files included which define configuration for `babel` and `browserify` to run the build, the web version requires the `_package.json`, see `install.sh` within the `integration-poc` project for an example. This can and should all be managed by the build in a real implementation.

## Reusable

The minimum changes that need to occur for the differences between native and web is the render of the component and the styling used to drive part of that rendering.

React Native needs to use components which have a native backing instance, the most simple mapping here is changing any text components (i.e. span or anything that outputs innerHTML for an HTML element) into `<Text>` components.

The styling differences relate to the use of CSS on the web, which is not supported natively. There are a couple of workarounds, the one implemented here includes removing CSS from the web and running inline-styling. CSS (and inline styling) on the web supports more options than React Native so generally any implementation will have to work around these limitations. In many cases this could be automated, and could even be automated to output CSS and insert the relevant class names into the generated JSX (which builds HTML).

All of the logic and structuring of the component is shared verbatim between native and web solutions. For this PoC this includes the data layer and some UI code to manage the re-render of the components, most of this is facilitated by using React to manage the lifecycle of the components.
