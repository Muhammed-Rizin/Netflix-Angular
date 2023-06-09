import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private service : MovieApiServiceService){}

  ngOnInit(): void {
      this.bannerData()
      this.trendingMovies()
      this.actionMovies()
      this.animationMovies()
      this.advantureMovie()
      this.comedyMovies()
      this.documentryMovies()
      this.sciFiMovies()
      this.thrillerMovies()
  }

  bannerResult : any = []
  trendingMovieResult : any = []
  actionMovieResult : any = []
  advantureMovieResult : any = []
  animationMovieResult : any = []
  comedyMovieResult : any = []
  documentryMovieResult : any = []
  sci_fiMovieResult : any = []
  thrillerMovieResult : any = []

  // Banner APi Data
  bannerData(){
    this.service.bannerApiData().subscribe((result) => {
      this.bannerResult = result.results
    })
  }
  
  // Trending Movies 
  trendingMovies(){
    this.service.trendingMoviesApiData().subscribe((result) => {
      this.trendingMovieResult = result.results
    })
  }

  // Action Movies
  actionMovies(){
    this.service.fetchActionMovie().subscribe((result) => {
      this.actionMovieResult = result.results
    })
  }

  // Advanture
  advantureMovie(){
    this.service.fetchAdvantureMovie().subscribe((result) => {
      this.advantureMovieResult = result.results
    })
  }

  // Animation 
  animationMovies(){
    this.service.fetchAnimationMovie().subscribe((result) => {
      this.animationMovieResult = result.results
    })
  }
  // Comedy 
  comedyMovies(){
    this.service.fetchComedyMovie().subscribe((result) => {
      this.comedyMovieResult= result.results
    })
  }
  // Documentry 
  documentryMovies(){
    this.service.fetchDocumentryMovie().subscribe((result) => {
      this.documentryMovieResult= result.results
    })
  }
  // Sci-fi 
  sciFiMovies(){
    this.service.fetchSciFiMovie().subscribe((result) => {
      this.sci_fiMovieResult= result.results
    })
  }
  // Thriller 
  thrillerMovies(){
    this.service.fetchThrillerMovie().subscribe((result) => {
      this.thrillerMovieResult= result.results
    })
  }
}
