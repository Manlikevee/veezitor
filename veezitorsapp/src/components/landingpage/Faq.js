import React from 'react'

const Faq = () => {
  return (
    <>
    <br />
    <br />
    <div className="basq">
      <div className="landingcontainer howbody">
        <div className="how">FAQ</div>
        <div className="howtext">
          Here you will find the answers to the frequently asked questions.
        </div>
        <br />
        <div className="faqgrid">
          <div className="faqcard" id="faq1">
            <div className="faqhead">
              <div className="faqquestion">
                What is visitor management software?
              </div>{" "}
              <div className="pluscheck" onclick="toggleFaq('faq1')">
                <span className="material-symbols-outlined">add</span>
              </div>
            </div>
            <div className="faqdescription">
              Visitor management software is an application that helps with
              managing visitors digitally for businesses, offices, schools,
              co-working, and just about any building which receives guests
              on-premises. A Visitor Management Software makes sure that all data
              entered into it is stored safely and securely and can be accessed
              anywhere at any-time.
            </div>
          </div>
          <div className="faqcard" id="faq2">
            <div className="faqhead">
              <div className="faqquestion">How Do I Setup Vizitor?</div>{" "}
              <div className="pluscheck" onclick="toggleFaq('faq2')">
                <span className="material-symbols-outlined">add</span>
              </div>
            </div>
            <div className="faqdescription">
              In order to get started with vizitor you will first need to download
              our app to your device. Once you download the app then you will need
              to follow steps in your dashboard. Our repersentative will be there
              to help you with getting started.
            </div>
          </div>
          <div className="faqcard" id="faq3">
            <div className="faqhead">
              <div className="faqquestion">
                How to see employee dropdown list?
              </div>{" "}
              <div className="pluscheck" onclick="toggleFaq('faq3')">
                <span className="material-symbols-outlined">add</span>
              </div>
            </div>
            <div className="faqdescription">
              To see the employee dropdown list in form Host field has to be
              enabled by going to Sign in form(Setting) and The last field of the
              app setting in configuration Enable Host Search must be disabled in
              Settings.
            </div>
          </div>
          <div className="faqcard" id="faq4">
            <div className="faqhead">
              <div className="faqquestion">
                How to download the employee list?
              </div>{" "}
              <div className="pluscheck" onclick="toggleFaq('faq4')">
                <span className="material-symbols-outlined">add</span>
              </div>
            </div>
            <div className="faqdescription">
              If we want to download the employee dropdown list please click on
              top-right export csv in employee.
            </div>
          </div>
          <div className="faqcard" id="faq5">
            <div className="faqhead">
              <div className="faqquestion">How to enable host notificatons?</div>{" "}
              <div className="pluscheck" onclick="toggleFaq('faq5')">
                <span className="material-symbols-outlined">add</span>
              </div>
            </div>
            <div className="faqdescription">
              Enable Host Notification Required within the app settings in the
              (settings) configuration.
            </div>
          </div>
          <div className="faqcard" id="faq6">
            <div className="faqhead">
              <div className="faqquestion">How to renew the plan?</div>{" "}
              <div className="pluscheck" onclick="toggleFaq('faq6')">
                <span className="material-symbols-outlined">add</span>
              </div>
            </div>
            <div className="faqdescription">
              Kindly follow the steps below for the Vizitor plans renewal:-Step 1.
              Login on https://dashboard.vizitorapp.com/#/login with your
              registered email &amp; password. Step 2. Click on profile &amp; fill
              billing details select online payment. Step 3. Click on general in
              the profile section then click on renew plan. Step 4. Select the
              plan, period &amp; proceed the payment by online payment methods.
              Step 5. Then once the payment is done you get the invoice on your
              registered email &amp; your subscription is activated.
            </div>
          </div>
          <div className="faqcard" id="faq7">
            <div className="faqhead">
              <div className="faqquestion">
                How To Add Your Business Logo To Vizitor ?
              </div>{" "}
              <div className="pluscheck" onclick="toggleFaq('faq7')">
                <span className="material-symbols-outlined">add</span>
              </div>
            </div>
            <div className="faqdescription">
              Having a personalised front desk is one of the most important
              features for any business. Vizitor not only helps you in securing
              and streamlining your business but also helps you in giving a unique
              identity to your front desk as well. Step 1. Log into your Vizitor
              Dashboard. Step 2. Go to the settings tab from the top panel. Step
              3. Click on the branding tab from the left menu. Step 4. Click on
              the upload Image button. Step 5. Upload your business logo.
            </div>
          </div>
          <div className="faqcard" id="faq8">
            <div className="faqhead">
              <div className="faqquestion">How to check visitor logs ?</div>{" "}
              <div className="pluscheck" onclick="toggleFaq('faq8')">
                <span className="material-symbols-outlined">add</span>
              </div>
            </div>
            <div className="faqdescription">
              For businesses who receive 100s of guests daily, keeping a track of
              all the visitor logs can be very difficult if you are still using a
              paper base visitor log. However, if you are using a digital visitor
              management system keeping a track of your visitor can become very
              simple and you can even track the back dated visitor logs as we.
              Step 1. Login to your Vizitor dashboard. Step 2. Click on the
              Vizitor Log tab from the left panel. Step 3. Once in the Visitor Log
              you can do the following things. 1. View details of a visitor by
              clicking on the eye icon. 2. You can print a badge for them by
              clicking on the printer icon. 3. You can remove the visitor from the
              visitor log by clicking on the bin icon. 4.You can checkout a user
              manually by clicking on the arrow.
            </div>
          </div>
        </div>
        <br />
        <div className="how">Still have questions?</div>
        <div className="howtext">
          For assistance, please visit our Contact Us page or call our customer
          support hotline at (671) 555-0110. Our dedicated team is ready to help
          you on your journey to a greener, more sustainable future.
        </div>
        <br />
      </div>
    </div>
    <br />
  </>
  
  )
}

export default Faq