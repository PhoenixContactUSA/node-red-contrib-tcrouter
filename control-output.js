module.exports = function(RED) {
    function controlOutputNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.router = RED.nodes.getNode(config.router).router;

        if (this.router){
            this.on('input', function(msg, send, done) {

                node.router.controlOutput(msg.index,msg.value).then((res)=>{
                    
                    node.status({fill:"green",shape:"dot"});
                    
                    msg.payload = res;
                    send(msg);

                    if (done) {
                        done();
                    }
                })
                .catch((err)=>{
                    node.status({fill:"red",shape:"ring",text:err.message});
                    node.error(err);
                    if (done){
                        done();
                    }
                })
            });
        }else{
            this.error('No router configuration provided');
        }
    }
    RED.nodes.registerType("control-output",controlOutputNode);
}