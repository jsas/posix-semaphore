

const Semaphore = require('../addon')

const sem = Semaphore('salut00', { silent: true })
sem.acquire()
const sem2 = Semaphore('salut00', { silent: true })
console.log('after sem2 creation, should not appear')
sem2.acquire()