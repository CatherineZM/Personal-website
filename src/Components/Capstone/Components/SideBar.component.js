import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ValuePage.css';

import SideBarList from './SideBarList.component';

import { Drawer, Divider, IconButton} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

class SideBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          open: false,
          setOpen: false,
        }
      }
    
    onClickMenu=(e)=>{
        const new_open = !this.state.open;
        this.setState({ open: new_open });
        this.setState({ setOpen: new_open });
    }

    render() {
        return (
            <div className="sidebar">
                <IconButton className="MenuBtn" size="small" edge="end" color="inherit" 
                            aria-label="menu" sx={{ mr: 1 }} onClick={this.onClickMenu}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    sx={{
                        display: { xs: 'block', sm: 'block', md:'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                      }}
                    variant="temporary" 
                    open={this.state.open} 
                    anchor="left" 
                    onClose={this.onClickMenu}
                    className="openDrawer"
                >
                    <div className="close">
                        <IconButton onClick={this.onClickMenu}>
                            <ArrowBackIosNewIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <SideBarList />
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                    }}
                    open
                    >
                    <SideBarList />
                </Drawer>
            </div>
            )
        }
    }
    
    export default SideBar;