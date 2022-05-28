import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectCharter } from 'src/Data/ProjectCharter';
import { DocumentationService } from '../Software-Documentation-Service/Software-Documentation.service';

@Component({
  selector: 'app-project-charter-edit',
  templateUrl: './project-charter-edit.component.html',
  styleUrls: ['./project-charter-edit.component.css']
})
export class ProjectCharterEditComponent implements OnInit {

  public showPhaseSelection:boolean = false;
  public projectCharter:ProjectCharter = new ProjectCharter(-1,
    '', new Date(), new Date(), '', '', -1, '');
  constructor(private _documentationService:DocumentationService,
            private route:ActivatedRoute,
            private router:Router) {
              
             }

  ngOnInit(): void {
    this.route.paramMap.subscribe((event) => {
      let id = parseInt(event.get('id')!);
      let pCharter:ProjectCharter = <ProjectCharter>this._documentationService.getPhase(id);
      this.projectCharter = <ProjectCharter>this.projectCharter;
      this.projectCharter.Id = pCharter.Id
      this.projectCharter.projectManager = pCharter.projectManager;  
      this.projectCharter.Objectives = pCharter.Objectives;  
      this.projectCharter.budgetInformation = pCharter.budgetInformation;  
      this.projectCharter.projectTitle = pCharter.projectTitle;  
      this.projectCharter.projectScopeStatement = pCharter.projectScopeStatement;  
      this.projectCharter.startDate = pCharter.startDate;
      this.projectCharter.endDate = pCharter.endDate;
    })
  }
  onSubmit(value:ProjectCharter) {
    this._documentationService.editPhase(value);
    this.router.navigate(['/sdlc']);
  }
}
