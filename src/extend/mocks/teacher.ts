import { faker } from "@faker-js/faker";

export class TeacherMockDataGenerator {
  generatFakeTeacherData = (count: number) => {
    const teachers = [];
    while (count !== 0) {
      const randomCard = faker.helpers.createCard();
      const { website, company, accountHistory, posts, ...card } = randomCard;

      teachers.push(card);
      count--;
    }
    return teachers;
  };
}

/* Generate Students data */
// console.log(generatFakeStudents(10))
