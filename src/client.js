import { GraphQLClient } from "graphql-request";

const apiToken = "07fd84e7daf79ac61cece230ae9b59";
const endpoint = `https://graphql.datocms.com`;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: "Bearer " + apiToken,
};
const client = new GraphQLClient(endpoint, { headers });
export default client;
