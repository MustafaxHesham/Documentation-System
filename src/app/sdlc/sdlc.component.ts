import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-sdlc',
  templateUrl: './sdlc.component.html',
  styleUrls: ['./sdlc.component.css']
})
export class SDLCComponent implements OnInit {
  constructor(private router:Router, private route:ActivatedRoute) { 
    this.route.paramMap.subscribe( (e) => {
      this.showPhaseSelection = false;
      this.pickedPhase = 'default';
    });
  }
  public showPhaseSelection:boolean = false;
  public selectionValidity:boolean = true;
  public pickedPhase:string='default';

  public selectedPhaseInput:string = 'default'

  ngOnInit(): void {
      this.showPhaseSelection = false;
      this.pickedPhase ='default';
      this.selectedPhaseInput = 'default'
    }

  selectedPhase(phase:string) {
    console.log(phase)
    if (phase === 'PC')
    {
      this.selectionValidity = true;
      this.router.navigate(['project-charter-create'], {relativeTo: this.route});
    }
    else if (phase === 'RA') {
      this.selectionValidity = true;
      this.router.navigate(['requirement-analysis-create'], {relativeTo: this.route});
    }
    else if (phase === 'SD') {
      this.selectionValidity = true;
      this.router.navigate(['software-design-create'], {relativeTo: this.route});
    }
    else {
      this.router.navigate(['/sdlc']);
      this.selectionValidity = false;
    }
  }
  displayPhaseSelection() {
    this.router.navigate(['/sdlc']);
    const doc = document.getElementById('sp')! as HTMLSelectElement;
    doc.setAttribute("style", "display:block")!;
    doc.autofocus = true;
    this.pickedPhase = 'default';
  }
}
