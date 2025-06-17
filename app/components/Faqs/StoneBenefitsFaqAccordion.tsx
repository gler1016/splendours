"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Box, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import Image from 'next/image';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    '&:not(:last-child)': {
        borderBottom: 'none',
    },
    '&::before': {
        display: 'none',
    },
    padding: 0, // Set padding to 0 for Accordion
}));


interface CustomAccordionSummaryProps extends AccordionSummaryProps {
    expanded?: boolean; // Add your custom expanded prop
}

const AccordionSummary = styled((props: CustomAccordionSummaryProps) => {
    const { expanded, ...rest } = props;
    return (
        <MuiAccordionSummary
            expandIcon={
                expanded ? (
                    <IndeterminateCheckBoxIcon sx={{ fontSize: '30px', color: '#DCC5BD' }} />
                ) : (
                    <AddBoxIcon sx={{ fontSize: '30px', color: '#DCC5BD' }} />
                )
            }
            {...rest}
        />
    );
})(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Added justify-content: space-between
    padding: 0, // Remove padding
    '& .MuiAccordionSummary-expandIconWrapper': {
        position: 'relative',
        right: 0,
    },
    '& .MuiAccordionSummary-content': {
        margin: 0, // Remove margin
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    backgroundColor: '#283C28',
    color: 'white',
    padding: 0, // Remove padding
}));

export default function StoneTypesFaqAccordion() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div className='px-12' > {/* Root component padding and margin set to 0 */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    expanded={expanded === 'panel1'}
                    style={{
                        borderBottom: '2px solid #DCC5BD',
                        backgroundColor: '#283C28',
                        color: 'white',
                    }}
                >
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography
                            variant="h3"
                            color="#DCC5BD"
                            sx={{
                                fontWeight: 300,
                                fontFamily: 'Chronicle Display',
                                fontSize: { xs: '15px', sm: '20px', md: '25px', lg: '28px' },
                            }}
                        >

                            WHAT ARE THE BENEFITS OF USING NATURAL STONE?
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className="flex w-full h-[250px] items-end">
                        <Box className="flex w-full justify-between">
                            <Box className="flex flex-col w-1/3 justify-center">
                                <Typography
                                    variant="h3"
                                    color="white"
                                    sx={{
                                        fontWeight: 300,
                                        alignContent: 'flex-start',
                                        fontFamily: 'var(--font-montserrat)',
                                        lineHeight: '1.4',
                                        fontSize: {
                                            xs: "8px",
                                            sm: "10px",  // Small screens
                                            md: "12px",  // Medium screens
                                            lg: "15px"
                                        }
                                    }}
                                >
                                    Natural stone is highly durable and ideal for high-traffic areas. Proper care and sealing resists wear and tear, making it perfect for pathways and patios.
                                </Typography>
                            </Box>
                            <Box className="flex w-1/2 justify-between">
                                <Box>
                                    <Image
                                    src="/images/Faqs/Q6/1.jpg"
                                    alt="Stone1"
                                        width={150}
                                        height={150}
                                        className='rounded-full w-[150px] h-[150px]'
                                    />
                                </Box>
                                <Box>
                                    <Image
                                    src="/images/Faqs/Q6/2.jpg"
                                    alt="Stone1"
                                        width={150}
                                        height={150}
                                        className='rounded-full w-[150px] h-[150px]'
                                    />
                                </Box>
                                <Box>
                                    <Image
                                    src="/images/Faqs/Q6/3.jpg"
                                    alt="Stone1"
                                        width={150}
                                        height={150}
                                        className='rounded-full w-[150px] h-[150px]'
                                    />
                                </Box>
                                <Box>
                                    <Image
                                    src="/images/Faqs/Q6/4.jpg"
                                    alt="Stone1"
                                        width={150}
                                        height={150}
                                        className='rounded-full w-[150px] h-[150px]'
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
