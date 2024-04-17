import React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import SettingsHeader from './components/SettingsHeader';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TutorDialog = ({ closeTutorSettings, open }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={closeTutorSettings}
      TransitionComponent={Transition}
    >
      <SettingsHeader onClose={closeTutorSettings} />
      <List>
        <ListItemButton>
          <ListItemText primary="Phone ringtone" secondary="Titania" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText
            primary="Default notification ringtone"
            secondary="Tethys"
          />
        </ListItemButton>
      </List>
    </Dialog>
  );
};

export default TutorDialog;
