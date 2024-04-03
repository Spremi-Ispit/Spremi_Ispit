import { Card, Divider, Grid, Stack, Typography } from "@mui/material";
import styled from 'styled-components';
import { useApiActions } from "../../../../api/useApiActions";
import { useEffect, useState } from "react";
import Loader from "../../../../components/Loader";
import ErrorDialog from "../../../../components/dialogs/ErrorDialog";
import { TutoringRequestsList } from "./components/TutoringRequestsList";
import { useScreens, screens } from "../../../../utils/useScreens";


const PrivateClasses = () => {
    const screen = useScreens();
    return (
        <Grid px={5} container justifyContent="center" columns={screen < screens.tablet * 1.25 ? 1 : 2} spacing={2}>
            <Grid item xs={1}>
                <Typography mx={1.5} my={1.5} variant="h5">Moji zahtevi</Typography>
                <StyledDivider />
                <TutoringRequestsList student={true} />

            </Grid>
            <Grid item xs={1}>
                <Typography mx={1.5} my={1.5} variant="h5">Zahtevi za mene</Typography>
                <StyledDivider />
                <TutoringRequestsList student={false} />
            </Grid>
        </Grid>
    );
};

const StyledDivider = styled(Divider)`
  && {
    max-width: 650px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export default PrivateClasses;