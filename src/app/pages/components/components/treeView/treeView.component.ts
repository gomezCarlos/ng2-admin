import {Component, OnInit} from '@angular/core';
import {BranchyComponent, TreeModel,NodeEvent} from 'ng2-branchy';
import {BaCard} from '../../../../theme/components/baCard';
import { ProjectHal } from '../../../projects/components/Project';
import {UserService} from '../../../../shared/user.service';
import { ProjectService } from '../../../projects/components/project.service';
import {PhaseService} from '../../../phase/components/phase.service';
import {PhaseHal} from '../../../phase/components/Phase';
import {TaskHal} from '../../../tasks/components/Task';
import { PaginatedList } from '../../../../shared/PaginatedList.component';
import { PieChartService } from '../../../../shared/pieChart.service';

import { ActivatedRoute, Router } from '@angular/router';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'tree-view',
  directives: [BranchyComponent, BaCard],
  template: require('./treeView.html'),
providers:[UserService, ProjectService, PhaseService, PieChartService]
})

export class TreeView implements OnInit{
  project : ProjectHal;
  phase : PhaseHal;
  phases : PaginatedList<PhaseHal>
  tasks : PaginatedList<TaskHal>
  projects: PaginatedList<ProjectHal>
  task : TaskHal
  error : any;
  constructor(private projectService : ProjectService, private phaseService: PhaseService, private pieChartService: PieChartService, private router : Router) {
  }

  

  GetProject(){
    this.projectService.getAll().subscribe();
  }

  getTree(){
    this.pieChartService.getTree().subscribe(response => this.tree = response, error => this.error = error);
  }

  GetPhase(id : number){
   this.projectService.getPhases(id).subscribe(response => this.phases = response, error => this.error = error);
  }
  GetTask(id : number){
    this.phaseService.getTasks(id).subscribe(response => this.tasks = response, error => this.error = error);
  }

  ngOnInit(){
   this.GetProject();

   this.GetPhase(1);
   this.GetTask(0);
   this.getTree();
  }
  Converter(){
    let phase : Array<TreeModel> = new Array<TreeModel>() ; 
    for (let i of this.phases._embedded.phases) {
     let tree = { value : i.name}
     phase.push(tree);
     }

    return phase;
  }
  Convertertask(){
    let task : Array<TreeModel> = new Array<TreeModel>() ; 
    for (let i of this.tasks._embedded.tasks) {
     let tree = { value: i.name}
     task.push(tree);
     }

    return task;

  }  Converterproject(){
    let project : Array<TreeModel> = new Array<TreeModel>() ; 
    for (let i of this.projects._embedded.projects) {
     let tree = { value: i.name}
     project.push(tree);
     }

    return project;

  }

  GenerateTree():TreeModel{
    let tree: TreeModel;

    //tree = { value : this.Converterproject, children : this.Converterproject()  
    //}
    this.getTree();

  return tree;
  }
  private logEvent(e: NodeEvent): void {
    console.log(e.node.id);
    if(e.node.type =="project")
      this.router.navigate(['/pages/projects/view/'+e.node.id]);
    if(e.node.type =="phase")
      this.router.navigate(['/pages/phase/view/'+e.node.id]);
    if(e.node.type =="task")
      this.router.navigate(['/pages/tasks/view/'+e.node.id]);
    if(e.node.type =="job")
      this.router.navigate(['/pages/jobs/view/'+e.node.id]);
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


  private tree: TreeModel = {
    value: 'Proyectos',
    children: [
      {
        value: 'Viaticos',
        children: [
          {value: 'Levantamiento de informaciòn', children: [{value: "Historia del usuario"}]},
          {value: 'C++'},
          {value: 'C#'},
        ]
      },
      {
        value: 'Tickets',
        children: [
          {value: 'JavaScript'},
          {value: 'CoffeeScript'},
          {value: 'Lua'},
        ]
      }
    ]
  };

}
