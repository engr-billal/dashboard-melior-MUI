import { Box, Typography,Chip, Tooltip } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Tags from "./Tags";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAltRounded";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {}),
}));

const BookingCard = ({text}) => {
  return (
    <Item sx={{ borderRadius: "12px", padding: "20px 20px 10px 20px" }}>
      <Box sx={{ borderLeft: "3px solid #FF5a00", padding: "0 10px", position: "relative" }}>
        <Typography variant="h5" color="black">
          {text}
        </Typography>
        <Box sx={{ display: "flex", gap: "8px", marginTop: "10px" }}>
          <Tags text="Small meeting room" />
          <Tags text="Boardroom" />
        </Box>

        <IconButton sx={{ position: "absolute", top: "0", right: "10px" }}>
          <MoreHorizIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {/* Start Time */}
        <Box>
          <Typography variant="caption" sx={{ color: "#8c8c8c", fontWeight: "bold", display: "block" }}>
            Start Time
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", color: "#2e2e2e" }}>
            29 Nov, 03:30pm
          </Typography>
        </Box>

        {/* Middle Icon */}
        <ArrowRightAltIcon sx={{ fontSize: "28px", color: "#2e2e2e" }} />

        {/* End Time */}
        <Box>
          <Typography variant="caption" sx={{ color: "#8c8c8c", fontWeight: "bold", display: "block" }}>
            End Time
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", color: "#2e2e2e" }}>
            31 Nov, 07:00pm
          </Typography>
        </Box>
      </Box>

      <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px", // Space between items
        padding: "10px 0",
      }}
    >
      {/* Catering Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <FiberManualRecordIcon
          sx={{
            fontSize: "12px",
            color: "#8c8c8c",
            backgroundColor: "#f0f0f0",
            borderRadius: "50%",
          }}
        />
        <Typography sx={{ color: "#8c8c8c", fontWeight: "bold" }}>
          Catering
        </Typography>
      </Box>

      {/* Confirmed Section with Tooltip */}
      <Tooltip
        title={<Typography sx={{ color: "white" }}>This booking is confirmed</Typography>}
        arrow
        placement="top"
        componentsProps={{
          tooltip: {
            sx: {
              backgroundColor: "black",
              fontSize: "14px",
              padding: "8px",
              borderRadius: "4px",
            },
          },
        }}
      >
        <Chip
          icon={<CheckCircleOutlineIcon sx={{ color: "black" }} />}
          label="Confirmed"
          sx={{
            backgroundColor: "#ccf2d4",
            color: "black",
            fontWeight: "bold",
            borderRadius: "6px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        />
      </Tooltip>
    </Box>
    </Item>
  );
};

export default BookingCard;
