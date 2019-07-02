<h1 align="center">⭐️Vue material checkbox⭐️</h1>

<p align="center">
<a href="https://www.npmjs.com/package/vue-material-checkbox">
<img src="https://img.shields.io/npm/v/vue-material-checkbox.svg" alt="NPM version">
</a>
</p>

#### Material design checkbox component for Vue

# Demo ✅
[Here is demo with all features](https://xrei.github.io/vue-material-checkbox/)

# Use ❓
### With npm
- Install plugin
```
npm install vue-material-checkbox --save
```
- Import to the app and add to the Vue
```javascript
import { globalCheckbox } from 'vue-material-checkbox'
Vue.use(globalCheckbox)
```
Alternatively if component used with server-side-rendering
<br>
Then import as follows below:
```javascript
import { globalCheckbox } from '../node_modules/vue-material-checkbox/src/main'
// assuming  that you're one level higher than root folder where node modules is.
Vue.use(globalCheckbox)
```
In this case you will **have** to install *stylus* and *stylus-loader*  to parse styles of component.

- Use it as component:
```html
<Checkbox id="mycheck1" v-model="someVar">My Checkbox</Checkbox>
```

# Component 💎
There is autogenerated id for label and checkbox, but you can specify it yourself.

You can specify label for checkbox inside checkbox tag:
```html
<Checkbox id="mycheck1" v-model="someVar"> ThisIsLabel </Checkbox>
```

You can set custom color for background of checkbox:
```html
<Checkbox id="mycheck1" v-model="someVar" color="#f50057"> ThisIsLabel </Checkbox>
```

You can set size of the box and label font size in pixels:
```html
<Checkbox id="mycheck1" v-model="someVar" :size="32" fontSize="24"> ThisIsLabel </Checkbox>
```

## Complete props table

| Prop | Type | Default | What For|
|:-:|:-:|:-:|---|
| `id` | `String` | `undefined` | **Recommended**. input id associated with label |
| `value` | `String` | `undefined` | Value for input, without it checkbox works as `true/false` |
| `color` | `String` | `undefined` | Pass the color string to change bg-color of checkbox |
| `checked` | `Boolean` | `false` | is checked by default? |
| `name` | `String` | `undefined` | Name for input |
| `required` | `Boolean` | `false` | HTML required attr |
| `disabled` | `Boolean` | `false` | HTML disabled attr |
| `size` | `Number` | `undefined` | Size of the box in px |
| `fontSize` | `Number` | `undefined` | Size of the label font in px |
