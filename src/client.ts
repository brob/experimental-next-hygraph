import { GraphQLClient } from "graphql-request";

interface ClientOptions {
    token?: string
    preview?: boolean
    previewToken?: string
}


function createClient(endpoint:string, options:ClientOptions) : GraphQLClient {

    const client = new GraphQLClient(endpoint)
    if (options?.token) {
        client.setHeader('Authorization', `Bearer ${options.token}`)
    }
    if (options?.preview && options.previewToken) {
        client.setHeader('Authorization', `Bearer ${options.previewToken}`)
    }

    return client
}

export { GraphQLClient, createClient } 