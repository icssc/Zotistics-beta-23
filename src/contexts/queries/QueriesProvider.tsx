import { ReactNode, useState } from "react";
import { QueriesContext } from "./queries";

import {
  Queries,
  QueryStates,
  QueryInput,
  Option,
  QueryState,
  QueryStateInput,
} from "src/types/index";

interface QueriesProviderProps {
  children: ReactNode;
  initialQueries: Queries;
}

function QueriesProvider({ children, initialQueries }: QueriesProviderProps) {
  const [queries, setQueries] = useState<Queries>(new Map(initialQueries));
  const [states, setStates] = useState<QueryStates>(new Map());
  const [selectedQuery, setSelectedQuery] = useState(
    Array.from(initialQueries.keys()).shift()
  );

  const updateQuery = (
    queryId: any,
    inputField: QueryInput,
    value: Option[]
  ) => {
    const newQueries = new Map(queries);
    const query = newQueries.get(queryId);
    if (query) {
      query[inputField] = value;
      newQueries.set(queryId, query);
      setQueries(newQueries);
    }
  };

  const updateQueryState = (
    queryId: any,
    inputField: QueryStateInput,
    value: boolean
  ) => {
    const newStates = new Map(states);
    const state: QueryState = newStates.get(queryId) ?? {};
    state[inputField] = value;
    newStates.set(queryId, state);
    setStates(newStates);
  };

  const addQuery = () => {
    const queryId = new Date().getTime();
    const newQueries = new Map(queries);
    newQueries.set(queryId, {
      instructors: [],
      quarters: [],
      years: [],
      departments: [],
      courseCode: [],
      classCode: [],
    });
    setQueries(newQueries);
    setSelectedQuery(queryId);
  };

  const removeQuery = (queryId: any) => {
    let newQueries = new Map(queries);
    newQueries.delete(queryId);
    if (newQueries.size === 0)
      newQueries = new Map([
        [
          new Date().getTime(),
          {
            instructors: [],
            quarters: [],
            years: [],
            departments: [],
            courseCode: [],
            classCode: [],
          },
        ],
      ]);
    const lastQueryId = Array.from(newQueries.keys()).pop();
    setQueries(newQueries);
    setSelectedQuery(lastQueryId);
  };

  return (
    <QueriesContext.Provider
      value={{
        queries: queries,
        states: states,
        updateQuery: updateQuery,
        updateQueryState: updateQueryState,
        addQuery: addQuery,
        removeQuery: removeQuery,
        selectedQuery: selectedQuery,
        setSelectedQuery: setSelectedQuery,
      }}
    >
      {children}
    </QueriesContext.Provider>
  );
}

export default QueriesProvider;
