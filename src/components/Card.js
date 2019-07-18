import React from 'react';

/* destructuring */
const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma3 grow'>
             <img alt='robots' src={`http://robohash.org/${id}?150x150`}/> 
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;