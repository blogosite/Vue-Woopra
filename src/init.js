import {error} from './utils'
import woopraScript from './woopraScript'
import woopraActions from './woopraActions'

export default function (options) {
    if(!options.configs || !options.configs.domain){
       return error('Domain is required. Please add your domain in the plugin options [configs.domain]')
    }
    woopraScript.get()
    woopraScript.set(options.configs)
    woopraScript.is_mounted = true
    if(options.identify){
        woopraActions.identify(options.identify)
        woopraScript.is_identified = true
    }
    return true
}