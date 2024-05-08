import ContactForm from "./ContactForm/ContactForm.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import { useSelector } from "react-redux";

export default function App() {
  const selectContacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const foundContact = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      <ContactList contacts={foundContact} />
    </div>
  );
}
