import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import { DataInterface } from '../Data-InterFace';

@Component({
  selector: 'app-paid_movie',
  templateUrl: './paid_movie.component.html',
  standalone : false
})
export class PaidMovieComponent implements OnInit 
{  
  movies : DataInterface[] = []

  constructor(private _eventService: EventService,
              private _router: Router) { }

  ngOnInit() 
  {
    this._eventService.getSpecialEvents().subscribe
      (
        (res: DataInterface[]) => this.movies = res,
        (err: HttpErrorResponse) => 
        {
          if( err instanceof HttpErrorResponse ) 
          {
            if (err.status === 401) 
            {
              this._router.navigate(['/login'])
            }
            console.log("fuck you");
          }
        }
      )
  }
}
