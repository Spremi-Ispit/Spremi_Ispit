import { TutoringRequest } from "../../../entities/TutoringRequest";
import { mapUserToUserDTO } from "./mapUserToUserDTO";

export function mapTutoringRequestDTO(tutoringRequest: TutoringRequest) {
    let dto = {
        id: tutoringRequest.id,
        isFinished: tutoringRequest.isFinished,
        isCanceled: tutoringRequest.isCanceled,
        rating: tutoringRequest.rating,
        date: tutoringRequest.date,
        students: tutoringRequest.students.map((student) => mapUserToUserDTO(student)),
        subject: tutoringRequest.subject,
        tutor: tutoringRequest.tutor
    };
    return dto;
}