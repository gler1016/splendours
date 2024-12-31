'use client'

import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Modal,
  TextField,
  Typography,
  Button,
  IconButton,
  Snackbar,
  Alert
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: '#f5e0d8',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

interface EnquiryFormProps {
  open: boolean;
  handleClose: () => void;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ open, handleClose }) => {
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    enquiry: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleAlertClose = () => {
    setSuccessAlert(false);
    setErrorAlert(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) {
      setErrorAlert(true);
      return;
    }
    try {
      const response = await axios.post("/api/submit-enquire-form", formData);
      setFormData({ name: '', email: '', phone: '', enquiry: '' });
      setSuccessAlert(true); // Show success alert
      handleClose();
    } catch (error) {
      console.error('Error submitting the enquiry form:', error);
      // Handle error appropriately, e.g., show an alert or notification
      setErrorAlert(true); // Show error alert
      handleClose();
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography
              variant="h4"
              color="#283C28"
              sx={{
                fontWeight: 550,
                textAlign: 'center',
                fontFamily: 'Chronicle Display',
                flexGrow: 1, // This allows the title to take up space so the button aligns to the right
              }}
            >
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
      {/* Success Alert */}
      <Snackbar open={successAlert} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="success" sx={{ width: "100%" }}>
          Form sent successfully!
        </Alert>
      </Snackbar>

      {/* Error Alert */}
      <Snackbar open={errorAlert} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="error" sx={{ width: "100%" }}>
          Failed to send form. Please try again.
        </Alert>
      </Snackbar>
    </>
  );
};

export default EnquiryForm;