function multiButton(num) {
    var output = [];
    for (let i=1; i<num; ++i) {
        output.push(<button id={i}>Button number {i}</button>)
    }
    return output;
}

export default multiButton;