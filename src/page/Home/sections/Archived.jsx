import React, { useState } from "react";
import archives from "../../../data/archivedProjects";
import ArchivedCard from "../../../components/ArchivedCard";

const Archived = () => {

  const [showAll, setShowAll] = useState(false);

  window.onresize = () => setCur(window.innerWidth <= 620 ? 3 : 6);
  const [cur,setCur] = useState(window.innerWidth <= 620 ? 3 : 6 );

  return (
    <div className="archived">
      <h1>Other Noteworthy Projects</h1>
      <h3>View the archive</h3>
      <div className="archiveCardContainer">
        {archives.slice(0, showAll ? archives.length : cur).map((item, idx) => (
          <ArchivedCard props={item} key={idx} />
        ))}
      </div>
      
        {!showAll ? (<button onClick={()=>setShowAll(true)}>Show More</button>) : (<button onClick={()=>setShowAll(false)}>Show Less</button>)}
    </div>
  );
};

export default Archived;
