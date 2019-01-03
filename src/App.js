import React from 'react';
import './App.css';
import BoardInsert from './BoardInsert';
import BoardList2 from './BoardList';
//css import
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const App = () => (
    <div className="App">
        <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            게시판
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container direction="column" justify="space-evenly" alignItems="center">
        <BoardInsert />
        <BoardList2 />
     </Grid>
    </div>
)

export default App;