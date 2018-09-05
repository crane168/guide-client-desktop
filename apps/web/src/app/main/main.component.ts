import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Guide } from '../guide';
// import { readFile } from 'fs';

@Component({
  selector: 'guide-client-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
  // animations:[
  //   trigger('outState',[
  //     state('inactive',style({
  //       // transform:'scale(1)'
  //       visibility:'visible'
  //     })),
  //     state('active',style({
  //       // transform:'scale(1.3)'
  //       visibility:'hidden'
  //     })),
  //     transition('inactive=>active',animate('100ms ease-in')),
  //     transition('active=>inactive',animate('100ms ease-out'))
  //   ]),
  //   trigger('inState',[
  //     state('in',style({
  //       // transform:'scale(1)'
  //       visibility:'visible'
  //       transform:"scale(1.1)"
  //     })),
  //     state('out',style({
  //       // transform:'scale(1.3)'
  //       visibility:'hidden'
  //       transform:"scale(0)"
  //     })),
  //     transition('in=>out',animate('100ms ease-in')),
  //     transition('out=>in',animate('100ms ease-out'))
  //   ])
  // ]
})
export class MainComponent implements OnInit {
  hotTopic: any[];
  experience: Guide[];
  route: Guide[];
  ceng_display: string;
  circle_display: string;
  cengState: string = 'inactive';
  circleState: string = 'out';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('./assets/data.json').subscribe((res: any) => {
      console.log(res);
      this.hotTopic = res.hotTopic;
    });
    this.http.get('./assets/data.json').subscribe((res: any) => {
      this.experience = res.experience;
    });
    this.http.get('./assets/data.json').subscribe((res: any) => {
      this.route = res.route;
    });
    // fs.readFile("../../assets/data.json","utf8",(err,data)=>{
    //   if(err) throw error;
    //   this.hotTopic = JSON.parse(data).hotTopic;
    //   this.experience = JSON.parse(data).experience;
    //   this.route = JSON.parse(data).route;
    // })
  }
  // @HostListener('mouseover')
  // onMouseOver($event){
  //   $event.preventDefault;
  //   this.cengState = this.cengState='inactive' ? 'active' :'inactive';
  //   this.circleState = this.circleState = 'out' ? 'in' : 'out'
  //   console.log("进来")
  // }
  // @HostListener('mouseout')
  // onMouseLeave(){
  //   this.cengState = this.cengState='active' ? 'inactive' :'active';
  //   this.circleState = this.circleState='in' ? 'out' : 'in'
  //   console.log("出去")
  // }
}
