export type Queries = Map<number, Query>;
export type QueryStates = Map<number, QueryState>;

export interface FilteredData {
  year: string,
  quarter: string,
  department: string,
  number: string,
  title: string,
  instructor: string,
  code: number,
  average_gpa: string
}

export interface Query {
  instructors: Option[];
  quarters: Option[];
  years: Option[];
  departments: Option[];
  courseNumber: Option[];
  courseCode: Option[];
  division: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface QueryState {
  loading?: boolean;
}

export type QueryInput = keyof Query;

export type QueryStateInput = keyof QueryState;

export type RemoveQuery = (queryName: string) => void;
