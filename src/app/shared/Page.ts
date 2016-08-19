export class Page{

  //Define the basic contruct of a Hal response with pagination for the page object
  constructor(public size : number, public totalElements : number, public totalPages : number, public number : number){
    
  }

}
