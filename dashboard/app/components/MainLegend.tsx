import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDisplayIconForField, getDisplayNameForField, getFieldOfStudies } from "../data/DataMaps";

const MainLegend = () => {
  const fieldOfStudies = getFieldOfStudies();

  return (
    <div className="card bg-base-100 w-full p-5 shadow-md flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7">
        {
          fieldOfStudies
            .map((fieldOfStudy, idx) => {
              return (
                <div key={idx} className="col flex items-center px-2">
                  <FontAwesomeIcon icon={getDisplayIconForField(fieldOfStudy)} />
                  <p className="ml-3">{getDisplayNameForField(fieldOfStudy)}</p>
                </div>
              );
            })
        }
      </div>
    </div>
  );
}

export default MainLegend;
