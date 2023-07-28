import { useState } from "react";

const Section = ({title , discription, isVisible, setIsVisible}) => {
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {
                isVisible ? <button onClick={()=>setIsVisible(false)}className="cursor-pointer underline">Hide</button> : <button onClick={()=>setIsVisible(true)}className="cursor-pointer underline">Show</button>
            }
            
            
            {isVisible && <p>{discription}</p>}
        </div>
    );
};

const Instamart = () => {
    const [visibleSection, setIsVisibleSection] = useState("team");
    return(
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section
                title = {"About Instamart"}
                discription = {"Swiggy Instamart is Swiggy's cloud grocery initiative. It promises to deliver your orders within 45 minutes. It is functional from 7 am to 12 am. The food ordering and delivery startup, Swiggy, was first started in 2014.Instamart, Swiggy's quick commerce grocery service has launched a multi-platform brand campaign titled 'Healthy Disses' featuring the superhit pairing of southern stars Simran and R. Madhavan."}
                isVisible = {visibleSection === "about"}
                setIsVisible={() => setIsVisibleSection("about")}
            />
            <Section
                title = {"Team Instamart"}
                discription = {" Swiggy Instamart head Karthik Gurumurthy to step aside; cofounder Phani Kishan to take over biz.Swiggy's Instamart now has 9 million users.In the two years since it started operations, Swiggy's quick commerce grocery service, Instamart, has grown to over 25 cities and is now utilized by 9 million people, according to a top official.Quick commerce supermarket firms received a lot of venture capital interest during the financing boom last year despite having no established profitable unit economics."}
                isVisible = {visibleSection === "team"}
                setIsVisible={() => setIsVisibleSection("team")}
            />
            <Section
                title = {"Careers"}
                discription = {"Instamart, Swiggy's quick commerce grocery service has launched a multi-platform brand campaign titled 'Healthy Disses' featuring the superhit pairing of southern stars Simran and R. Madhavan.Swiggy Instamart's head Karthik Gurumurthy is stepping down from his role as he plans to take a sabbatical and come back afresh. Instamart will now be headed by Swiggy's co-founder Phani Kishan Addepalli."}
                isVisible = {visibleSection === "careers"}
                setIsVisible={() => setIsVisibleSection("careers")}
            />
            
            
            

        </div>
    );
};
export default Instamart;