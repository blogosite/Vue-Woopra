import woopraScript from './woopraScript'

export default {
    identify: (user) => {
        woopra.identify(user)
        woopra.track()
        woopraScript.is_identified = true;
    },
    track: (event_name, event_params) => {
        woopra.track(event_name, event_params)
    }
}
