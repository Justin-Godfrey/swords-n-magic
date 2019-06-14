import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { connect } from "react-redux";
import axios from "axios";
import Dropzone from "react-dropzone";
import { GridLoader } from "react-spinners";
import { v4 as randomString } from "uuid";

class Highlights extends Component {
  state = {
    isUploading: false,
    url: "",
    images: [],
    input: ''
  };

  componentDidMount() {
   this.getImages()
  }

  getSignedRequest = ([file]) => {
    this.setState({ isUploading: true });

    const fileName = `${randomString()}-${file.name.replace(/\s/g, "-")}`;

    axios
      .get("/sign-s3", {
        params: {
          "file-name": fileName,
          "file-type": file.type
        }
      })
      .then(response => {
        const { signedRequest, url } = response.data;
        this.uploadFile(file, signedRequest, url);
      })
      .catch(err => {
        console.log(err);
      });
  };

  uploadFile = (file, signedRequest, url) => {
    const options = {
      headers: {
        "Content-Type": file.type
      }
    };

    axios
      .put(signedRequest, file, options)
      .then(response => {
        this.setState({ isUploading: false, url });
        return axios.post("/api/store/image", { url: this.state.url, description: this.state.input });
      })
      .then(serverResponse => {
        this.getImages()
      })
      .catch(err => {
        this.setState({
          isUploading: false
        });
      });
  };

  handleInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  getImages = () => {
    axios.get("/all/images").then(response => {
      this.setState({
        images: response.data
      });
    });
  }

  render() {
    console.log(this.state);

    const mappedImages = this.state.images.map(image => (
      <div>
        <img
          src={image.url}
          alt="something"
        />
        <p className="legend">{image.description}</p>
      </div>
    ));

    return (
      <>
        {/* <Carousel infiniteLoop autoPlay stopOnHover dynamicHeight>
          <div style={{ height: "750px", width: "2000px" }}>
            <img
              src="https://via.placeholder.com/190"
              alt="something"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">With an autoscroll</p>
          </div>
          <div style={{ height: "750px", width: "2000px" }}>
            <img
              src="https://via.placeholder.com/190"
              alt="something"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">Carousel</p>
          </div>
        </Carousel> */}

        {mappedImages}

        <Dropzone
          onDropAccepted={this.getSignedRequest}
          accept="image/*"
          multiple={false}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              style={{
                position: "relative",
                width: 160,
                height: 80,
                borderWidth: 5,
                marginTop: 25,
                borderColor: "gray",
                borderStyle: "dashed",
                borderRadius: 5,
                display: "inline-block",
                fontSize: 17
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {this.state.isUploading ? (
                <GridLoader />
              ) : (
                <p>Drop files here, or click to select files</p>
              )}
            </div>
          )}
        </Dropzone>
        <input placeholder="image description" onChange={this.handleInputChange}/>
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Highlights);
