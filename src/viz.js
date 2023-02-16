import vl from "vega-lite-api";

export const viz = vl
  //opacity helps with pointing out the density
  .markPoint({ fill: true, stroke: false, size: 200, opacity: 0.2 })
  .encode(
    // set x and y quantitative field
    // .scale({zero:false}) helps to not set the original coordinates as (0;0)
    vl
      .x()
      .fieldQ("acceleration")
      .scale({ zero: false }),
    vl
      .y()
      .fieldQ("horsepower")
      .scale({ zero: false }),
    vl.tooltip().fieldN("name")
  );
