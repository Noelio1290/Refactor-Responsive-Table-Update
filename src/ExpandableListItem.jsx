import React from 'react';
import ExpandMore from '@mui/icons-material/ExpandMore'
import {Accordion, AccordionSummary, AccordionDetails , Typography,} from '@mui/material';

/**
 * Expandable component with header text (summary) and expandable description text (details)
 */
const ExpandableListItem = (props) => {

  const {
    details,
    summary,
  } = props;

  return (
    <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMore />}
      >
        <Typography
          gutterBottom
          variant="subtitle1"
        >
          {summary}
        </Typography>
      </AccordionSummary>
      <AccordionDetails  >
        <Typography
          gutterBottom
          component="div"
        >
          {details}
        </Typography>
      </AccordionDetails >
    </Accordion>
  );
};

export default ExpandableListItem
