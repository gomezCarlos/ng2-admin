import {Injectable} from '@angular/core'

@Injectable()
export class BaMsgCenterService {

  private _notifications = [
    {
      name: 'Alonso',
      text: 'Bienvenido Al Sistema de Gestion',
      time: '1 min ago'
    },
    
  ];

  private _messages = [
    {
      name: 'Alonso',
      text: 'Este mensaje es una prueba',
      time: '1 min ago'
    },
    
  ];

  public getMessages():Array<Object> {
    return this._messages;
  }

  public getNotifications():Array<Object> {
    return this._notifications;
  }
}
