import AnswersItem from "./AnswersItem";

// Component to render a list of answer items
export default function AnswersList({ answersList, onEdit }) {
  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} onEdit={() => onEdit(i)} />
      ))}
    </ul>
  );
}
