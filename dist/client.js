"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLClient = void 0;
exports.createClient = createClient;
const graphql_request_1 = require("graphql-request");
Object.defineProperty(exports, "GraphQLClient", { enumerable: true, get: function () { return graphql_request_1.GraphQLClient; } });
function createClient(endpoint, options) {
    const client = new graphql_request_1.GraphQLClient(endpoint);
    if (options?.token) {
        client.setHeader('Authorization', `Bearer ${options.token}`);
    }
    if (options?.preview && options.previewToken) {
        client.setHeader('Authorization', `Bearer ${options.previewToken}`);
    }
    return client;
}
