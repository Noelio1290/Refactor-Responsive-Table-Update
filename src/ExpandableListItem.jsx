import React from 'react';
import ExpandMore from '@mui/icons-material/ExpandMore'
import {Accordion, AccordionSummary, AccordionDetails , Typography,} from '@mui/material';
import {withStyles} from '@mui/styles';

const styles = {
  summaryText: {
    width: '100%',
  },
  detailsText: {
    opacity: 0.5,
    width: '100%',
  },
};

/**
 * Expandable component with header text (summary) and expandable description text (details)
 */
const ExpandableListItem = (props) => {

  const {
    classes,
    panelClass,
    details,
    summary,
  } = props;

  return (
    <Accordion className={panelClass && panelClass} >
      <AccordionSummary
        expandIcon={<ExpandMore />}
      >
        <Typography
          classes={{
            root: classes.summaryText,
          }}
          gutterBottom
          variant="subtitle1"
        >
          {summary}
        </Typography>
      </AccordionSummary>
      <AccordionDetails  >
        <Typography
          classes={{
            root: classes.detailsText,
          }}
          gutterBottom
          component="div"
        >
          {details}
        </Typography>
      </AccordionDetails >
    </Accordion>
  );
};

export default withStyles(styles)(ExpandableListItem)
