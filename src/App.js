import React from "react";
import "./index.css";
import Hello from "./Hello"
import ChatApp from "./c01/ChatApp";
import CommentBox from "./c02/CommentBox";
import Clock from "./c03/Clock";
import SnapShotSample from "./c04/SnapShotSample"
import DomDiff from "./c05/DomDiff";
import AdvancedTabSelectorSample from "./c06/AdvancedTabSelector";
import LocaleSample from "./c07/LocaleSample";
import PureRedux from "./c08/PureRedux"

//console.log('AdvancedTabSelectorSample:' + AdvancedTabSelectorSample)
const styles = {
  fontFamily: "sans-serif",
  paddingLeft: "250px",
};

const routeMap = {
  chat: ChatApp,
  commentBox: CommentBox,
  clock: Clock,
  snapShotSample: SnapShotSample,
  domDiff: DomDiff,
  advancedTabSelectorSample: AdvancedTabSelectorSample,
  localeSample: LocaleSample,
  pureRedux: PureRedux,
};

export default class App extends React.PureComponent {
  handleLinkClick = key => {
    // window.location.hash = `#${key}`;
    window.history.pushState(null, "", `/#/${key}`);
    this.forceUpdate();
  };
  render() {
    const currentPage = document.location.hash.replace(/#\/?/, "");

    let CurrentPage = routeMap[currentPage] || Hello;
    // if (currentPage.match(/\/user\/\w+|\/list-page/)) {
    //   CurrentPage = ListSample;
    // }
    // if (currentPage.match(/\/wizard\/step\/\w+/)) {
    //   CurrentPage = WizardSample;
    // }
    return (
      <div style={styles}>
        <ul className="menu-list">
          {Object.keys(routeMap).map(key => (
            <li
              key={key}
              className={key === currentPage ? "is-active" : ""}
              style={{ listStyle: "none" }}
            >
              <span className="link" onClick={() => this.handleLinkClick(key)}>
                {key}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ padding: "30px 0" }}>
          <CurrentPage />
        </div>
      </div>
    );
  }
}

