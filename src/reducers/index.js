import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Samajavara Gamana', duration: '6:02' },
        { title: 'Annatha Aaduraar', duration: '4:01' },
        { title: 'Velai Illathavan Thaan', duration: '4:37' },
        { title: 'Theri Mass', duration: '4:06' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
}); 