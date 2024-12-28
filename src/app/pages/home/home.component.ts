import { Component, inject, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { iAPIResponse, IEvent } from '../../model/model';
import { RouterLink } from '@angular/router';
import { map, filter,Observable} from 'rxjs'
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  eventList:IEvent[]=[];
  eventService=inject(EventService)
  ngOnInit():void{
    this.getAllEvents();
  // rxjs objervable and subscriber and observer
  // const observaleObj=new Observable(resv=>{
  //   setTimeout(()=>{
  //     resv.next("objaravable object call");
  //     resv.next("objaravable object call 1");
  //     resv.next("objaravable object call 2");
  //     resv.next("objaravable object call 3");
  //   },1000);
  // }) 
  // this.muSub=observaleObj.pipe(
  //   filter(res=>res==""),
  //   map(res=>'rxjs'+res)
  // ).subscribe(result=> console.log(result))

  }
  getAllEvents()
  {
    this.eventService.getAllEvents().subscribe((res:iAPIResponse)=>{
        this.eventList=res.data.slice().reverse();
        this.eventList.slice().reverse();
    });
  }
}
