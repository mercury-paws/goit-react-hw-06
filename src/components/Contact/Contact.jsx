import css from "./Contact.module.css";

//екшен видалення контакту при кліку по кнопці видалення useDispatch

export default function Contact({ contact: { name, number, id } }) {
  return (
    <div className={css.contactInfo}>
      <div>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <button className={css.deleteBtn} type="button" onClick={deleteContact}>
        Delete
      </button>
    </div>
  );
}
