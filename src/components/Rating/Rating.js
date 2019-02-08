import React from 'react';
import './Rating.scss';
import {Icon, Progress} from "semantic-ui-react";

export function Rating(props) {
  /* ... */
  return (
    <div className='rating'>
      <div className='thumbs-up'>
        <Icon name='thumbs outline up'/>
        <span>{/*{this.props.likeCount}*/}</span>
      </div>
      <div className='thumbs-down'>
        <Icon name='thumbs outline down'/>
        <span>{/*{this.props.dislikeCount}*/}</span>
      </div>
      {/*{progress}*/}
    </div>
  );
}