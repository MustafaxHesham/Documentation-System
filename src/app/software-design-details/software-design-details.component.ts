import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SoftwareDesign } from 'src/Data/SoftwareDesign';
import { DocumentationService } from '../Software-Documentation-Service/Software-Documentation.service';

@Component({
  selector: 'app-software-design-details',
  templateUrl: './software-design-details.component.html',
  styleUrls: ['./software-design-details.component.css']
})
export class SoftwareDesignDetailsComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute,
    private _documentationService:DocumentationService) { }
    public data:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((event) => {
      let id = parseInt(event.get('id')!);
      let dataa = <SoftwareDesign>this._documentationService.getPhase(id);
      this.data = dataa;
    })}

}
