import * as React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../theme";
import { Link } from "@mui/joy";
import { motion } from "framer-motion";
import logo from "/logo.png";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import { useCustomNavigate } from "../utils/useCustomNavigate";
import { SocialLinks } from "./SocialLinks";

const pages = [
  {
    name: "ABOUT",
    route: "/about",
  },
  {
    name: "BLOG",
    route: "/blog",
  },
  {
    name: "MISSIONS",
    route: "/missions",
  },
  {
    name: "SUPPORT US",
    route: "/support",
  },
];

export const Navbar: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <motion.nav
      initial={{ y: "25%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginTop: -0.4,
        }}
      >
        {isMobile ? <NavbarSm /> : <NavbarXl />}
      </Container>
    </motion.nav>
  );
};

const handleUnderline = (page: String) => {
  if (
    document.location.pathname
      .toString()
      .includes(page.toString().toLocaleLowerCase().slice(0, 4))
  )
    return "underline";
  else return "none";
};

const NavbarXl = () => {
  const handleNavigate = useCustomNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        rowSpacing={2}
        justifyContent="left"
        spacing={0.2}
        alignContent="flex-end"
        marginTop={2.7}
        width="100%"
        xs="auto"
        sx={{
          mb: 3.6,
          ml: -1,
        }}
      >
        {pages.map((page, key) => (
          <Grid item justifyContent="flex-start" borderColor="black" key={key}>
            {page.name === "MISSIONS" ? (
              <>
                <Button onClick={handleClick}>
                  <Link
                    fontSize={23}
                    fontFamily={theme.typography.fontFamily}
                    fontWeight={500}
                    underline="hover"
                    sx={{
                      color: "white",
                      textDecoration: handleUnderline(page.name),
                      textDecorationThickness: "2px",
                      textDecorationStyle: "solid",
                      textUnderlineOffset: "5px",
                    }}
                  >
                    {page.name}
                  </Link>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  sx={{
                    mt: 1.5,
                    "& .MuiPaper-root": {
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: 0,
                    },
                    "& .MuiMenuItem-root": {
                      padding: "10px 20px",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "black",
                      },
                    },
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      handleNavigate("/missions");
                      handleClose();
                    }}
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                  >
                    Current Missions
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleNavigate("/oldmission");
                      handleClose();
                    }}
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                  >
                    Old Mission
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button onClick={() => handleNavigate(page.route)}>
                <Link
                  fontSize={23}
                  fontFamily={theme.typography.fontFamily}
                  fontWeight={500}
                  underline="hover"
                  sx={{
                    color: "white",
                    textDecoration: handleUnderline(page.name),
                    textDecorationThickness: "2px",
                    textDecorationStyle: "solid",
                    textUnderlineOffset: "5px",
                  }}
                >
                  {page.name}
                </Link>
              </Button>
            )}
          </Grid>
        ))}
      </Grid>
      <Box
        height={120}
        width={120}
        minHeight={120}
        minWidth={120}
        mt={2.5}
        mr={20}
        alignContent="center"
      >
        <img
          src={logo}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          onClick={() => handleNavigate("/home")}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          direction: "row",
        }}
      >
        <SocialLinks color="white" fontSize="none" />
      </Box>
    </>
  );
};

const NavbarSm: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleNavigate = useCustomNavigate();

  return (
    <>
      <Grid
        container
        display="flex"
        direction="row"
        justifyContent="space-between"
        width="100%"
      >
        <Grid item marginLeft={-3}>
          <Box
            height={70}
            width={70}
            minHeight={80}
            minWidth={80}
            mt={2.5}
            ml={2}
            alignContent="center"
          >
            <img
              src={logo}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              onClick={() => handleNavigate("/home")}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              marginTop: 2.3,
            }}
          >
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={toggleDrawer(!drawerOpen)}
              sx={{ height: 40, width: 40, mt: 2 }}
            >
              <DragHandleIcon
                style={{ fontSize: "45", color: theme.palette.primary.dark }}
              />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            overflow: "hidden",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            marginTop: 2.8,
            marginLeft: -2.8,
          }}
        >
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon
              sx={{ fontSize: "38px", color: theme.palette.primary.dark }}
            />
          </IconButton>
        </Box>
        <Container
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            direction: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Stack>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              style={{ height: "75%" }}
              spacing={2}
              marginTop={15}
            >
              {pages.map((page, key) => (
                <Grid item key={key}>
                  {page.name === "MISSIONS" ? (
                    <>
                      <Typography
                        variant="h4"
                        onClick={() => setDrawerOpen(!drawerOpen)}
                        sx={{
                          textDecoration: handleUnderline(page.name),
                          textDecorationThickness: "2px",
                          textDecorationStyle: "solid",
                          textUnderlineOffset: "5px",
                        }}
                      >
                        {page.name}
                      </Typography>
                      <Menu
                        anchorEl={null}
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                        sx={{
                          mt: 1.5,
                          "& .MuiPaper-root": {
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: 0,
                          },
                          "& .MuiMenuItem-root": {
                            padding: "10px 20px",
                            "&:hover": {
                              backgroundColor: "white",
                              color: "black",
                            },
                          },
                        }}
                      >
                        <MenuItem
                          onClick={() => {
                            handleNavigate("/missions");
                            setDrawerOpen(false);
                          }}
                          sx={{
                            fontSize: "16px",
                            fontWeight: 500,
                          }}
                        >
                          Current Missions
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleNavigate("/oldmission");;
                            setDrawerOpen(false);
                          }}
                          sx={{
                            fontSize: "16px",
                            fontWeight: 500,
                          }}
                        >
                          Old Mission
                        </MenuItem>
                      </Menu>
                    </>
                  ) : (
                    <a onClick={() => handleNavigate(page.route)}>
                      <Typography
                        variant="h4"
                        sx={{
                          textDecoration: handleUnderline(page.name),
                          textDecorationThickness: "2px",
                          textDecorationStyle: "solid",
                          textUnderlineOffset: "5px",
                        }}
                      >
                        {page.name}
                      </Typography>
                    </a>
                  )}
                </Grid>
              ))}
            </Grid>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              marginTop={20}
              style={{ position: "relative" }}
            >
              <SocialLinks color="Black" fontSize="none" />
            </Box>
          </Stack>
        </Container>
      </Drawer>
    </>
  );
};
