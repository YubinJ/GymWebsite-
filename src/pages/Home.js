import { Box } from "@chakra-ui/react";

import data from "../data/class.json";
import ClassInfo from "../components/ClassInfo";
import Intro from "../components/Intro";
import "../style/style.css";

export default function Home() {
  return (
    <div className="class-gener">
      <Intro />
      <Box my="5px" p="10px" bg="blue.200">
        クラス紹介
      </Box>
      {data.class.map((classItem) => {
        console.log(classItem);

        return (
          <ClassInfo
            className={classItem.className}
            Time={classItem.Time}
            Instructor={classItem.Instructor}
            PICURL={classItem.PICURL}
            key={classItem.id}
          />
        );
      })}
    </div>
  );
}
