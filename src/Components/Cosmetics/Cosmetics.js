import React from 'react';
import { AnotherBrand, Myshow, Show } from './CasualItems/Items';

const Cosmetics = () => {
  let showBrand = 'Bata';
  let showprice = 1790;
            
  const reulst = Myshow(showBrand, showprice)

    return (
        
        <div>
            <Show></Show> <br />
            <AnotherBrand></AnotherBrand> <br />
            <p>show information i s; ${reulst}</p>
        </div>
    );
};

export default Cosmetics;