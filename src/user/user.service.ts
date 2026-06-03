import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {
  //injecting service from other module
  //hello module must export helloservice
  //user module must import HellpModule
  constructor(private readonly helloService: HelloService) {}

  getAllUsers() {
    return [
      { id: 1, name: 'Steph' },
      { id: 2, name: 'Mark' },
      { id: 3, name: 'Nathan' },
    ];
  }

  getUserbyId(id: number) {
    const user = this.getAllUsers().find((user) => user.id === id);
    return user;
  }

  //this service employs HelloService and getUserbyId
  getWelcomeMessage(userId: number) {
    const user = this.getUserbyId(userId);

    if (!user) {
      return 'User not found!';
    }
    return this.helloService.getHelloWithName(user?.name);
  }
}
