import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  
  getHello(): string {
    return 'Mental wellness Hello World!';
  }

  stripeEvent(req) {
    console.log(req.body)
  }
}
