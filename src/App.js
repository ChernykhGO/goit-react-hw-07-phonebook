import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import "./App.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <h1>Phonebook</h1>
        {/* <ContactForm onSubmit={formSubmit} /> */}
        <ContactForm />
        <h2>Contacts</h2>

        <Filter
        //  value={filter} onChange={changeFilter}
        />
        <ContactList
        // contacts={visibleContacts()}
        // ondeleteContact={deleteContact}
        />
      </div>
    </div>
  );
}

// export default memo(App);
// const [contacts, setContacts] = useState(() => {
//   return JSON.parse(window.localStorage.getItem("contacts")) ?? "";
// });

// useEffect(() => {
//   window.localStorage.setItem("contacts", JSON.stringify(contacts));
// }, [contacts]);

// const formSubmit = (data) => {
//   // console.log(data);
//   const newContact = {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number,
//   };
//   // console.log(newContact);
//  (contacts) => [newContact, ...contacts]);
//   } else {
//     alert(`${data.name} is already in contact`);
//   }
// };

// const deleteContact = (contactId) => {
//   setContacts(contacts.filter((contact) => contact.id !== contactId));
// };

// const changeFilter = (event) => {
//   setFilter(event.currentTarget.value);
// };

// const visibleContacts = () => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };
