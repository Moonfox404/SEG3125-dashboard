import { StudyLevel } from "./StudyLevel";

export type MedianIncomeByFieldEntry = { medianIncomeFemale: number | undefined, medianIncomeMale: number | undefined, fieldOfStudy: string};

const ShortNames: Map<string, string> = new Map([
  ["Total, field of study", "All"],
  ["Education", "Education"],
  ["Visual and performing arts, and communications technologies", "Art"],
  ["Humanities", "Humanities"],
  ["Social and behavioural sciences and law", "Social Science"],
  ["Business, management and public administration", "Business"],
  ["Physical and life sciences and technologies", "Physical Science"],
  ["Mathematics, computer and information sciences", "Math / Computer Science"],
  ["Architecture, engineering, and related trades", "Engineering"],
  ["Agriculture, natural resources and conservation", "Natural Resources"],
  ["Health and related fields", "Health"],
  ["Personal, protective and transportation services", "Services"],
  ["Other instructional programs", "Other"]
]);

const getMedianIncomeByFieldOfStudy = (data: any[], studyLevel: StudyLevel, year: number) => {
  const filteredData = data
    .filter((value) => {
      return value["Graduate statistics"] == "Median employment income" 
        && value["Educational qualification"] == studyLevel 
        && parseInt(value["REF_DATE"], 10) == year
    })
  
  const resultMap: Map<string, MedianIncomeByFieldEntry> = new Map(
    filteredData.map((value) => {
      const fieldOfStudy = (value["Field of study"] as string);
      const postOpenBracket = fieldOfStudy.indexOf("[");
      const parsedFieldOfStudy = fieldOfStudy.slice(0, postOpenBracket > 0 ? postOpenBracket - 1 : fieldOfStudy.length);

      return [value["Field of study"], {
        fieldOfStudy: parsedFieldOfStudy,
        shortName: ShortNames.get(parsedFieldOfStudy),
        medianIncomeFemale: undefined,
        medianIncomeMale: undefined,
      }]
    })
  );
  
  filteredData
    .forEach((value) => {
      const mapEntry = resultMap.get(value["Field of study"])
      if (value["Gender"] === "Woman") {
        if (mapEntry) {
          mapEntry.medianIncomeFemale = value["VALUE"];
        }
      } else if (value["Gender"] === "Man") {
        if (mapEntry) {
          mapEntry.medianIncomeMale = value["VALUE"];
        }
      }
    });

  return [...resultMap.values()];
}

export { getMedianIncomeByFieldOfStudy };
