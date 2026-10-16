import React from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function ProjectLanguages(props) {
  const theme = props.theme;
  const isDark = theme && theme.name === "dark";

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {props.logos.map((logo) => {
            let iconClass = logo.iconifyClass;
            let customStyle = { ...(logo.style || {}) };

            const isNextOrExpress =
              (logo.name &&
                (logo.name.toLowerCase().includes("next") ||
                  logo.name.toLowerCase().includes("express"))) ||
              (iconClass &&
                (iconClass.includes("next") || iconClass.includes("express")));

            if (isNextOrExpress) {
              customStyle.color = isDark ? "grey" : "#111827";
            }

            const modeClass = isNextOrExpress
              ? isDark
                ? "icon-grey-mode"
                : "icon-dark-mode"
              : "";

            return (
              <OverlayTrigger
                key={logo.name}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.name}</strong>
                  </Tooltip>
                }
              >
                <li
                  className={`software-skill-inline-languages ${modeClass}`}
                  name={logo.skillName}
                >
                  <span
                    className="iconify"
                    data-icon={iconClass}
                    style={customStyle}
                    data-inline="false"
                  ></span>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectLanguages;
