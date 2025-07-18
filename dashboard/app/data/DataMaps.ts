import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBriefcase, faCar, faChalkboardTeacher, faCircleNotch, faCode, faEllipsis, faHeartPulse, faHelmetSafety, faPaintBrush, faRocket, faScaleBalanced, faUsers, faWheatAwn } from "@fortawesome/free-solid-svg-icons";

export type ValueByFieldEntry = {
  valueFemale: number | undefined,
  valueMale: number | undefined,
  fieldOfStudy: FieldOfStudy,
  shortName: string,
  icon: IconDefinition
};

export type ValueByYearEntry = {
  valueFemale: number | undefined,
  valueMale: number | undefined,
  year: number,
};

export type StudyLevel = "Career, technical or professional training diploma" | "Undergraduate degree" | "Master's degree" | "Doctoral degree";

export type FieldOfStudy = "Total, field of study"
  | "Education"
  | "Visual and performing arts, and communications technologies"
  | "Humanities"
  | "Social and behavioural sciences and law"
  | "Business, management and public administration"
  | "Physical and life sciences and technologies"
  | "Mathematics, computer and information sciences"
  | "Architecture, engineering, and related trades"
  | "Agriculture, natural resources and conservation"
  | "Health and related fields"
  | "Personal, protective and transportation services"
  | "Other instructional programs";

const ShortNames: Map<FieldOfStudy, string> = new Map([
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

const Icons: Map<FieldOfStudy, IconDefinition> = new Map([
  ["Total, field of study", faCircleNotch],
  ["Education", faChalkboardTeacher],
  ["Visual and performing arts, and communications technologies", faPaintBrush],
  ["Humanities", faUsers],
  ["Social and behavioural sciences and law", faScaleBalanced],
  ["Business, management and public administration", faBriefcase],
  ["Physical and life sciences and technologies", faRocket],
  ["Mathematics, computer and information sciences", faCode],
  ["Architecture, engineering, and related trades", faHelmetSafety],
  ["Agriculture, natural resources and conservation", faWheatAwn],
  ["Health and related fields", faHeartPulse],
  ["Personal, protective and transportation services", faCar],
  ["Other instructional programs", faEllipsis]
])

const parseFieldOfStudy: (fieldOfStudy: string) => FieldOfStudy = (fieldOfStudy) => {
  const postOpenBracket = fieldOfStudy.indexOf("[");
  return fieldOfStudy.slice(0, postOpenBracket > 0 ? postOpenBracket - 1 : fieldOfStudy.length) as FieldOfStudy;
}

const generateEntries = (filteredData: any[]) => {
  const resultMap: Map<string, ValueByFieldEntry> = new Map(
    filteredData.map((value) => {
      const fieldOfStudy = (value["Field of study"] as string);
      const parsedFieldOfStudy = parseFieldOfStudy(fieldOfStudy);

      return [value["Field of study"], {
        fieldOfStudy: parsedFieldOfStudy,
        shortName: (ShortNames.get(parsedFieldOfStudy as FieldOfStudy) ?? ""),
        valueFemale: undefined,
        valueMale: undefined,
        icon: (Icons.get(parsedFieldOfStudy as FieldOfStudy) ?? faCircleNotch)
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

const compareFieldOfStudies = (a: FieldOfStudy, b: FieldOfStudy) => {
  // sort total to beginning
  if (a === "Total, field of study") {
    return -1;
  }
  if (b === "Total, field of study") {
    return 1;
  }

  // sort other to end
  if (a === "Other instructional programs") {
    return 1;
  }
  if (b === "Other instructional programs") {
    return -1;
  }

  const aShortName = getDisplayNameForField(a);
  const bShortName = getDisplayNameForField(b);

  // lexographical
  if (aShortName < bShortName) {
    return -1;
  }
  if (aShortName > bShortName) {
    return 1;
  }
  return 0;
}

const sortDataAlphabetical = (data: ValueByFieldEntry[]) => {
  return data.sort((a, b) => {
    return compareFieldOfStudies(a.fieldOfStudy, b.fieldOfStudy);
  });
}

const getMedianIncomeByFieldOfStudy = (data: any[], studyLevel: StudyLevel, year: number) => {
  const filteredData = data
    .filter((value) => {
      return value["Graduate statistics"] === "Median employment income"
        && value["Educational qualification"] === studyLevel
        && parseInt(value["REF_DATE"], 10) === year
    });

  return sortDataAlphabetical(generateEntries(filteredData));
};

const getNumberReportingByFieldOfStudy = (data: any[], studyLevel: StudyLevel, year: number) => {
  const filteredData = data
    .filter((value) => {
      return value["Graduate statistics"] === "Number of graduates"
        && value["Educational qualification"] === studyLevel
        && parseInt(value["REF_DATE"], 10) === year
        && value["Field of study"] !== "Total, field of study"
    });

  return sortDataAlphabetical(generateEntries(filteredData));
};

const getMedianIncomeByYear = (data: any[], studyLevel: StudyLevel, field: FieldOfStudy) => {
  const filteredData = data
    .filter((value) => {
      return value["Graduate statistics"] === "Median employment income"
        && value["Educational qualification"] === studyLevel
        && parseFieldOfStudy(value["Field of study"]) === field
    });

  const resultMap: Map<string, ValueByYearEntry> = new Map(
    filteredData.map((value) => {
      return [value["REF_DATE"], {
        year: parseInt(value["REF_DATE"], 10),
        valueFemale: undefined,
        valueMale: undefined,
      }]
    })
  );

  filteredData
    .forEach((value) => {
      const mapEntry = resultMap.get(value["REF_DATE"])
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

const getYears = () => {
  // hard coding for now
  return [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
}

const getFieldOfStudies = () => {
  // hard coding for now
  return [...ShortNames.keys()].sort(
    compareFieldOfStudies
  );
}

const getDisplayNameForField: (fieldOfStudy: FieldOfStudy) => string = (fieldOfStudy) => {
  return ShortNames.get(fieldOfStudy) ?? "";
}

const getStudyLevels: () => StudyLevel[] = () => {
  return ["Career, technical or professional training diploma", "Undergraduate degree", "Master's degree", "Doctoral degree"]
}

const getDisplayIconForField: (fieldOfStudy: FieldOfStudy) => IconDefinition = (fieldOfStudy) => {
  return Icons.get(fieldOfStudy) ?? faCircleNotch;
}

export {
  getMedianIncomeByFieldOfStudy,
  getNumberReportingByFieldOfStudy,
  getMedianIncomeByYear,
  getYears,
  getFieldOfStudies,
  getStudyLevels,
  getDisplayNameForField,
  getDisplayIconForField
};
