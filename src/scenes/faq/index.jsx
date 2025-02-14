import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important questions
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam a perspiciatis, ipsam explicabo velit sed aperiam odio voluptatibus similique, officiis beatae itaque enim! Ut expedita saepe porro harum debitis?
          </Typography>
        </AccordionDetails>
        </AccordionSummary>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Another Important questions
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam a perspiciatis, ipsam explicabo velit sed aperiam odio voluptatibus similique, officiis beatae itaque enim! Ut expedita saepe porro harum debitis?
          </Typography>
        </AccordionDetails>
        </AccordionSummary>
      </Accordion >
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Random Important questions
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam a perspiciatis, ipsam explicabo velit sed aperiam odio voluptatibus similique, officiis beatae itaque enim! Ut expedita saepe porro harum debitis?
          </Typography>
        </AccordionDetails>
        </AccordionSummary>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important questions
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam a perspiciatis, ipsam explicabo velit sed aperiam odio voluptatibus similique, officiis beatae itaque enim! Ut expedita saepe porro harum debitis?
          </Typography>
        </AccordionDetails>
        </AccordionSummary>
      </Accordion >
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important questions
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam a perspiciatis, ipsam explicabo velit sed aperiam odio voluptatibus similique, officiis beatae itaque enim! Ut expedita saepe porro harum debitis?
          </Typography>
        </AccordionDetails>
        </AccordionSummary>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          The Final questions
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam a perspiciatis, ipsam explicabo velit sed aperiam odio voluptatibus similique, officiis beatae itaque enim! Ut expedita saepe porro harum debitis?
          </Typography>
        </AccordionDetails>
        </AccordionSummary>
      </Accordion>
      
      </Box>

  )
}

export default FAQ