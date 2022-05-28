import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectCharter } from 'src/Data/ProjectCharter';
import { RequirementAnalysis } from 'src/Data/RequirementAnalysis';
import { SoftwareDesign } from 'src/Data/SoftwareDesign';
import { DocumentationService } from '../Software-Documentation-Service/Software-Documentation.service';

@Component({
  selector: 'app-all-phases-overview',
  templateUrl: './all-phases-overview.component.html',
  styleUrls: ['./all-phases-overview.component.css']
})
export class AllPhasesOverviewComponent implements OnInit {

  public Phases:(ProjectCharter | RequirementAnalysis | SoftwareDesign)[] = [];

  constructor(private _documentationService:DocumentationService
    ,private router:Router,
    private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.Phases = this._documentationService.Phases;
  }

  getProjectCharterType(i:{}) {
    return <ProjectCharter>i;
  }

  getRequirementAnalysisType(i:{}) {
    return <RequirementAnalysis>i;
  }
  
  getSoftwareDesignType(i:{}) {
    return <SoftwareDesign>i;
  }
  
  viewDetailsPC(Id:Number) {
    this.router.navigate(['project-charter-details', Id], {relativeTo: this.route});
  }
  
  viewDetailsRA(Id:Number) {
    this.router.navigate(['requirement-analysis-details', Id], {relativeTo: this.route});
  }
  
  viewDetailsSD(Id:Number) {
    this.router.navigate(['software-design-details', Id], {relativeTo: this.route});
  }

  checkInstance(instance:any) : string {
    if (instance.projectTitle !== undefined)
      return 'PC';
    else if (instance.softwarePurpose !== undefined)
      return 'RA';
    else if (instance.imageWithName !== undefined )
      return 'SD';
    else
      return 'Error';
  }
}
