import React from "react";
import WordCloud from "react-d3-cloud";

class CloudDetail extends React.Component {

    render() {
        const data = this.props.words.map(word => ({ text: word, value: 100 }) );

        // this.props.words.map( word => { text: word, value: 100 } );

        const fontSizeMapper = word => Math.log2(word.value) * 5;
        const rotate = word => word.value % 360;
        // debugger
        return (<WordCloud
            data={data}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
        />)
    }

}




export default CloudDetail;