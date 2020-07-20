import React from "react";
import ReactDOMServer from "react-dom/server";

import Dummy from "./App";

const props = JSON.parse(proxy.props || "{}");

let x = ReactDOMServer.renderToString(<Dummy user={props} />);
proxy.setHtml(x);
proxy.Component = Dummy;
