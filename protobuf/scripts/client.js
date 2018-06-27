const Websocket = require('websocket')
const Protobufjs = require('protobufjs')
const path = require('path')

const PORT = 3333

const protoFilePath = path.join(__dirname, './awesome.proto')
let AwesomeMessage = null

Protobufjs.load(protoFilePath)
  .then(root => {
    AwesomeMessage = root.lookupType('awesomepackage.AwesomeMessage')
  })
  .catch(error => {
    throw error
  })

const WebsocketClient = Websocket.w3cwebsocket

const client =  new WebsocketClient(`ws://10.81.0.186:${PORT}/communicate`)

client.onerror = function(error) {
  console.error('🐛  Socket connection error...')
  console.error(error)
}

client.onopen = function() {
  console.log('🎉  Socket connection success...')
}

client.onclose = function(message) {
  console.warn('ℹ️  Socket connection close...')
  console.error(message)
}

client.onmessage = function(messageEvent) {
  if (!AwesomeMessage) return
  const buffer = new Buffer(messageEvent.data, 'binary')
  const tempMsg = AwesomeMessage.decode(buffer)
  const message = AwesomeMessage.toObject(tempMsg, {
    longs: String,
    enums: String,
    bytes: String,
    defaults: true,
    arrays: true,
    objects: true,
    oneof: true
  })
  console.log('')
  console.log('🎉🍀 Messages from the server：')
  console.log(message)
}