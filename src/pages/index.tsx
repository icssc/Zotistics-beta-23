import {useState} from "react";
import type { NextPage } from "next";
import QueriesProvider from "src/contexts/queries/QueriesProvider";
import Form from "src/components/Form/Form";
import QuerySelectorList from "src/components/QuerySelectorList/QuerySelectorList";
import Graph from "src/components/Graph/Graph";
import Toggle from "../components/Inputs/Toggle";

const Home: NextPage = () => {
  const [isToggleEnabled, setToggleEnabled] = useState(false)

  return (
    <QueriesProvider
      initialQueries={
        new Map([
          [
            new Date(),
            {
              instructors: [],
              quarters: [],
              years: [],
              departments: [],
              courseCode: [],
              classCode: [],
            },
          ],
        ])
      }
    >
      <main className="mt-1 content">
        <Form />
        <QuerySelectorList />
        <div className="mt-7 h-96">
          <Graph showRaw={isToggleEnabled} />
        </div>
        <div className="flex justify-end pt-3 pr-[60px] dark:text-neutral-300">
          <Toggle isEnabled={isToggleEnabled} setEnabled={setToggleEnabled} />
          <p className="pl-2">Raw Numbers</p>
        </div>
      </main>
    </QueriesProvider>
  );
};

export default Home;
