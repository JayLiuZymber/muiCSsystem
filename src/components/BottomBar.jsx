import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';

// -----------------------------------------------------------------------------

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function BottomBar() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick(TransitionUp)}>Up</Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        autoHideDuration={5000}
        key={transition ? transition.name : ''}
        sx={{ width: '100%' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
        Login OK!
        </Alert>
        {/* <Alert severity="error">error</Alert>
        <Alert severity="warning">warning</Alert>
        <Alert severity="info">info</Alert> */}
      </Snackbar>
    </div>
  );
}