import services from '../../utils/services';

const mapTutorDTO = (tutor) => {
    let newTutor = {
        id: tutor.id,
        link: tutor.chatLink,
        name: tutor.user.username,
        description: tutor.message,
        price: {
            personally: tutor.price,
            group: tutor.group
        },
        rating: [],
        user: tutor.user,
        subjects: tutor.tutorSubjects.filter((subject) => subject.isEnabled).map((subject) => subject.subject),
    };
    console.log(newTutor);
    return newTutor;
}

export const getTutors = async () => {
    return services.get('/tutors/getTutors').then((tutors) => {
        return tutors.map((tutor) => mapTutorDTO(tutor));
    });
}

// {
//     id: 1,
//     price: 1500,
//     groupPrice: 700,
//     isEnabled: true,
//     message: 'SVE ZNAM dodji na cas',
//     chatLink: '',
//     user: { id: 1, username: 'Admin' },
//     tutorSubjects: [
//       {
//         id: 1,
//         isEnabled: true,
//         subject: { id: 26, name: 'Digitalna elektronika' }
//       },
//     ]
//   }

// {
//   id: 11,
//   link: '',
//   name: 'Jasmina',
//   description: 'Časovi iz Paralelnih sistema, zadaci i teorija!',
//   subjects: [subjects.ParalelniSistemi],
//   price: {
//     personally: 1000,
//     group: null,
//   },
//   rating: [],
// }