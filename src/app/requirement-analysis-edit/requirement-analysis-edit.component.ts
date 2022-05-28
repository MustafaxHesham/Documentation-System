import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequirementAnalysis } from 'src/Data/RequirementAnalysis';
import { DocumentationService } from '../Software-Documentation-Service/Software-Documentation.service';

@Component({
  selector: 'app-requirement-analysis-edit',
  templateUrl: './requirement-analysis-edit.component.html',
  styleUrls: ['./requirement-analysis-edit.component.css']
})
export class RequirementAnalysisEditComponent implements OnInit {
  public showPhaseSelection:boolean = false;
  public requirementAnalysis:RequirementAnalysis = new RequirementAnalysis(-1,
    '','', '', '', '', '' );
  public imageSRC:string = '';
  constructor(private _documentationService:DocumentationService,
            private route:ActivatedRoute,
            private router:Router) {}

  getImagePath(images:any) {
    const image:File = <File>images[0];
    const fileReader = new FileReader();
    const oldImage = document.getElementById('oldImage')! as HTMLInputElement;
    fileReader.onload = (e) => {
      this.imageSRC = (e.target?.result!)?.toString();
      oldImage.src = this.imageSRC;
    }
    fileReader.readAsDataURL(image);
  }
          

  ngOnInit(): void {
  this.route.paramMap.subscribe((event) => {
    let id = parseInt(event.get('id')!);
    let pRequirments:RequirementAnalysis = <RequirementAnalysis>this._documentationService.getPhase(id);
    this.requirementAnalysis = <RequirementAnalysis>this.requirementAnalysis;
    this.requirementAnalysis.Id = pRequirments.Id
    this.requirementAnalysis.IntendedAudience = pRequirments.IntendedAudience;  
    this.requirementAnalysis.Introduction = pRequirments.Introduction;  
    this.requirementAnalysis.overallDesc = pRequirments.overallDesc;  
    this.requirementAnalysis.softwarePurpose = pRequirments.softwarePurpose;  
    this.requirementAnalysis.systemFeatures = pRequirments.systemFeatures;  
    this.requirementAnalysis.useCaseImgURL = pRequirments.useCaseImgURL;  
  })}

  disposeThisComponent() {
    this.router.navigate(['/sdlc']);
  }

  onSubmit(value:RequirementAnalysis) {
      console.log(value);
      console.log(this.imageSRC);
      if (this.imageSRC.length > 0)
        value.useCaseImgURL = this.imageSRC;
      else
        value.useCaseImgURL = this.requirementAnalysis.useCaseImgURL;
      this._documentationService.editPhase(value);
      this.router.navigate(['/sdlc']);
  }
}
