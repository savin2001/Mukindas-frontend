import React from "react";
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Divider,
    // FormControl,
    // InputLabel,
    // FilledInput,
    // IconButton,
    // FormGroup,
    // FormControlLabel,
    // Checkbox,
    // Button,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LogoutIcon from "@mui/icons-material/Logout";


const GuestMenu = () => {
    return (
        <>
            <Container>
                <Box sx={{ mb: 2, borderColor: "secondary.main" }}>
                    <Card
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 56,
                                height: 56,
                                m: 1,
                                bgcolor: "secondary.main",
                            }}
                            alt="Customer Pic"
                            src="/static/images/avatar/1.jpg"
                        />
                        <CardContent sx={{ width: "100%" }}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{ m: 1 }}
                            >
                                Guest name
                            </Typography>

                            <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="div"
                                color="secondary"
                            >
                                <Link
                                    to={`/guest`}
                                    
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    Guest account
                                </Link>
                            </Typography>
                            
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ mb: 3 }}>
                    <Card>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                Drop shipping
                            </Typography>
                        </CardContent>
                        <Divider variant="middle" />

                        <List
                            sx={{
                                width: "100%",
                                bgcolor: "background.paper",
                            }}
                        >
                            <Link
                                to={`/vendor/Label`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar
                                            sx={{ bgcolor: "secondary.main" }}
                                        >
                                            <AddCircleOutlineIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="New shipment" />
                                </ListItem>
                            </Link>
                            <Divider variant="middle" component="li" />
                            <Link
                                to={`/guest/Transactions`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar
                                            sx={{ bgcolor: "secondary.main" }}
                                        >
                                            <LocalShippingIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Shipping transactions" />
                                </ListItem>
                            </Link>
                            <Link
                                to={`/`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar
                                            sx={{ bgcolor: "secondary.main" }}
                                        >
                                            <LogoutIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Log Out" />
                                </ListItem>
                            </Link>
                        </List>
                        
                    </Card>
                </Box>
                
            </Container>
        </>
    );
};

export default GuestMenu;
