import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ModeCommentIcon from "@mui/icons-material/ModeComment";

const Item = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: "16px",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  marginTop: "16px",
}));

const HottestDiscussionCard = ({ avatarSrc, userName, comment, likes, replies }) => {
  return (
    <Item style={{maxHeight: '138px'}}>
      {/* Avatar and Name */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
        <Avatar src={avatarSrc} alt={userName} />
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#2e2e2e" }}>
          {userName}
        </Typography>
      </Box>

      {/* Comment Section */}
      <Typography variant="body1" sx={{ color: "#2e2e2e", marginBottom: "16px" }}>
        {comment}
      </Typography>

      {/* Likes and Replies */}
      <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "16px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <IconButton size="small" sx={{ color: "#757575" }}>
            <ThumbUpAltIcon fontSize="small" />
          </IconButton>
          <Typography variant="body2" sx={{ color: "#757575" }}>
            {likes} likes
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <IconButton size="small" sx={{ color: "#757575" }}>
            <ModeCommentIcon fontSize="small" />
          </IconButton>
          <Typography variant="body2" sx={{ color: "#757575" }}>
            {replies} replies
          </Typography>
        </Box>
      </Box>
    </Item>
  );
};

export default HottestDiscussionCard;