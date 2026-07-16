"use client";
import { useState } from "react";
import { FieldDefinition } from "@/types/endpoint/Field";
import EndpointHero from "./EndpointHero";
import EndpointDescription from "./EndpointDescription";
import EndpointMetadata from "./EndpointMetadata";
import FieldInspector from "../inspector/FieldInspector";
import InspectorLayout from "../layout/InspectorLayout";

import HeadersTable from "../tables/HeadersTable";
import FieldsTable from "../tables/FieldsTable";

import RequestVisualizer from "../visulalizers/RequestVisualizer";
import ResponseVisualizer from "../visulalizers/ResponseVisualizer";

import FlowDiagram from "../diagrams/FlowDiagram";

import CodeTabs from "../code/CodeTabs";

import { Endpoint } from "@/types/endpoint/Endpoint";

import {
  Grid
} from "@mui/material";

interface Props {
  endpoint: Endpoint;
}

export default function EndpointPage({
  endpoint,
}: Props) {

    const [selectedField, setSelectedField] =
    useState<FieldDefinition | null>(null);

  return (
    <>
      <EndpointHero
        title={endpoint.title}
        method={endpoint.method}
        endpoint={
          endpoint.endpoint
        }
      />

      <EndpointDescription
        description={
          endpoint.description
        }
      />

      <EndpointMetadata
        environment={
          endpoint.environment
        }
        authentication={
          endpoint.authentication
        }
        rateLimit={
          endpoint.rateLimit
        }
        sdkSupport={
          endpoint.sdkSupport?.join(
            ", "
          )
        }
      />

      <InspectorLayout
    inspector={
        <FieldInspector
            field={selectedField}
        />
    }
>
    
    <HeadersTable
            headers={endpoint.headers}
    selectedField={selectedField}
    onFieldSelect={setSelectedField}
        />
</InspectorLayout>
      <InspectorLayout
    inspector={
        <FieldInspector
            field={selectedField}
        />
    }
>
    <FieldsTable
      title="Request Parameters"
      description="Parameters accepted by this endpoint."
      fields={endpoint.fields}
      selectedField={selectedField}
      onFieldSelect={setSelectedField}
    />

</InspectorLayout>

      <InspectorLayout
    inspector={
        <FieldInspector
            field={selectedField}
        />
    }
>
    <RequestVisualizer
      fields={endpoint.fields}
      body={endpoint.requestBody}
      onFieldSelect={setSelectedField}
    />

</InspectorLayout>

 <InspectorLayout
    inspector={
        <FieldInspector
            field={selectedField}
        />
    }
>
    <ResponseVisualizer
            fields={endpoint.fields}
            response={endpoint.successResponse.body}
            onFieldSelect={setSelectedField}
        />

</InspectorLayout>
      

      <FlowDiagram
        steps={endpoint.flow}
      />

      <CodeTabs
        snippets={
          endpoint.codeExamples
        }
      />
    </>
  );
}