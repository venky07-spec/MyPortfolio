import React from "react";

function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="section-divider__svg">
        <path
          d="M0,0V46.88c140.72,18.11,281.44,36.22,422.17,36.22,140.72,0,281.44-18.11,422.16-36.22S985.89,10.67,1126.61,46.88C1167,60.5,1200,80,1200,80V0Z"
          className="section-divider__fill"
        />
      </svg>
    </div>
  );
}

export default SectionDivider;
