import React from "react";

const SlotM = (props) => {
  // let x = "😄";
  // let y = "😄";
  // let z = '⛵';

  if (props.x === props.y && props.y === props.z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {props.x} {props.y} {props.z}
          </h1>
          <h1>This is Matching</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {props.x} {props.y} {props.z}
          </h1>
          <h1>This is Not Matching</h1>
          <hr />
        </div>
      </>
    );
  }
};
export default function SlotMachine() {
  return (
    <div>
      <h1 className="heading_style">
        🎰 Welcome To{" "}
        <span style={{ fontWeight: "bolder" }}> Slot Machine Game </span> 🎰
      </h1>
      <div className="slotMachine">
        <SlotM x="🎅" y="😄" z="👶" />
        <SlotM x="😄" y="😄" z="😄" />
        <SlotM x="🍌" y="🧑‍🔬" z="🧟‍♂️" />
        <SlotM x="🧑‍🔬" y="🧑‍🔬" z="🧑‍🔬" />
        <SlotM x="🧑‍" y="🧑‍" z="🧑‍" />
        <SlotM x="🧟‍♂️" y="🧟‍♂️" z="🧟‍♂️" />
      </div>
    </div>
  );
}
