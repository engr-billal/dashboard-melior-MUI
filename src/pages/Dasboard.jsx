import { Avatar, Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import SmallCard from "../components/SmallCard";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Invoice from "../assets/Invoices.png";
import Members from "../assets/Members.png";
import Messages from "../assets/Messages.png";
import Tickets from "../assets/Tickets.png";
import Person from "../assets/Person.png";
import Chairs from "../assets/Chairs.png";
import BookingCard from "../components/BookingCard";
import UpcomingEventsCard from "../components/UpcomingEventsCard";
import HottestDiscusionCard from "../components/HottestDiscusionCard";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {}),
}));

const Dasboard = () => {
  return (
    <>
      <Grid2 container justifyContent="space-between" alignItems="center" sx={{ width: "100%", marginTop: "20px" }}>
        <Grid2 item>
          <Box>
            <Typography variant="h2" fontWeight="bold" color="#484848">
              Hello Adrian,
            </Typography>
            <Typography fontSize="14px" color="#999999">
              This is what we've got for you today.
            </Typography>
          </Box>
        </Grid2>

        {/* Right Side (Button) */}
        <Grid2 item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{
              height: "35px",
              backgroundColor: "#5065f6",
              borderColor: "#a4aeeb",
              borderRadius: "4.75px",
              textTransform: "none",
              fontSize: "12px",
              fontWeight: "600",
              color: "#FFFFFF",
              padding: "0 25px",
            }}
          >
            Manage Bookings
          </Button>
        </Grid2>
      </Grid2>

      <Grid container spacing={2} sx={{ marginTop: "50px" }}>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Item sx={{ borderRadius: "12px" }}>
            <SmallCard image={Members} title="Members onsite" number="26" />
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Item sx={{ borderRadius: "12px" }}>
            <SmallCard image={Invoice} title="Unpaid Invoices" number="4" />
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Item sx={{ borderRadius: "12px" }}>
            <SmallCard image={Messages} title="Unread Messages" number="2" />
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Item sx={{ borderRadius: "12px" }}>
            <SmallCard title="Your Tickets" image={Tickets} number="6" />
          </Item>
        </Grid>
      </Grid>

      {/* Booking Section */}
      <Box container spacing={2} sx={{ marginTop: "50px", display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "14px", opacity: "0.5" }}>Upcoming bookings</Typography>
        <Typography sx={{ cursor: "pointer" }}>See all (14)</Typography>
      </Box>

      <Box>
        <Grid container spacing={2} sx={{ marginTop: "12px" }}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <BookingCard text="HDMI Room" />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <BookingCard text="RJ-45 Room" />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <BookingCard text="HJ-11 Hot Desk" />
          </Grid>
        </Grid>
      </Box>

      {/* Upcoming Events and Hottest Discussion Board */}
      <Grid container spacing={2} sx={{ margin: "25px 0", paddingTop: "25px", borderTop: "1px solid #ddd" }}>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Box >
            <Typography sx={{ fontWeight: "bold", fontSize: "14px", opacity: "0.5" }}>Upcoming Events</Typography>
          </Box>
          <UpcomingEventsCard ImageSrc={Person} text1="Design Update #20" text2="Talking with Damon Heart" />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Box >
            <Typography visibility={"hidden"} sx={{display: { xs: "none", sm: "none", md: "block" }}}>Upcoming Events</Typography>
          </Box>
          <UpcomingEventsCard ImageSrc={Chairs} text1="Company meetup" text2="Project Management Workshop #1" />
        </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <Box >
            <Typography sx={{ fontWeight: "bold", fontSize: "14px", opacity: "0.5" }}>Hottest discussion boards</Typography>
          </Box>
          <HottestDiscusionCard
            avatarSrc={Person}
            userName="Michaela Walton"
            comment="I think we need to integrate an outdoor pool in our backyard lounge area..."
            likes="91"
            replies="37"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dasboard;
