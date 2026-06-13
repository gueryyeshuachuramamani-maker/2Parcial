import "./ExerciseInfo.css";

type Props = {
  title: string;
  subtitle: string;
};

const ExerciseInfo = ({ title, subtitle }: Props) => {
  return (
    <div className="info">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default ExerciseInfo;
