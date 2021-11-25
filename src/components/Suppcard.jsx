import { IconContext } from "react-icons";
import { IoSettingsOutline } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";




function Suppcard(props){

    const para = ["Bring us your wildest ideas and with our creative mindset and tools we’ll make it happen. Our team will provide you with a unique site designed for your specific needs, and help you develop an online business strategy to outplay your competitors.","We are result-oriented and passionate about each of our projects, and “OK” is not good enough for us.", "Businesses know that a single, full-time marketing manager simply cannot perform all the roles in digital marketing. Comrade Web Agency positions itself as your digital marketing partner: we cover all aspects of your website, branding, digital marketing strategy, and data analysis, all while owning our results (leads, calls, sales, conversions, targeted traffic, etc).", "Our range of services include full branding, SEO, PPC, Explainer Videos, and Inbound Marketing. Our clients range from entrepreneurs to Fortune 100 companies in a wide range of industries. Our team has over 15+ years ofexperience in their areas of expertise."]
    
    const title = props.Headin;
    let setPara = 0;
    const icon = [<IoSettingsOutline/>, <BiSupport/>, <AiOutlineStar/>, <FaShippingFast/>];
    let setIcon = null; 

    if (props.Para === "Idea1"){
        setPara = para[0];
    }
    else if (props.Para === "Idea2"){
        setPara = para[1];
    }
    else if (props.Para === "Idea3"){
        setPara = para[2];
    }
    else if (props.Para === "Idea4"){
        setPara = para[3];
    }

    if (props.Icon === "icon1"){
        setIcon = icon[0];
    }
    else if (props.Icon === "icon2"){
        setIcon = icon[1];
    }
    else if (props.Icon === "icon3"){
        setIcon = icon[2];
    }
    else if (props.Icon === "icon4"){
        setIcon = icon[3];
    }
    
    
    return(
        <>
            <article className="acard col-md-4">
                <div className="row cardincon">
                  <div className="col-12 col-md-3 icon">
                    <IconContext.Provider
                      value={{
                        color: "tomato",
                        className: "global-class-name",
                        size: "4em",
                      }}
                    >
                      {setIcon}
                    </IconContext.Provider>
                  </div>
                  <div className="col-12 col-md-9">
                    <h2 className="cardh22 text-center text-md-start">
                      {title}
                    </h2>

                    <p className="cardp1 text-center text-md-start">

                        {setPara}
                     
                    </p>
                  </div>
                </div>
              </article>

        </>
    );
}

export default Suppcard;