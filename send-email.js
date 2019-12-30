module.exports = function(RED) {
    function sendEmailNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.router = RED.nodes.getNode(config.router);

        if (this.router){

        }else{

        }
        
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("send-email",sendEmailNode);
}