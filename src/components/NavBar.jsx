import React from 'react';

export default function NavBar( {filterItem, menuList} ) {

  return (
    <>
      <div className='container-fluid nav_bg1'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <nav className='navbar'>
              <div className='btn-group'>

                {
                  menuList.map((currElement, index)=> {
                    return <button className='btn-group__item' onClick={() => filterItem(currElement)}>
                    {currElement}
                  </button>
                        
                  })
                }

              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
