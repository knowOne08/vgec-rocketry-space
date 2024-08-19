import {
  Container,
  Stack,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import CardGrid from "../components/Cards";
import { theme } from "../theme";
import Aflatoon from "/Aflatoon.jpeg";
import { useInView } from "react-intersection-observer";
import { Footer } from "../components/Footer";
import Mission from "../../../public/mission.png";
import { Margin, Padding } from "@mui/icons-material";

export const OldMission: React.FC = () => {
  useEffect(() => {
    document.title = "OLDMISSION | VRT";
  }, []);

  const cardsDataForLaunch = [
    {
      name: "Mission 1",
      content:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/2022-11/Cover%20Photo%20-%20Space%20-%20as%20a%20GIF.gif?VersionId=fCsg8LCoWUqcb7NruvrFKp_c0M44y4W_",
      link: "/",
    },
    {
      name: "Mission 2",
      content:
        "Chameleons are known for their distinct color-changing abilities, which they use for communication and camouflage.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/2022-11/Cover%20Photo%20-%20Space%20-%20as%20a%20GIF.gif?VersionId=fCsg8LCoWUqcb7NruvrFKp_c0M44y4W_",
      link: "/",
    },
    {
      name: "Mission 3",
      content:
        "Iguanas are herbivorous lizards native to tropical areas of Mexico, Central America, South America, and the Caribbean.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/2022-11/Cover%20Photo%20-%20Space%20-%20as%20a%20GIF.gif?VersionId=fCsg8LCoWUqcb7NruvrFKp_c0M44y4W_",
      link: "/",
    },
    {
      name: "Mission 4",
      content:
        "Geckos are small to medium-sized lizards known for their unique vocalizations and ability to climb smooth surfaces.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/2022-11/Cover%20Photo%20-%20Space%20-%20as%20a%20GIF.gif?VersionId=fCsg8LCoWUqcb7NruvrFKp_c0M44y4W_",
      link: "/",
    },
    {
      name: "Mission 5",
      content:
        "The Komodo dragon is the largest living species of lizard, capable of growing up to 10 feet in length and weighing up to 150.",
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/2022-11/Cover%20Photo%20-%20Space%20-%20as%20a%20GIF.gif?VersionId=fCsg8LCoWUqcb7NruvrFKp_c0M44y4W_",
      link: "/",
    },
  ];

  const cardDataForPrograms = [
    {
      name: "Program 1",
      content:
        "Red Giants are aging stars that have exhausted the supply of hydrogen in their cores and have begun to burn helium. They are characterized by their large size and reddish hue.",
      image: "https://cdn.mos.cms.futurecdn.net/xKkFJqojdSd8vJuvCLs5mU.jpg",
      link: "/",
    },
    {
      name: "Program 2",
      content:
        "Neutron Stars are incredibly dense remnants of massive stars that have undergone supernova explosions. They are only about 20 km in diameter but have masses greater than the Sun.",
      image:
        "https://science.nasa.gov/wp-content/uploads/2023/06/sun-h1180-jpg.webp?w=1920",
      link: "/",
    },
    {
      name: "Program 3",
      content:
        "White Dwarfs are the remnants of low-mass stars that have shed their outer layers. They are very dense and slowly cool over time, eventually fading into black dwarfs.",
      image:
        "https://img.jagranjosh.com/images/2022/November/1112022/what-are-stars-how-are-they-born-and-how-do-they-die-compressed-(1).webp",
      link: "/",
    },
  ];

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const styling = {
    container: {
      padding: 0,
      margin: 0,
    },
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Container
        maxWidth={false}
        sx={{
          backgroundImage: {
            xs: `url('${Aflatoon}')`,
            md: "none",
          },
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          padding: 0,
          marging: 0,
        }}
      >
        <img
          src={Mission}
          alt="Mission img"
          style={{
            position: "absolute",
            display: isSmallScreen ? "none" : "block",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <Navbar />
      </Container>
      <Stack
        // spacing={3}
        sx={{
          alignItems: "center",
          // backgroundColor: "white",
          width: "100%",
        }}
      >
        <Typography
          // variant="h2"
          sx={{
            display: "flex",
            color: "black",
            fontFamily: theme.typography.fontFamily,
            fontSize: isSmallScreen ? 45 : 80,
            alignItem: "center",
            textAlign: "center",
            justifyContent: "center",
            padding: "10px 20px",
          }}
        >
          Previous Launches
        </Typography>
        <CardGrid cards={cardsDataForLaunch} isDarkMode={false} />
      </Stack>
      <Stack
        sx={{
          alignItems: "center",
          backgroundColor: "black",
          width: "100%",
        }}
      >
        <Typography
          // variant="h2"
          sx={{
            display: "flex",
            color: "white",
            fontFamily: theme.typography.fontFamily,
            fontSize: isSmallScreen ? 45 : 80,
            alignItem: "center",
            textAlign: "center",
            justifyContent: "center",
            padding: "10px 20px",
          }}
        >
          Previous Programs
        </Typography>
        <CardGrid cards={cardDataForPrograms} isDarkMode={true} />
        <Footer isSmallScreen={isSmallScreen} />
      </Stack>
    </div>
  );
};
