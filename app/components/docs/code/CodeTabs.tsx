"use client";

import {
  Tabs,
  Tab,
  Box,
} from "@mui/material";

import { useState } from "react";

import CodeBlock from "./CodeBlock";

interface Snippets {
  typescript: string;
  javascript: string;
  python: string;
  php: string;
  curl: string;
  go: string;
}

interface Props {
  snippets: Snippets;
}

const languages = [
  "typescript",
  "javascript",
  "python",
  "php",
  "curl",
  "go",
];

export default function CodeTabs({
  snippets,
}: Props) {
  
  const [tab, setTab] = useState("typescript");

  return (
    <Box>
      <Tabs
        value={tab}
        onChange={(_, value) =>
          setTab(value)
        }
      >
        {languages.map((lang) => (
          <Tab
            key={lang}
            value={lang}
            label={lang}
          />
        ))}
      </Tabs>

      <CodeBlock
        language={tab}
        code={
          snippets[
            tab as keyof Snippets
          ]
        }
      />
    </Box>
  );
}