import React from 'react'
import { Link } from 'react-router-dom';

const subTitle = "Choose Any Course";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: 'src/assets/images/category/07.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Web Development',
  },
  {
    imgUrl: 'src/assets/images/category/08.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Full Stack',
  },
  {
    imgUrl: 'src/assets/images/category/09.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Digital Marketing',
  },
  {
    imgUrl: 'src/assets/images/category/10.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Data Science',
  },
  {
    imgUrl: 'src/assets/images/category/11.webp',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Software Testing',
  },
  {
    imgUrl: 'src/assets/images/category/12.webp',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'UI UX Design',
  },
]

const HomeCategory = () => {
  return (
    <div className='category-section style-4 padding-tb' >
      <div className="container">
        <div className="section-header text-center">
          <span className='subtitle'>{subTitle}</span>
          <h2 className='title'>{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
            {
              categoryList.map((val, i) => (<div key={i} className='col'>
                <Link to="courses" className='category-item'>
                  <div className="category-inner">
                    <div className='category-thumb'>
                      <img src={val.imgUrl} alt="" />
                    </div>
                    <div className="category-content">
                      <div className='cate-icon'>
                        <i className={val.iconName}></i>
                      </div>
                      <Link to="/courses"><h6>{val.title}</h6></Link>
                    </div>
                  </div>
                </Link>
              </div>))
            }
          </div>
          <div className='text-center mt-5'>
            <Link to="/courses" className='lab-btn'><span>{btnText}</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCategory
