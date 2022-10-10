import React from "react";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import './index.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #ccc',
  boxShadow: 24,
  p: 4,
};
export default function FormAddUsers(props) {
  const { isOpen, onClose } = props
  return (
    <div>

      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thêm người dùng
          </Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Họ và tên" variant="outlined" />
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Giới tính</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="0" control={<Radio />} label="Nữ" />
                <FormControlLabel value="1" control={<Radio />} label="Nam" />
              </RadioGroup>
            </FormControl>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Tên đăng nhập" variant="outlined" />
            <TextField id="outlined-basic" label="Mật khẩu" variant="outlined" />


          </Box>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<SaveIcon />}>
              Lưu
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}
