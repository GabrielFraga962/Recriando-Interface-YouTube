import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Button, Box, Typography, ListSubheader, Divider, ListItemText, ListItemIcon, ListItem, List, Drawer, Grid, Hidden  } from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import RestoreIcon from '@material-ui/icons/Restore';
import ArchiveIcon from '@material-ui/icons/Archive';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';


const useStyles = makeStyles ((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark,
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
      drawerPaper: {
        width: 240,
        borderRight: 'none',
    },
    icons: {
        paddingRight: theme.spacing(5)
    },
    logo: {
        height: 30,
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
    },
    grow: {
        flexGrow: 1
    },
    listItemText: {
        fontSize: 14,
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    subheader: {
        textTransform: 'uppercase',
    }
}));

const videos = [
    {
      id: 1,
      title:
        'SEMPRE PERDIDO | Um diáro de viagem 25#',
      channel: 'Gabriel Solomon',
      views: '55 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpg',
      thumb: '/images/thumbnail-1.png',
    },
    {
      id: 2,
      title:
        'DICAS PARA VIAGEM | O dia em que visitei São Francisco - California #29',
      channel: 'Gabriel Solomon',
      views: '39 mi de visualizações',
      date: 'há 4 semana',
      avatar: '/images/avatar.jpg',
      thumb: '/images/thumbnail-2.png',
    },
    {
      id: 3,
      title:
        'LONE_TRAVELLE | Dicas de viagem solo, truque e segurança #35',
      channel: 'Gabriel Solomon',
      views: '68 mi de visualizações',
      date: 'há 6 semana',
      avatar: '/images/avatar.jpg',
      thumb: '/images/thumbnail-3.png',
    },
    {
      id: 4,
      title:
        'ABBY STYLE 411 | Look e tendências para o inverno #15',
      channel: 'Gabriel Solomon',
      views: '42 mi de visualizações',
      date: 'há 7 semana',
      avatar: '/images/avatar.jpg',
      thumb: '/images/thumbnail-4.png',
    },
    {
      id: 5,
      title:
        'GUIA DEFINITIVO | PhotoShop #19',
      channel: 'Gabriel Solomon',
      views: '55 mi de visualizações',
      date: 'há 6 semana',
      avatar: '/images/avatar.jpg',
      thumb: '/images/thumbnail-5.png',
    },
    {
      id: 6,
      title:
        'HOBBYLAND | Um documentário semanal sobre diferentes passatempos #42',
      channel: 'Gabriel Solomon',
      views: '70 mi de visualizações',
      date: 'há 2 semana',
      avatar: '/images/avatar.jpg',
      thumb: '/images/thumbnail-6.png',
    },
    {
      id: 7,
      title:
        'INTERIOR MODERNE | 10 dicas de decorações e mais... #50 ',
      channel: 'Gabriel Solomon',
      views: '51 mi de visualizações',
      date: 'há 3 semana',
      avatar: '/images/avatar.jpg',
      thumb: '/images/thumbnail-7.png',
    },
    {
      id: 8,
      title:
        'MONN TALK | Uma viagem pelo espaço tempo #60',
      channel: 'Gabriel Solomon',
      views: '100 mi de visualizações',
      date: 'há 3 semana',
      avatar: '/images/avatar.jpg',
      thumb: '/images/thumbnail-8.png',
    },

];

function Home() {
    const classes = useStyles();
    const theme = useTheme();

    return (
    <div className={classes.root}>
    <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
        <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
      <MenuIcon />
      </IconButton>
      <img src={theme.palette.type ==='dark' ? "/images/branco.png" : "/images/preto.png"} alt="logo" className={classes.logo} />      
      <div className={classes.grow} />

      <IconButton  className={classes.icons} >
      <VideoCallIcon />
      </IconButton>

      <IconButton  className={classes.icons} >
      <AppsIcon />
      </IconButton>

      <IconButton  className={classes.icons} >
      <NotificationsIcon />
      </IconButton>

     <Button startIcon={<AccountCircleIcon />} variant="outlined" color="secondary">Fazer Login</Button>
    </Toolbar>
</AppBar>

<Box display="flex">
    <Hidden mdDown>
<Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            
              <ListItem button classes={{root: classes.listItem}} >
                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText  classes={{primary: classes.listItemText}} primary={'Início'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<ExploreIcon />}</ListItemIcon>
                <ListItemText  classes={{primary: classes.listItemText}} primary={'Explorar'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                <ListItemText  classes={{primary: classes.listItemText}} primary={'Inscrições'} />
              </ListItem>
           
          </List>
          <Divider />

          <List>
            
              <ListItem button classes={{root: classes.listItem}} >
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText  classes={{primary: classes.listItemText}} primary={'Biblioteca'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<RestoreIcon />}</ListItemIcon>
                <ListItemText  classes={{primary: classes.listItemText}} primary={'Histórico'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<ArchiveIcon />}</ListItemIcon>
                <ListItemText  classes={{primary: classes.listItemText}} primary={'Seus vídeos'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<WatchLaterRoundedIcon />}</ListItemIcon>
                <ListItemText  classes={{primary: classes.listItemText}} primary={'Assistir mais tarde'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<ThumbUpAltRoundedIcon />}</ListItemIcon>
                <ListItemText  classes={{primary: classes.listItemText}} primary={'Vídeos marcados como "Gostei" '} />
              </ListItem>
           
          </List>
          <Divider />
          <Box p={7}>
              <Typography variant="body2">
                  Faça login para curtir vídeos, comentar e se inscrever.
              </Typography>
              <Box mt={2}>
              <Button 
              variant='outlined'
              color='secondary'
              startIcon={<AccountCircleIcon />}>
                  Faça login   
              </Button>
              </Box>
          </Box>
          <Divider />
          
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader
                id="nested-list-subheader"
                className={classes.subheader}   
                >
                O MELHOR DO YOUTUBE 
                </ListSubheader>
            }
          >
            
              <ListItem button classes={{root: classes.listItem}} >
                <ListItemIcon>{<YouTubeIcon />}</ListItemIcon>
                <ListItemText  classes={{primary: classes.listItemText}} primary={'YouTube Premium'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<LocalMoviesIcon />}</ListItemIcon>
                <ListItemText  classes={{primary: classes.listItemText}} primary={'Filmes'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<SportsEsportsIcon />}</ListItemIcon>
                <ListItemText  classes={{primary: classes.listItemText}} primary={'Jogos'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<LiveTvIcon />}</ListItemIcon>
                <ListItemText  classes={{primary: classes.listItemText}} primary={'Ao vivo'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<EmojiObjectsIcon />}</ListItemIcon>
                <ListItemText  classes={{primary: classes.listItemText}} primary={'Aprender'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                <ListItemIcon>{<SportsFootballIcon />}</ListItemIcon>
                <ListItemText  classes={{primary: classes.listItemText}} primary={'Esportes'} />
              </ListItem>

         </List>
         <Divider />

        </div>
      </Drawer>
    </Hidden>

    <Box p={8}>
        <Toolbar />
        <Typography
         variant="h5"
         color="textPrimary"
         style={{fontWeight:600}}
        >
            Recomendados
        </Typography>

        <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
</div>
  );  
}

export default Home;