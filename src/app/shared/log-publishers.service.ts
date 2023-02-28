import { Injectable } from '@angular/core';

import { LogPublisher, LogConsole, LogLocalStorage } from "./log-publisher";

@Injectable({
  providedIn: 'root'
})
export class LogPublishersService {
  // Public properties
  publishers: LogPublisher[] = [];

  constructor() {
    this.buildPublishers();
  }
  
  buildPublishers(): void { // Constroi array de publishers
      // Cria instância da classe LogConsole
      this.publishers.push(new LogConsole());
      // Cria instância da classe LogLocalStorage
      this.publishers.push(new LogLocalStorage());
  }
}
