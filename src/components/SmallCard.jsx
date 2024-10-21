import { Avatar, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const StyledCard = styled(Box)(({ theme }) => ({
  height: '110px',
  backgroundColor: "#ffffff",
  position: 'relative',
  textAlign: 'left',
}));

const SmallCard = ({title, number, image}) => {
  return (
    <StyledCard>
      <Typography
        variant="caption"
        sx={{
          fontWeight: "bold",
          color: "#8c8c8c",
          fontSize: "15px",
          padding: '0 20px',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "#2e2e2e",
          marginTop: "16px",
          padding: '0 20px'

        }}
      >
        {number}
      </Typography>

      <Avatar
        src={image} 
        alt="Unpaid Invoice Icon"
        sx={{ 
          color: '#5065f6', 
          position: 'absolute', 
          bottom: '-8px', 
          right: '30px',
          width: 60, 
          height: 60 
        }}
      />
    </StyledCard>
  );
};

export default SmallCard;