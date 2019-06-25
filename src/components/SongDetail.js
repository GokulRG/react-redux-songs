import React from 'react';
import { connect } from 'react-redux';

//As soon as you wire up the mapStateToProps method in this file and call it with the connect method, you will find the "song" parameter in the props of SongDetail
const SongDetail = (props) => {
    console.log(props);
    return (
        <div>
            SongDetail
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        //To find out the properties in the state object, go to the index.js in reducers
        //Return only the parameters that you would want in the props of this component here, For us, we only need the selectedSong parameter for this Component.
        song: state.selectedSong
    }
};

export default connect(mapStateToProps)(SongDetail);
