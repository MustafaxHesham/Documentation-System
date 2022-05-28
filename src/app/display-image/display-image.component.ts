import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-image',
  templateUrl: './display-image.component.html',
  styleUrls: ['./display-image.component.css']
})
export class DisplayImageComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }
  public imgPath:string = '';
  public imgName:string = '';
  ngOnInit(): void {
    this.route.paramMap.subscribe((e)=> {
     this.imgName = (e.get('imgName'))!;
     this.imgPath = (e.get('imgURL'))!;
    });
  }
  disposeThisComponent(){ 
    this.router.navigate(['all-files']);
  }
}
