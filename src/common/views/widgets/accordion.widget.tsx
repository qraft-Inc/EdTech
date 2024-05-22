import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const ContentAccordion = () => {
  const ExpandMoreIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    );
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        Chapter 1
      </AccordionSummary>
      <AccordionDetails>
        There out her child sir his lived. Design at uneasy me season of branch
        on praise esteem.
      </AccordionDetails>
    </Accordion>
  );
};

export default ContentAccordion;
