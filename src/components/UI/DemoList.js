import React, { useMemo } from "react";

const DemoList = (props) => {

    const { items } = props;

    const sortedItems = useMemo(() => {
        console.log("Items sorted")
        return items.sort((a, b) => a - b)
    }, [items]);

  return (
    <div>
        <h1>{props.title}</h1>
      <ul>
        {sortedItems.map((item) => (
            <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DemoList;
