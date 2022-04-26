import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import Package from '@mui/icons-material/AllInbox';
import API from '@mui/icons-material/Api';
import Config from '@mui/icons-material/Settings';
import Pluggable from '@mui/icons-material/ElectricalServices';
import Tools from '@mui/icons-material/Build';
import About from '@mui/icons-material/Info';
import styled from 'styled-components';
import ButtonBase from '@mui/material/ButtonBase';

const ItemIcon = styled(ListItemIcon)`
    min-width: 2rem !important;
`;

const ItemText = styled(ListItemText)`
    white-space: nowrap;
    color: #00acee;
    text-align: left;
    & .MuiTypography-root {
        font-weight: bold;
    }
`;

const ListItem = styled.li`
    display: flex;
    margin: .5rem 0;
    align-items: center;
    &:hover {
        background-color: #F5F5F5;
        cursor: pointer;
    }
`;

const sidebarItems = [{ name: 'Home', icon: Home },
    { name: 'Creating Packages', icon: Package },
    { name: 'API', icon: API },
    { name: 'Configuration', icon: Config },
    { name: 'Pluggable Resolvers', icon: Pluggable },
    { name: 'Tools', icon: Tools },
    { name: 'About', icon: About }];

/**
 * Sidebar component
 * @returns {JSX.Element}
 */
function Sidebar(): JSX.Element {
    return (
        <ul>
            {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                    <ListItem key={item.name}>
                        <ButtonBase sx={{ width: '100%' }}>
                            <ItemIcon>
                                <Icon sx={{ color: '#00acee' }} />
                            </ItemIcon>
                            <ItemText primary={item.name} />
                        </ButtonBase>
                    </ListItem>
                );
            })}
        </ul>
    );
}

export default Sidebar;
