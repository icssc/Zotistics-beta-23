import { Dispatch, SetStateAction } from "react";

export type Queries = Map<any, Query>;
export type QueryStates = Map<any, QueryState>;

export interface Query {
  instructors: Option[];
  quarters: Option[];
  years: Option[];
  departments: Option[];
  courseCode: Option[];
  classCode: Option[];
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
