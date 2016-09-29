import {Project} from '../../../project'
import {ProjectService} from '../../../project'
import {phases} from '../../../phases'

@Component({
  selector: 'Project',
  directives: [BranchyComponent, BaCard],
  template: require('./dashboard.html'),
providers:[Project]
})

export class Project implements OnInit{
  project : ProjectHal;
  error : any;

  constructor(private projectService : ProjectService, private router : Router) {
  }

  GetProject(){
    this.projectService.find().subscribe(response => this.project = response, error => this.error = error);
  }

  ngOnInit(){
   this.GetProject();
  }
  Converter(){
    let phase : Array<Project> = new Array<Project>() ; 
    for (let i of this.phases._embedded.phases) {
     let tree = { value: i.name}
     phase.push(tree);
     }

    return phase;
  }

  GenerateProject():Project{
    let tree: Project; 
    tree = { value : this.project.name, children : this.Converter()}
  return tree;
  }
  private logEvent(e: NodeEvent): void {
    this.router.navigate(['/pages/dashboard/component/pieChart/pieChart.service.ts' + this.project.ids])
  }
  
  plainValueChanged(event, container:any){
    var el = this.getElement(container);
    el.innerText = event.startValue;
  }
getElement(data){
  if(typeof(data)=='string') {
    return document.getElementById(data);
  }
  if (typeof(data)=='object' && data instanceof Element){
    return data;
  }
  return null;
}


  private tree: Project = {
    value: 'Proyectos',
    children: [
      {
        value: 'Viaticos',
        children: [
          {value: 'Levantamiento de informaciòn', children: [{value: "Historia del usuario"}]},
          {value: 'C++'},
          {value: 'C#'},
        ]
      

}
