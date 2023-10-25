# **ChatGPT Server NodeJs**

## This projects aims to migrate the [chatgpt-ui-server](https://github.com/WongSaang/chatgpt-ui-server) from Django to NodeJs and Firebase

## Install the required packages
```node
npm install
```
## To run the project
```node
node server.js
```

# Description Of Modules

## 1. Account Module
* Register API
* Google Sign-In
* Verify Email

## 2. Chat Module: It contains the models related to chatgpt like 
* Conversation
* Message
* Prompt
* Setting
* EmbeddingDocument.
### Opensource LLM model [**Langchain**](https://www.npmjs.com/package/langchain) will be used for building the chatgpt features for multiple users.
### It will using websocket for realtime chat between multiple users and LLM.

