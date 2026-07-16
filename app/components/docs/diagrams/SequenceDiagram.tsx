"use client";

import {
  Paper,
  Typography,
  Stack,
  Divider,
} from "@mui/material";

interface Event {
  actor: string;
  action: string;
}

interface Props {
  events: Event[];
}

export default function SequenceDiagram({
  events,
}: Props) {
  return (
    <Paper
      variant="outlined"
      sx={{ p: 4 }}
    >
      <Typography
        variant="h6"
        gutterBottom
      >
        Request Sequence
      </Typography>

      <Stack spacing={2}>
        {events.map(
          (event, index) => (
            <div key={index}>
              <Typography>
                <strong>
                  {
                    event.actor
                  }
                </strong>
                {" → "}
                {event.action}
              </Typography>

              {index <
                events.length -
                  1 && <Divider />}
            </div>
          )
        )}
      </Stack>
    </Paper>
  );
}