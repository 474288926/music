import mitt from 'mitt'

const $bus = mitt()
// const $bus: mitt.Emitter = mitt() // ts

// listen to an event
$bus.on('foo', e => console.log('foo', e) )

// listen to all events
$bus.on('*', (type, e) => console.log(type, e) )

// fire an event
$bus.emit('foo', { a: 'b' })

// clearing all events
$bus.all.clear()

// working with handler references:
function onFoo() {}
$bus.on('foo', onFoo)   // listen
$bus.off('foo', onFoo)  // unlisten

export default $bus