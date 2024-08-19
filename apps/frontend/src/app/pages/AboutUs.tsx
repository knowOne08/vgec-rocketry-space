import {
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  Button,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import { useCustomNavigate } from "../utils/useCustomNavigate"
import DhairyaWorkingVideo from "/DhairyaWorking2.mp4";
import IsroVisit from "/IsroMeet.jpeg";
import AnantaArrow from "/AnantaArrow.mp4";
import AnantaArrow2 from "/AnataArrow2.mp4";
import Aflatoon from "/Aflatoon.jpeg";
// import Map from "/map.jpg";
import { useInView } from "react-intersection-observer";
import { Footer } from "../components/Footer";
import { theme } from "../theme";
import Galleries from "../pages/gallery";

// Team Members

const teamMembers = [
  { name: "Member 1", role: "Role 1", img: "path/to/img1.jpg" },
  { name: "Member 2", role: "Role 2", img: "path/to/img2.jpg" },
  { name: "Member 3", role: "Role 3", img: "path/to/img3.jpg" },
  { name: "Member 4", role: "Role 4", img: "path/to/img4.jpg" },
  { name: "Member 5", role: "Role 5", img: "path/to/img5.jpg" },
  { name: "Member 6", role: "Role 6", img: "path/to/img6.jpg" },
  { name: "Member 7", role: "Role 7", img: "path/to/img7.jpg" },
  { name: "Member 8", role: "Role 8", img: "path/to/img8.jpg" },
  // { name: "Member 9", role: "Role 9", img: "path/to/img9.jpg" },
  // { name: "Member 10", role: "Role 10", img: "path/to/img10.jpg" },
  // { name: "Member 11", role: "Role 11", img: "path/to/img11.jpg" },
  // { name: "Member 12", role: "Role 12", img: "path/to/img12.jpg" },
  // { name: "Member 13", role: "Role 13", img: "path/to/img13.jpg" },
  // { name: "Member 14", role: "Role 14", img: "path/to/img14.jpg" },
  // { name: "Member 15", role: "Role 15", img: "path/to/img15.jpg" },
  // { name: "Member 16", role: "Role 16", img: "path/to/img16.jpg" }
];

// fade part

export const AboutUs: React.FC = () => {
  useEffect(() => {
    document.title = "ABOUT | VRT";
    setTimeout(() => {
      setShowComponent(false);
    }, 1500);

    setTimeout(() => {
      setSmallScreenBackgroundVideo(AnantaArrow2);
    }, 20 * 1000);
  }, []);

  const [showComponent, setShowComponent] = useState(true);

  const [smallScreenBackgroundVideo, setSmallScreenBackgroundVideo] = useState<
    string | undefined
  >(AnantaArrow);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: storyRef, inView: storyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: galleryRef, inView: galleryInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // const { ref: mapRef, inView: mapInView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1
  // })

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleNavigate = useCustomNavigate();

  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    // Video
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
        }}
      >
        <video
          autoPlay={!isSmallScreen}
          loop
          muted
          playsInline={isSmallScreen}
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
          src={DhairyaWorkingVideo}
        />
        <Navbar />
      </Container>

      {/* About Us */}
      <Container>
        <Typography
          // variant="h1"
          gutterBottom
          component={motion.div}
          ref={textRef}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          sx={{
            fontFamily: theme.typography.fontFamily,
            fontSize: isSmallScreen ? 70 : 95,
            color: "black",
            marginTop: 15,
            position: "relative",
            top: "25px",
            left: "10px",
          }}
        >
          We Are VRT
        </Typography>
        <Grid
          container
          spacing={5}
          component={motion.div}
          initial="hidden"
          animate={visionInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          sx={{ padding: 2, marginTop: 2 }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              gutterBottom
              component={motion.div}
              ref={visionRef}
              initial="hidden"
              animate={visionInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              fontFamily={theme.typography.fontFamily}
            >
              Our Vision
            </Typography>
            <Typography
              variant="h5"
              component={motion.div}
              initial="hidden"
              animate={visionInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              fontFamily={theme.typography.fontFamily}
            >
              Our vision is to revolutionize rocketry through innovation and
              teamwork. We aim to break barriers and reach new heights, setting
              new standards in the field.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              gutterBottom
              component={motion.div}
              ref={missionRef}
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              fontFamily={theme.typography.fontFamily}
            >
              Our Mission
            </Typography>
            <Typography
              variant="h5"
              component={motion.div}
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              fontFamily={theme.typography.fontFamily}
            >
              Our mission is to design, build, and launch cutting-edge rockets
              while fostering a collaborative and educational environment. We
              strive to inspire the next generation of aerospace engineers.
            </Typography>
          </Grid>
        </Grid>
        <Box
          component={motion.div}
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 2,
          }}
        >
          <img
            src={IsroVisit}
            alt="Team Image"
            style={{
              maxWidth: "100%",
              width: "100%",
              height: "80%",
              padding: 16,
              margin: 15,
              border: "2px solid white",
            }}
          />
        </Box>
      </Container>

      {/* Placeholder Section */}
      <Box
        component={motion.div}
        ref={storyRef}
        initial="hidden"
        animate={storyInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        sx={{
          width: "100%",
          height: "400px",
          backgroundImage: `url(/path/to/your/image.png)`, // Change with the story image
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15,
          boxSizing: "border-box",
        }}
      >
        <Stack
          spacing={4}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px 20px",
            marginTop: 4,
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontFamily: theme.typography.fontFamily,
            }}
          >
            OUR STORY
          </Typography>
          <Button
            variant="outlined"
            onClick={()=>handleNavigate('/story')}
            sx={{
              color: "yellow",
              borderColor: "yellow",
              ":hover": {
                backgroundColor: "yellow",
                color: "black",
              },
              fontFamily: theme.typography.fontFamily,
            }}
          >
            VRT Timeline
          </Button>
        </Stack>
      </Box>

      {/* Team Members */}
      <Typography
        variant="h2"
        gutterBottom
        component={motion.div}
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        sx={{
          textAlign: "center",
          fontSize: { xs: 40, md: 70 },
          fontFamily: theme.typography.fontFamily,
          marginTop: isSmallScreen ? 17 : 22,
          marginBottom: { xs: 10, md: -20 },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Leadership
      </Typography>
      <Grid
        container
        spacing={4}
        component={motion.div}
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        sx={{ padding: { xs: 2, md: 35 } }}
      >
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Stack
              sx={{
                alignItems: "center",
                backgroundColor: "white",
                padding: 2,
                borderRadius: "5px",
                // boxShadow: 3,
                marginBottom: 2,
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "auto",
                  marginBottom: 2,
                  fontFamily: theme.typography.fontFamily,
                  borderRadius: "5px",
                }}
              />
            </Stack>
            <Typography
              variant="h6"
              style={{
                fontFamily: theme.typography.fontFamily,
                textAlign: "center",
              }}
            >
              {member.name}
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontFamily: theme.typography.fontFamily,
                textAlign: "center",
              }}
            >
              {member.role}
            </Typography>
            <Button
              variant="outlined"
              sx={{
                marginTop: 2,
                backgroundColor: "white",
                display: "flex",
                margin: "0 auto",
                borderColor: "black",
                ":hover": {
                  backgroundColor: "#90B8F8",
                  color: "white",
                },
              }}
              style={{
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Read Bio
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Gallery section */}
      <Grid
        component={motion.div}
        ref={galleryRef}
        initial="hidden"
        animate={galleryInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        // style={{
        //   margin: "-4px"
        // }}
      >
        <Stack
          sx={{
            width: "100%",
            height: "300px",
            backgroundColor: "black",
            alignItem: "center",
            justifyContent: "center",
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
            We prioritize hardware over people
          </Typography>
        </Stack>
        <Galleries />
      </Grid>

      {/* Map Section */}

      {/* <Container
        component={motion.div}
        ref={mapRef}
        initial="hidden"
        animate={mapInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        sx={{
          fontFamily: theme.typography.fontFamily
          }}
          >
          <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            // color: "black",
            marginTop: 15,
            position: "relative",
            top: "25px"
          }}
        >
          VRT on the Map
          </Typography>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}
            >
            <img
            src={Map}
            alt="VRT Location"
            style={{
              maxWidth: "100%",
              width: "100%",
              height: "100%"
              }}
              />
              </Box>
      </Container> */}
      {/* <Box sx={{ margin: -4 }}> */}
      <Footer isSmallScreen={isSmallScreen} />
      {/* </Box> */}
    </div>
  );
};