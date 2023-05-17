import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  fitness:any=[]
  searchkey:string = ''
  constructor(private api:ApiService){

  }
  
  
  ngOnInit(): void {
    
    
    this.api.getallfitness().subscribe(
      (result:any)=>{
        console.log(result);
        this.fitness=result
      },
      (result:any)=>{
        alert(result.error)
      }
    )
  }
  
  
}

