export class User {
  constructor(
    public firstName: string = "",
    public lastName: string = "",
    public email: string = "",
    public password: string = "",
    public street:string = "",
    public unit:string = "",
    public city:string = "",
    public state:string = "",
    public mood:boolean = true,
  ){}
}
