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
    selected,
    summary,
    ExpansionPanelDetailsProps,
    ExpansionPanelDetailsTypographyProps,
    ExpansionPanelMoreIconProps,
    ExpansionPanelProps,
    ExpansionPanelSummaryProps,
    ExpansionPanelSummaryTypographyProps,
    SelectedExpansionPanelProps,
  } = props;

  const rootProps = selected
    ? { ...ExpansionPanelProps, ...SelectedExpansionPanelProps }
    : ExpansionPanelProps;

  return (
    <Accordion className={panelClass && panelClass} {...rootProps} >
      <AccordionSummary
        expandIcon={<ExpandMore {...ExpansionPanelMoreIconProps} />}
        {...ExpansionPanelSummaryProps}
      >
        <Typography
          classes={{
            root: classes.summaryText,
          }}
          gutterBottom
          variant="subtitle1"
          {...ExpansionPanelSummaryTypographyProps}
        >
          {summary}
        </Typography>
      </AccordionSummary>
      <AccordionDetails  {...ExpansionPanelDetailsProps}>
        <Typography
          classes={{
            root: classes.detailsText,
          }}
          gutterBottom
          component="div"
          {...ExpansionPanelDetailsTypographyProps}
        >
          {details}
        </Typography>
      </AccordionDetails >
    </Accordion>
  );
};

export default withStyles(styles)(ExpandableListItem)
