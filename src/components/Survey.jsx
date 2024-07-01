import { useState } from "react";
import AnswersList from "./AnswersList";
import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";

function Survey() {
  // State to control the form's visibility (open/close)
  const [open, setOpen] = useState(false);
  // State to store all submitted answers
  const [answers, setAnswers] = useState([]);
  // State to manage form inputs
  const [formState, setFormState] = useState({
    username: "",
    colour: "",
    timeSpent: [],
    review: "",
    email: "",
  });
  // State to keep track of the index of the answer being edited
  const [editIndex, setEditIndex] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormState((prev) => ({
        ...prev,
        timeSpent: checked
          ? [...prev.timeSpent, value]
          : prev.timeSpent.filter((item) => item !== value),
      }));
    } else {
      setFormState((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      setAnswers((prev) =>
        prev.map((answer, index) => (index === editIndex ? formState : answer))
      );
      setEditIndex(null);
    } else {
      setAnswers((prev) => [...prev, formState]);
    }
    // Reset the form to its initial state
    setFormState({
      username: "",
      colour: "",
      timeSpent: [],
      review: "",
      email: "",
    });
  };

  // Handle editing of an answer
  const handleEdit = (index) => {
    setFormState(answers[index]);
    setEditIndex(index);
    setOpen(true);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} onEdit={handleEdit} />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <RadioButtons
              onChange={handleChange}
              selectedValue={formState.colour}
            />
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <Checkboxes
              onChange={handleChange}
              selectedValues={formState.timeSpent}
            />
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={formState.review}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={formState.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Survey;
