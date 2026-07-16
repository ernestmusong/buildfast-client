export interface FieldDefinition {
  id: string;

  name: string;

  type:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"
    | "integer"
    | "enum";

  required: boolean;

  description: string;

  example: string;

  acceptedValues?: string[];

  source?: string;

  defaultValue?: string;

  nullable?: boolean;

  readOnly?: boolean;

  deprecated?: boolean;

  location:
    | "header"
    | "query"
    | "path"
    | "body"
    | "response"
    | "webhook";
}