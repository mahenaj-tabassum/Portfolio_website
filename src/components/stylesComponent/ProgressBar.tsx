import useScrollProgress from "../../hooks/useScrollProgress";

const ProgressBar = () => {
  const progress = useScrollProgress();

  return <div id="progress" style={{ width: `${progress}%` }} />;
};

export default ProgressBar;
