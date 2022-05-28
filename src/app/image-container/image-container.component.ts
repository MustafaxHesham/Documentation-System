import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectCharter } from 'src/Data/ProjectCharter';
import { RequirementAnalysis } from 'src/Data/RequirementAnalysis';
import { SoftwareDesign } from 'src/Data/SoftwareDesign';
import { DocumentationService } from '../Software-Documentation-Service/Software-Documentation.service';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {

  public Phases:(ProjectCharter | RequirementAnalysis | SoftwareDesign)[] = [];

  constructor(private _documentationService:DocumentationService
    ,private router:Router,
    private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.Phases = this._documentationService.Phases;
  }

  getRequirementAnalysisType(i:{}) {
    return <RequirementAnalysis>i;
  }
  
  getSoftwareDesignType(i:{}) {
    return <SoftwareDesign>i;
  }
  
  viewDetailsRA(i:RequirementAnalysis) {
    this.router.navigate(['image-details', "UseCase Image", i.useCaseImgURL], {relativeTo: this.route});
  }
  
  viewDetailsSD(imgName:string, imgURL:string) {
    this.router.navigate(['image-details', imgName, imgURL], {relativeTo: this.route});
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
