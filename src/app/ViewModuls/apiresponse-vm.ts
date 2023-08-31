export interface APIResponseVM {
  success:boolean,
  data:any,
  message:string[],
  pageNO?:number,
  totalPages?:number,
  itemsPerPage?:number

}
