import React from 'react'
import FolderIcon from '/assets/Folder.svg';
import GitHubIcon from '/assets/github.svg';
import PreviewIcon from '/assets/preview.svg';


const ArchivedCard = ({props}) => {
    return (
        <div className="archiveCard">
            <div className="header">
                <img src={FolderIcon} alt="" />
                {props.gitLink && (<a href={props.gitLink}><img src={GitHubIcon} alt="" /></a>)}
                {props.previewLink &&(<a href={props.previewLink}><img src={PreviewIcon} alt="" /></a>)}
            </div>

            <div className="content">
                <h1>{props.heading}</h1>
                <p>{props.desc}</p>
            </div>

            <div className="footer">
                {props.used.map((u,idx)=>(<span key={idx}>{u}</span>))}
            </div>
        </div>
    )
}

export default ArchivedCard