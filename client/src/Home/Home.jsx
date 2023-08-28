import {
  Container,
  Typography,
  Button,
  Collapse,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [checked, setCheck] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setCheck(true);
  }, []);

  const isLoggedIn = localStorage.getItem("loggedIn");

  const handleClick = () => {
    isLoggedIn ? navigate("/todo") : navigate('/login');
  };

  return (
    <div>
      <Container
        sx={{
          maxWidth: { md: "50%", xs: "100%" },
          minHeight: "83vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedheight={50}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              align="center"
              sx={{
                fontSize: {
                  xl: "48px",
                  lg: "45px",
                  md: "38px",
                  sm: "32px",
                  xs: "25px",
                },
                fontWeight: "800",
              }}
            >
              Organize your work and life, finally.
            </Typography>
            <Typography
              align="center"
              sx={{
                fontSize: { lg: "20px", md: "18px", sm: "16px" },
                fontWeight: "400",
              }}
            >
              Become focused, organized, and calm with Todolist. The world’s #1
              task manager and to-do list app.
            </Typography>

            <Button
              variant="contained"
              size="large"
              color="error"
              align="center"
              sx={{ marginTop: "40px", marginBottom: "40px" }}
              onClick={handleClick}
            >
              Start
            </Button>
          </Box>
        </Collapse>
      </Container>
    </div>
  );
};

export default Home;
