module.exports = function(RED) {
    function sendSMSNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        this.router = RED.nodes.getNode(config.router);

        if (this.router){
            console.log('Got a router yo');
        }else{

        }
        // node.on('input', function(msg) {
        //     msg.payload = msg.payload.toLowerCase();
        //     node.send(msg);
        // });
    }
    RED.nodes.registerType("send-sms",sendSMSNode);
}