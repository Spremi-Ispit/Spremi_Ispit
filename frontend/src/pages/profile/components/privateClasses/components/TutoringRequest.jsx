import { Box, Button, Card, Divider, IconButton, Paper, Stack, Typography } from "@mui/material";
import styled from "styled-components"
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

export const TutoringRequest = ({ request }) => {
    const { id, message, isFinished, isCanceled, rating, subject, student, tutor } = request;
    const subjectId = subject.id;
    const subjectName = subject.name;
    const isTutor = student ? true : false;
    const RightDiv = isFinished ? GreenDiv : isCanceled ? RedDiv : GrayDiv;
    const deleteRequest = () => {
        console.log("delete request");
    }

    const openRequest = () => {
        console.log("Navigate to request!");
    }

    return (
        <Card variant="elevation" sx={{ width: '100%' }}>
            <Stack direction="column" justifyContent="space-between" alignItems="stretch">
                <RightDiv>
                    <Stack my={0.5} mx={0.5} direction="row" justifyContent="space-between" alignItems="center">
                        <Typography mx={1.5} my={1.5} variant="h6">{subjectName}</Typography>
                        {isFinished ? <DoneIcon mx={1.5} /> : isCanceled ? <ClearIcon mx={1.5} /> : <QuestionMarkIcon mx={1.5} />}
                    </Stack>
                </RightDiv>

                <Divider />

                <Typography mx={1.5} my={1.5} variant="h7">{message}</Typography>

                <Divider />

                <Stack my={0.5} mx={0.5} direction="row" justifyContent="space-between" alignItems="center">
                    <Typography mx={1.5} my={1.5} variant="h6">{isTutor ? student.username : tutor.username}</Typography>
                    <Stack mx={1.5} direction="row" justifyContent="space-between" alignItems="right">
                        <IconButton onClick={deleteRequest}><DeleteIcon mx={1.5} /></IconButton>
                        <IconButton onClick={openRequest}><OpenInFullIcon mx={1.5} /></IconButton>
                    </Stack>
                </Stack>
            </Stack>
        </Card >
    );
}

const RedDiv = styled.div`
    background-color: #e65454;
    color: white;
`;
const GreenDiv = styled.div`
    background-color: #7fb454;
    color: white;
`;
const GrayDiv = styled.div`
    background-color: #a0a0a0;
    color: white;
`;