import { StudyLevel } from "./StudyLevel";

export type ValueByFieldEntry = {
  valueFemale: number | undefined,
  valueMale: number | undefined,
  fieldOfStudy: string,
  shortName: string,
};

const ShortNames: Map<string, string> = new Map([
  ["Total, field of study", "All"],
  ["Education", "Education"],
  ["Visual and performing arts, and communications technologies", "Art"],
  ["Humanities", "Humanities"],
  ["Social and behavioural sciences and law", "Social Science"],
  ["Business, management and public administration", "Business"],
  ["Physical and life sciences and technologies", "Physical Science"],
  ["Mathematics, computer and information sciences", "Computer Science"],
  ["Architecture, engineering, and related trades", "Engineering"],
  ["Agriculture, natural resources and conservation", "Natural Resources"],
  ["Health and related fields", "Health"],
  ["Personal, protective and transportation services", "Services"],
  ["Other instructional programs", "Other"]
]);

const generateEntries = (filteredData: any[]) => {
  const resultMap: Map<string, ValueByFieldEntry> = new Map(
    filteredData.map((value) => {
      const fieldOfStudy = (value["Field of study"] as string);
      const postOpenBracket = fieldOfStudy.indexOf("[");
      const parsedFieldOfStudy = fieldOfStudy.slice(0, postOpenBracket > 0 ? postOpenBracket - 1 : fieldOfStudy.length);

      return [value["Field of study"], {
        fieldOfStudy: parsedFieldOfStudy,
        shortName: (ShortNames.get(parsedFieldOfStudy) ?? ""),
        valueFemale: undefined,
        valueMale: undefined,
      }]
    })
  );

  filteredData
    .forEach((value) => {
      const mapEntry = resultMap.get(value["Field of study"])
      if (value["Gender"] === "Woman") {
        if (mapEntry) {
          mapEntry.valueFemale = value["VALUE"];
        }
      } else if (value["Gender"] === "Man") {
        if (mapEntry) {
          mapEntry.valueMale = value["VALUE"];
        }
      }
    });

  return [...resultMap.values()];
};

const getMedianIncomeByFieldOfStudy = (data: any[], studyLevel: StudyLevel, year: number) => {
  const filteredData = data
    .filter((value) => {
      return value["Graduate statistics"] == "Median employment income"
        && value["Educational qualification"] == studyLevel
        && parseInt(value["REF_DATE"], 10) == year
    });

  return generateEntries(filteredData);
};

const getNumberReportingByFieldOfStudy = (data: any[], studyLevel: StudyLevel, year: number) => {
  const filteredData = data
    .filter((value) => {
      return value["Graduate statistics"] == "Number of graduates"
        && value["Educational qualification"] == studyLevel
        && parseInt(value["REF_DATE"], 10) == year
        && value["Field of study"] !== "Total, field of study"
    });

  return generateEntries(filteredData);
};

export { getMedianIncomeByFieldOfStudy, getNumberReportingByFieldOfStudy };
