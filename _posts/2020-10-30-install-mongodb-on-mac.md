---
layout: post
title: Install and run MongoDB on macOS
tags: [mongodb]
---
Recently, I ran into an error trying to run mongodb locally on my mac. Error said cannot connect to the local server.<!--more--> It turned out that several steps have to be done in order to run MongoDB successfully on a mac ever since the 10.15 Catalina update. I followed the instructions in the MongoDB manual [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-os-x/).

To sum up:
* One time thing after installation:
    * Create data directory: `sudo mkdir -p /usr/local/var/mongodb`
    * Create log directory: `sudo mkdir -p /usr/local/var/log/mongodb`
* To start MongoDB locally every time:
    * Run mongod in one terminal using the config file: `sudo mongod --config /usr/local/etc/mongod.conf`. Make sure the log path and db path are in your .config file, like so:
```
systemLog:
    destination: file
    path: /usr/local/var/log/mongodb/mongo.log
    logAppend: true
storage:
    dbPath: /usr/local/var/mongodb
```
    * Open another terminal, connect to the mongod locally: `mongo`
