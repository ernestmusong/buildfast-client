"use client";

import { useState } from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import {
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import CheckIcon from '@mui/icons-material/Check';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
    language: string
    code: any
}

export default function CodeBlock({ language, code }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
        my: 2,
        backgroundColor: '#1e1e1e',
      }}
    >
      {/* Header Bar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          py: 1,
          backgroundColor: '#2d2d2d',
          borderBottom: '1px solid #3d3d3d',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: '#b5cea8',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          {language}
        </Typography>
        
        <Tooltip title={copied ? "Copied!" : "Copy Code"}>
          <IconButton onClick={handleCopy} size="small" sx={{ color: '#aaa' }}>
            {copied ? <CheckIcon fontSize="small" color="success" /> : <ContentCopyIcon fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>

      {/* Code Area */}
      <Box sx={{ p: 0, '& pre': { m: '0 !important', borderRadius: '0 !important' } }}>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{ margin: 0, padding: '16px', background: 'transparent' }}
        >
          {code}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
}





// export default function CodeBlock({
//   code,
//   language,
// }: Props) {
//   const copyCode = () =>
//     navigator.clipboard.writeText(code);

//   return (
//     <Box
//     sx={{
//         position:"relative"
//     }} 
//     >
//       <Tooltip title="Copy">
//         <IconButton
//           onClick={copyCode}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             zIndex: 2,
//           }}
//         >
//           <ContentCopyIcon />
//         </IconButton>
//       </Tooltip>

//       <SyntaxHighlighter
//         language={language}
//         style={oneDark}
//         customStyle={{
//           borderRadius: 12,
//           padding: 20,
//         }}
//       >
//         {code}
//       </SyntaxHighlighter>
//     </Box>
//   );
// }