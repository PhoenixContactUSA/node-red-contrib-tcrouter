module.exports = function(RED) {
    function receiveSMSAckNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        this.router = RED.nodes.getNode(config.router).router;

        if (this.router){
            this.on('input', function(msg, send, done) {

                node.router.ackSmsRx().then((res)=>{
                    if (res.success === true){
                        node.status({fill:"green",shape:"dot",text:"message cleared"});
                    }else if (res.success === false){
                        node.status({fill:"red",shape:"ring",text:"message failed to clear"});
                    }

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
    RED.nodes.registerType("receive-sms-ack",receiveSMSAckNode);
}