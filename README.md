# vue-woopra
Plugin to integrate Woopra on vue.js projects
## Installation

```javascript
npm require vue-woopra
```

## Usage

Import vue-woopra on your project, and add the plugin on Vue.js with the global method `Vue.use()`

```javascript
import VueWoopra from 'vue-woopra'
Vue.use(VueWoopra)
```

### Configuration

To configure vue-woopra, you can pass your settings on the `Vue.use()` global method.

```javascript
Vue.use(VueWoopra, {configs: {domain: 'mywebsite.ca'}, identify: {email: 'usertotrack@onwoopra.com'})
```

**Configs**
The Woopra tracker can be customized using the configs objects. 
Find the list of options : [Configuration on Woopra](https://www.woopra.com/docs/setup/javascript-tracking/#config)
```
configs: {domain: 'mywebsite.ca', cookie_name: 'mywebsite_tracker'}
```

**Identify**
To identify a customer, you need to send their email address to Woopra as a custom visitor property. You can add any properties you want to save for this current visitor.
```
identify: {email: 'usertotrack@onwoopra.com', username: 'MY_VISITOR', is_buyer: true, products_on_cart: 5}
```
