import { useState } from "react";

const AccordionItem = ({ content, title, width }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`accordion ${active ? "active" : ""}`}>
      <div className="accordion__title" onClick={() => setActive(!active)}>
        <span>{title}</span>
        <div className="accordion__icon">
          <i className="bx bxs-chevron-down" />
        </div>
      </div>
      <div className="accordion__content" style={{ width }}>
        {content}
      </div>
    </div>
  );
};

export default AccordionItem;
