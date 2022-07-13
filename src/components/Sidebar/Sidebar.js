import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import RecommendedGroups from '../RecommendedGroups/RecommendedGroups';
import WritePost from '../WritePost/WritePost';

const Sidebar = () => {

    const [user] = useAuthState(auth)
    return (
        <div>
            <WritePost></WritePost>
            {
                user?<RecommendedGroups></RecommendedGroups>:null
            }
        </div>
    );
};

export default Sidebar;