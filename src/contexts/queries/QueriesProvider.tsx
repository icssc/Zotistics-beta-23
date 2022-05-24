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
    initialQueries.keys().next().value
  );

  const updateQuery = (
    queryId: any,
    inputField: QueryInput,
    value: Option[] | string
  ) => {
    const newQueries = new Map(queries);
    const query = newQueries.get(queryId);
    if (query) {
      // @ts-ignore
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
    const newQueries = new Map(queries);
    newQueries.set(new Date(), {
      instructors: [],
      quarters: [],
      years: [],
      departments: [],
      courseCode: [],
      classCode: [],
      division: ""
    });
    setQueries(newQueries);
  };

  const removeQuery = (queryId: any) => {
    const newQueries = new Map(queries);
    newQueries.delete(queryId);
    setQueries(newQueries);
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
