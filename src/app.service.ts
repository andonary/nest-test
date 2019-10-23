import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public BDD = [
    { id: 1, name: 'Joe'},
    { id: 2, name: 'Paul'},
    { id: 3, name: 'Marie'},
    { id: 4, name: 'Julie'},
    { id: 5, name: 'Richard'},
    { id: 6, name: 'Norbert'},
    { id: 7, name: 'Sandra'},
    { id: 8, name: 'Laura'}
  ];

  getUser(id?: number) {
    return this.BDD.find(user => user.id === id);
  }
}
