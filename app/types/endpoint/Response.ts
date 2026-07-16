export interface ApiResponse {
  statusCode: number;

  description: string;

  body: Record<string, any>;
}