import React from 'react';
//..................................................here is the tooltip class based component.......................................................


class Tooltip extends React.Component{

    render(){
        const {position} = this.props;
        return (
            <div className={`${position}`}>
                You are hovering "{position}" position!
            </div>
        )
    }
}


export default Tooltip;