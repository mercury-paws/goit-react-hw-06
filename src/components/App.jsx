import { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import initialContacts from "../contactList.json";
import { useSelector } from "react-redux";

export default function App() {
  const contacts = useSelector((state) => state.contacts.contacts);
  console.log(contacts);
  // const [filter, setFilter] = useState("");

  // const addContacts = (newContact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, newContact];
  //   });
  // };
  // const deleteContact = (contactId) => {
  //   setContacts((prevContacts) => {
  //     return prevContacts.filter((contact) => contact.id !== contactId);
  //   });
  // };
  // const foundContact = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>

      {/* <ContactForm />
      <SearchBox value={filter} /> */}
      <ContactList contacts={contacts} />
    </div>
  );
}
