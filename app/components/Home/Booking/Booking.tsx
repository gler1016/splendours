// pages/index.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from 'react-responsive';
import {
    Box,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Snackbar,
    Alert
} from "@mui/material";
import GreenCustomButton from "../../GreenCustomButton";
import GreenCustomMobileButton from "../../Buttons/GreenCustomMobileButton";
import GreenCustomBookButton from "../../GreenBookButton";
import DateCarousel from "../../DateCarousel";
import TimeCarousel from "../../TimeCarousel";
import ServiceCarousel from "../../ServiceCarousel";
import ProductCarousel from "../../ProductCarousel";
import PhaseCarousel from "../../PhaseCarousel";
import CalendarControl from "../../CalendarControl";
import MonthYearPicker from "./MonthCalendar";
import Image from "next/image";
import { GreenBtnBooking } from "../../Buttons/GreenBtnBooking";
// import { GreenAnimationBooking } from "./GreenAnimationBooking";
// import Image from "next/image";
import CustomTextField from "../../3dEffects/FormInput"

const Booking: React.FC = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
    const [resources, setResources] = useState<{ date: string; day: string }[]>(
        []
    ); // State for resources
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // 1 - 12 for Jan - Dec
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Current year
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedDay, setSelectedDay] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedProductTitle, setSelectedProductTitle] = useState<
        string | null
    >(null);
    const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
    const [isBookNow, setIsBookNow] = useState<boolean>(false);
    const [isVideoCall, setIsVideoCall] = useState<boolean>(false);
    const [isCall, setIsCall] = useState<boolean>(false);
    const [isEmail, setIsEmail] = useState<boolean>(false);
    // const [error, setError] = useState<string>('');
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

    // For Dialog state
    const [openDialog, setOpenDialog] = useState(false);

    const [openCalendarDialog, setOpenCalendarDialog] = useState<boolean>(false);

    // Function to get month abbreviation
    const getMonthAbbreviation = (month: number): string => {
        const monthMap = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
        ];
        return monthMap[month - 1]; // Adjust for zero-based index
    };

    // Function to generate month resources based on selected year and month
    const generateResources = (year: number, month: number) => {
        const daysInMonth = new Date(year, month, 0).getDate(); // Get number of days in the month
        const newResources: { date: string; day: string }[] = [];

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month - 1, day);
            const dayName = date
                .toLocaleString("default", { weekday: "short" })
                .toUpperCase();
            newResources.push({ date: day.toString(), day: dayName });
        }

        // Update the resources state with the new array
        // setResources(newResources);
        return newResources;
    };

    const handleCalendarControlClick = () => {
        setOpenCalendarDialog(true);
    };

    const handleCloseCalendarDialog = () => {
        setOpenCalendarDialog(false);
    };

    // Initialize with current month and year resources
    useEffect(() => {
        const initialResources = generateResources(selectedYear, selectedMonth);
        setResources(initialResources);
    }, [selectedYear, selectedMonth]); // Dependency array only includes selectedMonth and selectedYear

    const handleMonthYearChange = (month: number, year: number) => {
        setSelectedMonth(month + 1);
        setSelectedYear(year);
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        stoneService: "",
        stoneProduct: "",
        stonePhase: "",
        specialRequests: "",
        role: ''
    });

    // Validation function for name
    const validateName = (name: string) => {
        if (!name.trim()) {
            return "Name cannot be empty";
        }
        if (name.length < 2) {
            return "Name must be at least 2 characters long";
        }
        return "";
    };

    // Email validation function
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex pattern
        return emailRegex.test(email);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        setFormData({ ...formData, name });

        // Validate the input name
        const error = validateName(name);
        setNameError(error);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setFormData({ ...formData, email });

        // Check for email validity
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }
    };

    // Validation function for phone number
    const validatePhone = (phone: string) => {
        const phoneRegex = /^\+?[1-9]\d{9,14}$/; // Allows optional "+" followed by 10 to 15 digits
        if (!phone.trim()) {
            return "Phone number is required";
        }
        if (!phoneRegex.test(phone)) {
            return "Please enter a valid phone number";
        }
        return "";
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const phone = e.target.value;
        setFormData({ ...formData, phone });

        // Validate the input phone
        const error = validatePhone(phone);
        setPhoneError(error);
    };

    const handleSubmit = async () => {
        const sendData = { ...formData, role: "1" };

        try {
            await axios.post("/api/submit-form", sendData);
            handleCloseDialog();
            setSuccessAlert(true); // Show success alert
        } catch (error) {
            handleCloseDialog();
            console.error("Error submitting form:", error);
            setErrorAlert(true); // Show error alert
        }
    };


    const handleAlertClose = () => {
        setSuccessAlert(false);
        setErrorAlert(false);
    };

    const handleVideoCallSubmit = async () => {
        // const sendData = { ...formData, phone: '', role: "2" };
        setOpenDialog(true);

        const sendData = {
            ...formData,
            phone: '',
            date: '',
            stoneService: '',
            stoneProduct: '',
            stonePhase: '',
            specialRequests: '',
            role: '2'
        }

        try {
            await axios.post("/api/submit-form", sendData);
            handleCloseDialog();
            setSuccessAlert(true); // Show success alert
        } catch (error) {
            handleCloseDialog();
            setErrorAlert(true); // Show error alert
            console.error(error)
        }
    };

    const handleCallSubmit = async () => {
        // const sendData = { ...formData, email: '', role: "3" };
        const sendData = {
            ...formData,
            email: '',
            date: '',
            stoneService: '',
            stoneProduct: '',
            stonePhase: '',
            specialRequests: '',
            role: '3'
        }

        try {
            await axios.post("/api/submit-form", sendData);
            handleCloseDialog();
            setSuccessAlert(true); // Show success alert
        } catch (error) {
            handleCloseDialog();
            setErrorAlert(true); // Show error alert
            console.error(error)
        }
    };

    const handleEmailSubmit = async () => {
        const sendData = { ...formData, role: "4" };

        try {
            await axios.post("/api/submit-form", sendData);
            handleCloseDialog();
            setSuccessAlert(true); // Show success alert
        } catch (error) {
            handleCloseDialog();
            setErrorAlert(true); // Show error alert
            console.error(error)
        }
    };

    const handleDateSelection = (date: string, day: string) => {
        setSelectedDate(date);
        setSelectedDay(day);
    };

    const handleSelectTime = (time: string) => {
        setSelectedTime(time); // Store the selected time in the parent
    };

    // Callback function to update the selectedService in the parent
    const handleSelectedServiceChange = (service: string) => {
        setSelectedService(service);
    };

    // Function to update the selected product title
    const handleProductSelection = (title: string) => {
        setSelectedProductTitle(title);
    };

    // Callback function to update selectedPhase
    const handlePhaseSelect = (phase: string) => {
        setSelectedPhase(phase);
    };

    const handleOpenDialog = () => {
        setIsBookNow(true);

        setFormData({
            ...formData,
            date: `${selectedYear}/${selectedMonth}/${selectedDate}/${selectedTime} (${selectedDay})`,
            stoneService: selectedService || "",
            stoneProduct: selectedProductTitle || "",
            stonePhase: selectedPhase || "",
            specialRequests: "",
        });
        setOpenDialog(true);
    };
    const handleOpenDialog_VideoCall = () => {
        setIsVideoCall(true);
        setFormData({
            ...formData,
            date: `${selectedYear}/${selectedMonth}/${selectedDate}/${selectedTime} (${selectedDay})`,
            stoneService: selectedService || "",
            stoneProduct: selectedProductTitle || "",
            stonePhase: selectedPhase || "",
            specialRequests: "",
        });
        setOpenDialog(true);
    };
    const handleOpenDialog_Call = () => {
        setIsCall(true);
        setFormData({
            ...formData,
            date: `${selectedYear}/${selectedMonth}/${selectedDate}/${selectedTime} (${selectedDay})`,
            stoneService: selectedService || "",
            stoneProduct: selectedProductTitle || "",
            stonePhase: selectedPhase || "",
            specialRequests: "",
        });
        setOpenDialog(true);
    };
    const handleOpenDialog_Email = () => {
        setIsEmail(true);
        setFormData({
            ...formData,
            date: `${selectedYear}/${selectedMonth}/${selectedDate}/${selectedTime} (${selectedDay})`,
            stoneService: selectedService || "",
            stoneProduct: selectedProductTitle || "",
            stonePhase: selectedPhase || "",
            specialRequests: "",
        });
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setIsBookNow(false);
        setIsCall(false);
        setIsVideoCall(false);
        setIsEmail(false);
        setOpenDialog(false);
    };

    return (
        <Box>
            {isMobile || isTablet ? (
                <Box
                    className="relative flex flex-col w-full py-10 gap-y-8 rounded-[20px]"
                    sx={{
                        backgroundImage: "url(images/Home/Booking/background-mobile.jpg)", // Add your image path here
                        backgroundSize: "cover", // Ensures the background image covers the entire area
                        backgroundPosition: "center", // Centers the background image
                        backgroundRepeat: "no-repeat", // Prevents repeating the background image
                    }}
                >
                    <Box className="flex flex-col items-center justify-center w-full px-3 gap-y-4">
                        <Box className="flex flex-col w-full">
                            <Typography
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 400,
                                    textAlign: "center",
                                    // fontFamily: "Chronicle Display",
                                    fontSize: "40px",
                                }}
                            >
                                BOOKING
                            </Typography>
                            
                        </Box>
                        <Box className="flex w-full justify-center">
                        <Box
                            className="flex w-[50%] h-[42px] justify-center border-2 border-[#283C28]"
                            sx={{ borderRadius: "20px" }}
                        >
                            {/* <CalendarControl onClick={handleCalendarControlClick} month={getMonthAbbreviation(selectedMonth)} year={selectedYear} /> */}
                            <CalendarControl
                                onClick={handleCalendarControlClick}
                                month={getMonthAbbreviation(selectedMonth)}
                                year={selectedYear}
                            />

                            <Dialog
                                open={openCalendarDialog}
                                onClose={handleCloseCalendarDialog}
                            >
                                <DialogTitle>Select Month and Year</DialogTitle>
                                <DialogContent>
                                    <MonthYearPicker
                                        initialMonth={selectedMonth}
                                        initialYear={selectedYear}
                                        onMonthYearChange={handleMonthYearChange}
                                    />
                                </DialogContent>
                            </Dialog>
                        </Box>
                        <Box className="flex w-[50%] justify-center">
                            <GreenCustomButton
                                label={"Book"}
                                iconSrc="/images/icons/Vector.svg"
                                onClick={handleOpenDialog}
                            />
                        </Box>
                    </Box>

                        <Box className="flex justify-between w-full">
                            <GreenCustomMobileButton
                                iconSrc="/images/icons/VideoCall.svg"
                                onClick={handleOpenDialog_VideoCall}
                            />
                            <GreenCustomMobileButton
                                iconSrc="/images/icons/Call.svg"
                                onClick={handleOpenDialog_Call}
                            />
                            <GreenCustomMobileButton
                                iconSrc="/images/icons/Email.svg"
                                onClick={handleOpenDialog_Email}
                            />
                        </Box>
                    </Box>

                    <Box className="flex flex-col w-full px-3 gap-y-5">
                        <DateCarousel
                            initialResources={resources}
                            onSelectDate={handleDateSelection}
                        />

                        <TimeCarousel onSelectTime={handleSelectTime} />

                        <ServiceCarousel onServiceSelect={handleSelectedServiceChange} />

                        <ProductCarousel onProductSelect={handleProductSelection} />

                        <PhaseCarousel onPhaseSelect={handlePhaseSelect} handleOpenDialog={handleOpenDialog} />

                    </Box>
                    {/* Dialog for Form */}
                    <Dialog open={openDialog} onClose={handleCloseDialog}>
                        <DialogTitle>
                            <Typography
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 400,
                                    textAlign: "center",
                                    fontFamily: "Chronicle Display",
                                    fontSize: "40px",
                                }}
                            >
                                BOOKING
                            </Typography>
                        </DialogTitle>
                        <DialogContent>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
                                <CustomTextField
                                    label="Name"
                                    fullWidth
                                    value={formData.name}
                                    onChange={handleNameChange}
                                    error={!!nameError} // Show error styling if validation fails
                                    helperText={nameError} // Display validation message
                                    variant="outlined"
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            backgroundColor: "#F5F5F5",
                                            borderRadius: 2,
                                        },
                                    }}
                                />

                                {!isCall && (
                                    <CustomTextField
                                        label="Email"
                                        fullWidth
                                        value={formData.email}
                                        onChange={handleEmailChange}
                                        error={!!emailError} // Trigger error state if invalid
                                        helperText={emailError} // Show validation message
                                        variant="outlined"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                backgroundColor: "#F5F5F5",
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                )}

                                {!isVideoCall && (
                                    <CustomTextField
                                        label="Phone"
                                        fullWidth
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        error={!!phoneError} // Show error styling if validation fails
                                        helperText={phoneError} // Display validation message
                                        variant="outlined"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                backgroundColor: "#F5F5F5",
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                )}

                                {isBookNow || isEmail ? (
                                    <CustomTextField
                                        label="Date"
                                        fullWidth
                                        value={
                                            selectedDate
                                                ? `${selectedYear} / ${selectedMonth} / ${selectedDate} / ${selectedTime} (${selectedDay})`
                                                : ""
                                        }
                                        disabled
                                        variant="outlined"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                backgroundColor: "#F5F5F5",
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                ) : (
                                    <></>
                                )}

                                {isBookNow || isEmail ? (
                                    <CustomTextField
                                        label="Service"
                                        fullWidth
                                        value={selectedService || ""}
                                        disabled
                                        variant="outlined"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                backgroundColor: "#F5F5F5",
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                ) : (
                                    <></>
                                )}

                                {isBookNow || isEmail ? (
                                    <CustomTextField
                                        label="Product"
                                        fullWidth
                                        value={selectedProductTitle || ""}
                                        disabled
                                        variant="outlined"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                backgroundColor: "#F5F5F5",
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                ) : (
                                    <></>
                                )}

                                {isBookNow || isEmail ? (
                                    <CustomTextField
                                        label="Phase"
                                        fullWidth
                                        value={selectedPhase || ""}
                                        disabled
                                        variant="outlined"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                backgroundColor: "#F5F5F5",
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                ) : (
                                    <></>
                                )}

                                {isBookNow || isEmail ? (
                                    <CustomTextField
                                        label="Special Requests"
                                        fullWidth
                                        multiline
                                        rows={3}
                                        value={formData.specialRequests}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                specialRequests: e.target.value,
                                            })
                                        }
                                        variant="outlined"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                backgroundColor: "#F5F5F5",
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                ) : (
                                    <></>
                                )}

                                <Box className="flex w-full justify-center">
                                    {isBookNow && (
                                        <GreenCustomBookButton
                                            label={"Book Now"}
                                            iconSrc="/images/icons/Vector.svg"
                                            onClick={() => handleSubmit()}
                                        />
                                    )}
                                    {isVideoCall && (
                                        <GreenCustomBookButton
                                            label={"request video call"}
                                            iconSrc="/images/icons/Vector.svg"
                                            onClick={() => handleSubmit()}
                                        />
                                    )}
                                    {isCall && (
                                        <GreenCustomBookButton
                                            label={"request a call"}
                                            iconSrc="/images/icons/Call.svg"
                                            onClick={() => handleSubmit()}
                                        />
                                    )}
                                    {isEmail && (
                                        <GreenCustomBookButton
                                            label={"request email"}
                                            iconSrc="/images/icons/Email.svg"
                                            onClick={() => handleSubmit()}
                                        />
                                    )}
                                </Box>
                            </form>
                        </DialogContent>
                    </Dialog>
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
                </Box>
            ) : (
                <Box
                    className="relative flex flex-col w-full px-10 py-10 gap-y-8 rounded-[40px]"
                    sx={{
                        backgroundImage: "url(images/Home/Booking/background.jpg)", // Add your image path here
                        backgroundSize: "cover", // Ensures the background image covers the entire area
                        backgroundPosition: "center", // Centers the background image
                        backgroundRepeat: "no-repeat", // Prevents repeating the background image
                    }}
                >
                    <Box
                        className="flex w-full gap-x-16"
                        sx={{
                            flexDirection: {
                                xs: "column", // Mobile: Stack vertically
                                sm: "column", // Small devices: Stack vertically
                                md: "row",    // Tablet and up: Row layout
                            },
                        }}
                    >
                        {/* Left Section */}
                        <Box
                            className="flex flex-col justify-around w-full"
                            sx={{
                                width: { xs: "100%", md: "50%" }, // Full width on mobile, 50% on tablets and up
                                gap: { xs: "16px", md: "32px" }, // Adjust spacing
                            }}
                        >
                            <Typography
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 300,
                                    alignContent: "flex-start",
                                    fontFamily: "Chronicle Display",
                                    textAlign: { xs: "center", md: "left" }, // Centered on mobile, left-aligned on tablets
                                    fontSize: {
                                        xs: "30px", // Mobile
                                        sm: "40px", // Small screens
                                        md: "56px", // Tablet
                                        lg: "120px", // Larger screens
                                    },
                                }}
                            >
                                BOOKING
                            </Typography>

                            <CalendarControl
                                onClick={handleCalendarControlClick}
                                month={getMonthAbbreviation(selectedMonth)}
                                year={selectedYear}
                            />

                            <Dialog
                                open={openCalendarDialog}
                                onClose={handleCloseCalendarDialog}
                            >
                                <DialogTitle>Select Month and Year</DialogTitle>
                                <DialogContent>
                                    <MonthYearPicker
                                        initialMonth={selectedMonth}
                                        initialYear={selectedYear}
                                        onMonthYearChange={handleMonthYearChange}
                                    />
                                </DialogContent>
                            </Dialog>
                        </Box>

                        {/* Right Section */}
                        <Box
                            className="flex flex-col justify-around"
                            sx={{
                                width: { xs: "100%", md: "40%" }, // Full width on mobile, 40% on tablets
                                marginTop: { xs: "16px", md: "0px" }, // Add spacing on mobile
                                gap: "16px", // Consistent spacing for all devices
                            }}
                        >
                            {/* Book Button */}
                            {/* <Box
                                className="flex justify-center md:justify-end"
                                sx={{
                                    width: "100%",
                                }}
                            >

                            </Box> */}

                            {/* Action Buttons */}
                            <Box
                            className="flex flex-col -mb-12"
                            sx={{
                                justifyContent: { xs: "flex-end", md: "space-between" },
                                alignItems: { xs: "center", md: "flex-end" },
                            }}
                            >
                            <GreenBtnBooking onClick={handleOpenDialog} label="Book" icon="/images/icons/Vector.svg" className="gap-2 ">
                                    <button
                                        style={{
                                            padding: "10px 20px",
                                            backgroundColor: "#283C28",
                                            color: "#DCC5BD",
                                            border: "none",
                                            borderRadius: "50px",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            transition: "all 0.3s ease", // Add transition for smooth animation
                                        }}
                                        className="lg:w-[222px] lg:h-[54px] lg:justify-between lg:text-[15px] hover:gap-4" // Add hover gap for spacing
                                    >
                                        <span style={{ transition: "transform 0.3s ease" }} className="hover:translate-x-2 text-[#DCC5BD]">
                                            Book
                                        </span>
                                        <Image src="/images/icons/VideoCall.svg"
                                            alt="Video Call"
                                            width={32}
                                            height={32}
                                            style={{ opacity: 0, transition: "opacity 0.3s ease, transform 0.3s ease" }} // Add opacity and transform transition
                                            className="hover:opacity-100 hover:translate-x-0"
                                        />
                                    </button>
                                </GreenBtnBooking>
                            </Box>
                            <Box
                                className="flex flex-col md:flex-row gap-8"
                                sx={{
                                    justifyContent: { xs: "center", md: "space-between" },
                                    alignItems: { xs: "center", md: "flex-start" },
                                }}
                            >

                                <GreenBtnBooking onClick={handleOpenDialog_VideoCall} label="Video Call" icon="/images/icons/VideoCall.svg" className="gap-2">
                                    <button
                                        style={{
                                            padding: "10px 20px",
                                            backgroundColor: "#283C28",
                                            color: "#DCC5BD",
                                            border: "none",
                                            borderRadius: "50px",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            transition: "all 0.3s ease", // Add transition for smooth animation
                                        }}
                                        className="lg:w-[222px] lg:h-[54px] lg:justify-between lg:text-[15px] hover:gap-4" // Add hover gap for spacing
                                    >
                                        <span style={{ transition: "transform 0.3s ease" }} className="hover:translate-x-2 text-[#DCC5BD]">
                                            Video Call
                                        </span>
                                        <Image src="/images/icons/VideoCall.svg"
                                            alt="Video Call"
                                            width={32}
                                            height={32}
                                            style={{ opacity: 0, transition: "opacity 0.3s ease, transform 0.3s ease" }} // Add opacity and transform transition
                                            className="hover:opacity-100 hover:translate-x-0"
                                        />
                                    </button>
                                </GreenBtnBooking>
                                <GreenBtnBooking onClick={handleOpenDialog_Call} label="Call" icon="/images/icons/Call.svg" className="px-2">
                                    <button
                                        style={{
                                            padding: "10px 20px",
                                            backgroundColor: "#283C28",
                                            color: "#DCC5BD",
                                            border: "none",
                                            borderRadius: "50px",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                        }}
                                        className="lg:w-[222px] lg:h-[54px] lg:justify-between lg:text-[15px] text-[#DCC5BD]"
                                        onClick={handleOpenDialog_Call}
                                    >   Call
                                        <Image src="/images/icons/Call.svg" alt="Call" width={32} height={32} />

                                    </button>
                                </GreenBtnBooking>
                                <GreenBtnBooking onClick={handleOpenDialog_Email} label="Email" icon="/images/icons/Email.svg" className="px-2">
                                    <button
                                        style={{
                                            padding: "10px 20px",
                                            backgroundColor: "#283C28",
                                            color: "#DCC5BD",
                                            border: "none",
                                            borderRadius: "50px",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                        }}
                                        className="lg:w-[222px] lg:h-[54px] lg:justify-between lg:text-[15px] text-[#DCC5BD]"
                                        onClick={handleOpenDialog_Email}
                                    > Email
                                        <Image src="/images/icons/Email.svg" alt="Email" width={32} height={32} />

                                    </button>
                                </GreenBtnBooking>
                            </Box>
                        </Box>
                    </Box>


                    <Box className="flex flex-col w-full space-y-3">
                        <DateCarousel
                            initialResources={resources}
                            onSelectDate={handleDateSelection}
                        />

                        <TimeCarousel onSelectTime={handleSelectTime} />

                        <ServiceCarousel onServiceSelect={handleSelectedServiceChange} />

                        <ProductCarousel onProductSelect={handleProductSelection} />

                        <PhaseCarousel onPhaseSelect={handlePhaseSelect} handleOpenDialog={handleOpenDialog} />
                    </Box>

                    {/* Dialog for Form */}
                    <Dialog
                        open={openDialog}
                        onClose={handleCloseDialog}
                        PaperProps={{
                            sx: {
                                borderRadius: 3,
                                px: { xs: 2, sm: 4 },
                                py: 3,
                                maxWidth: "500px",
                                width: "100%",
                            },
                        }}
                    >
                        <DialogTitle
                            sx={{
                                textAlign: "center",
                                fontWeight: "bold",
                                fontSize: "24px",
                                color: "#283C28",
                                fontFamily: "Chronicle Display",
                                marginBottom: 2,
                            }}
                        >
                            <Typography
                                variant="h3"
                                color="#283C28"
                                sx={{
                                    fontWeight: 400,
                                    textAlign: "center",
                                    fontFamily: "Chronicle Display",
                                    fontSize: "40px",
                                }}
                            >
                                BOOKING
                            </Typography>
                        </DialogTitle>
                        <DialogContent>
                            <form
                                onSubmit={handleSubmit}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "16px",
                                }}
                            >
                                <CustomTextField
                                    label="Name"
                                    placeholder="John Doe"
                                    fullWidth
                                    value={formData.name}
                                    onChange={handleNameChange}
                                    error={!!nameError} // Show error styling if validation fails
                                    helperText={nameError} // Display validation message
                                    variant="outlined"
                                    sx={{
                                        "& .MuiInputBase-root": {
                                            backgroundColor: "#F5F5F5",
                                            borderRadius: 2,
                                        },
                                    }}
                                />

                                {!isCall && (
                                    <CustomTextField
                                        label="Email"
                                        fullWidth
                                        value={formData.email}
                                        onChange={handleEmailChange}
                                        error={!!emailError} // Trigger error state if invalid
                                        helperText={emailError} // Show validation message
                                        variant="outlined"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                backgroundColor: "#F5F5F5",
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                )}

                                {!isVideoCall && (
                                    <CustomTextField
                                        label="Phone"
                                        fullWidth
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        error={!!phoneError} // Show error styling if validation fails
                                        helperText={phoneError} // Display validation message
                                        variant="outlined"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                backgroundColor: "#F5F5F5",
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                )}

                                {isBookNow || isEmail ? (
                                    <CustomTextField
                                        label="Date"
                                        fullWidth
                                        value={
                                            selectedDate
                                                ? `${selectedYear} / ${selectedMonth} / ${selectedDate} / ${selectedTime} (${selectedDay})`
                                                : ""
                                        }
                                        disabled
                                        variant="outlined"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                backgroundColor: "#F5F5F5",
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                ) : (
                                    <></>
                                )}

                                {isBookNow || isEmail ? (
                                    <CustomTextField
                                        label="Service"
                                        fullWidth
                                        value={selectedService || ""}
                                        disabled
                                        variant="outlined"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                backgroundColor: "#F5F5F5",
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                ) : (
                                    <></>
                                )}

                                {isBookNow || isEmail ? (
                                    <CustomTextField
                                        label="Product"
                                        fullWidth
                                        value={selectedProductTitle || ""}
                                        disabled
                                        variant="outlined"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                backgroundColor: "#F5F5F5",
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                ) : (
                                    <></>
                                )}

                                {isBookNow || isEmail ? (
                                    <CustomTextField
                                        label="Phase"
                                        fullWidth
                                        value={selectedPhase || ""}
                                        disabled
                                        variant="outlined"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                backgroundColor: "#F5F5F5",
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                ) : (
                                    <></>
                                )}

                                {isBookNow || isEmail ? (
                                    <CustomTextField
                                        label="Special Requests"
                                        fullWidth
                                        multiline
                                        rows={3}
                                        value={formData.specialRequests}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                specialRequests: e.target.value,
                                            })
                                        }
                                        variant="outlined"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                backgroundColor: "#F5F5F5",
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                ) : (
                                    <></>
                                )}

                                <DialogActions
                                    sx={{
                                        justifyContent: "center",
                                        // mt: 2,
                                        // px: 1,
                                    }}
                                >
                                    <Box className="flex w-full justify-center">
                                        {isBookNow && (
                                            <GreenCustomBookButton
                                                label={"Book Now"}
                                                iconSrc="/images/icons/Vector.svg"
                                                onClick={() => handleSubmit()}
                                            />
                                        )}
                                        {isVideoCall && (
                                            <GreenCustomBookButton
                                                label={"request video call"}
                                                iconSrc="/images/icons/Vector.svg"
                                                onClick={() => handleVideoCallSubmit()}
                                            />
                                        )}
                                        {isCall && (
                                            <GreenCustomBookButton
                                                label={"request a call"}
                                                iconSrc="/images/icons/Call.svg"
                                                onClick={() => handleCallSubmit()}
                                            />
                                        )}
                                        {isEmail && (
                                            <GreenCustomBookButton
                                                label={"request email"}
                                                iconSrc="/images/icons/Email.svg"
                                                onClick={() => handleEmailSubmit()}
                                            />
                                        )}
                                    </Box>
                                </DialogActions>
                            </form>
                        </DialogContent>
                    </Dialog>
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
                </Box>
            )}


        </Box>
    );
};

export default Booking;
