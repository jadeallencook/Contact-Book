export class Profile {
  name: string = '';
  email: string = '';
  phone: number = null;
  notes: Array<{}> = [];
  category: string = '';
  added: string = new Date().toDateString();
  favorites: Array<{}> = [];
  uid: string = '';
}
