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
    <Accordion sx={{ minWidth:'100%',width:'100%' }} >
      <AccordionSummary
        expandIcon={<ExpandMore />}
      >
        <Typography
          variant="h6"
          sx={{ color:'black', fontSize:20 }}
        >
          {summary}
        </Typography>
      </AccordionSummary>
      <AccordionDetails  >
        <Typography
          variant="h6"
          sx={{marginBottom:5}}
        >
          {details}
        </Typography>
      </AccordionDetails >
    </Accordion>
  );
};

export default ExpandableListItem
