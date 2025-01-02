import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { DataInterface } from '../Data-InterFace';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-free_movie',
  templateUrl: './free_movie.component.html',
  standalone : false
})
export class FreeMovieComponent implements OnInit 
{

  movies : DataInterface[] = []

  constructor(private _eventService: EventService) { }

  ngOnInit() 
  {
    this._eventService.getEvents().subscribe
      (
        (res: DataInterface[]) => this.movies = res,
        (err: HttpErrorResponse) => console.log(err)
      )
  }
}
