import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import InfoHeader from './Components/InfoHeader'
import Articles from './Components/Articles';
import {Box,styled} from '@mui/material'

const Container = styled(Box)(({ theme }) => ({
  width: '59%',
  margin: '110px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '75%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '85%'
  }
}));


function App() {
  return (
    <Box>
      <Header/>
      <Container>
            <InfoHeader/>
          <Articles/>
      </Container>
    </Box>
  );
}

export default App;
