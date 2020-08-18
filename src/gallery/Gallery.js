import React from "react"
import getGallery from "../FlickrService/FlickrService"
class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: props.searchTerm,
            latitude: props.latitude,
            longitude: props.longitude,
            photoSrc: "",
            photoAlt: "",
        }
    }
    componentDidMount() {
        getGallery(
            this.state.searchTerm,
            this.state.latitude,
            this.state.longitude
        ).then(payload => {
            const photoObj = payload.photos.photo[0]
            this.setState({
                photoSrc: this.constructImageURL(photoObj),
                photoAlt: photoObj.title,
            })
        })
    }
    constructImageURL(photoObj) {
        return (
            "https://farm" +
            photoObj.farm +
            ".staticflickr.com/" +
            photoObj.server +
            "/" +
            photoObj.id +
            "_" +
            photoObj.secret +
            ".jpg"
        )
    }
    render() {
        console.log(this.state)
        return (
            <div className="Gallery">
                <img src={this.state.photoSrc} alt={this.state.photoAlt} />
            </div>
        )
    }
}
export default Gallery






