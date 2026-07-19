import EndpointPage from "@/components/docs/endpoint/EndpointPage";

import {
  createCollectionEndpoint,
} from "@/data/endpoints/collections/createCollection";

export default function Page() {
  return (
    <EndpointPage
      endpoint={
        createCollectionEndpoint
      }
    />
  );
}