import React from 'react'
import { Paper, CardActionArea, Box, Typography } from '@mui/material'
import RemoveIcon from '../images/icon-remove.svg'

function Filter(props) {
  let setFilter = props.setFilter
  let filter = props.filter

  let filterItems = props.filter.map((jobFilter) => {
    return(
      <Paper className="filterTablet" elevation={0}>
        <Box className="filterTextArea">
          <Typography fontWeight="bold" color="primary">{jobFilter}</Typography>
        </Box>
        <CardActionArea onClick={function(){filter.splice(filter.indexOf(jobFilter), 1);}} className="removeIconArea"><img className="removeIcon" src={RemoveIcon} alt="" /></CardActionArea>
      </Paper>
    )
  })
    return (
      <React.Fragment>
          <Paper className="filterArea" elevation={10}>
            {filterItems}
          </Paper>
      </React.Fragment>  
    )
}

export default Filter
