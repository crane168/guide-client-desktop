import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit,Output,EventEmitter } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef,MatBottomSheetRef,MAT_BOTTOM_SHEET_DATA} from "@angular/material";

@Component({
  selector: 'guide-client-modify',
  templateUrl: './modify.web.component.html',
  styleUrls: ['./modify.web.component.css']
})
export class ModifyComponent implements OnInit {
  // @Output() sendData: new EventEmitter();
  modifyForm:FormGroup;
  constructor(
    public bottomSheetRef: MatBottomSheetRef<ModifyComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    public fb:FormBuilder
  ) { }

  ngOnInit() {
    this.modifyForm=this.fb.group({
      csd:[this.data.user.home,Validators.required],
      chengshi:[this.data.user.city,Validators.required],
      jzd:[this.data.user.work,Validators.required],
      xueli:[this.data.user.education,Validators.required]
    })
    // this.bottomSheetRef.updatePosition({ right: '0px', left: '0px',bottom:'0px' });
  }
  onSubmit(ev:Event){
    ev.preventDefault();
    // if (!valid) {
    //   return;
    // }
    this.bottomSheetRef.dismiss({"task": {
      home: this.modifyForm.value.csd,
      city: this.modifyForm.value.chengshi,
      work: this.modifyForm.value.jzd,
      education: this.modifyForm.value.xueli,
    }});
    console.log(this.modifyForm.value)
  }
  onNoClick(): void {
    this.bottomSheetRef.dismiss();
  }


}

