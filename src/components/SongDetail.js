import React from 'react';
import { connect } from 'react-redux';

//As soon as you wire up the mapStateToProps method in this file and call it with the connect method, you will find the "song" parameter in the props of SongDetail
//Here instead of referring to the entire props object, we can destructure and refer to only the prop that we need, which is song
const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Please Select a song</div>;
    } else {
        return (
            <div>
                <h3>Details for : </h3>
                <p>
                    Title : {song.title} <br/>
                    Duration : {song.duration }
                </p>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        //To find out the properties in the state object, go to the index.js in reducers
        //Return only the parameters that you would want in the props of this component here, For us, we only need the selectedSong parameter for this Component.
        song: state.selectedSong
    }
};

export default connect(mapStateToProps)(SongDetail);
