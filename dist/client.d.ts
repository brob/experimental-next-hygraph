import { GraphQLClient } from "graphql-request";
interface ClientOptions {
    token?: string;
    preview?: boolean;
    previewToken?: string;
}
declare function createClient(endpoint: string, options: ClientOptions): GraphQLClient;
export { GraphQLClient, createClient };
