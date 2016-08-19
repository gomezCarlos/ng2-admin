export class Page{

  //Define the basic contruct of a Hal response with pagination for the page object
  constructor(private size : number, private totalElements : number, private totalPages : number, private number : number){
    
  }

  getSize(){
  	return this.size;
  }

  setSize(size: number){
  	if(size>0)
  	  this.size = size;
  }

  getTotalElements(){
  	return this.totalElements;
  }

  setTotalElements( total : number){
  	this.totalElements = total;
  }

  getTotalPages(){
  	return this.totalPages;
  }

  setTotalPages(total : number){
  	this.totalPages = total;
  }

  getNumber(){
  	return this.number;
  }

  setNumber(num : number){
  	if(num>=0)
  	  this.number = num;
  }
}