import { AppBar, CssBaseline, Grid, IconButton } from '@material-ui/core';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

const Header = () => {

  return (
    <>
      <CssBaseline />
      <AppBar position="absolute">
        <Grid container spacing={1} alignItems="flex-start" className='header' direction="row">
          <Grid item>
            <IconButton className={'menuButton'} color="inherit" aria-label="menu" component="a" href="/">
              <SportsSoccerIcon style={{marginRight: '10px'}} />
              Estadio
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
    </>
  )

}

export default Header;