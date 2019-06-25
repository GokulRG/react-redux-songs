import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {

    return(
        <div className="ui container grid">
            <div className="ui row">
                <div style={{marginTop:'10px'}} className="column eight wide">
                    <SongList />
                </div>
                <div style={{marginTop:'10px'}} className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
}

export default App;