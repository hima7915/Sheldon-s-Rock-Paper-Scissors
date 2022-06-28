import ReactSlider from "react-slider";
function Slider(){
  const marks=[
    {
      value:0,
      label:"0",
    },
    {
      value:5,
      label:"5",
    },
    {
      value:10,
      label:"10",
    },
    {
      value:15,
      label:"15",
    },
  ];
  return (
    <ReactSlider
      min={1}
      max={15}
      marks={marks}
      markClassName="example-mark"
      minDistance={1}
      defaultValue={5}
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
    />
  );
};
export default Slider;

