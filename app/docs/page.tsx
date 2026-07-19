import DocsHero from "@/components/docs/docs-home/DocsHero";
import Prerequisites from "@/components/docs/docs-home/Prerequisites";
import { Card } from "@mui/material";

export default function DocsPage() {
  return (
    <Card component='main'>
      <DocsHero />
      <Prerequisites />
    </Card>
  );
}