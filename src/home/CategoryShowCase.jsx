import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

const title = "Our Products";

const ProductData = [
  {
    imgUrl: 'src/assets/images/categoryTab/37.jpg',
    cate: 'Web',
    title: 'Full Stack Development',
    author: 'assets/images/course/author/01.jpg',
    price: 'Rs 459',
    id: 1,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/29.webp',
    cate: 'Python',
    title: 'Game Development',
    author: 'assets/images/course/author/02.jpg',
    price: 'Rs 549',
    id: 2,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/34.jpg',
    cate: 'PHP',
    title: 'E-commerce Development',
    author: 'src/assets/images/categoryTab/brand/apple.png',
    price: 'Rs 399',
    id: 3,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/33.png',
    cate: 'Python',
    title: 'Mobile App Development',
    author: 'assets/images/course/author/04.jpg',
    price: 'Rs 659',
    id: 4,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/31.avif',
    cate: 'Web',
    title: 'Front End Development',
    author: 'assets/images/course/author/05.jpg',
    price: 'Rs 359',
    id: 5,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/36.jpeg',
    cate: 'Digital',
    title: 'Social Media Marketing',
    author: 'assets/images/course/author/06.jpg',
    price: 'Rs 579',
    id: 6,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/35.webp',
    cate: 'Python',
    title: 'Network Programming',
    author: 'assets/images/course/author/01.jpg',
    price: 'Rs 499',
    id: 7,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/32.jpg',
    cate: 'Web',
    title: 'Back End Development',
    author: 'assets/images/course/author/02.jpg',
    price: 'Rs 439',
    id: 8,
  },
]

const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);
  const filterItem = (categItem) => {
    const updateItems = ProductData.filter((curElem) => {
      return curElem.cate.toLowerCase() === categItem.toLowerCase();
    });
    setItems(updateItems);
  };
  return (
    <div className='course-section style-3 padding-tb'>
      <div className='course-shape one'><img src="\src\assets\images\shape-img\icon\01.png" alt="" /></div>
      <div className='course-shape two'><img src="\src\assets\images\shape-img\icon\02.png" alt="" /></div>

      <div className='container'>
        <div className='section-header'>
          <h2 className='title'>{title}</h2>
          <div className='course-filter-group'>
            <ul className='lab-ul'>
              <li onClick={() => setItems(ProductData)}>All</li>
              <li onClick={() => filterItem("web")}>Web</li>
              <li onClick={() => filterItem("python")}>Python</li>
              <li onClick={() => filterItem("php")}>PHP</li>
              <li onClick={() => filterItem("digital")}>Digital</li>
            </ul>
          </div>
        </div>
        <div className='section-wrapper'>
          <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
            {
              items.map((product) => <div key={product.id} className='col'>
                <div className='course-item style-4'>
                  <div className='course-inner'>
                    <div className="course-thumb">
                      <img src={product.imgUrl} alt="" />
                      <div className='course-category'>
                        <div className='course-cate'>
                          <a href="#">{product.cate}</a>
                        </div>
                        {/* <div className='course-reiew'>
                          <Rating />
                        </div> */}
                      </div>
                    </div>
                    <div className='course-content'>
                      <Link to={`/shop/${product.id}`}><h6>{product.title}</h6></Link>
                      <div className='course-footer'>
                        {/* <div className='course-author'>
                          <Link to="/" className='ca-name'>{product.brand}</Link>
                        </div> */}
                        <div className='course-price'>{product.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryShowCase
