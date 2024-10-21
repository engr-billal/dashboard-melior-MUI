import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {}),
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  marginTop: "16px",
}));

const UpcomingEventsCard = ({ ImageSrc , text1, text2}) => {
  return (
    <Item sx={{ borderRadius: "12px", padding: "0", display: "flex", alignItems: "center", gap: "16px" }}>
      <img
        src={ImageSrc}
        alt="Unpaid Invoice Icon"
        style={{
          color: "#5065f6",
          height: "100%",
          minWidth: "100px",
          objectFit: "cover",
        }}
      />

      <Box>
        <Box>
          <Typography variant="h6" sx={{ color: "#757575" }}>
            {text1}
          </Typography>
          <Typography variant="body2" sx={{ color: "#757575", marginBottom: "8px" }}>
            {text2}
          </Typography>

          {/* Start Time */}
          <Typography variant="caption" sx={{ color: "#8c8c8c", fontWeight: "bold", display: "block" }}>
            Start Time
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '14px', color: "#2e2e2e" }}>
            29 Nov, 03:30pm
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <PeopleIcon sx={{ fontSize: "18px", color: "#8c8c8c" }} />
            <Typography variant="body2" sx={{ color: "#8c8c8c" }}>
              182
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ fontWeight: "bold", color: "#2e2e2e" }}>
            $50.00
          </Typography>
        </Box>
      </Box>
    </Item>
  );
};

export default UpcomingEventsCard;
