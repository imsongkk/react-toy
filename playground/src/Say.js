import React, { useState } from 'react';

const Say = () => {
    const [message, stMessage] = useState('a');
    const onClickEnter = () => stMessage('hi');
    const onClickExit = () => stMessage('bye');

    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickExit}>퇴장</button>
            <h1>{message}</h1>
        </div>
    );
};

export default Say;