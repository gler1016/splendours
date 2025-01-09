// components/EnquiryForm.tsx
import React, { useState } from 'react';
import {
  Box,
  Modal,
  TextField,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#f5e0d8',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
} as const;

const EnquiryForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: '', email: '', phone: '', enquiry: '' });
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Open Enquiry Form
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="h5" fontWeight="bold" fontFamily="serif">
              Enquiry Form
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              label="*Name"
              name="name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="*Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Phone No"
              name="phone"
              type="tel"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              label="Enquiry"
              name="enquiry"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={formData.enquiry}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: '#d3b8aa',
                color: 'black',
                borderRadius: '20px',
              }}
              fullWidth
            >
              SEND
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default EnquiryForm;
