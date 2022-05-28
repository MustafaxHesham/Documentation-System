import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectCharter } from 'src/Data/ProjectCharter';
import { DocumentationService } from '../Software-Documentation-Service/Software-Documentation.service';

@Component({
  selector: 'app-project-charter-details',
  templateUrl: './project-charter-details.component.html',
  styleUrls: ['./project-charter-details.component.css']
})
export class ProjectCharterDetailsComponent implements OnInit {
  public projectCharter:ProjectCharter = new ProjectCharter(-1,
    '', new Date(0), new Date(0), '', '', -1, '');
  constructor(private route:ActivatedRoute, private router:Router,
    private _documentationService:DocumentationService) { }

    disposeThisComponent() {
      this.router.navigate(['/sdlc']);
      const doc = document.getElementById('sp')!;
      doc.setAttribute("style", "display:none")!;
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe((event) => {
      let id = parseInt(event.get('id')!);
      let pCharter:ProjectCharter = <ProjectCharter>this._documentationService.getPhase(id);
      console.log(pCharter);
      this.projectCharter = <ProjectCharter>this.projectCharter;
      this.projectCharter.Id = pCharter.Id
      this.projectCharter.projectManager = pCharter.projectManager;  
      this.projectCharter.Objectives = pCharter.Objectives;  
      this.projectCharter.budgetInformation = pCharter.budgetInformation;  
      this.projectCharter.projectTitle = pCharter.projectTitle;  
      this.projectCharter.projectScopeStatement = pCharter.projectScopeStatement;  
      this.projectCharter.startDate = pCharter.startDate;
      this.projectCharter.endDate = pCharter.endDate;
  })}

  editThisPhase(ID:Number) {
    this.router.navigate([`/sdlc/project-charter-edit/${ID}`]);
  }
  
  DeleteThisPhase(ID:Number) {
    this._documentationService.removePhase(ID);
    this.disposeThisComponent();
    this.router.navigate([`/sdlc`]);
  }
}
