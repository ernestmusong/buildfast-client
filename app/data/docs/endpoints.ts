import { FieldDefinition } from "@/types/endpoint/Field";

export const requestParameters: FieldDefinition[] = [
  {
    id: "amount",
    name: "amount",
    type: "number",
    required: true,
    description: "Amount to collect from the customer.",
    example: "5000",
    acceptedValues: ["100", "10000000"],
    source: "Merchant checkout amount",
    location: "body",
  },
  {
    id: "currency",
    name: "currency",
    type: "string",
    required: true,
    description: "Transaction currency.",
    example: "XAF",
    acceptedValues: ["XAF", "USD", "EUR"],
    source: "Merchant configuration",
    location: "body",
  },
  {
    id: "phone",
    name: "phone",
    type: "string",
    required: true,
    description: "Customer mobile money number.",
    example: "677000000",
    source: "Collected from customer",
    location: "body",
  },
];