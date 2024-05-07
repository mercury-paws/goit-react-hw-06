import css from "./Contact.module.css";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div className={css.contactInfo}>
      <div>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
