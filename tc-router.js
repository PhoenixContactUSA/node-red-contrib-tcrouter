const R = require('@phoenixcontactusa/node-tcrouter');

module.exports = function(RED) {
    function tcRouterNode(config) {
        RED.nodes.createNode(this,config);
        this.router = new R(config.host,config.port,config.timeout);;
    }
    RED.nodes.registerType("tc-router",tcRouterNode);
}