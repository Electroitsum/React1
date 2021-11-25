import pp1 from "../Images/ppic1.jpg";
import pp2 from "../Images/ppic2.jpg";

function Carou(props){

const para = ["The Creative Studio is a full-service creative agency specializing in custom web design, web development, UI/UX, and software development. Having worked with almost every technology language (.NET, PHP, Laravel, Angular 1.0/2.0, etc...), we start with your business goals and then provide the right scalable solution.", "Our range of services include full branding, SEO, PPC,Explainer Videos, and Inbound Marketing. Our clients range from entrepreneurs to Fortune 100 companies in a wide range of industries. Our team has over 15+ years of experience in their areas of expertise."];

const imag = [pp1, pp2];

const auth = ["Dani Yourk", "Mark Johnson"]

let setPara = null;

let setImg = null;

let setAuth = null;



if(props.Para === "para1"){
    setPara = para[0];
}

else if(props.Para === "para2"){
    setPara = para[1];
}
if(props.Img === "img1"){
    setImg = imag[0];
}

else if(props.Img === "img2"){
    setImg = imag[1];
}

if(props.Auth === "auth1"){
  setAuth = auth[0];
}

else if(props.Auth === "auth2"){
  setAuth = auth[1];
}


    return (

        <>
        <div className="carconm">
                  <div className="cacon row">
                    <span className="ppic col-12 col-md-4">
                      <img
                        src={setImg}
                        alt="profile2"
                        className="propic m-5 m-md-0"
                      />
                    </span>
                    <span className="discp col-12 col-md-8">
                      <h1 className="cah1">Ask Our Clients</h1>
                      <p className="cap">
                        {setPara}
                      </p>
                      <h5 className="cah5">{setAuth}</h5>
                    </span>
                  </div>
                </div>
        </>
    );
}

export default Carou;