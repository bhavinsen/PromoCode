import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ActiveIcon from './reuseimg/icon _active.png';
import Glyph from './reuseimg/Glyph.png';
import Icon from './reuseimg/ICON.png';
import './reusecss/sidebar.scss';
import { imageMapData } from '../inputData/inputContant';

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        background: '#1B1D29',
        width: '100%',
        maxWidth: '4%'
    },
    icon_list: {
        margin: '0px auto 0px auto',
    },
    icon_listitem: {
        marginBottom: '30px',
    },
    icon_listitem_active: {
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: '30px',
    }
}));

const Sidebar = () => {
    const classes = useStyles();
    const [imageMap, setImageMap] = React.useState([]);
    useEffect(() => {
        setImageMap(imageMapData);
    }, []);

    const handleClickSet = (val: boolean, index: any) => {
        let img = [ ...imageMap ];
        img.forEach((data: any, ind: any) => {
            if (ind === index) {
                data.active = val;
            }
        });
        setImageMap(img);
    }

    return (
        <div >
            <CssBaseline />
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <List className={classes.icon_list}>
                    <ListItem button className={classes.icon_listitem}>
                        <img src={Glyph} alt="" />
                    </ListItem>
                    {imageMap.map((data: any, index: any) => <> <ListItem button className={classes.icon_listitem} onClick={() => handleClickSet(!data.active, index)}>
                        {data.active ? <img src={ActiveIcon} alt="" /> : <img src={Icon} alt="" />}
                    </ListItem></>)}
                </List>
            </Drawer>
        </div>
    );
}

export default Sidebar;
