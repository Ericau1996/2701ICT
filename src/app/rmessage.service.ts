import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RmessageService {
  rmessages: string[] = [];

  add(rmessage: string) {
    this.rmessages.push(rmessage);
  }

  clear() {
    this.rmessages = [];
  }
}