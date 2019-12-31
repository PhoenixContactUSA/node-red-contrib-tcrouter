module.exports = function(RED) {
    function receiveSMSCheckNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        this.router = RED.nodes.getNode(config.router).router;

        if (this.router){
            this.on('input', function(msg, send, done) {

                node.router.checkForSmsRx().then((res)=>{
                    if (res.success === true){
                        node.status({fill:"green",shape:"dot",text:res.SMS.content});
                    }else if (res.success === false){
                        node.status({fill:"red",shape:"ring",text:res.message});
                    }

                    send(res);

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
    RED.nodes.registerType("receive-sms-check",receiveSMSCheckNode);
}