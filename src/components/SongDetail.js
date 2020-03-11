import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <p>Please select a song</p>;
  }

  const { title, duration } = selectedSong;

  return (
    <div>
      <h3>Details for: </h3>
      <p>
        <strong>Title:</strong> {title}
      </p>
      <p>
        <strong>Duration:</strong> {duration}
      </p>
    </div>
  );
};

const mapStateToProps = ({ songs: { selectedSong } }) => ({
  selectedSong
});

export default connect(mapStateToProps, null)(SongDetail);
