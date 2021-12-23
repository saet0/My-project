import React from 'react';

const Profile = () => {
    return (
        <div className="profile">
            <div>
                <img className="img-profile" src='https://lookw.ru/9/973/1566944103-oboi-more-008.jpg' alt='main content'></img>
            </div>

            <div className="my-profile">
                <div>
                    <img className="my-img" src="https://cdn6.f-cdn.com/contestentries/189230/14797445/55214b4cc2224_thumb900.jpg" alt='logo'></img>
                </div>
                <div>
                    <h2>
                        Aleksey Anisimov
                    </h2>
                    <p>Date of Birth: 1 January</p>
                    <p>City: Vladivostok</p>
                    <p>Education: FESTU'09</p>

                </div>
            </div>
            <div>
                <h2>
                    My Posts
                </h2>
            </div>
            <div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <input className='button' type="submit" />
                </div>
            </div>
        </div>

    )
}

export default Profile;