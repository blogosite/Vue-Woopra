import woopraScript from './woopraScript'
import init from './init';

export default {
    identify: (user) => {
        woopra.identify(user)
        woopra.track()
    },
    track: (event_name, event_params) => {
        woopra.track(event_name, event_params)
    }
}
