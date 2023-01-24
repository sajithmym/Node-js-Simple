const EventEmitter= require( 'events')

const customEmitter = new EventEmitter()

customEmitter.on("res", (name,id) => {
    console.log(`Receved Da Name : ${name}   ::::  id :- ${id}`);
})
customEmitter.on("res", () => {
    console.log(`Hellow Guru How are you...?`);
})

customEmitter.emit('res','Sajithmym',22)
