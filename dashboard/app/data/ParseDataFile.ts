import fs from "fs";
import csv from "csv-parser";
import neatCsv from "neat-csv";
import stripBomStream from "strip-bom-stream";

const DATA_FILE_F = "app\\data\\3710027901_databaseLoadingData_WOMAN.csv";
const DATA_FILE_M = "app\\data\\3710027901_databaseLoadingData_MAN.csv";

const loadData = async () => {
  const data = await neatCsv(fs.createReadStream(DATA_FILE_F).pipe(stripBomStream()));
  data.push(...(await neatCsv(fs.createReadStream(DATA_FILE_M).pipe(stripBomStream()))));
  return data;
}

export default loadData;
