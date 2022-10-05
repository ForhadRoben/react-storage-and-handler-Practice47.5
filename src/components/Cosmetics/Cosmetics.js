// import React from 'react';
// import { add, multiply } from '../../utilities/calculate';

// const Cosmetics = () => {
//     const a = 5, b = 6, total = add(a, b), total1 = multiply(a, b);
//     return (
//         <div>
//             <h1>Welcome to my Store!!!!</h1>
//             <p>Result:{total} and {total1}</p>
//         </div>
//     );
// };

// export default Cosmetics;

import React from 'react';
import './Cosmetics.css';
import { useState, useEffect } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotal } from '../../utilities/calculate';
const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    const total = getTotal(cosmetics);
    return (
        <div>
            <h1>Welcome to the Store!!!</h1>
            <p>Age total:{total}</p>
            <div className='cosmetics'>
                {
                    cosmetics.map(cosmetic => <Cosmetic
                        cosmetic={cosmetic}
                        key={cosmetic.id}

                    ></Cosmetic>)

                }
            </div>
        </div>
    );
};

export default Cosmetics;