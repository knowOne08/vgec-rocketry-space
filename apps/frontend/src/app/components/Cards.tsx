import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { theme } from "../theme";
import { color } from "framer-motion";

interface CardData {
  name: string;
  content: string;
  image: string;
  link: string;
}

interface CardGridProps {
  cards: CardData[];
  isDarkMode: boolean;
}

// const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

const CardGrid: React.FC<CardGridProps> = ({ cards, isDarkMode }) => {
  return (
    <Grid
      container
      spacing={3} // Adjust the spacing between cards
      sx={{ padding: { xs: 3, md: 5 } }} // Padding for the grid container
    >
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              backgroundColor: isDarkMode ? "white" : "black",
              color: isDarkMode ? "black" : "white",
              maxWidth: 345,
            }}
          >
            <CardMedia
              component="img"
              alt={card.name}
              height="140"
              image={card.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.name}
              </Typography>
              <Typography variant="body2">{card.content}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                href={card.link}
                target="_blank"
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  borderWidth: "2.4px",
                  "&:hover": {
                    variant: "contained",
                    backgroundColor: theme.palette.primary.light,
                    color: "white",
                  },
                }}
              >
                <Typography fontFamily="Open Sans" fontSize="20px">
                  Read
                </Typography>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
