import { useEffect, useState } from "react";
import { useApiActions } from "../../../../../api/useApiActions"
import { Stack } from "@mui/material";
import { TutoringRequest } from "./TutoringRequest";
import Loader from "../../../../../components/Loader";
import ErrorDialog from "../../../../../components/dialogs/ErrorDialog";

export const TutoringRequestsList = ({ student }) => {
    const { getTutoringRequests, getTutoringRequestsStudent } = useApiActions();
    const { loading, error, setError, action, loaded, response } = student ? getTutoringRequestsStudent : getTutoringRequests;

    const [tutoringRequests, setTutoringRequests] = useState([]);

    useEffect(() => {
        action();
    }, []);

    useEffect(() => {
        console.log(response);
        if (response) {
            setTutoringRequests(response);
        }
    }, [response]);

    if (loading) {
        return <Loader />
    }
    if (error) {
        return <ErrorDialog error={error} setError={setError} />;
    }

    return (
        <Stack direction="column" justifyContent="space-between" alignItems="center" spacing={2}>
            {tutoringRequests.map((r, i) => {
                return (
                    <TutoringRequest request={r} key={i} />
                );
            })}
        </Stack>
    );
}