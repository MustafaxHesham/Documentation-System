import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectCharter } from 'src/Data/ProjectCharter';
import { DocumentationService } from '../Software-Documentation-Service/Software-Documentation.service';

@Component({
  selector: 'app-project-charter-create',
  templateUrl: './project-charter-create.component.html',
  styleUrls: ['./project-charter-create.component.css']
})
export class ProjectCharterCreateComponent implements OnInit {

  constructor(private _DocumentationService:DocumentationService,
              private route:ActivatedRoute,
              private router:Router) { }

    public projectCharter:ProjectCharter = new ProjectCharter(0,'',new Date(),new Date(),'','',0,'');
    public invalidEndDate:boolean = false;
    public invalidStartDate:boolean = false;
    public invalidFullDate:boolean = true;

    onSubmit(ProjectCharter:ProjectCharter, endDate:string, startDate:string) {
      ProjectCharter.endDate = new Date(endDate);
      ProjectCharter.startDate = new Date(startDate);
      this._DocumentationService.addPhase(ProjectCharter);
      console.log(this.projectCharter);
      this.router.navigate(['/sdlc']);
      this.disposeThisComponent();
    }
    
    disposeThisComponent() {
      this.router.navigate(['/sdlc']);
      const doc = document.getElementById('sp')!;
      doc.setAttribute("style", "display:none")!;
    }
    
    ngOnInit(): void {
    }

    validStartDateValue(value:any) {
      (value === '') ? this.invalidStartDate = true : this.invalidStartDate = false;
    }

    validEndDateValue(value:any) {
      (value === '') ? this.invalidEndDate = true : this.invalidEndDate = false;
    }

    validateEndDate(value:any, sd:any) {
      this.validEndDateValue(value);
      value = value.split('-');
      sd = sd.split('-');

      if (this.invalidEndDate === false && this.invalidStartDate === false) {
          if (value[0] < sd[0]) 
          this.invalidFullDate = true;
        
        else if (value[0] === sd[0]) {
            if (value[1] > sd[1])
              this.invalidFullDate = false;
            else if (value[1] === sd[1])
              (value[2] > sd[2]) ? this.invalidFullDate = false : this.invalidFullDate = true; 
            else
              this.invalidFullDate = true;
        }
        else
          this.invalidFullDate = false;
      }
    }

    validateStartDate(value:any, ed:any) {
     (value === '') ? this.invalidStartDate = true : this.invalidStartDate = false;
      value = value.split('-');
      ed = ed.split('-');

      if (this.invalidEndDate === false && this.invalidStartDate === false) {

          if (value[0] > ed[0])
            this.invalidFullDate = true;
          
          else if (value[0] === ed[0]) {
              if (value[1] < ed[1])
                  this.invalidFullDate = false;
              else if (value[1] === ed[1])
                  (value[2] < ed[2]) ? this.invalidFullDate = false : this.invalidFullDate = true; 
              else
                  this.invalidFullDate = true;
          }
          else
            this.invalidFullDate = false;

      }
    }
}
