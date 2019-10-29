import React from 'react';

const PurpleContent = ({ content, toggle}) => {
    return(<>
            <h1>{content.header}</h1>

            <section>
                <div>
                    {content.message}  </div>
                <div>
                <button className="purple mobile-fill" onClick={(e) => {toggle(e)}}>{content.button}</button>
            </div>

            </section>
    </>);
};

export default PurpleContent;