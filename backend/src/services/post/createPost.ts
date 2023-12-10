// @ts-nocheck
import { Post } from '../../entities/Post';
import { User } from '../../entities/User';
import { ExaminationPeriod } from '../../entities/filters/ExaminationPeriod';
import { Subject } from '../../entities/filters/Subject';
import { Type } from '../../entities/filters/Type';
import { YearOfExam } from '../../entities/filters/YearOfExam';
import response from '../../utils/response';

export const createPost = async (req) => {
  const { userID, post } = req.body;
  const { title, text, filters } = post;

  const user = await User.findOne({
    where: { id: userID }
  });

  const filter = async (entity, name) => {
    if (name) {
      return await entity.findOne({
        where: { name }
      });
    }

    return null;
  };

  const subject = await filter(Subject, filters.subject);

  const type = await filter(Type, filters.type);

  const yearOfExam = await filter(YearOfExam, filters.yearOfExam);

  const examinationPeriod = await filter(
    ExaminationPeriod,
    filters.examinationPeriod
  );

  if (user) {
    const postEntity = Post.create({
      title,
      text,
      postedBy: user,
      subject,
      type,
      yearOfExam,
      examinationPeriod
    });
    await postEntity.save();
    return response.OK(postEntity.id);
  } else {
    return response.BAD_REQUEST(`Bad request`);
  }
};
