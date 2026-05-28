const jsonServer = require('json-server');
const serverless = require('serverless-http');

// 创建服务器
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// 适配Vercel无服务器环境
module.exports.handler = serverless(server);