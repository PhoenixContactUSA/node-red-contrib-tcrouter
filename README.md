# node-red-contrib-tcrouter

![Downloads](https://img.shields.io/npm/dt/@phoenixcontactusa/node-red-contrib-tcrouter)

This repo contains the source code for node-red-contrib-tc-router.  It is based on the nodejs library [node-tcrouter](https://github.com/PhoenixContactUSA/node-tcrouter) for communicating with the Phoenix Contact TC Router.  With this set of node-red nodes, one can send and receive text messages, start and stop vpn's, send emails, control the onboard output, read the on board input and monitor status information of the TC Router device.  Using this library and the TC Router, one can easily monitor and interact with remote devices while minimizing the overall cost of their system.

# Setup

In order to use the nodes in this node-red package, the TC Router device must be configured properly to enable the associated features.  Setup guides can be found on the [node-tcrouter gitbook page](https://zmink.gitbook.io/node-tcrouter/).

# Nodes

![Example Flow](https://github.com/PhoenixContactUSA/node-red-contrib-tcrouter/blob/master/assets/example.png?raw=true)

## send-sms

Sends text messages to a list of recipients from the SIM cards associated phone number. This block requires the following msg.payload with the following json format

```javascript
{
    "contacts": "11122233333",
    "content": "hello world"
}
```

The contacts input can also accept an array of phone numbers for texting multiple numbers simultaneously:

```javascript
{
    "contacts": ["1112223333","2223334444"],
    "content": "hello world"
}
```

## send-email

Sends email from the configured SMTP server email address. This block requires a msg.payload with the following format

```javascript
{
    "to": "test@test.com",
    "cc": "testcc@test.com",
    "subject":"Hello World",
    "body":"hello world from node-red-tcrouter"
}
```

## receive-sms-check && receive-sms-ack

Provides the ability to receive text messages and then perform associated actions from within node-red.  The "receive-sms-check" block requires an input trigger to check the router for new messages.  An inject block with a timestamp payload is sufficient.  The "receive-sms-ack" block also requires a simple trigger to clear the previous sms message from the router's memory.

## get-io

Reads the on board inputs and output of the TC Router. Any input, such as an injected timestamp, will trigger this block to request the IO status of the associated tcrouter.

## get-info

Gets the status information of TC Router.  Useful information provided include RSSI (internet signal strength), internet connectivity status, SIM card and activation status, etc.  To trigger this block to read the status information from the configured TC Router, any change in input is sufficient.

<!-- ## control-vpn

Provides the ability to start and stop configured VPN's.  Enables secure communication to be controlled in software.  Provides the ability to switch VPN tunnels based on fail over logic, etc. -->

## control-output

Sets the on board output of the TC Router to on or off based on the provided input.  This block requires a msg.payload with the following json format

```javascript
{
    "index": 1,
    "value": true
}
```
As of the writing of this document, the output index must be 1 (the TC Router has 1 available output).  The "value" property must be a boolean value representing turning the output on (true) or off (false)

## control-vpn

Turns a configured vpn on or off.  Requires the following msg.payload input:

```javascript
{
    "type":  2,      //must be 1 for ipsec, 2 for openvpn
    "index": 1,      //must be greater than 0 - index of the vpn configured
    "state": true   //true for on, false for off
}
```
