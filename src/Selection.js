import './Selection.css';
import * as React from 'react';
import { useHistory } from "react-router-dom";




function Selection(props) {
    const history = useHistory();

    function goTo(){
      history.push('/' + props.title);
    }

    return (
      <div className="Selection" onClick={goTo}>
        <p className='selectionTitle'>{props.title}</p>
        <img className='selectionImage' src={props.image}/>
      </div>
  );
}


export default Selection;
