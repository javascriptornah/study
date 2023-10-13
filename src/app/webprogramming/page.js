import PageRender from "../../../public/components/PageRender";
import {
  week1,
  week2,
  week3,
  week4,
  week5,
  week6,
  fullQuestionList,
} from "../../../public/data/webprogramming.js";
const WebProgramming = () => {
  return (
    <div>
      <PageRender
        weeksFetch={[week1, week2, week3, week4, week5, week6]}
        fullQuestionList={fullQuestionList}
        title="Web Programming"
      />
    </div>
  );
};

export default WebProgramming;
