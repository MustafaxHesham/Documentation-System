import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray , FormControl, FormGroup, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { SoftwareDesign } from 'src/Data/SoftwareDesign';
import { DocumentationService } from '../Software-Documentation-Service/Software-Documentation.service';

@Component({
  selector: 'app-software-design-create',
  templateUrl: './software-design-create.component.html',
  styleUrls: ['./software-design-create.component.css']
})
export class SoftwareDesignCreateComponent implements OnInit {
  constructor(private router:Router, private _documentationService:DocumentationService, private fb:FormBuilder) { }
  ngOnInit(): void {
  }

  get fileName() {
    return this.softwareDesignForm.get('fileName');
  }

  get imageFile() {
    return this.softwareDesignForm.get('imageFile');
  }

  get fileWithName() {
    return <FormArray>this.softwareDesignForm.get('fileWithName');
  }

  disposeThisComponent() {
    this.router.navigate(['/sdlc']);
    const doc = document.getElementById('sp')!;
    doc.setAttribute("style", "display:none")!;
  }


  public softwareDesignForm = this.fb.group({
    fileName: ['', Validators.required],
    imageFile: ['', Validators.required],
    fileWithName: this.fb.array([])
  });

  getPhaseGroup() : FormGroup { 
    return this.fb.group({
        fileName: ['', Validators.required],
        imageFile: ['', Validators.required]
    });
  }

  onSubmit(value:any) {
    let sd = new SoftwareDesign(0,[{imgName:value.fileName, imgURL: value.imageFile}]);
    for(let sdInArray of value.fileWithName)
      sd.imageWithName.push({imgName:sdInArray.fileName, imgURL: sdInArray.imageFile});
    this._documentationService.addPhase(sd);
    this.router.navigate(['/sdlc'])
    this.disposeThisComponent();
  }

  getImagePath(images:any) {
    const image:File = <File>images[0];
    const fileReader = new FileReader();
    fileReader.onload =  (e) => {
      this.imageFile?.patchValue((e.target?.result!)?.toString());
    }
    fileReader.readAsDataURL(image);
  }

  getImagePathArray(images:any, index:number) {
    const image:File = <File>images[0];
    const fileReader = new FileReader();
    fileReader.onload =  (e) => {
      this.fileWithName.controls[index].get('imageFile')!.patchValue((e.target?.result!)?.toString());
    }
    fileReader.readAsDataURL(image);
  }

  addNewDocument() {
    this.fileWithName.push(this.getPhaseGroup());
  }
}
