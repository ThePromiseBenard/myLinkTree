import SlackLogo from "../assets/slack.svg";
import GitHubLogo from "../assets/GitHub.svg"

const IconsHolder = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      <a
        href="https://app.slack.com/client/T042F7V19Q8/D048JJNSUJH"
        target="_blank"
      >
        <img src={SlackLogo} alt="" />
      </a>
      <a href="https://github.com/ThePromiseBenard" target="_blank">
        <img src={GitHubLogo} alt="" />
      </a>
    </div>
  );
};

export default IconsHolder;
