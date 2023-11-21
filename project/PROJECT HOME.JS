import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleLoginClick = () => {
    console.log('Clicked on login');
    // Redirect to the login page (if needed)
  };

  const handleContactClick = () => {
    console.log('Clicked on contact');
  };

  const backgroundImageUrl = 'https://www.missouripartnership.com/wp-content/uploads/2018/01/iStock-695349930.jpg'
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: `url(${backgroundImageUrl}) center/cover fixed`,
        // Add additional styling as needed
      }}
    >
      {/* Header */}
      <AppBar position="static" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold', fontSize: '24px', color: 'white' }}>
            HOSPITAL RECORD MANAGEMENT
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              {/* Removed unused 'SearchIcon' component */}
            </div>
            <InputBase
              placeholder="What are you looking for?"
              inputProps={{ 'aria-label': 'search' }}
              style={{ marginLeft: '8px', color: 'white' }}
            />
          </div>
          <Button color="inherit" onClick={handleLoginClick} component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" onClick={handleLoginClick} >
            Search
          </Button>
          <Button color="inherit" onClick={handleContactClick}>
            Contact
          </Button>
        </Toolbar>
        {/* Navigation Bar */}
        <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
          <List>
            <ListItem>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={() => console.log('Hospital Structure')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Hospital Structure" />
            </ListItem>
            <ListItem button onClick={() => console.log('Outpatient Clinic Management')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Outpatient Clinic Management" />
            </ListItem>
            <ListItem button onClick={() => console.log('Inpatient Clinic Management')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Inpatient Clinic Management" />
            </ListItem>
            <ListItem button onClick={() => console.log('Inpatient Cases')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Inpatient Cases" />
            </ListItem>
            <ListItem button onClick={() => console.log('Outpatient Cases')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Outpatient Cases" />
            </ListItem>
            <ListItem button onClick={() => console.log('Patients Medical Record List')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Patients Medical Record List" />
            </ListItem>
            <ListItem button onClick={() => console.log('Temporary Medical Record Organization')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Temporary Medical Record Organization" />
            </ListItem>
            <ListItem button onClick={() => console.log('Status of Medical Records')} style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>
              <ListItemText primary="Status of Medical Records" />
            </ListItem>
          </List>
        </Drawer>
      </AppBar>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
  <Typography variant="h3" style={{ color: 'black', textAlign: 'center', marginTop: '20px', fontWeight: 'bold',fontSize: '40px' }}>
    Welcome to Hospital Record Management System
  </Typography>

  <div style={{ textAlign: 'center', marginTop: '30px' }}>
    <Typography variant="h5" style={{ color: 'black', fontWeight: 'bold', marginBottom: '15px' ,fontSize: '40px'}}>
      Key Features:
    </Typography>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li>
        <Typography variant="subtitle1" style={{ color: 'black',fontSize: '40px' }}>
          Medical Records Management
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" style={{ color: 'black',fontSize: '40px' }}>
          Outpatient and Inpatient Management
        </Typography>
      </li>
      <li>
        <Typography variant="subtitle1" style={{ color: 'black',fontSize: '40px' }}>
          Efficient Record Organization
        </Typography>
      </li>
      {/* Add more features as needed */}
    </ul>
  </div>

  <Typography variant="body1" style={{ color: 'black', textAlign: 'center', marginTop: '30px',fontSize: '40px' }}>
    Our system is designed to streamline medical record management, ensuring accuracy and accessibility.
  </Typography>
</div>


      {/* Footer */}
      <Footer onClick={() => {}} style={{ flexShrink: 0 }} />
    </div>
  );
};

export default Home;
