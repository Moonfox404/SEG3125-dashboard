import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBriefcase, faCar, faChalkboardTeacher, faCircleNotch, faCode, faEllipsis, faGraduationCap, faHeartPulse, faHelmetSafety, faPaintBrush, faRocket, faScaleBalanced, faUsers, faWheatAwn } from "@fortawesome/free-solid-svg-icons";

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

export type StudyLevel = "Career, technical or professional training diploma" 
  | "Undergraduate degree" 
  | "Master's degree" 
  | "Doctoral degree"
  | "Diplôme de formation technique ou professionnelle"
  | "Grade de premier cycle"
  | "Maîtrise (Grade de deuxième cycle)"
  | "Doctorat (Grade de troisième cycle)";

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
  | "Other instructional programs"
  | "Total, domaine d'études"
  | "Éducation"
  | "Arts visuels et d’interprétation, et technologie des communications"
  | "Sciences humaines"
  | "Sciences sociales et de comportements, et droit"
  | "Commerce, gestion et administration publique"
  | "Sciences physiques et de la vie, et technologies"
  | "Mathématiques, informatique et sciences de l’information"
  | "Architecture, génie et métiers connexes"
  | "Agriculture, ressources naturelles et conservation"
  | "Santé et domaines connexes"
  | "Services personnels, de protection et de transprt"
  | "Autres programmes d’enseignement";

export type LangKey = "en" | "fr";

type DataKey = {
  en: string,
  fr: string
};

const GENDER_KEY: DataKey = {
  en: "Gender",
  fr: "Genre"
};

const SUBJECT_KEY: DataKey = {
  en: "Field of study",
  fr: "Domaine d'études"
};

const YEAR_KEY: DataKey = {
  en: "REF_DATE",
  fr: "PÉRIODE DE RÉFÉRENCE"
};

const VALUE_KEY: DataKey = {
  en: "VALUE",
  fr: "VALEUR"
};

const DATA_TYPE_KEY: DataKey = {
  en: "Graduate statistics",
  fr: "Statistiques des diplômés"
};

const STUDY_LEVEL_KEY: DataKey = {
  en: "Educational qualification",
  fr: "Titre scolaire"
};

const INCOME_KEY: DataKey = {
  en: "Median employment income",
  fr: "Revenu d'emploi médian"
};

const NUMBER_KEY: DataKey = {
  en: "Number of graduates",
  fr: "Nombre de diplômés",
};

const TOTAL_KEY: DataKey = {
  en: "Total, field of study",
  fr: "Total, domaine d'études"
};

const OTHER_KEY: DataKey = {
  en: "Other instructional programs",
  fr: "Autres programmes d’enseignement"
};

const WOMAN_KEY: DataKey = {
  en: "Woman",
  fr: "Femme"
};

const MAN_KEY: DataKey = {
  en: "Man",
  fr: "Homme"
};

const FrenchToEnglish: Map<FieldOfStudy, FieldOfStudy> = new Map([
  ["Total, domaine d'études", "Total, field of study"],
  ["Éducation", "Education"],
  ["Arts visuels et d’interprétation, et technologie des communications", "Visual and performing arts, and communications technologies"],
  ["Sciences humaines", "Humanities"],
  ["Sciences sociales et de comportements, et droit", "Social and behavioural sciences and law"],
  ["Commerce, gestion et administration publique", "Business, management and public administration"],
  ["Sciences physiques et de la vie, et technologies", "Physical and life sciences and technologies"],
  ["Mathématiques, informatique et sciences de l’information", "Mathematics, computer and information sciences"],
  ["Architecture, génie et métiers connexes", "Architecture, engineering, and related trades"],
  ["Agriculture, ressources naturelles et conservation", "Agriculture, natural resources and conservation"],
  ["Santé et domaines connexes", "Health and related fields"],
  ["Services personnels, de protection et de transprt", "Personal, protective and transportation services"],
  ["Autres programmes d’enseignement", "Other instructional programs"]
]);

const EnglishToFrench: Map<FieldOfStudy, FieldOfStudy> = new Map(
  Array.from(FrenchToEnglish.entries()).map((value) => {
    return [value[1], value[0]];
  })
);

