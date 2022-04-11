import React from "react";
import { styled } from "@mui/material/styles";
import {
    Container,
    Grid,
    Typography,
    Card,
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import VendorSearchBar from "../components/VendorSearchBar";
import VendorMenu from "../components/VendorMenu";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const Input = styled("input")({
    display: "none",
});

function createRow(trans, date, tot) {
    return { trans, date, tot };
}

const rows = [
    createRow("Upload 1", "14/02/2021", "5"),
    createRow("Upload 2", "14/02/2021", "4"),
    createRow("Upload 3", "14/02/2021", "6"),
    createRow("Upload 4", "14/02/2021", "3"),
    createRow("Upload 5", "14/02/2021", "7"),
    createRow("Upload 6", "14/02/2021", "5"),
    createRow("Upload 7", "14/02/2021", "9"),
    createRow("Upload 8", "14/02/2021", "5"),
    createRow("Upload 9", "14/02/2021", "5"),
    createRow("Upload 10", "14/02/2021", "5"),
    createRow("Upload 11", "14/02/2021", "5"),
    createRow("Upload 12", "14/02/2021", "5"),
];

const BulkUpload = () => {
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
                    <Grid
                        item
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                        }}
                        md={3}
                    >
                        <VendorMenu />
                    </Grid>
                    <Grid item xs={4} sm={8} md={9}>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                p: 4,
                                textAlign: "left",
                            }}
                        >
                            <Box
                                sx={{
                                    textAlign: "left",
                                    width: "95%",
                                    height: "10%",
                                    backgroundColor: "primary.contrastText",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    p: 2,
                                    mb: 2,
                                    borderRadius: 2,
                                }}
                            >
                                <Typography
                                    sx={{ color: "primary.main" }}
                                    variant="h6"
                                >
                                    Products upload
                                </Typography>
                            </Box>
                            <Box sx={{ width: "100%" }}>
                                <Grid
                                    container
                                    width="100%"
                                    spacing={{ xs: 1, md: 1 }}
                                    columns={{ xs: 6, sm: 8, md: 12 }}
                                >
                                    <Grid item xs={6} sm={8} md={6}>
                                        <Box
                                            sx={{
                                                p: 1,
                                                m: 1,
                                                columnGap: 3,
                                                rowGap: 1,
                                                width: "100%",
                                            }}
                                        >
                                            <label htmlFor="contained-button-file">
                                                <Input
                                                    accept="image/*"
                                                    id="contained-button-file"
                                                    multiple
                                                    type="file"
                                                />
                                                <Button
                                                    size="large"
                                                    variant="contained"
                                                    color="secondary"
                                                    component="span"
                                                    startIcon={
                                                        <DriveFolderUploadIcon />
                                                    }
                                                >
                                                    Bulk Product Upload
                                                </Button>
                                            </label>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} sm={8} md={6}>
                                        <Box
                                            sx={{
                                                p: 1,
                                                m: 1,
                                                columnGap: 3,
                                                rowGap: 1,
                                            }}
                                        >
                                            <label htmlFor="contained-button-file">
                                                <Input
                                                    accept="image/*"
                                                    id="contained-button-file"
                                                    multiple
                                                    type="file"
                                                />
                                                <Button
                                                    size="large"
                                                    variant="outlined"
                                                    color="secondary"
                                                    component="span"
                                                    startIcon={
                                                        <UploadFileIcon />
                                                    }
                                                >
                                                    Single Product Upload
                                                </Button>
                                            </label>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box
                                sx={{
                                    textAlign: "left",
                                    width: "98%",
                                    height: "10%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    p: 2,
                                    mb: 2,
                                    borderRadius: 2,
                                }}
                            >
                                <TableContainer component={Paper}>
                                    <Table aria-label="spanning table">
                                        <TableHead>
                                            <TableRow
                                                sx={{
                                                    backgroundColor:
                                                        "secondary.main",
                                                }}
                                            >
                                                <TableCell>
                                                    <Typography
                                                        variant="h6"
                                                        color="white"
                                                        sx={{
                                                            textAlign: "left",
                                                        }}
                                                    >
                                                        Uploads
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Typography
                                                        variant="h6"
                                                        color="white"
                                                    >
                                                        Date
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Typography
                                                        variant="h6"
                                                        color="white"
                                                    >
                                                        Total products
                                                    </Typography>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.trans}>
                                                    <TableCell>
                                                        <Typography
                                                            variant="body1"
                                                            sx={{
                                                                mb: 1,
                                                            }}
                                                        >
                                                            {row.trans}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.date}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {row.tot}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default BulkUpload;
