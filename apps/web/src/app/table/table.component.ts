import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'guide-client-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 @Input() user:any;
  constructor() { }

  ngOnInit() {

  }
  // Date.prototype.format = function(fmt) {
  //   var o = {
  //     "M+" : this.getMonth()+1,                 //月份
  //     "d+" : this.getDate(),                    //日
  //     "h+" : this.getHours(),                   //小时
  //     "m+" : this.getMinutes(),                 //分
  //     "s+" : this.getSeconds(),                 //秒
  //     "q+" : Math.floor((this.getMonth()+3)/3), //季度
  //     "S"  : this.getMilliseconds()             //毫秒
  //   };
  //   if(/(y+)/.test(fmt)) {
  //     fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  //   }
  //   for(var k in o) {
  //     if(new RegExp("("+ k +")").test(fmt)){
  //       fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  //     }
  //   }
  //   return fmt;
  // }
  // const time2 = new Date(user.dateForCar).format("yyyy-MM-dd");
}
