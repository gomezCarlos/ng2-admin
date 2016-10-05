import {Component, ViewEncapsulation} from '@angular/core';

import {BaFullCalendar} from '../../../../theme/components';
import {CalendarService} from '../../../../shared/calendar.service';


@Component({
  selector: 'calendar',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./calendar.scss')],
  template: require('./calendar.html'),
  directives: [BaFullCalendar],
  providers: [CalendarService]
})
export class Calendar {


  public calendarConfiguration:any;
  private _calendar:Object;

  constructor(private _calendarService:CalendarService) {
    this.calendarConfiguration = this._calendarService.getDataOriginal();
    this.calendarConfiguration.select = (start, end) => this._onSelect(start, end);
  }

loadEvents(){
    this._calendarService.getEvents().subscribe(response=>{
      this._calendar.events = response;
      
    },error=>{},()=>{
      
    });
  }

  public onCalendarReady(calendar):void {
    this._calendar = calendar;
    //this.loadEvents();
  }

  private _onSelect(start, end):void {

    if (this._calendar != null) {
      var title = prompt('Event Title:');
      var eventData;
      if (title) {
        eventData = {
          title: title,
          start: start,
          end: end
        };
        jQuery(this._calendar).fullCalendar('renderEvent', eventData, true);
      }
      jQuery(this._calendar).fullCalendar('unselect');
    }
  }
}
