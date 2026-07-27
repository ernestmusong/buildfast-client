// components/onboarding/ReviewCard.tsx

import {
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

interface ReviewItem {
  label: string;
  value: string;
}

interface Props {
  title: string;
  items: ReviewItem[];
}

export default function ReviewCard({
  title,
  items,
}: Props) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={2}>
          <Typography
            variant="h6"
            sx={{fontWeight:700}}
          >
            {title}
          </Typography>

          <Divider />

          {items.map((item) => (
            <Stack
              key={item.label}
              direction="row"
              sx={{justifyContent:"space-between"}}
            >
              <Typography
                color="text.secondary"
              >
                {item.label}
              </Typography>

              <Typography
                sx={{fontWeight:600}}
              >
                {item.value}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}