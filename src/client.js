import { GraphQLClient } from "graphql-request";
function createClient(endpoint, options) {
    const client = new GraphQLClient(endpoint);
    if (options === null || options === void 0 ? void 0 : options.token) {
        client.setHeader('Authorization', `Bearer ${options.token}`);
    }
    if ((options === null || options === void 0 ? void 0 : options.preview) && options.previewToken) {
        client.setHeader('Authorization', `Bearer ${options.previewToken}`);
    }
    return client;
}
export { GraphQLClient, createClient };
