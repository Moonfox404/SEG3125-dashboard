import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDisplayIconForField, getDisplayNameForField, getFieldOfStudies } from "../data/DataMaps";

const MainLegend = () => {
  const fieldOfStudies = getFieldOfStudies();

  return (
    <div className="card bg-base-100 w-full p-5 shadow-md flex justify-center">
      <div className="grid grid-rows-2">
        {
          Array.from({ length: 2 }, (_, i) => i).map(
            (i) => {
              return (
                <div className="row grid grid-cols-7 py-2">
                  {
                    fieldOfStudies
                      .slice(7 * i, 7 * (i + 1))
                      .map((fieldOfStudy, idx) => {
                        return (
                          <div key={idx} className="col flex items-baseline px-2">
                            <FontAwesomeIcon icon={getDisplayIconForField(fieldOfStudy)} />
                            <p className="ml-3">{getDisplayNameForField(fieldOfStudy)}</p>
                          </div>
                        );
                      })
                  }
                </div>
              )
            }
          )
        }
      </div>
    </div>
  );
}

export default MainLegend;
