import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FieldOfStudy, getDisplayIconForField } from "../data/DataMaps"

const IconAxisTick = ({ x, y, stroke, payload }:
  {
    x?: string | number | undefined,
    y?: string | number | undefined,
    stroke?: string | undefined,
    payload: any
  }
) => {
  return (
    <FontAwesomeIcon width={15} height={15} x={x} y={y} fill={stroke} icon={getDisplayIconForField(payload.value as FieldOfStudy)} />
  )
};

export default IconAxisTick;
