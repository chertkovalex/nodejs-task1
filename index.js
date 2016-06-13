/**
 * Created by Alexanderc on 5/24/2016.
 */
var url = require('url');
var validator = require('validator');
module.exports = {

    parse: function (str) {
        var result = url.parse(str);

        if(typeof result === "object"  && validator.isURL(str)){
  //          console.log(result);


            return {
                url: result.href,
                host: result.hostname,
                port: result.port || 80,
                file: result.pathname,
                path: result.path
            };
        }else{

            console.log("url: " + str + " invalid");
            return null;
        }

// some code
    }
}
//module.exports.parse("http://www.node.org/docs/index.html");
//module.exports.parse("http://www.node.org:7077/docs/index.html?vasya=petya#myindex");
