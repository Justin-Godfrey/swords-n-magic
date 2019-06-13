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
    url: ""
  };

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
        return axios.post('/api/store/image', {url: this.state.url});
      })
      .then(serverResponse => {
          console.log(serverResponse.data)
      })
      .catch(err => {
        this.setState({
          isUploading: false
        });
      });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Carousel dynamicHeight>
          <div style={{ height: "500px", width: "1000px" }}>
            <img
              src="https://via.placeholder.com/190"
              alt="something"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="../../Assets/logo.png" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="../Assets/maya.png" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>

        <Dropzone
          onDropAccepted={this.getSignedRequest}
          accept="image/*"
          multiple={false}>
          {({getRootProps, getInputProps}) => (
            <div 
            style = {{
            position: 'relative',
            width: 160,
            height: 80,
            borderWidth: 5,
            marginTop: 25,
            borderColor: 'gray',
            borderStyle: 'dashed',
            borderRadius: 5,
            display: 'inline-block',
            fontSize: 17,}}
            {...getRootProps()}>
              <input {...getInputProps()} />
                {this.state.isUploading ? <GridLoader /> : <p>Drop files here, or click to select files</p>}
            </div>
          )}
        </Dropzone>
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Highlights);
