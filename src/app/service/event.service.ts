import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iAPIResponse, IEvent } from '../model/model';
import {Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
   urlstring:string="https://freeapi.miniprojectideas.com/api/EventBooking/";
  getAllEvents()
  {
    return this.http.get<iAPIResponse>(this.urlstring+'GetAllEvents');
  }
  getEventById(eventId:number){
    return this.http.get<IEvent>(this.urlstring+"GetEventById?id="+eventId).pipe(
      map((item:any)=>{
      return item.data;
      })
    )
  }

  getEventByOrganizer(organizerId:number){
    return this.http.get<IEvent>(this.urlstring+"GetEventsByOrganizer?organizerId="+organizerId).pipe(
      map((item:any)=>{
      return item.data;
      })
    )
  }
}
