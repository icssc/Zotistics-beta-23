import type { NextApiRequest, NextApiResponse } from "next";
import { request as graphqlRequest, gql } from "graphql-request";
import { Query } from "src/types/peterportal";

const query = gql`
  {
    grades {
      grade_distributions {
        course_offering {
          year
        }
      }
    }
  }
`;

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Cache-Control",
    `max-age=86400, s-maxage=${86400 * 7}, stale-while-revalidate`
  );

  graphqlRequest("https://api.peterportal.org/graphql/", query).then(
    (data: Query) => {
      const gradeDistributions = data.grades.grade_distributions;
      const years = gradeDistributions.map(
        (gradeDistribution) => gradeDistribution.course_offering.year
      );
      const allYears = Array.from(new Set(years));

      res.status(200).json(allYears);
    }
  );
};
