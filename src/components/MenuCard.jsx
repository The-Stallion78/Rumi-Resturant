import React from 'react';

export default function MenuCard({ menuData }) {
  return (
    <>


      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-12 mx-auto'>

            <section className='main-card--container'>
              {menuData.map((currElement) => {

                const {id, name, category, image, description } = currElement;

                return (
                  <div className='card-container' key={id}>
                    <div className='card'>
                      <div className='card-body'>
                        <span className='card-number card-circle subtle'>
                          {id}
                        </span><br />
                        <span className='card-author subtle'>
                          {name}
                        </span>
                        <h2 className='card-title'>
                          {name}
                        </h2>
                        <span className='card-description subtle'>
                          {description}
                        </span>
                        <div className='card-read'> Read </div>
                      </div>
                      <img src={image} alt={name} className='card-media' />
                      <span className='card-tag subtle'> Order Now </span>
                    </div>
                  </div>
                );
              })}
            </section> 
            <br /> 
            
          </div>
        </div>
      </div>
    </>
  );
}
