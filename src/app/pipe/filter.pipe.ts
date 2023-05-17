import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allfitness:any[],searchKey:string,propertyname:string): any[] {
const result:any=[]
if(!allfitness||searchKey==''||propertyname==''){
  return allfitness
}
allfitness.forEach((gym:any)=>{
  if(gym[propertyname].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
    result.push(gym)
  }
})

    return result;
  }

}
