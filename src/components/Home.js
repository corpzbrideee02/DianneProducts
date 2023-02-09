
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import Stack from '@mui/material/Stack';
import Logo from '../finalLogo.png'
function Home() {

  return (
    <div id="grad">
      <Container component="main" maxWidth="sm" style={{ color: "#6774ad" }}>
        <Stack spacing={5}
          alignItems="center"
        >
          <div>
            <img src={Logo} width="300" />
          </div>
          <div> <Typography variant="h4" component="h2" align="center" color="text.secondary" id="label1">
            {'Mirrorless camera online purchasing.'}<br />
          </Typography>
          </div>
          <div> <Typography variant="h6" component="h2" align="center" color="text.secondary" id="label2">
            {'Providing you with the most affordable camera prices possible so that your passion for photography can be satisfied to the fullest!'}
          </Typography>
          </div>
          <div> <Link to="/products">
            <Button variant="contained" style={{ width: '100%', padding: '10px' }}> Check out the products <EastIcon /></Button>
          </Link>
          </div>
        </Stack>
      </Container>
    </div>

  );
}

export default Home;


/* 

      
      */