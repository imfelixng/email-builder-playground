import "./mention-list.css";

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

export default forwardRef<any, any>((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const selectItem = (index: number) => {
    const item = props.items[index];

    if (item) {
      props.command({ id: item });
    }
  };

  const upHandler = () => {
    setSelectedIndex(
      (selectedIndex + props.items.length - 1) % props.items.length
    );
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [props.items]);

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }: any) => {
      if (event.key === "ArrowUp") {
        upHandler();
        return true;
      }

      if (event.key === "ArrowDown") {
        downHandler();
        return true;
      }

      if (event.key === "Enter") {
        enterHandler();
        return true;
      }

      return false;
    },
  }));

  return (
    <div className="dropdown-menu">
      <span className="dropdown-menu__title">Your Variables</span>
      {props.items.length ? (
        props.items.map((item: string, index: number) => (
          <button
            className={index === selectedIndex ? "is-selected" : ""}
            key={index}
            onClick={() => selectItem(index)}
          >
            {item}
          </button>
        ))
      ) : (
        <div className="item">No result</div>
      )}
    </div>
  );
});
