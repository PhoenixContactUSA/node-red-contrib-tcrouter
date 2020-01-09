# node-red-contrib-tcrouter

This repo contains the source code for node-red-contrib-tc-router.  It is based on the nodejs library [node-tcrouter](https://github.com/PhoenixContactUSA/node-tcrouter) for communicating with the Phoenix Contact TC Router.  With this set of node-red nodes, one can send and receive text messages, start and stop vpn's, send emails, control the onboard output, read the on board input and monitor status information of the TC Router device.  Using this library and the TC Router, one can easily monitor and interact with remote devices while minimizing the overall cost of their system.

# Setup

In order to use the nodes in this node-red package, the TC Router device must be configured properly to enable the associated features.  Setup guides can be found on the [node-tcrouter gitbook page](https://zmink.gitbook.io/node-tcrouter/).

# Nodes

![Example Flow](./assets/example.png)

## send-sms

Sends text messages to a list of recipients from the SIM cards associated phone number.

## send-email

Sends email from the configured SMTP server email address.

## receive-sms-check && receive-sms-ack

Provides the ability to receive text messages and then perform associated actions from within node-red.

## get-io

Reads the on board inputs and output of the TC Router.

## get-info

Gets the status information of TC Router.  Useful information provided include RSSI (internet signal strength), internet connectivity status, SIM card and activation status, etc.

<!-- ## control-vpn

Provides the ability to start and stop configured VPN's.  Enables secure communication to be controlled in software.  Provides the ability to switch VPN tunnels based on fail over logic, etc. -->

## control-output

Sets the on board output of the TC Router to on or off based on the provided input.