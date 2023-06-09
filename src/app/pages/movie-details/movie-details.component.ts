import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  constructor(private service : MovieApiServiceService, private router : ActivatedRoute){}

  movieDetailsResult : any;
  movieVideoResult : any;
  movieCastResult : any;

  ngOnInit(): void {
    let getParmId = this.router.snapshot.paramMap.get('id')
    this.getMovie(getParmId)
    this.getVideo(getParmId)
    this.getCast(getParmId)
  }

  getMovie(id : any){
    this.service.getMovieDetails(id).subscribe((result) => {
      this.movieDetailsResult = result
    })
  }

  getVideo(id : any){
    this.service.getMovieVideo(id).subscribe((result) => {
      result.results.forEach((element : any) => {
        if(element.type === "Trailer"){
          this.movieVideoResult = element.key
          console.log(this.movieVideoResult, 'hi')
        }
      });
    })
  }

  getCast(id : any){
    this.service.getMovieCast(id).subscribe((result) => {
      this.movieCastResult = result.cast
    })
  }
}
