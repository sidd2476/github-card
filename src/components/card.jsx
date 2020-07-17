import React from 'react';
import "./Card.css"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Card(props){
    
        function savePDF() {
            const printArea = document.getElementById('cardDown');
            html2canvas(printArea).then(canvas => {
                const dataURL = canvas.toDataURL();
                const pdf = new jsPDF();
                pdf.addImage(dataURL , 'JPEG',20,20,180,160);
                pdf.save('gitcard.pdf');
            })
        }
        
    return (
    <div className='card' id="cardDown" onClick={savePDF}>
        <span className="tooltiptext">click to download</span>
        <a className="blog" href={props.blog}>
            <img src='https://img.icons8.com/ios/24/000000/domain.png' />
        </a>
<h1 className='name'>{props.name}</h1>
<p className="repo">Repos: {props.repo}</p>
      <p className="company">Company: {props.company}</p>
      <img className="avatar" src={props.url} alt="" />
      <div className="line"></div>
      <p className="place">{props.location}</p>
      <p className="joined-date">{props.date}</p>
      <p className="bio">{props.bio}</p>
      <p className="followers">
        <i class="fa fa-users"></i>&nbsp;&nbsp;{props.followers}
      </p>
      <p className="twitter">
        <a href={props.twitter}>
          <i class="fa fa-twitter"></i>
        </a>
      </p>
    </div>
    )
}
export default Card;