import init from './init';
import * as utils from './utils'
import woopraActions from './woopraActions'
import woopraScript from './woopraScript'

const install = function (Vue, options = {}) {
    if (install.installed) return false

    let error = false
    if(!init(options)) error = true

    Vue.prototype.$woopra = woopraActions

    Vue.directive('woopra-identify', {
        bind: (attribute, params) => {
            let parent = this;
            if(woopraScript.is_identified){
                return parent.utils.warning('User already registered in the plugin options. To use this directive, remove the key "identify".')
            }
            if(!error && !woopraScript.is_identified) parent.woopraActions.identify(params.value)
        }
    })

    Vue.directive('woopra-track', {
        bind: (attribute, params) => {
            let parent = this
            if(!error && !woopraScript.is_identified){
                parent.utils.warning('You must identify user before track events. Add user informations in the plugin options with the key "identify" or use the v-woopra-identify directive on your template')
            }
            attribute.addEventListener('click', function(event) {
                event.stopImmediatePropagation()
                if(params.value instanceof Array && params.value[0] && params.value[1]){
                    if(params.value[1] instanceof Object){
                        parent.woopraActions.track(params.value[0], params.value[1])
                    } else {
                        return parent.utils.error('Params for Woopra must be an object')
                    }
                } else {
                    return parent.utils.error('The value of the v-woopra-track directive must be an array : [event_name,params]')
                }
            })
        }
    })
}

export default {
    version: '1.0',
    install,
    woopraActions,
    utils
}