const StudyLevelTranslations: Map<StudyLevel, StudyLevel> = new Map([
  ["Career, technical or professional training diploma", "Diplôme de formation technique ou professionnelle"],
  ["Undergraduate degree", "Grade de premier cycle"],
  ["Master's degree", "Maîtrise (Grade de deuxième cycle)"],
  ["Doctoral degree", "Doctorat (Grade de troisième cycle)"],
  ["Diplôme de formation technique ou professionnelle", "Career, technical or professional training diploma"],
  ["Grade de premier cycle", "Undergraduate degree"],
  ["Maîtrise (Grade de deuxième cycle)", "Master's degree"],
  ["Doctorat (Grade de troisième cycle)", "Doctoral degree"],
]);

const ShortNames: Map<FieldOfStudy, string> = new Map([
  ["Total, field of study", "subject-all"],
  ["Education", "subject-edu"],
  ["Visual and performing arts, and communications technologies", "subject-art"],
  ["Humanities", "subject-humanities"],
  ["Social and behavioural sciences and law", "subject-social"],
  ["Business, management and public administration", "subject-business"],
  ["Physical and life sciences and technologies", "subject-science"],
  ["Mathematics, computer and information sciences", "subject-cs"],
  ["Architecture, engineering, and related trades", "subject-engineering"],
  ["Agriculture, natural resources and conservation", "subject-nr"],
  ["Health and related fields", "subject-health"],
  ["Personal, protective and transportation services", "subject-services"],
  ["Other instructional programs", "subject-other"]
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
  ["Other instructional programs", faGraduationCap]
])

const parseFieldOfStudy: (fieldOfStudy: string) => FieldOfStudy = (fieldOfStudy) => {
  const postOpenBracket = fieldOfStudy.indexOf("[");
  return fieldOfStudy.slice(0, postOpenBracket > 0 ? postOpenBracket - 1 : fieldOfStudy.length) as FieldOfStudy;
}

