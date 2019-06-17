import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { connect } from "react-redux";
import axios from "axios";
import Dropzone from "react-dropzone";
import { GridLoader } from "react-spinners";
import { v4 as randomString } from "uuid";
import "./Highlights.css"

class Highlights extends Component {
  state = {
    isUploading: false,
    url: "",
    comments: [],
    input: ''
  };

  componentDidMount() {
   this.getComments()
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

  submitComment = () => {
    axios.post('/api/comment', { comment: this.state.input })
      .then(serverResponse => {
        this.setState({comments: serverResponse.data})
        this.getComments()
      })
      // .catch(err => {
      //   this.setState({
      //     isUploading: false
      //   });
      // });
  };

  deleteComment = (id) => {
    axios.delete(`/api/comment/${id}` 
    ).then((serverResponse) => {
      this.getComments()
    })
}

  handleInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  getComments = () => {
    axios.get("/all/comments").then(response => {
      this.setState({
        comments: response.data
      });
    });
  }

  render() {
    console.log(this.state);

    const comments = this.state.comments.map(comment => (
      <div className='pictures4'>
        <button onClick= {() => this.deleteComment(comment.comment_id)}>x</button>
        
        <p className="legend">{comment.user_comment}</p>
      </div>
    ));


    return (
      <>
      <div className='container-10' style={{width: '1500px', margin: '0 auto'}}>
        <Carousel infiniteLoop autoPlay stopOnHover dynamicHeight>
          <div style={{ height: "100%", width: "" }}>
            <img
              src={require("../../Assets/1.png")}
              alt="something"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">With an autoscroll</p>
          </div>
          <div style={{ height: "750px", width: "2000px" }}>
            <img
              src={require("../../Assets/2.png")}
              alt="Img did not Load"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">Carousel</p>
          </div>
          <div style={{ height: "750px", width: "2000px" }}>
            <img
              src={require("../../Assets/4.png")}
              alt="something"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">Carousel</p>
          </div>
          <div style={{ height: "750px", width: "2000px" }}>
            <img
              src={require("../../Assets/5.png")}
              alt="something"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">Carousel</p>
          </div>
          <div style={{ height: "750px", width: "2000px" }}>
            <img
              src={require("../../Assets/6.png")}
              alt="something"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">Carousel</p>
          </div>
          <div style={{ height: "750px", width: "2000px" }}>
            <img
              src={require("../../Assets/7.png")}
              alt="something"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">Carousel</p>
          </div>
          
          <div style={{ height: "750px", width: "2000px" }}>
            <img
              src={require("../../Assets/9.png")}
              alt="something"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">Carousel</p>
          </div>
          <div style={{ height: "750px", width: "2000px" }}>
            <img
              src={require("../../Assets/10.png")}
              alt="something"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">Carousel</p>
          </div>
          <div style={{ height: "750px", width: "2000px" }}>
            <img
              src={require("../../Assets/11.png")}
              alt="something"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">Carousel</p>
          </div>
          <div style={{ height: "750px", width: "2000px" }}>
            <img
              src={require("../../Assets/12.png")}
              alt="something"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">Carousel</p>
          </div>
          <div style={{ height: "750px", width: "2000px" }}>
            <img
              src={require("../../Assets/13.png")}
              alt="something"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">Carousel</p>
          </div>
          <div style={{ height: "750px", width: "2000px" }}>
            <img
              src={require("../../Assets/14.png")}
              alt="something"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">Carousel</p>
          </div>
          <div style={{ height: "750px", width: "2000px" }}>
            <img
              src={require("../../Assets/15.png")}
              alt="something"
              style={{ width: "100%", height: "100%" }}
            />
            <p className="legend">Carousel</p>
          </div>
         
           
        </Carousel>
        </div>


        {/* {mappedImages} */}
        <div className= 'highlightPage'>


        
        <input placeholder="Comments & Questions" onChange={this.handleInputChange} style={{width: '1000px', height: '50px', margin: '0 auto'}}/>
        <button onClick={this.submitComment}>Submit</button>
          </div>
          {comments}
          {/* <button onClick={this.deleteComment}>x</button> */}
          
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Highlights);
