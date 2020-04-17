import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  uploadButton: {
    margin: theme.spacing(1),
    color: 'aliceblue',
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: "#3b5e3a",
    },
  },
  input: {
    display: 'none',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 600,
    position: 'absolute',
    top: '30%'
  },
}));

export default useStyles;
