import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";


const Tag = styled(Box)(({ theme }) => ({
  display: "inline-block",
  padding: "6px 12px",
  backgroundColor: "#f0f0f0",
  borderRadius: "5px",
  marginRight: "10px",
}));

const TagText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "bold",
  color: "#6c6c6c",
}));

const Tags = ({text}) => {
  return (
    <Tag>
      <TagText>{text}</TagText>
    </Tag>
  );
};

export default Tags;
