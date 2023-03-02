import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const pages = [{id:'intro', name:'مقدمة'}, 
               {id:'qualifications', name:'خبرات'}, 
               {id:'contact', name:'تواصل'}];

export default function TemporaryDrawer({drawer, drawerHandler}) {

  const toggleDrawer = () =>{
      drawerHandler();
    };

  const list = (
    <Box
      sx={{ width: '100vw', height:'100vh', display:'flex', justifyContent:'center', alignContent:'center'}}
      role="presentation"
      onClick={()=>toggleDrawer()}
      onKeyDown={()=>toggleDrawer()}
    >
      <List sx={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%'}}>
        {pages.map((page) => (
            <ListItem key={page.id} disablePadding >
                <ListItemButton >
                    <ListItemText  
                        primary={<Typography 
                            style={{ fontSize:'2rem', color:'rgb(25, 118, 210)', fontWeight:'500' }}>
                            <a style={{color:'rgb(25, 118, 210)'}}href={`#${page.id}`}>{page.name}</a>
                            </Typography>} 
                            sx={{display:'flex',alignItems:'center',justifyContent:'center'}}
                        />
                </ListItemButton>
            </ListItem>
        ))}
      </List>
      
    </Box>
  );

  return (
    <div>
          <Drawer
            open={drawer}
            onClose={()=>toggleDrawer()}
          >
            {list}
          </Drawer>

    </div>
  );
}