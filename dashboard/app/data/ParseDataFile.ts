import fs from "fs";
import neatCsv from "neat-csv";
import stripBomStream from "strip-bom-stream";

const DATA_FILE_F_EN = "app/data/3710027901_databaseLoadingData_WOMAN.csv";
const DATA_FILE_M_EN = "app/data/3710027901_databaseLoadingData_MAN.csv";

const DATA_FILE_F_FR = "app/data/cleaned_FEMME.csv";
const DATA_FILE_M_FR = "app/data/cleaned_HOMME.csv";

const loadDataEN = async () => {
  const data = await neatCsv(fs.createReadStream(DATA_FILE_F_EN).pipe(stripBomStream()));
  data.push(...(await neatCsv(fs.createReadStream(DATA_FILE_M_EN).pipe(stripBomStream()))));
  return data;
}

const loadDataFR = async () => {
  const data = await neatCsv(fs.createReadStream(DATA_FILE_F_FR).pipe(stripBomStream()), {separator: ";"});
  data.push(...(await neatCsv(fs.createReadStream(DATA_FILE_M_FR).pipe(stripBomStream()), {separator: ";"})));
  return data;
}

export { loadDataEN, loadDataFR };
