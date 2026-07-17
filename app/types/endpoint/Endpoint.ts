import { FieldDefinition } from "./Field";
import { ApiResponse } from "./Response";
import { CodeExamples } from "./CodeExample";
import { FlowStep } from "./Flow";

export interface Endpoint {
  id: string;

  title: string;

  description: string;

  method:
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE";

  endpoint: string;

  environment: string;

  authentication: string;

  rateLimit?: string;

  sdkSupport?: string[];

  headers: FieldDefinition[];

  parameters: FieldDefinition[];

  requestBody: Record<string, any>;

  successResponse: ApiResponse;

  errorResponses: ApiResponse[];

  flow: FlowStep[];

  codeExamples: CodeExamples;
}