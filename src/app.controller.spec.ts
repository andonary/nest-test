import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('user', () => {
    it('should return an Array', () => {
      expect(appController.getUser()).toEqual([]);
    });
    it('should return an Array of one user', () => {
      const getRandomUser = (id: number = 1) => {
        const isExist = appService.getUser(id);
        if (!isExist) return getRandomUser(++id);
        return id
      };
      const existUser = appService.getUser(getRandomUser());
      expect(appController.getUser(existUser.id)).toMatchObject([existUser]);
    });
    it('should return an error', () => {
      const inventUser = (id: number = 1) => {
        const isExist = appService.getUser(id);
        if (isExist) return inventUser(++id);
        return id;
      };
      const phantomIdUser = inventUser();
      expect(() => appController.getUser(phantomIdUser)).toThrow();
    });
  })
});
