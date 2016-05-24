/**
 * Created by Alexanderc on 5/24/2016.
 */
var url = require('url');
module.exports = {

    parse: function (str) {
        var result = url.parse(str);

        if(typeof result === "object"){
  //          console.log(result);
            return result;
        }else
            return null;
// some code
    }
}
//module.exports.parse("http://www.node.org/docs/index.html");
//module.exports.parse("http://www.node.org:7077/docs/index.html?vasya=petya#myindex");
