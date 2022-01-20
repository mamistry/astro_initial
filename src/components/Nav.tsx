import React, { useEffect, useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';
import MultiCarousel from './MultiCarousel';

const drawerWidth = 240;

const useStyles = makeStyles({
    root: {
      display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      
    },
    menuButton: {
      marginRight: '5px',
      
    },
    // necessary for content to be below app bar
    //toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      top: '95px'
    },
    content: {
      flexGrow: 1,
      padding: '7px',
    },
  });

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  //const { window } = props;
  const classes = useStyles();
  //const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div />
      <Divider />
      <List>
        <ListItem button component="a" href="/">
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem button component="a" href="/nav">
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary={'Nav'} />
        </ListItem>
      </List>
    </div>
  );

  const container = undefined;

  return (
    <div className={classes.root}>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={'right'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <MultiCarousel clips={props.clips} />
      </main>
    </div>
  );
}
