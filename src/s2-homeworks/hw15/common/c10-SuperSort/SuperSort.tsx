import React from "react";
import iconDown from "./iconDown.svg";
import iconUp from "./iconUp.svg";
import Polygon from "./Polygon3.svg";


// добавить в проект иконки и импортировать
const downIcon = iconDown;
const upIcon = iconUp;
const noneIcon = Polygon

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

  // return up; // исправить
  if (sort === down) {
    return up;
  } else if (sort === up) {
    return '';
  } else {
    return down;
  }
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = "hw15",
}) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + "-sort-" + value} onClick={onChangeCallback} style={{cursor: 'pointer', display: "inline-block",
    paddingLeft: '10px'}}>
      {/*сделать иконку*/}
      <img  alt="iconUp"
        id={id + '-icon-' + sort}
        src={icon}
      />
      {/* {icon} а это убрать */}
    </span>
  );
};

export default SuperSort;