const generateEntries = (filteredData: any[], lang: LangKey) => {

  const resultMap: Map<string, ValueByFieldEntry> = new Map(
    filteredData.map((value) => {

      const fieldOfStudy = (value[SUBJECT_KEY[lang]] as string);
      const parsedFieldOfStudy = parseFieldOfStudy(fieldOfStudy);

      return [value[SUBJECT_KEY[lang]], {
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
      const mapEntry = resultMap.get(value[SUBJECT_KEY[lang]])
      if (value[GENDER_KEY[lang]] === WOMAN_KEY[lang]) {
        if (mapEntry) {
          mapEntry.valueFemale = value[VALUE_KEY[lang]];
        }
      } else if (value[GENDER_KEY[lang]] === MAN_KEY[lang]) {
        if (mapEntry) {
          mapEntry.valueMale = value[VALUE_KEY[lang]];
        }
      }
    });

  return [...resultMap.values()];
};

const compareFieldOfStudies = (a: FieldOfStudy, b: FieldOfStudy) => {
  // sort total to beginning
  if (a === "Total, field of study" || a === "Total, domaine d'études") {
    return -1;
  }
  if (b === "Total, field of study" || b === "Total, domaine d'études") {
    return 1;
  }

  // sort other to end
  if (a === "Other instructional programs" || a === "Autres programmes d’enseignement") {
    return 1;
  }
  if (b === "Other instructional programs" || b === "Autres programmes d’enseignement") {
    return -1;
  }

  const aShortName = getDisplayKeyForField(a);
  const bShortName = getDisplayKeyForField(b);

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

const getMedianIncomeByFieldOfStudy = (data: any[], studyLevel: StudyLevel, year: number, lang: LangKey) => {
  const filteredData = data
    .filter((value) => {
      return value[DATA_TYPE_KEY[lang]] === INCOME_KEY[lang]
        && value[STUDY_LEVEL_KEY[lang]] === studyLevel
        && parseInt(value[YEAR_KEY[lang]], 10) === year
    });

  return sortDataAlphabetical(generateEntries(filteredData, lang));
};

const getNumberReportingByFieldOfStudy = (data: any[], studyLevel: StudyLevel, year: number, lang: LangKey) => {
  const filteredData = data
    .filter((value) => {
      return value[DATA_TYPE_KEY[lang]] === NUMBER_KEY[lang]
        && value[STUDY_LEVEL_KEY[lang]] === studyLevel
        && parseInt(value[YEAR_KEY[lang]], 10) === year
        && value[SUBJECT_KEY[lang]] !== TOTAL_KEY[lang]
    });

  return sortDataAlphabetical(generateEntries(filteredData, lang));
};

const getMedianIncomeByYear = (data: any[], studyLevel: StudyLevel, field: FieldOfStudy, lang: LangKey) => {
  const filteredData = data
    .filter((value) => {
      return value[DATA_TYPE_KEY[lang]] === INCOME_KEY[lang]
        && value[STUDY_LEVEL_KEY[lang]] === studyLevel
        && parseFieldOfStudy(value[SUBJECT_KEY[lang]]) === field
    });

  const resultMap: Map<string, ValueByYearEntry> = new Map(
    filteredData.map((value) => {
      return [value[YEAR_KEY[lang]], {
        year: parseInt(value[YEAR_KEY[lang]], 10),
        valueFemale: undefined,
        valueMale: undefined,
      }]
    })
  );

  filteredData
    .forEach((value) => {
      const mapEntry = resultMap.get(value[YEAR_KEY[lang]])
      if (value[GENDER_KEY[lang]] === WOMAN_KEY[lang]) {
        if (mapEntry) {
          mapEntry.valueFemale = value[VALUE_KEY[lang]];
        }
      } else if (value[GENDER_KEY[lang]] === MAN_KEY[lang]) {
        if (mapEntry) {
          mapEntry.valueMale = value[VALUE_KEY[lang]];
        }
      }
    });

  return [...resultMap.values()];
};

const getYears = () => {
  // hard coding for now
  return [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
}

const getFieldOfStudies = (lang: LangKey) => {
  // hard coding for now
  return [...(lang === "en" ? FrenchToEnglish.values() : FrenchToEnglish.keys())].sort(
    compareFieldOfStudies
  );
}

const getDisplayKeyForField: (fieldOfStudy: FieldOfStudy) => string = (fieldOfStudy) => {
  if (FrenchToEnglish.has(fieldOfStudy)) {
    return ShortNames.get(FrenchToEnglish.get(fieldOfStudy) ?? "Other instructional programs") ?? "";
  }

  return ShortNames.get(fieldOfStudy) ?? "";
}

const getStudyLevels: (lang: LangKey) => StudyLevel[] = (lang) => {
  return lang === "en" ? 
    ["Career, technical or professional training diploma", "Undergraduate degree", "Master's degree", "Doctoral degree"]
    :
    ["Diplôme de formation technique ou professionnelle", "Grade de premier cycle", "Maîtrise (Grade de deuxième cycle)", "Doctorat (Grade de troisième cycle)"]
}

const getDisplayIconForField: (fieldOfStudy: FieldOfStudy) => IconDefinition = (fieldOfStudy) => {
  if (FrenchToEnglish.has(fieldOfStudy)) {
    return Icons.get(FrenchToEnglish.get(fieldOfStudy) ?? "Other instructional programs") ?? faGraduationCap;
  }

  return Icons.get(fieldOfStudy) ?? faGraduationCap;
}

const translateStudyLevel = (studyLevel: StudyLevel) => {
  return StudyLevelTranslations.get(studyLevel) ?? "";
}

const translateFieldOfStudy = (fieldOfStudy: FieldOfStudy) => {
  if (FrenchToEnglish.has(fieldOfStudy)) {
    return FrenchToEnglish.get(fieldOfStudy) ?? "";
  }

  return EnglishToFrench.get(fieldOfStudy) ?? "";
}

export {
  getMedianIncomeByFieldOfStudy,
  getNumberReportingByFieldOfStudy,
  getMedianIncomeByYear,
  getYears,
  getFieldOfStudies,
  getStudyLevels,
  getDisplayKeyForField,
  getDisplayIconForField,
  translateStudyLevel,
  translateFieldOfStudy,
};
