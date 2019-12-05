import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  Collapse
} from '@material-ui/core'
import StuffingContainer from './stuffingContainer/stuffingContainer'
import StuffingContainerDynamic from './stuffingContainerDynamic/stuffingContainerDynamic'

function App () {
  return (
    <div className='App' style={{ padding: 15 }}>
      <List component='div'>
        <ListItem
          button
          component={Link}
          to='/StuffingContainer'
        >
          <ListItemText primary='StuffingContainer' />
        </ListItem>
        <Divider />
        <ListItem
          button
          component={Link}
          to='/StuffingContainerDynamic'
        >
          <ListItemText primary='StuffingContainerDynamic' />
        </ListItem>
      </List>
      <BrowserRouter>
        <Switch>
          <Route exact path='/StuffingContainer' render={() => <StuffingContainer />} />
          <Route exact path='/StuffingContainerDynamic' render={() => <StuffingContainerDynamic />} />
        </Switch>
      </BrowserRouter>
      <StuffingContainerDynamic />
    </div>
  )
}

export default App
