import { HasIds } from './HasIds';
import { Hal } from './Hal';
import { HasLinks } from './HasLinks';
import { Page } from './Page';

export class PaginatedList<T extends Hal> implements HasLinks {

  //the basic link for a paginated response is self, others can be first, prev, next, and last
  _links: { self : { href: string }, [propName: string]: any; }
  //the embedded array of objects from the response
  _embedded: { [propName: string]: T[]; }
  //a connstructor with the page element of the paginated response
  constructor( page: Page ){}
}