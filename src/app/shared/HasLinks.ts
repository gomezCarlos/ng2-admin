export interface HasLinks{

	_links: {self : { href: string}, [propName: string]: any;}
}