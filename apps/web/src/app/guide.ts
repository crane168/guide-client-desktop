export class Guide {
  constructor(
    public state1 = 'active',
    public state2 = 'inactive',
    public chinese: string,
    public english: string,
    public imgurl: string
  ) {}
}
