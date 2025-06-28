import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ValuePage.css';

import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import { Link } from "react-scroll";

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const values = ["Achievement", "Benevolence", "Conformity", "Hedonism", "Power",
                "Security", "Self-Direction", "Stimulation", "Tradition", "Universalism"]

class SideBarList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          openList: false,
          setOpenList: false,
        }
      }

    handleClick=(e)=>{
        const new_open = !this.state.openList;
        this.setState({ openList: new_open });
        this.setState({ setOpenList: new_open });
    }

    render() {
        return (
            <List component="nav">
                <Link className="primaryTab" to="intro" spy={true} smooth={false} offset={-100} duration={200} activeClass="active">
                    <ListItemButton>
                    <ListItemText primary="Introduction to the Values Theory" />
                    </ListItemButton>
                </Link>

                <Link className="primaryTab" to="theory" spy={true} smooth={false} offset={-100} duration={200} activeClass="active">
                    <ListItemButton>
                    <ListItemText primary="Schwartz's Value Theory" />
                    </ListItemButton>
                </Link>

                <ListItemButton className="primaryTab" onClick={this.handleClick}>
                    <ListItemText primary="List of Values and Definitions" />
                    {this.state.openList ? <ExpandMore /> : <ExpandLess />}
                </ListItemButton>
                <Collapse in={!this.state.openList} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    {values.map((value, index) => (
                        <Link className="secondaryTab" key={index} 
                        to={value} spy={true} smooth={false} offset={-100} duration={200} activeClass="active">
                        <ListItemButton>
                            <ListItemText primary={value} />
                        </ListItemButton>
                        </Link>
                    ))}
                    </List>
                </Collapse>

                <Link className="primaryTab" to="structure" spy={true} smooth={false} offset={-100} duration={200} activeClass="active">
                    <ListItemButton>
                    <ListItemText primary="System Overview" />
                    </ListItemButton>
                </Link>
                
                <Link className="primaryTab" to="useful" spy={true} smooth={false} offset={-100} duration={200} activeClass="active">
                    <ListItemButton>
                    <ListItemText primary="How is Our Product Useful?" />
                    </ListItemButton>
                </Link>
            </List>
            )
        }
    }
    
    export default SideBarList;