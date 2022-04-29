/**
 * This is the built-in GraphQL Client. You use it to fetch data from GraphCMS. It is used like this:
 * import {gql, SyncoreClient} from "@helper/client"
 */

import { GraphQLClient } from 'graphql-request'

// Remember to insert a GraphCMS URL here!
const SyncoreClient = new GraphQLClient(process.env.GRAPHCMS_URL as string)

export { SyncoreClient }
export { gql } from 'graphql-request'
