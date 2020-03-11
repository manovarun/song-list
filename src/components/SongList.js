import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

export class SongList extends Component {
  render() {
    const { songs } = this.props.songs;
    const { selectSong } = this.props;

    return (
      <div className='ui divided list'>
        {songs.length > 0 &&
          songs.map(song => (
            <div className='item' key={song.title}>
              <div className='right floated content'>
                <button
                  className='ui button primary'
                  onClick={() => selectSong(song)}
                >
                  Select
                </button>
              </div>
              <div className='content'>{song.title}</div>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = ({ songs }) => ({
  songs
});

export default connect(mapStateToProps, { selectSong })(SongList);
