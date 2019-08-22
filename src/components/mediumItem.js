// import React from 'react'
// import moment from 'moment'


// setPosts = ({data}) => {  const { Post } = data.payload.references  
// const posts = Object.values(Post).map(({ id, title, createdAt, virtuals, uniqueSlug }) => Object.assign({},{
//     title,
//     createdAt,
//     subtitle: virtuals.subtitle,
//     image: virtuals.previewImage.imageId ? `https://cdn-images-1.medium.com/max/800/${virtuals.previewImage.imageId}` : null,
//     url: `https://medium.com/@aaron.klaser/${uniqueSlug}`
//   })
// )  
// this.setState({
//   posts
// })
// }

// const MediumItem = ({title, createdAt, subtitle, image, url}) => (
//   <div className="box is-paddingless card">
//     { image
//     ? (<div className="card-image">
//          <figure className="image">
//            <img src={image} />
//          </figure>
//        </div>)
//      : "" }
//     <div className="card-content">
//       <div className="media">
//         <div className="media-content" style={{ overflow: 'inherit' }}>
//         <p className="title is-4">{title}</p>
//       </div>
//     </div>
//     <div className="content">
//       { subtitle }
//     </div>
//     <nav className="level">
//       <div className="level-left">
//         <div className="tags has-addons">
//           <span className="tag is-primary">{moment(createdAt).format('MMM Do')}</span>
//           <span className="tag">{moment(createdAt).format('YYYY')}</span>
//         </div>
//       </div>
//       <div className="level-right">
//         <a className="button is-small is-link is-outlined" target="_blank" href={url}>
//           Read on Medium
//         </a>
//       </div>
//     </nav>
//   </div>
// </div>
// )
// export default MediumItem