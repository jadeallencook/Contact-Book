export class Contact {
  name: string = '';
  email: string = '';
  phone: number = null;
  zipcode: number = null;
  category: string = '';
  notes: Array<{}> = [];
  owner: string = '';
  added: string = new Date().toDateString();
}
