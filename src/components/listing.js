import React from 'react'
import '../App.css'
import { Box, Button, Chip, Typography, Link } from '@mui/material'
import jobs from '../jobs.js'

function Listing(props) {
    let id = props.id
    let hover = props.hover
    let setFilter = props.setFilter

    let tags = jobs[id].tags.map((tag) => {
        return(<Button onClick={() => {setFilter(tag)}} variant="contained" color="primary" size="medium" className="tablet" sx={{':hover':{color: 'white', backgroundColor: 'hsl(180, 8%, 52%)'}, fontWeight: 'bold', color:'hsl(180, 8%, 52%)', backgroundColor:'hsl(180, 31%, 95%)', marginTop:'2.7rem', marginLeft:'1rem',}} disableElevation>{tag}</Button>)
    })

    return (
        <React.Fragment>
            <Box className="listing" display="flex" sx={{backgroundColor:'#fff', width:'100%', height:'7.3rem'}}>
                <Box className={hover ? 'showSideSelect' : 'hideSideSelect'} style={{backgroundColor:'hsl(180, 8%, 52%)', height:'7.3rem', transition:'width .3s'}}></Box>
                <Box className="imageArea" sx={{margin:'1rem'}}>
                    <img src={jobs[id].image} alt="" />
                </Box>
                <Box style={{width: '60rem'}}>
                    <Box display="flex" sx={{marginTop:'1rem', marginBottom:'.5rem'}}>
                        <Typography variant="h5" color="primary">{jobs[id].company}</Typography>
                        {jobs[id].new ? <Chip label="NEW!" color="primary" size="small" sx={{marginX:'.7rem'}} /> : null}
                        {jobs[id].featured ? <Chip label="FEATURED!" size="small" color="secondary" /> : null}
                    </Box>
                    <Box>
                        <Typography variant="h4"><Link href="#" color={hover ? 'primary' : 'secondary'} underline="none">{jobs[id].name}</Link></Typography>
                    </Box>
                    <Box display="flex" sx={{marginTop:'.5rem'}}>
                        <Typography variant="h5" sx={{marginRight:'1.4rem'}}>{jobs[id].posted}</Typography>
                        <Typography variant="h5" sx={{marginX:'1.4rem'}}>{jobs[id].time}</Typography>
                        <Typography variant="h5" sx={{marginX:'1.4rem'}}>{jobs[id].location}</Typography>
                    </Box>
                </Box>
                <Box display="flex" style={{width:'100%', marginRight: '1rem'}} justifyContent="flex-end">
                <Box className="float-right" justifyContent="flex-end">
                    {tags}
                </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Listing
