
import MuiAlert from '@mui/material/Alert';
import * as React from 'react';
export const Alert = React.forwardRef(function Alert(props, ref) {
    
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

