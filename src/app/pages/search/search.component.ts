import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private service : MovieApiServiceService){}

  searchResult : any = []
  searchFrom = new FormGroup({
    'movieName' : new FormControl(null)
  })

  submitForm(){
    this.service.getSearchMovie(this.searchFrom.value).subscribe((result) => {
      this.searchResult = result.results
    })
  }

}


