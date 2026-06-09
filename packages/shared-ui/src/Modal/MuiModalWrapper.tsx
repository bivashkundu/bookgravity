import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DialogWrapper } from './Dialog.styles';

interface IMuiModalWrapperProps {
  open: boolean;
  onClose?: () => void;
  scroll?: 'paper' | 'body';
  children: React.JSX.Element | React.JSX.Element[];
  title: string;
}

export default function MuiModalWrapper({
  open,
  onClose,
  scroll,
  children,
  title,
}: IMuiModalWrapperProps) {

  return (
    <DialogWrapper
      open={open}
      onClose={onClose}
      scroll={scroll}
      aria-labelledby='responsive-dialog-title'
      slotProps={{ paper: { className: 'custom-dialog-paper' }}}
    >
      <Stack direction='row' justifyContent='space-between' alignItems='center' className='dialog-head'>
        <Typography variant='h6'>{title}</Typography>
        <IconButton onClick={onClose} disableRipple>
          <CloseIcon />
        </IconButton>
      </Stack>
      <DialogContent>{children}</DialogContent>
    </DialogWrapper>
  );
}
