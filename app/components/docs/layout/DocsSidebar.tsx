"use client";

import {
  Box,
  TextField,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { navigation } from "@/data/docs/docs-navigation";

export default function DocsSidebar() {
  const pathname = usePathname();

  const [search, setSearch] = useState("");

  const [openGroups, setOpenGroups] = useState<
    Record<string, boolean>
  >({
    Collections: true,
    Payouts: true,
  });

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  const filteredNav = useMemo(() => {
    if (!search) return navigation;

    return navigation
      .map((item) => {
        if (item.children) {
          const children = item.children.filter((child) =>
            child.label
              .toLowerCase()
              .includes(search.toLowerCase())
          );

          if (children.length) {
            return {
              ...item,
              children,
            };
          }
        }

        if (
          item.label
            .toLowerCase()
            .includes(search.toLowerCase())
        ) {
          return item;
        }

        return null;
      })
      .filter(Boolean);
  }, [search]);

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        height: "100vh",
        overflowY: "auto",
        borderRight: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        p: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
            fontWeight:700,
        mb:2
        }}
      >
        BuildFast Docs
      </Typography>

      <TextField
        fullWidth
        size="small"
        placeholder="Search docs..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        sx={{ mb: 3 }}

        slotProps={{
            input: {
              startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
              )
            },
          }}
      />

      <List disablePadding>
        {filteredNav.map((item: any) => {
          if (item.children) {
            return (
              <Box key={item.label}>
                <ListItemButton
                  onClick={() =>
                    toggleGroup(item.label)
                  }
                >
                  <ListItemText
                    primary={item.label}
                  />

                  {openGroups[item.label] ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItemButton>

                <Collapse
                  in={openGroups[item.label]}
                >
                  <List disablePadding>
                    {item.children.map(
                      (child: any) => (
                        <ListItemButton
                          key={child.href}
                          component={Link}
                          href={child.href}
                          selected={
                            pathname ===
                            child.href
                          }
                          sx={{
                            pl: 4,
                            borderRadius: 2,
                          }}
                        >
                          <ListItemText
                            primary={
                              child.label
                            }
                          />
                        </ListItemButton>
                      )
                    )}
                  </List>
                </Collapse>
              </Box>
            );
          }

          return (
            <ListItemButton
              key={item.href}
              component={Link}
              href={item.href}
              selected={
                pathname === item.href
              }
              sx={{
                borderRadius: 2,
              }}
            >
              <ListItemText
                primary={item.label}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}