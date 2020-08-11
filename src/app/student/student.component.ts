import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  sizeImage:200;

  public ketqua:number =0;

  hinh2(e){
    e.srcElement.src="https://gamek.mediacdn.vn/2018/9/20/maxresdefault-1537411428021128449368.jpg";
  }

  hinh1(e){
    e.srcElement.src="https://gamek.mediacdn.vn/2017/photo-1-1500891938951.jpg";
  }

  cong(){
    this.ketqua +=1;
  }


  tru(){
    this.ketqua-=1;
  }

  hinh: string ="https://gamek.mediacdn.vn/2017/photo-1-1500891938951.jpg";

  constructor() { }

 onChange(value){
    this.sizeImage=value;
  }

  ngOnInit(): void {
  }

}
