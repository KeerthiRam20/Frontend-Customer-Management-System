import axios from 'axios'
 class ContactService
{
   url="http://localhost:8080/contact/save"
  addContact(contact)
  {
      return axios.post(this.url,contact)
  }
}
 
export default new  ContactService