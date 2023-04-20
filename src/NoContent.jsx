import React from 'react'
import {withStyles} from '@mui/styles';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
}

/**
 * Used for default text if no content found for table/list
 */
const NoContent = (props) => {
  const { classes, text } = props
  return (
    <div className={classes.root}>
      <span>{text || 'No Content'}</span>
    </div>
  )
}

export default withStyles(styles)(NoContent)
