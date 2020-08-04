import React, { useEffect } from 'react';
import '../css/profile.css';
import { connect } from 'react-redux';
import { getProfile } from '../redux/actions/profile';
import Footer from './partials/footer';

const Profile = (props) => {
    const { username, tagname, mood, userImage, backgroundImage } = props.profile.user;
    const { status } = props ;

    useEffect(() => {
       if(status === "fetching") console.log('fetching...');
       if(status === "ok") console.log('Data has been recived!');
       if(status !== "fetching" && status !== "ok"){
            getProfile();
       }
    }, [status]);
 
    return (
        <div>
            <div className='profile-background'>
                <img className="" src={backgroundImage} alt='backgroundImage' />
                <div className='gradient'></div>
            </div>
            <div className='profile-body'>
                <div className='profile-header row'>
                    <div className='profile-user col-2'>
                        <img src={userImage} alt='userImage' />
                        <div className='avatar-mood'>{mood}</div>
                    </div>
                    <div className='user-aside col-5'>
                        <div className='row'>
                        <h5 className='user-name-id'>{tagname}</h5>
                        </div>
                        <div className='row'>
                        <h2 className='user-name'>{username}</h2>
                        </div>
                        <div className='row'>
                            <div className='col border-right cursor-pointer'>
                                <span className='ml-2 text-danger'><i className="fa fa-certificate"></i></span><span className='mx-4'>3</span>
                            </div>
                            <div className='col border-right'>
                                <span className="dropdown status-menu cursor-pointer">
                                    <span className="dropdown-toggle text-light " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className='status mr-2'></span>Online</span>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item" onClick={() => {}}>online</div>
                                        <div className="dropdown-item" onClick={() => {}}>invisible</div>
                                    </div>
                                </span>
                            </div>
                            <div className='col'>
                                <span className='mr-4 cursor-pointer' title='share your profile'><i className="fa fa-retweet"></i></span>
                                <span className='cursor-pointer' title='more'><i className="fa fa-ellipsis-h"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

Profile.defaultProps = {
    profile:{
        user: {
            username: '',
            mood: '',
            usernameTag: ''
        }
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.userProfile.profile,
        status: state.userProfile.status
    }
}

export default connect(mapStateToProps)(Profile);