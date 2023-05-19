import React from 'react'
import owl from '/assets/owl.png';

const Owl = () => {
    return (
        <div className="owlhome">
            <div className="eye-container" id="anchore">
                <div className="eye-box">
                    <div className="eye-dot">
                    </div>
                </div>
                <div className="eye-box">
                    <div className="eye-dot">
                    </div>
                </div>

            </div>
            <img src={owl} alt="" />
        </div>
    )
}

export default Owl