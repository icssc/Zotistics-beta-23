import { useContext } from "react";

import Sync from "~icons/ion/sync-outline.jsx";
import Close from "~icons/ion/close-outline.jsx";

import {QueriesContext} from "src/contexts/queries/queries";

interface QueryProps {
    name: string;
    queryId: any;
    color: string;
}

const Query = ({name, queryId, color}: QueryProps) => {
    const {states, removeQuery, selectedQuery, setSelectedQuery} =
        useContext(QueriesContext);

    return (
        <div className="grid grid-flow-row">
            <div
                className={
                    `grid grid-flow-col gap-1 items-center cursor-pointer py-2 pr-1 pl-2 text-sm rounded-lg dark:text-slate-100
            bg-[#f2f2f2] hover:bg-[#e7e7e7] dark:bg-[#171717] dark:hover:bg-[#363636] hover:font-medium
            ${(selectedQuery === queryId && "bg-[#e1e1e1] dark:bg-[#292929]")}`
                }
                onClick={() => {
                    setSelectedQuery(queryId);
                }}
            >
                {states.get(queryId)?.loading && (
                    <span className="animate-spin">
                      <Sync/>
                    </span>
                )}
                {name}
                <button
                    onClick={() => {
                        removeQuery(queryId);
                    }}
                >
                    <span className="text-base">
                      <Close/>
                    </span>
                </button>
            </div>
            {color &&
                <span
                    style={{
                        height: selectedQuery === queryId ? "3px" : "2px",
                        width: '97%',
                        backgroundColor: color,
                        borderRadius: '99px',
                        margin: '0.25rem auto 0',
                    }}
                />
            }
        </div>
    );
};

export default Query;
