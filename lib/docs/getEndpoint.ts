import { endpoints } from "@/data";

export function getEndpoint(
  category: string,
  action: string
) {
  return endpoints[
    category as keyof typeof endpoints
  ]?.[
    action as keyof typeof endpoints.collections
  ];
}