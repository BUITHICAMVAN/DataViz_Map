import vega from "vega";
import { vegalite } from "vega-lite";
import vl from "vega-lite-api";
import { Handler } from "vega-tooltip";
// import { config } from "./config";
// import { getData } from "./getData";
// import { viz } from "./viz";

const App = async () => {
  vl.register(vega, vegalite, {
    // default renderer svg. Can be changed to canvas
    view: { renderer: "svg" },
    init: (view) => {
      view.tooltip(new Handler().call);
    },
  });
  const marks = Viz.data(await GetData())
    .width(window.innerWidth)
    .height(window.innerHeight)
    .autosize({ type: "fit", contains: "padding" })
    .config(config);

  document.body.appendChild(await marks.render());
};

export default App;
