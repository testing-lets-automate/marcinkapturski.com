import { GraphQLClient } from "graphql-request";

const apiToken = "dff99b7ec1178b1c27331240137a32";
const endpoint = `https://graphql.datocms.com`;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: "Bearer " + apiToken,
};
const client = new GraphQLClient(endpoint, { headers });
export default client;
