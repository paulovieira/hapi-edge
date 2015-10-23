var Hapi = require("hapi");
var Glue = require("glue");
var Inert = require("inert");
var WebRoutes = require("./web-routes");

var internals = {};

internals.glueManifest = {
    server: {

    },
    connections: [{
        port: 7500,
        labels: ['http']
    }],
    plugins: {
        "inert": [{select: "http"}],
        "./web-routes": {select: ["http"], "xyz": "abc"}
    },

};

internals.glueOptions = {
    relativeTo: __dirname
};

Glue.compose(internals.glueManifest, internals.glueOptions, function(err, server){

    if(err){
        throw err;
    }

    server.start(function(err){

        console.log(server.info.uri);
    });
});

var server = new Hapi.Server();

// server.connection({
//     port: 7500
// });

// server.register(Inert, function(){

    
// });

// server.route({
//     method: "GET",
//     path: "/xyz",
//     handler: function(request, reply){

//         return reply("hello world")
//     }
// });

// server.route({
//     method: "GET",
//     path: "/assets",
//     handler: function(request, reply){

//         reply.file("./node_modules/glue/LICENSE")
//     }
// })
// server.start(function(err){

//     console.log(server.info.uri)
// })