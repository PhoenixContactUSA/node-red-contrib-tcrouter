module.exports = function(RED) {
    function sendSMSNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        this.router = RED.nodes.getNode(config.router).router;

        if (this.router){
            this.on('input', function(msg, send, done) {

                node.router.sendSMS(msg.contacts,msg.content).then((res)=>{
                    if (res.success === true){
                        node.status({fill:"green",shape:"dot",text:"sent"});
                    }else if (res.success === false){
                        node.status({fill:"red",shape:"ring",text:"send failed"});
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
    RED.nodes.registerType("send-sms",sendSMSNode);
}