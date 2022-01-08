import { useState } from 'react'
import Listing from './components/listing.js'
import Filter from './components/filter.js'
import {Box, Card,} from '@mui/material'
import headerImage from './images/bg-header-desktop.svg'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import './App.css'
import jobs from './jobs.js'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: 'hsl(180, 8%, 52%)',
        contrastText: '#fff'
      },
      secondary: {
        main: 'hsl(180, 14%, 20%)',
        contrastText: '#fff'
      }
    },
    typography: {
      fontFamily: 'Spartan',
      h4: {
        fontSize: 24,
      },
      h5: {
        fontSize: 18
      }
    }
  })

  const styles = {
    listing: {
      marginBottom: '2rem'
    }
  }

  let [filterArray, setFilter] = useState([]);

  setFilter = (tag) => {
    if(filterArray.includes(tag) === false){
      filterArray.push(tag)
    }
  }
  
  const filterResults = [];

  if(filterArray.length){
    for(let key in jobs) {
      if(filterArray.every(elem => jobs[key].tags.includes(elem))){
        filterResults.push(key);
      }
    }
  }

  console.log('filterArray: ' + filterArray)
  console.log('filterResults: ' + filterResults)

  let [hover1, setHover1] = useState(false);
  let [hover2, setHover2] = useState(false);
  let [hover3, setHover3] = useState(false);
  let [hover4, setHover4] = useState(false);
  let [hover5, setHover5] = useState(false);
  let [hover6, setHover6] = useState(false);
  let [hover7, setHover7] = useState(false);
  let [hover8, setHover8] = useState(false);
  let [hover9, setHover9] = useState(false);
  let [hover10, setHover10] = useState(false);

  return (
    <ThemeProvider theme={ theme }>
      <div style={{backgroundColor:'hsl(180, 52%, 96%)',}}>
        <Box display="flex" justifyContent="center">
          {filterArray.length ? <Filter filter={filterArray} setFilter={setFilter}/> : null}
        </Box>
        <div style={{backgroundImage:`url(${headerImage})`, backgroundSize:'cover', height:'10rem'}}></div>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box style={{width:'70%', marginTop:'5rem'}}>
            <Card style={styles.listing} onMouseEnter={() => {setHover1(true)}} onMouseLeave={() => {setHover1(false)}} className={ filterResults.length && filterResults.includes('one') === false ? 'hide' : null }>
              <Listing id="one" hover={hover1} setFilter={setFilter} />
            </Card>
            <Card style={styles.listing} onMouseEnter={() => {setHover2(true)}} onMouseLeave={() => {setHover2(false)}} className={ filterResults.length && filterResults.includes('two') === false ? 'hide' : null }>
              <Listing id="two" hover={hover2} setFilter={setFilter} />
            </Card>
            <Card style={styles.listing} onMouseEnter={() => {setHover3(true)}} onMouseLeave={() => {setHover3(false)}} className={ filterResults.length && filterResults.includes('three') === false ? 'hide' : null }>
              <Listing id="three" hover={hover3} setFilter={setFilter} />
            </Card>
            <Card style={styles.listing} onMouseEnter={() => {setHover4(true)}} onMouseLeave={() => {setHover4(false)}} className={ filterResults.length && filterResults.includes('four') === false ? 'hide' : null }>
              <Listing id="four" hover={hover4} setFilter={setFilter} />
            </Card>
            <Card style={styles.listing} onMouseEnter={() => {setHover5(true)}} onMouseLeave={() => {setHover5(false)}} className={ filterResults.length && filterResults.includes('five') === false ? 'hide' : null }>       
              <Listing id="five" hover={hover5} setFilter={setFilter} />   
            </Card>
            <Card style={styles.listing} onMouseEnter={() => {setHover6(true)}} onMouseLeave={() => {setHover6(false)}} className={ filterResults.length && filterResults.includes('six') === false ? 'hide' : null }>            
              <Listing id="six" hover={hover6} setFilter={setFilter}  />
            </Card>
            <Card style={styles.listing} onMouseEnter={() => {setHover7(true)}} onMouseLeave={() => {setHover7(false)}} className={ filterResults.length && filterResults.includes('seven') === false ? 'hide' : null }>
              <Listing id="seven" hover={hover7} setFilter={setFilter} />
            </Card>
            <Card style={styles.listing} onMouseEnter={() => {setHover8(true)}} onMouseLeave={() => {setHover8(false)}} className={ filterResults.length && filterResults.includes('eight') === false ? 'hide' : null }>
              <Listing id="eight" hover={hover8} setFilter={setFilter} />
            </Card>
            <Card style={styles.listing} onMouseEnter={() => {setHover9(true)}} onMouseLeave={() => {setHover9(false)}} className={ filterResults.length && filterResults.includes('nine') === false ? 'hide' : null }>
              <Listing id="nine" hover={hover9} setFilter={setFilter}  />
            </Card>
            <Card style={styles.listing} onMouseEnter={() => {setHover10(true)}} onMouseLeave={() => {setHover10(false)}} className={ filterResults.length && filterResults.includes('ten') === false ? 'hide' : null }>
              <Listing id="ten" hover={hover10} setFilter={setFilter} />
            </Card>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
