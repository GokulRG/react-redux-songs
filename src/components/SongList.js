import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

    renderList = () => {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button onClick={() => this.props.selectSong(song)} className="ui button primary">Select</button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    };

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    console.log(state);
    return { songs: state.songs }
};

//ES2015 syntax since the object key is also selectSong, you can simply call selectSong instead of selectSong : selectSong
export default connect(mapStateToProps, { selectSong })(SongList);