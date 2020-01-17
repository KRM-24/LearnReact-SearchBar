import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // we can see the clientHeight from this in the console because the image has been loaded at the time we're lookin at this in the console
        console.log(this.imageRef);
        // this returns 0 in the console because the image hasn't loaded yet, so the <img> tag is empty
        console.log(this.imageRef.current.clientHeight);
    }
    
    render () {
        const {description, urls} = this.props.image;
        
        return (
            <div>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    };
}

export default ImageCard;
