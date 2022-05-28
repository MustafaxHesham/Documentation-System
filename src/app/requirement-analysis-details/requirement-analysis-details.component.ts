import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequirementAnalysis } from 'src/Data/RequirementAnalysis';
import { DocumentationService } from '../Software-Documentation-Service/Software-Documentation.service';

@Component({
  selector: 'app-requirement-analysis-details',
  templateUrl: './requirement-analysis-details.component.html',
  styleUrls: ['./requirement-analysis-details.component.css']
})
export class RequirementAnalysisDetailsComponent implements OnInit {
  public requirementAnalysis:RequirementAnalysis = new RequirementAnalysis(-1,
    '','','','','','');
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
      let pRequirments:RequirementAnalysis = <RequirementAnalysis>this._documentationService.getPhase(id);
      console.log(pRequirments);
      this.requirementAnalysis = <RequirementAnalysis>this.requirementAnalysis;
      this.requirementAnalysis.Id = pRequirments.Id
      this.requirementAnalysis.IntendedAudience = pRequirments.IntendedAudience;  
      this.requirementAnalysis.Introduction = pRequirments.Introduction;  
      this.requirementAnalysis.overallDesc = pRequirments.overallDesc;  
      this.requirementAnalysis.softwarePurpose = pRequirments.softwarePurpose;  
      this.requirementAnalysis.systemFeatures = pRequirments.systemFeatures;  
      this.requirementAnalysis.useCaseImgURL = pRequirments.useCaseImgURL;  
  })}
  editThisPhase(ID:Number) {
    this.router.navigate([`/sdlc/requirement-analysis-edit/${ID}`]);
  }
  DeleteThisPhase(ID:Number) {
    this._documentationService.removePhase(ID);
    this.router.navigate([`/sdlc`]);
  }
}
