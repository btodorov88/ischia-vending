// create variable for our handler to be shared between the bind & unbind hooks
var handleOutsideClick = {}
const OutsideClick = {
    // this directive is run on the bind and unbind hooks
    bind(el, binding, vnode) {
        // Define the function to be called on click, filter the excludes and call the handler
        handleOutsideClick[el.id] = e => {
            // extract the handler and exclude from the binding value
            const handler = binding.value
            // don't call the handler if our directive element contains the target element
            if (!(el.contains(e.target))) {
                e.stopPropagation()
                handler()
            }
        }
        // Register our outsideClick handler on the click/touchstart listeners
        document.addEventListener('click', handleOutsideClick[el.id], true)
        document.addEventListener('touchstart', handleOutsideClick[el.id], true)
    },
    unbind(el) {
        // If the element that has v-outside-click is removed, unbind it from listeners
        document.removeEventListener('click', handleOutsideClick[el.id], true)
        document.removeEventListener('touchstart', handleOutsideClick[el.id], true)
    }
}
export default OutsideClick