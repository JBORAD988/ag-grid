import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ColDef, GridApi ,GridReadyEvent } from 'ag-grid-community';



@Component({
  selector: 'app-ag-grid-use',
  templateUrl: './ag-grid-use.component.html',
  styleUrls: ['./ag-grid-use.component.scss']
})
export class AgGridUseComponent implements OnInit{

  private griApi!:GridApi<any>; // Download as CSV Excel File

  userList :any []=[];

  public rowSelection: 'single'|'multiple' = 'multiple';

  editableq : boolean = true;

  // colDefs: ColDef[] = [
  //   {field:'id', headerName:'User ID',checkboxSelection:true , headerCheckboxSelection:true , cellRenderer:(item:any)=>{
  //     return "EMP-"+item.value
  //     }},  //this is use to formate data before rendering in to UI
  //   { field: "name" , headerName: 'Name' , filter:true},
  //   { field: "username", headerName: 'User Name'},
  //   { field: "email", headerName: 'E-Mail', editable: this.editableq }  // if editable is tru then we can edit
  // ];
  // { field: "email", headerName: 'E-Mail' } --field name is what the data comes in scripts like id , email (no letterst mistake void) headerName is whatever you want to set you can



  colDefs: ColDef[] = [
    {field:'id', headerName:'Employee ID',checkboxSelection:true , headerCheckboxSelection:true , cellRenderer:(item:any)=>{
        return "EMP-"+item.value
      }},
    { field: "name" , headerName: 'Name' , filter:true},
    { field: "department", headerName: 'Department' ,filter:true},
    { field: "email", headerName: 'E-Mail', editable: true },
    {field:"phone", headerName:'Phone'},
    {field:"salary",headerName:'Salary'}
  ];

  defaultColDef={
    flex:1,
    minWidth:100
  }


  constructor(private http : HttpClient) {

  }

  ngOnInit() {
    this.getUser()
  }



  // Download as CSV Excel File
  onBtnExport(){
    debugger
    this.griApi.exportDataAsCsv();

  }

  // Download as CSV Excel File
  onGridReady(event: GridReadyEvent<any>){
    this.griApi = event.api;
  }



//   getUser(){
//     this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
//       this.userList = res
//       console.log(this.userList)
//     })
// }

  getUser(){
    this.http.get('https://localhost:7009/api/Employees').subscribe((res:any)=>{
      this.userList = res
      console.log(this.userList)
    })
  }

}
