import React from 'react'

const title = "Most Populat Tags";
const tagsList = [{ link: "#", text: "Html", }, { link: "#", text: "CSS Styles", }, { link: "#", text: "Tailwind CSS", }, { link: "#", text: "React Js", }, { link: "#", text: "Semantic", }, { link: "#", text: "JSX Syntax", }, { link: "#", text: "JSX Fragments", }, { link: "#", text: "Script Tags", }, { link: "#", text: "DOM", },];
const Tags = () => {
  return (
    <div className='widget widget-tags'>
      <div className='widget-header'>
        <h5 className='title'>{title}</h5>
      </div>
      <ul className="widget-wrapper">
        {
          tagsList.map((val, i) => (
            <li key={i}><a href={val.link}>{val.text}</a></li>
          ))
        }
      </ul>
    </div>
  )
}

export default Tags
