import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Box,
  Button,
  Grid,
  SvgIcon,
  InputAdornment,
  TextField,
  Container,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Page from 'src/components/Page';
import Header from './Header';
import ProductsCard from './productCards';
import {
  Search as SearchIcon
} from 'react-feather';
import {
  Pagination
} from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    padding: theme.spacing(3),
    paddingLeft : theme.spacing(5),
    paddingRight : theme.spacing(5),
  },
  selectedButton: {
    marginRight : "5px",
    border : "solid 1px white",
    fontWeight : "bold"
  },
  moduleButton: {
    marginRight : "5px",
    backgroundColor : "white",
    fontWeight : "bold",
    color : "black"
  },
  unselectButton: {
    marginRight : "5px"
  },
  searchInput: {
    marginLeft: theme.spacing(2)
  },
  queryField: {
    marginTop:"20px",
    maxWidth : "600px"
  },
}));

const tabOptions = [
  {label : "MODULES", value : "modules"}, 
  {label : "INVERTERS", value : "inverters"}, 
  {label : "RACKING", value : "racking"}
];

const products = [1,2,3,4,5,6,7,8,9];

function ApplyPagination( options, page ) {
  return options.slice(page * 6, page * 6 + 6);
}

function InvoiceDetailsView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [invoice, setInvoice] = useState(null);
  const [currentTab, setCurrentTab] = useState('modules');
  const [modulesTab, setModulesTab] = useState('residential');
  const [inverterTab, setInverterTab] = useState('String');
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedProducts = ApplyPagination(products, currentPage-1)

  const getInvoice = useCallback(() => {
    axios
      .get('/api/management/invoices/1')
      .then((response) => {
        if (isMountedRef.current) {
          setInvoice(response.data.invoice);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getInvoice();
  }, [getInvoice]);

  if (!invoice) {
    return null;
  }


  return (
    <Page
      className={classes.root}
      title="Product lists"
    >
      <Container maxWidth="lg">
        <Header />
       <Box mt={2} display='flex' justifyContent='center'>
        {tabOptions.map((tabOption) => {
          if(tabOption.value === currentTab)
            return (
              <Button
                key={tabOption.value}
                className={classes.moduleButton}
              >
              {tabOption.label}
             </Button>
            );
          else
          return (
            <Button
            key={tabOption.value}
            onClick={() => setCurrentTab(tabOption.value)}
            className={classes.unselectButton}
          >
            {tabOption.label}
          </Button>
         );
         })}
       </Box>
       <Box display='flex' justifyContent='center'>
       <TextField
        className={classes.queryField}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon
                fontSize="small"
                color="action"
              >
                <SearchIcon />
              </SvgIcon>
            </InputAdornment>
          )
        }}
        placeholder="Search"
        variant="outlined"
      />
      </Box>
       {(currentTab === 'modules') &&
        <Box mt={3}>
        <Box display='flex' justifyContent='center'>
         {(modulesTab === "residential") &&
            <Button
                className={classes.selectedButton}
              >
              RESIDENTIAL
            </Button>
         }
         {(modulesTab !== "residential") &&
            <Button
              onClick={() => setModulesTab("residential")}
              className={classes.unselectButton}
            >
              RESIDENTIAL
            </Button>
         }
         {(modulesTab === "monofacial") &&
            <Button
                className={classes.selectedButton}
              >
              COMMERCIAL MONOFACIAL
            </Button>
         }
         {(modulesTab !== "monofacial") &&
            <Button
              onClick={() => setModulesTab("monofacial")}
              className={classes.unselectButton}
            >
              COMMERCIAL MONOFACIAL
            </Button>
         }
        </Box>
        <Box display='flex' justifyContent='center'>
        {(modulesTab === "black") &&
            <Button
                className={classes.selectedButton}
              >
              BLACK-ON-BLACK
            </Button>
        }
        {(modulesTab !== "black") &&
            <Button
              onClick={() => setModulesTab("black")}
              className={classes.unselectButton}
            >
              BLACK-ON-BLACK
            </Button>
        }
        {(modulesTab === "bifacial") &&
            <Button
                className={classes.selectedButton}
              >
              COMMERCIAL BIFACIAL
            </Button>
        }
        {(modulesTab !== "bifacial") &&
            <Button
              onClick={() => setModulesTab("bifacial")}
              className={classes.unselectButton}
            >
              COMMERCIAL BIFACIAL
            </Button>
        }
        </Box>
        </Box>
      }
      {(currentTab === 'inverters') &&
        <Box mt={3} display='flex' justifyContent='center'>
            {(inverterTab === "String") &&
                <Button
                    className={classes.selectedButton}
                  >
                  STRING
                </Button>
            }
            {(inverterTab !== "String") &&
                <Button
                  onClick={() => setInverterTab("String")}
                  className={classes.unselectButton}
                >
                  STRING
                </Button>
            }
            {(inverterTab === "Micro") &&
                <Button
                    className={classes.selectedButton}
                  >
                  MICRO
                </Button>
            }
            {(inverterTab !== "Micro") &&
                <Button
                  onClick={() => setInverterTab("Micro")}
                  className={classes.unselectButton}
                >
                  MICRO
                </Button>
            }
        </Box>
      }
      {(currentTab === 'racking') &&
        <Box mt={3} display='flex' justifyContent='center'>
          <Button
              className={classes.selectedButton}
            >
            ROOF
          </Button>
        </Box>
      }
      <Box display='flex' justifyContent='center'>
        <Grid container style={{marginTop:"15px"}} spacing={2}>
        {paginatedProducts.map((product) => {
          return (
        <ProductsCard />
          );
        })
        }
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" pt={5}>
        <Pagination
          size='medium'
          color='secondary' 
          count={Math.ceil(products.length / 6)} 
          page={currentPage}
          onChange={(event, page) => setCurrentPage(page)} />
       </Box>
      </Container>
    </Page>
  );
}

export default InvoiceDetailsView;
