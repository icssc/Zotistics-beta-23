import type { NextPage } from "next";
import QueriesProvider from "src/contexts/queries/QueriesProvider";
import Form from "src/components/Form/Form";
import QuerySelectorList from "src/components/QuerySelectorList/QuerySelectorList";
import Graph from "src/components/Graph/Graph";

const Home: NextPage = () => {
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
          <Graph />
        </div>
      </main>
    </QueriesProvider>
  );
};

export default Home;
