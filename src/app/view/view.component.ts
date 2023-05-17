import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{



  fitnessId:string=""
  fitness: any={}

  constructor(private viewActivatedRoute:ActivatedRoute,private api:ApiService ){

  }
  ngOnInit(): void {
    // to get path parameter from route
    this.viewActivatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.fitnessId = data.id
      
    })

    // call view product
    this.api.viewfitness(this.fitnessId).subscribe((result:any)=>{
      console.log(result);
      this.fitness=result
      
    },
    (result:any)=>{
      alert(result.error)
    }
    )
  }





}
