exports.register = function (server, options, next) {

    console.log("options: ", JSON.stringify(options));

    server.route({
        method: "GET",
        path: "/xyz",
        handler: function(request, reply){

            return reply("hello world. the options are: " + JSON.stringify(options));
        }
    });


    next();
};

exports.register.attributes = {
    name: 'web-routes',
    version: '1.0.0'
};
