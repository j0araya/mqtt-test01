const aedes = require('aedes')();
const httpServer = require('http').createServer();
const ws = require('websocket-stream');
const port = 8888;

ws.createServer({ server: httpServer }, aedes.handle)

httpServer.listen(port, function () {
  console.log('websocket server listening on port ', port)
});


// import mqtt from 'mqtt'; 
// import url from 'url';

// var mqtt_url = url.parse(process.env.CLOUDMQTT_URL || 'mqtt://localhost:1883');
// var auth = (mqtt_url.auth || ':').split(':');

// // Create a client connection
// var client = mqtt.createClient(mqtt_url.port, mqtt_url.hostname, {
//   username: auth[0],
//   password: auth[1]
// });

// client.on('connect', function() { // When connected

//   // subscribe to a topic
//   client.subscribe('hello/world', function() {
//     // when a message arrives, do something with it
//     client.on('message', function(topic, message, packet) {
//       console.log("Received '" + message + "' on '" + topic + "'");
//     });
//   });

//   // publish a message to a topic
//   client.publish('hello/world', 'my message', function() {
//     console.log("Message is published");
//     client.end(); // Close the connection when published
//   });
// });