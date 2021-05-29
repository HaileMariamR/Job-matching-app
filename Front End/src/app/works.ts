export class Works{
  id: string;
  jobtype: string;
  availability: string;
  status: string;
  constructor(id, jobtype, availability, status){
    this.id = id,
    this.jobtype = jobtype,
    this.availability = availability,
    this.status = status  
  }
}