import { useState } from 'react';
import NavContainer from './navcontainer';
import DetailContainer from './detailcontainer';

function Container() {
    const [activeTab, setActiveTab] = useState('Overview');

    return (
        <>
            <NavContainer activeTab={activeTab} setActiveTab={setActiveTab} />
            <DetailContainer activeTab={activeTab} />
        </>
    );
}

export default Container;
