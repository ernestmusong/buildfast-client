export interface Parameter {
  name: string;

  type:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array";

  required: boolean;

  description: string;

  example: string;

  acceptedValues?: string[];

  source?: string;
}