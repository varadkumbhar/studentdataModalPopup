import { Component } from '@angular/core';

@Component({
  selector: 'app-student-app',
  templateUrl: './student-app.component.html',
  styleUrls: ['./student-app.component.css']
})
export class StudentAppComponent {
  studentArray: any[] = [];
  student: any = {
    studentId: 0,
    fullName: '',
    mobile: '',
    email: '',
    address: ''
  };
  isSelectAll:boolean=false;
  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('studentList');
    if (localData != null) {
      this.studentArray = JSON.parse(localData);
    }
  }

  onCheckAll(){
    for (let i = 0; i < this.studentArray.length; i++) {
     this.studentArray[i].isChecked=this.isSelectAll;
    }
  }

  onAddStudent() {
    debugger;
    const notNull = document.getElementById('studentModel');
    if (notNull != null) {
      notNull.style.display = 'block';
    }
    this.student = {
      studentId: 0,
      fullName: '',
      mobile: '',
      email: '',
      address: ''
    };
  }

  onCloseModal() {
    const notNull = document.getElementById('studentModel');
    if (notNull != null) {
      notNull.style.display = 'none';
    }
  }

  onEditStudent(stud: any) {
    debugger;
    this.onAddStudent();
    this.student = stud;


  }
  onDeleteStudent(id: number) {
    for (let i = 0; i < this.studentArray.length; i++) {
      debugger;
      if(this.studentArray[i].studentId==id){
        this.studentArray.splice(i,1);
      }
    }
    localStorage.setItem('studentList', JSON.stringify(this.studentArray));

  }

  saveStudent(stud: any) {
    debugger;
    this.student.studentId = this.studentArray.length + 1;
    this.studentArray.push(this.student);
    this.onCloseModal();
    localStorage.setItem('studentList', JSON.stringify(this.studentArray)); ``
    this.student = {
      studentId: 0,
      fullName: '',
      mobile: '',
      email: '',
      address: ''
    };

  }
  updateStudent() {
    const record = this.studentArray.find(m => m.studentId == this.student.studentId);
    record.fullName = this.student.fullName;
    localStorage.setItem('studentList', JSON.stringify(this.studentArray));
    this.onCloseModal();
  }

}
