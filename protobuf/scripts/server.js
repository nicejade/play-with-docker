const WebSocketServer = require('websocket').server
const protobuf = require('protobufjs')
const http = require('http')
const path = require('path')

const PORT = 3333

const server = http.createServer(function(request, response) {})
server.listen(PORT, function() {
  console.log('🎉 @server started!')
})

const wsServer = new WebSocketServer({
  httpServer: server
})


const protoFilePath = path.join(__dirname, './awesome.proto')
const clientSchema = protobuf.loadSync(protoFilePath)
const AwesomeMessage = clientSchema.lookupType('awesomepackage.AwesomeMessage')

const protoSimulateData = {
  type: 'online',
  field: 'test',
  userInfo: {
    id: 917,
    nickname: 'nice man',
    type: 'MG-1A',
    locked: 0
  }
}

const tempData = AwesomeMessage.create(protoSimulateData)
const buffer = AwesomeMessage.encode(tempData).finish()

console.log(buffer)

wsServer.on('request', function(request) {
  console.log('@server request;\n')

  const serverConnection = request.accept(null, request.origin)
  setInterval(() => {
    serverConnection.sendUTF(buffer)
  }, 1000)

  console.log('🏹 Messages sent by the server：\n')
  console.log(buffer)

  serverConnection.on('close', function() {
    console.log('@server close:\n')
  })

  serverConnection.on('message', function(message) {
    console.log('@server receive message:', message)
  })
})