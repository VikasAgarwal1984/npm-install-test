import {TeacherMockDataGenerator} from "./mocks/teacher";

// and so on
export class Routes {
  getRoutes() {
    const obj = new TeacherMockDataGenerator();
    return {
      relativeUrl: 'teachers',
      data: obj.generatFakeTeacherData(100)
    };
  }
}
