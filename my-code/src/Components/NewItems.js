import React, { Component } from 'react'

export class NewItems extends Component {

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={!imageUrl? "https://media.wired.com/photos/6716a6d916de36557796af8e/191:100/w_1280,c_limit/Buisness_WSJ_PerplexityAI_GettyImages-1917903757.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='_blank' className="btn btn-dark btn-sm">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewItems
