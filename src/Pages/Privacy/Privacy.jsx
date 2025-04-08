import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper"

function Privacy() {
  return (
    <div>
      <Wrapper>
         <h2 className="text-xl text-amber-50"><strong>Privacy Notice :</strong></h2><br />
        <p className="text-xl text-amber-50">
           

We care deeply about your privacy and are fully committed to being transparent about how we collect, use, and protect your data.<br />

When you visit our website, certain technical information is automatically collected to help us ensure the platform is running smoothly, securely, and efficiently. This includes:<br />

<strong>IP address : </strong><br />
Used to detect and prevent security threats, abuse, and to understand approximate user location (such as city or region).<br />
<br />
<strong>Screen resolution : </strong><br />
Helps us tailor the layout and design of our website to various devices and screen sizes.<br />
<br />
<strong>Browser type and version : </strong><br />
Ensures that our platform functions properly and consistently across different browsers.<br />
<br />
<strong>Why we collect this data</strong><br />
We collect this technical data for the following internal purposes:<br />

To analyze website traffic and user behavior<br />
To identify and resolve technical issues<br />
To improve design, navigation, and performance<br />
To support decision-making around new features and functionality
This data is never used to personally identify you, and we do not share or sell your data to any third-party for advertising or marketing purposes.<br />
<br />
<strong>Use of analytics tools:</strong><br />   
To help us better understand how users engage with our website, we use analytics tools such as:<br />

Custom tracking scripts to log screen resolution and browser type
Matomo (or other similar privacy-focused tools) to anonymously collect user interaction data (e.g., page views, clicks, navigation flow)
These tools allow us to measure and improve the effectiveness of our website, and all data collected is anonymized and used solely for technical, analytical, and security purposes.<br />
<br />
Your Consent<br />
By using our site, you agree to the collection of this anonymized technical data as described above. We are committed to keeping your experience safe, secure, and transparent.<br />

If you have any questions or would like more details about how we manage and protect your data, feel free to contact us.</p>
      </Wrapper>
    </div>
  )
}

export default Privacy
