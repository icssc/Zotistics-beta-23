import type { NextPage } from "next";
import QueriesProvider from "src/contexts/queries/QueriesProvider";
import Nav from "src/components/Nav/Nav";
import Form from "src/components/Form/Form";
import QuerySelectorList from "src/components/QuerySelectorList/QuerySelectorList";
import Graph from "src/components/Graph/Graph";
import Image from 'next/image'
import dogPic from "src/assets/doggles.png"

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
      <Nav />
      <main className="mt-2 content">
        <Form />
        <QuerySelectorList />
        <div className="mt-8 h-96">
          <Graph />
        </div>
      </main>
      <div className="fixed left-0 bottom-0 text-[0]" >
        <Image src={dogPic} width={240} height={200} placeholder="blur"/>
      </div>
    </QueriesProvider>
  );
};

export default Home;
