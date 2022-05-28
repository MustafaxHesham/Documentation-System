import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequirementAnalysis } from 'src/Data/RequirementAnalysis';
import { DocumentationService } from '../Software-Documentation-Service/Software-Documentation.service';

@Component({
  selector: 'app-requirement-analysis-create',
  templateUrl: './requirement-analysis-create.component.html',
  styleUrls: ['./requirement-analysis-create.component.css']
})

export class RequirementAnalysisCreateComponent implements OnInit {
    imageSrc : any;
    myForm : any;

  constructor(private _DocumentationService:DocumentationService,
    private route:ActivatedRoute,
    private router:Router) { }

    public requirementAnalysis:RequirementAnalysis = new RequirementAnalysis(0,'','','','','','');
    public imageSRC:string = '';
    
  onSubmit(RequirementAnalysis:RequirementAnalysis) {
    RequirementAnalysis.useCaseImgURL = this.imageSRC;
    this._DocumentationService.addPhase(RequirementAnalysis);
    console.log(this.requirementAnalysis);
    this.router.navigate(['/sdlc']);
    this.disposeThisComponent();
  }

  getImagePath(images:any) {
    const image:File = <File>images[0];
    const fileReader = new FileReader();
    fileReader.onload =  (e) => {
      this.imageSRC = (e.target?.result!)?.toString();
    }
    fileReader.readAsDataURL(image);
  }

  disposeThisComponent() {
    this.router.navigate(['/sdlc']);
    const doc = document.getElementById('sp')!;
    doc.setAttribute("style", "display:none")!;
  }

  ngOnInit(): void {
  }

}