# Cycle.js `customElementify`

##### Experimental

Helper function that takes a Cycle.js component (`(sources: Sources) => Sinks`) and returns a JavaScript class that can be registered as a Web Component custom element with `window.customElements.define`:

```js
import customElementify from 'cycle-custom-elementify';

function main(sources) {
  // ...
}

const customElementClass = customElementify(main);
window.customElements.define('my-web-component', customElementClass);
```

```html
<my-web-component></my-web-component>
```

## Installation

```
npm install cycle-custom-elementify
```

#### Required!

Your target browser must support [Custom Elements v1](http://webcomponents.org/polyfills/custom-elements/) or install the polyfill for other browsers:

- Get latest version of compatible [webcomponents polyfill](https://github.com/webcomponents/webcomponentsjs) such as [webcomponents-hi-ce.js](https://raw.githubusercontent.com/webcomponents/webcomponentsjs/master/webcomponents-hi-ce.js)
- Cycle DOM v16
- Include `<script src="./webcomponents-hi-ce.js"></script>` in your page

This library is experimental and so far **only** supports Cycle.js apps written with xstream. You can only `customElementify` a function that expects xstream sources and sinks.

## Usage

Your Cycle.js component function can expect sources to have `DOM` and `props`:

```typescript
// TypeScript signature:
type Sources = {
  DOM: DOMSource,
  props: Stream<Object>
}
```

Your component's sinks should have `DOM` and any other sink will be converted to DOM events on the custom element:

```typescript
// TypeScript signature:
type Sinks = {
  DOM: Stream<VNode>,
  bark: Stream<string>,
  // `bark` sink stream will be converted to DOM Events emitted on the resulting custom element
}
```

Write your function `MyButton: (sources: Sources) => Sinks` like you would do with any typical Cycle.js app. `sources.props` is a Stream of objects that contain attributes given to the custom element.

Then convert it to a custom element class:

```js
import customElementify from 'cycle-custom-elementify';

const customElementClass = customElementify(MyButton);
```

Then, register your custom element on the DOM with a tagName of your choice:

```js
window.customElements.define('my-button', customElementClass);
```

If you want to use this `my-button` inside another Cycle.js app, be careful to wait for the `WebComponentsReady` event first:

```js
window.addEventListener('WebComponentsReady', () => {
  window.customElements.define('my-button', customElementify(MyButton));
  Cycle.run(main, {
    DOM: makeDOMDriver('#app-container')
  });
});
```

If your parent Cycle.js app passes attributes to the custom element, then they will be available as `sources.props` in the child Cycle.js app (inside the custom element):

```js
function main(sources) {
  // ...

  const vnode$ = xs.of(
    div([
      h('my-button', {attrs: {color: 'red'}})
    ])
  );

  // ...
}
```

```js
function MyButton(sources) {
  const color$ = sources.props.map(p => p.color);

  // ...
}
```

## Compile and Run example app

```bash
$ cd example
$ npm i
$ npm run prebrowserify && npm run browserify
$ npm start
```


## Custom Elements v1

See [MDN: Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements) and [Custom Elements v1: Getting started](https://developers.google.com/web/fundamentals/getting-started/primers/customelements)

- `constructor`	An instance of the element is created or upgraded. Useful for initializing state, settings up event listeners, or creating shadow dom. See the spec for restrictions on what you can do in the constructor.
- `connectedCallback`	Called every time the element is inserted into the DOM. Useful for running setup code, such as fetching resources or rendering. Generally, you should try to delay work until this time.
- `disconnectedCallback`	Called every time the element is removed from the DOM. Useful for running clean up code (removing event listeners, etc.).
- `attributeChangedCallback(attrName, oldVal, newVal)`	An attribute was added, removed, updated, or replaced. Also called for initial values when an element is created by the parser, or upgraded. Note: only attributes listed in the `observedAttributes` property will receive this callback.
- `adoptedCallback()`	The custom element has been moved into a new document (e.g. someone called `document.adoptNode(el)`).

Elements can react to attribute changes by defining a `attributeChangedCallback`. The browser will call this method for every change to attributes listed in the `observedAttributes` array (static getter).

```js
class AppDrawer extends HTMLElement {
  ...

  static get observedAttributes() {
    return ['disabled', 'open'];
  }

  // Only called for the disabled and open attributes due to observedAttributes
  attributeChangedCallback(name, oldValue, newValue) {
    // When the drawer is disabled, update keyboard/screen reader behavior.
    if (this.disabled) {
      // ...
    }
  }
}
```

To know when a tag name becomes defined, you can use `window.customElements.whenDefined()`. It vends a `Promise` that resolves when the element becomes defined.

```js
customElements.whenDefined('app-drawer').then(() => {
  console.log('app-drawer defined');
});
```

### Shadow DOM

To use Shadow DOM in a custom element, call `this.attachShadow` inside your `constructor`:

```js
customElements.define('x-foo-shadowdom', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.

    // Attach a shadow root to the element.
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>:host { ... }</style> <!-- look ma, scoped styles -->
      <b>I'm in shadow dom!</b>
      <slot></slot>
    `;
  }
  ...
});
```

### Templating

```html
<template id="x-foo-from-template">
  <style>
    p { color: orange; }
  </style>
  <p>I'm in Shadow DOM. My markup was stamped from a &lt;template&gt;.</p>
</template>

<script>
  customElements.define('x-foo-from-template', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the ctor.
      let shadowRoot = this.attachShadow({mode: 'open'});
      const t = document.querySelector('#x-foo-from-template');
      const instance = t.content.cloneNode(true);
      shadowRoot.appendChild(instance);
    }
    ...
  });
</script>
```

## Scripts
- `npm run prelib` remove `/lib` and create new `/lib` folder
- `npm run lib` run `tsc` (Typescript compiler) on `/src` to generate ES5 `.js` files in `/lib`
- `npm run predist` remove old `/dist` and create new `/dist` folder
- `npm run dist` create distribution file `cycle-custom-elementify.js` in `/dist`

## Known issues

- This is an experimental library :)
- We're currently trying to upgrade from Custom Elements V0 to V1 spec
- The custom elements generated by this helper do not support children yet, only attributes
- Using this library might confuse the Cycle.js DevTool
