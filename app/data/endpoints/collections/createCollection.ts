import { Endpoint } from "@/types/endpoint/Endpoint";

export const createCollectionEndpoint: Endpoint =
{
  id: "create-collection",

  title: "Create Collection",

  description:
    "Initiates a mobile money collection request from a customer.",

  method: "POST",

  endpoint: "/v1/collections",

  environment:
    "Sandbox & Production",

  authentication:
    "Bearer API Key",

  rateLimit:
    "100 requests/minute",


      breadCrumbs: {
        breadCrumbsList:{
           href1: "/documentation",
    text1: "collections",
    text2: "create",
        }
  
   },

  sdkSupport: [
    "TypeScript",
    "Python",
    "PHP",
    "Go",
  ],

  headers: [
    {
      id: "xxxxx",
      type: "string",
      location: "header",
      name: "Authorization",
      required: true,
      example: "Bearer sk_test_xxx",
      description:
        "Merchant API secret key",
    },

    {
      id: "xxxxx1",
      type: "string",
      location: "header",
      name: "Content-Type",
      required: true,
      example:
        "application/json",
      description:
        "Request content type",
    },

    {
       id: "xxxxx2",
      type: "string",
      location: "header",
      name: "X-App-ID",
      required: true,
      example: "app_12345",
      description:
        "Merchant application id",
    },
  ],

  parameters: [
    {
       id: "xxxxx3",
      location: "query",
      name: "amount",
      type: "number",
      required: true,
      description:
        "Collection amount",

      example: "5000",

      acceptedValues: [
        "100",
        "10000000",
      ],

      source:
        "Customer payment amount",
    },

    {
       id: "xxxxx4",
      location: "query",
      name: "currency",
      type: "string",
      required: true,
      description:
        "Transaction currency",

      example: "XAF",

      acceptedValues: [
        "XAF",
        "USD",
        "EUR",
      ],

      source:
        "Merchant configuration",
    },

    {
       id: "xxxxx5",
      location: "query",
      name: "phone",
      type: "string",
      required: true,
      description:
        "Customer phone number",

      example: "677000000",

      source:
        "Customer mobile wallet",
    },
  ],

  requestBody: {
    amount: 5000,
    currency: "XAF",
    phone: "677000000",
    externalReference:
      "INV-100",
  },

  successResponse: {
    statusCode: 200,

    description:
      "Collection initiated",

    body: {
      status: "success",

      reference:
        "COL_123456",

      message:
        "Collection initiated",
    },
  },

  errorResponses: [
    {
      statusCode: 400,

      description:
        "Invalid phone",

      body: {
        code:
          "INVALID_PHONE",

        message:
          "Invalid phone number",
      },
    },

    {
      statusCode: 401,

      description:
        "Unauthorized",

      body: {
        code:
          "UNAUTHORIZED",

        message:
          "Invalid API key",
      },
    },
  ],

  flow: [
    {
      title:
        "Merchant creates collection",
    },

    {
      title:
        "Customer receives prompt",
    },

    {
      title:
        "Customer approves payment",
    },

    {
      title:
        "BuildFast processes collection",
    },

    {
      title:
        "Webhook notification sent",
    },
  ],

  codeExamples: {
    typescript: `
const response = await fetch(
 "/v1/collections",
 {
   method:"POST",
   headers:{
     Authorization:
     "Bearer API_KEY"
   },
   body: JSON.stringify({
     amount:5000,
     currency:"XAF",
     phone:"677000000"
   })
 }
);
`,

    javascript: `
fetch("/v1/collections",{
 method:"POST"
});
`,

    python: `
import requests

requests.post(
 "/v1/collections"
)
`,

    php: `
$response = Http::post(
 '/v1/collections'
);
`,

    curl: `
curl -X POST \
https://sandbox.buildfast.io/v1/collections
`,

    go: `
http.Post(
 "/v1/collections"
)
`,
  },
};