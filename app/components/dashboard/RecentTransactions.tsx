"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import {
  MoreVert as MoreIcon,
  ArrowForward as ArrowIcon,
} from "@mui/icons-material";

// Transaction Data Object typing definition structure
interface Transaction {
  id: string;
  customer: string;
  email: string;
  amount: string;
  status: "success" | "pending" | "failed";
  date: string;
}

const MOCK_TRANSACTIONS: Transaction[] = [
  { id: "TX-9021", customer: "Alice Johnson", email: "alice@example.com", amount: "+$120.00", status: "success", date: "Jul 26, 2026" },
  { id: "TX-9022", customer: "Bob Smith", email: "bob@example.com", amount: "+$45.50", status: "success", date: "Jul 25, 2026" },
  { id: "TX-9023", customer: "Charly Malik", email: "charly@dev.io", amount: "+$1,200.00", status: "pending", date: "Jul 25, 2026" },
  { id: "TX-9024", customer: "Diana Prince", email: "diana@amazon.org", amount: "$0.00", status: "failed", date: "Jul 24, 2026" },
];

export default function RecentTransactions() {
  // Configures local color-mix mappings for transaction chips using modern MUI v9 syntax
  const getStatusStyle = (status: Transaction["status"]) => {
    switch (status) {
      case "success":
        return { label: "Succeeded", color: "success" as const };
      case "pending":
        return { label: "Pending", color: "warning" as const };
      case "failed":
        return { label: "Failed", color: "error" as const };
    }
  };

  return (
    <Card elevation={0} sx={{ borderRadius: 3, border: "1px solid", borderColor: "divider", backgroundColor: "background.paper" }}>
      <CardHeader
        title={
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Recent Activity Transactions
          </Typography>
        }
        subheader="Real-time monitor logging for incoming customer checkouts"
        action={
          <IconButton aria-label="settings options">
            <MoreIcon />
          </IconButton>
        }
        sx={{ px: 3, py: 2.5 }}
      />
      <Divider />
      
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: "action.hover" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Transaction ID</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Customer</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "text.secondary" }}>Status</TableCell>
              <TableCell align="right" sx={{ fontWeight: 600, color: "text.secondary" }}>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {MOCK_TRANSACTIONS.map((tx) => {
              const statusCfg = getStatusStyle(tx.status);
              
              return (
                <TableRow key={tx.id} hover sx={{ "&:last-child transform td, &:last-child th": { border: 0 } }}>
                  <TableCell sx={{ fontWeight: 600, fontFamily: "monospace" }}>{tx.id}</TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>{tx.customer}</Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>{tx.email}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: "text.secondary", fontSize: "0.875rem" }}>{tx.date}</TableCell>
                  <TableCell>
                    <Chip
                      label={statusCfg.label}
                      color={statusCfg.color}
                      size="small"
                      sx={{ fontWeight: 600, borderRadius: 1.5 }}
                    />
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, color: tx.status === "success" ? "success.main" : "text.primary" }}>
                    {tx.amount}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
