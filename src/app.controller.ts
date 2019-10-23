import {BadRequestException, Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(idUser?: number) {
    if (isNaN(Number(idUser))) return [];
    const user = this.appService.getUser(idUser);
    if (!user) throw new BadRequestException('nope');
    return [user];
  }
}
