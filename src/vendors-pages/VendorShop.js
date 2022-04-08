import React, { useState } from "react";
import VendorSearchBar from "../components/VendorSearchBar";
import {
    Container,
    Grid,
    ToggleButton,
    ToggleButtonGroup,
    Avatar,
    Typography,
    Rating,
    Box,
} from "@mui/material";
import VendorMenu from "../components/VendorMenu";
import VendorShopProductTab from "../components/VendorShopProductTab";

const children = [
    <ToggleButton value="left" key="left">
        <Typography>Products</Typography>
    </ToggleButton>,
    <ToggleButton value="center" key="center">
        <Typography>Shipping and policies</Typography>
    </ToggleButton>,
];

const VendorShop = () => {
    const [alignment, setAlignment] = useState("left");
    const handleToggleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const control = {
        value: alignment,
        onChange: handleToggleChange,
        exclusive: true,
    };

    return (
        <>
            <VendorSearchBar />
            <Container
                sx={{ flexGrow: 1, width: "100%", height: 100 }}
            ></Container>
            <Container>
                <Grid
                    container
                    spacing={{ xs: 2, md: 1 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid item sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }} md={3}>
                        <VendorMenu />
                    </Grid>
                    <Grid item xs={4} sm={8} md={9}>
                        <Box sx={{ mb: 3 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <Box sx={{ pr: 2 }}>
                                    <Avatar
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            bgcolor: "secondary.main",
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{ color: "primary.dark" }}
                                        variant="h6"
                                    >
                                        Seller Name
                                    </Typography>
                                    <Rating
                                        name="half-rating-read"
                                        defaultValue={2.5}
                                        precision={0.5}
                                        readOnly
                                    />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ mb: 1 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    "& > :not(style) + :not(style)": { mt: 2 },
                                }}
                            >
                                <ToggleButtonGroup size="medium" {...control}>
                                    {children}
                                </ToggleButtonGroup>
                            </Box>
                            <VendorShopProductTab />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default VendorShop;
