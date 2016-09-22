import {Component, OnInit} from '@angular/core';
import {BranchyComponent, TreeModel,NodeEvent} from 'ng2-branchy';
import {BaCard} from '../../../../theme/components/baCard';
import { ProjectHal } from '../../../projects/components/Project';
import {UserService} from '../../../../shared/user.service';
import { ProjectService } from '../../../projects/components/project.service';
import {PhaseService} from '../../../phase/components/phase.service';
import {PhaseHal} from '../../../phase/components/Phase';
import { PaginatedList } from '../../../../shared/PaginatedList.component';
import { ActivatedRoute, Router } from '@angular/router';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'tree-view',
  directives: [BranchyComponent, BaCard],
  template: require('./treeView.html'),
providers:[UserService, ProjectService, PhaseService]
})

export class TreeView implements OnInit{
  project : ProjectHal;
  phase : PhaseHal;
  phases : PaginatedList<PhaseHal>
  error : any;

  constructor(private projectService : ProjectService, private phaseService: PhaseService, private router : Router) {
  }

  GetProject(){
    this.projectService.find(1).subscribe(response => this.project = response, error => this.error = error);
  }
  GetPhase(){
   this.projectService.getPhases(1).subscribe(response => this.phases = response, error => this.error = error);
  }

  ngOnInit(){
   this.GetProject();

   this.GetPhase();
  }
  Converter(){
    let phase : Array<TreeModel> = new Array<TreeModel>() ; 
    for (let i of this.phases._embedded.phases) {
     let tree = { value: i.name}
     phase.push(tree);
     }

    return phase;
  }

  GenerateTree():TreeModel{
    let tree: TreeModel; 
    tree = { value : this.project.name, children : this.Converter()}
  return tree;
  }
  private logEvent(e: NodeEvent): void {
    this.router.navigate(['/pages/projects/view/' + this.project.ids])
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
