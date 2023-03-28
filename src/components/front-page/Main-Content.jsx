import classes from "./font-page.module.css";

import { useDispatch } from "react-redux";
import { added } from "../../redux/busDetails/actions";
import CardGroup from "./CardGroup";
const busDetails = [
  {
    id: "sadar_boys",
    title: "Siragjonj Sadar (Boys)",
    image: "/image/bus-icon.png",
  },
  {
    id: "sadar_girls",
    title: "Siragjonj Sadar (Girls)",
    image: "/image/bus-icon.png",
  },
  {
    id: "ullapara",
    title: "Ullapara",
    image: "/image/bus-icon.png",
  },
  {
    id: "shahjadpur",
    title: "Shahjadpur",
    image: "/image/bus-icon.png",
  },
];

const MainContent = () => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    const selectedBus = busDetails.reduce((acc, cur) => {
      if (cur.id === id) {
        acc = { ...cur };
      }
      return acc;
    }, {});
    dispatch(added(selectedBus));
  };

  return (
    <div className={`container-fluid ${classes.font_bg} pt-2`}>
      <div className="display-4 text-center mb-3">KYAU BUS TRACKER</div>
      <CardGroup busDetails={busDetails} handleClick={handleClick} />
    </div>
  );
};

export default MainContent;
