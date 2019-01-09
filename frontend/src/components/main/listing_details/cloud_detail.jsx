import React from "react";
import WordCloud from "react-d3-cloud";

class CloudDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            phrase: null,
            score: null,
            weight: null
        }
    }

    render() {
        const data = this.props.words.map((word, idx) => ({ text: word, value: 60 * (this.props.words.length + 5 - idx) / this.props.words.length, score: idx + 1, weight: 1}) );
        if (this.props.weight) {
            this.props.weight.forEach((el, i) => data[i].weight = el);
        }
        
        // const fontSizeMapper = word => Math.log2(word.value) * 5;
        const fontSizeMapper = word => word.value
        const rotate = word => 0;
        const onWordMouseOver = word => word.weight;

        return (<div id="cloud-container">
        <WordCloud
            data={data}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
            width={500}
            font={"Roboto"}
        />
        </div>)
    }

}




export default CloudDetail;