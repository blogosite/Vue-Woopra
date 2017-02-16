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

#### Configs
The Woopra tracker can be customized using the configs objects. 
Find the list of options : [Configuration on Woopra](https://www.woopra.com/docs/setup/javascript-tracking/#config)

```javascript
configs: {domain: 'mywebsite.ca', cookie_name: 'mywebsite_tracker'}
```

#### Identify
To identify a customer, you need to send their email address to Woopra as a custom visitor property. You can add any properties you want to save for this current visitor.

```javascript
identify: {email: 'usertotrack@onwoopra.com', username: 'MY_VISITOR', is_buyer: true, products_on_cart: 5}
```


## Directives availables

### woopra-identify

To identify a customer, you need to send their email address to Woopra as a custom visitor property. You can add any properties you want to save for this current visitor.
**If you added the object identify on the configuration of the plugin, do not use the directive.**

```html
<div id="app" v-woopra-identify="{email: 'usertotrack@onwoopra.com', username: 'MY_VISITOR', is_buyer: true, products_on_cart: 5}"></div>
```

### woopra-track

To track an event, you can use the woopra-track directive. It requires as argument an array with two keys. The first key is the name of the event that you are tracking. The second is an object of any properties you want to track with the event. Find more informations on the [Woopra Javascript SDK documentation](https://www.woopra.com/docs/setup/javascript-tracking/#track)

```html
<p v-woopra-track="['MY_CUSTOM_EVENT_NAME', {propertie_one: 'value', propertie_two: 'value'}]">Active my account</p>
```

> ***We track for now only if the user clicks on the item***

## Methods availables

Vue-woopra add in your vue instance two methods

### identify(user_object)

This method is identical to the woopra-identify directive. The only argument must be an object with your visitor property.

```javascript
this.$woopra.identify({email: 'usertotrack@onwoopra.com', username: 'MY_VISITOR', is_buyer: true, products_on_cart: 5})
```

### track(event_name, properties)

This method is identical to the woopra-track directive, ***but with two arguments***. The first argument must be a string for your event name. The second argument must be an object of any properties you want to track with the event.

```javascript
this.$woopra.track('MY_CUSTOM_EVENT_NAME', {propertie_one: 'value', propertie_two: 'value'})
```
