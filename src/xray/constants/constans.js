import {createTheme, styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

export const mdTheme = createTheme();

const drawerWidth = 240;

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// 임시 차트 데이터들
function createDate(time, amount) {
  return {time, amount};
}

export const data = [
  createDate('00:00', 0),
  createDate('03:00', 300),
  createDate('06:00', 600),
  createDate('09:00', 800),
  createDate('12:00', 1500),
  createDate('15:00', 2000),
  createDate('18:00', 2400),
  createDate('21:00', 3000),
  createDate('24:00', 2500),
];

// 임시 리스트 데이터들
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return {id, date, name, shipTo, paymentMethod, amount};
}

export const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];
