import React from "react";
import Header from "../MobileHeader/Header";
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import "./Agreement.css";
import fileDownload from "js-file-download";
import { FiDownload } from "react-icons/fi";

class Agreement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //used to indicate the current policy selected
      currentButton: this.props.currentAgreement,
      scrollReachEnd: false,
    };
    this.myRef = React.createRef(); // Create a ref object
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentAgreement !== this.props.currentAgreement) {
      this.setState({ currentButton: this.props.currentAgreement });
    }
  }

  // policy text data  (Policy and Procedures)
  PolicyAgreement = () => {
    return (
      <div>
        <div className="agreementData">
          <h4>Policy and Procedures</h4>
          <h6>Terms and conditions</h6>
          <p>
            <strong>PART 1: PROCEDURAL INFORMATION AND GUIDELINES</strong>
          </p>

          <ol>
            <li>
              <p>
                <strong>SECTION 1: INTRODUCTION</strong>
              </p>
              <ol>
                <li>
                  <strong>The Company &amp; Core Values</strong>
                  <ol>
                    <li>
                      Wine Retriever LLC DBA Scout &amp; Cellar LLC (“Scout
                      &amp; Cellar” or the “Company”), a Texas Limited Liability
                      Company, and its successors and assigns, is a federally
                      licensed and bonded Texas winery. “Scout &amp; Cellar “or
                      the “Company” includes any of its affiliated or subsidiary
                      wineries.
                    </li>
                    <li>
                      <strong>Core Values</strong>
                      <p>
                        Independent Consultants are expected to uphold the Scout
                        &amp; Cellar Core Values. The Core Values are:
                      </p>
                      <p>
                        1. We DO THE RIGHT THING, no matter what – It's as
                        simple as the golden rule and always has been.
                      </p>
                      <p>
                        2. We wear our purpose on our sleeve – Because we
                        believe in Clean-Crafted, we're committed to complete
                        TRANSPARENCY.
                      </p>
                      <p>
                        3. We love what we do, fiercely – And honestly, even
                        that's an understatement. Our PASSION for wine, for the
                        planet, and for those we love, is at our very core.
                      </p>
                      <p>
                        4. We are who we are – And that's all we are. We're here
                        because we believe in making tomorrow better. Our
                        AUTHENTICITY guides every decision we make.
                      </p>
                      <p>
                        5. We're at our best when we're together. – We empower
                        each other through our collective energy, and we
                        celebrate our victories, no matter how big or small.
                        This isn't a team, it's a FAMILY.
                      </p>
                    </li>
                    <li>
                      <strong>Alcoholic vs. Non-Alcoholic Products</strong>
                      <p>
                        All alcohol regulatory guidelines contained in these
                        Policies and Procedures are in effect for all Scout &
                        Cellar Consultant business activities (including those
                        dealing with non-alcoholic products) unless an exception
                        is noted in Part 2, Section 1.7.9 for business activity
                        that does not involve alcoholic products. Any Consultant
                        business activity involving a combination of alcoholic
                        and non-alcoholic products must comply with all
                        regulatory guidelines for alcoholic products.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>
                    Policies and Procedures Incorporated into Consultant
                    Agreement
                  </strong>
                  <p>
                    These Policies and Procedures (“Policies”), in their present
                    form and as amended from time to time, are incorporated
                    into, and form an integral part of, the Scout &amp; Cellar
                    Consultant Agreement (hereafter “Consultant Agreement”). The
                    term “Agreement” collectively refers to the Scout &amp;
                    Cellar Consultant Agreement, these Policies, and the
                    Compensation Plan. It is the responsibility of each
                    Consultant to read, understand, adhere to, and ensure that
                    they are aware of and operating under the most current
                    version of these Policies. If there is any conflict between
                    the Policies and Procedures, the Consultant Agreement, and
                    the Compensation Plan, the following order of precedence
                    shall prevail: (a) the Policies and Procedures; then (b) the
                    Consultant Agreement; and then (c) the Compensation Plan.
                  </p>
                </li>
                <li>
                  <strong>Purpose</strong>
                  <p>The purposes of these Policies and Procedures are:</p>
                  <ul>
                    <li>
                      To set forth Scout &amp; Cellar's and the Independent
                      Consultant's legal rights and obligations regarding the
                      Program (defined in Glossary of these Policies and
                      Procedures);
                    </li>
                    <li>
                      To define the relationship between Scout &amp; Cellar and
                      its Consultants;
                    </li>
                    <li>
                      To maintain order and integrity in Scout &amp; Cellar
                      programs and between our Consultants;
                    </li>
                    <li>
                      To set standards of acceptable business behavior; and
                    </li>
                    <li>
                      To assist Consultants in building and protecting their
                      businesses.
                    </li>
                  </ul>
                  <p>
                    Scout &amp; Cellar reserves the right to reject an offer by
                    any prospective Consultant to enter into an Agreement for
                    any lawful reason.
                  </p>

                  <ol>
                    <li>
                      <strong>Amendments</strong>
                      <p>
                        Due to periodic changes in federal, state, and local
                        laws, as well as the business environment, Scout &amp;
                        Cellar may, at its discretion, amend the Agreement.
                        Scout &amp; Cellar will notify Consultants of any
                        amendments via a posting on Scout &amp; Cellar's
                        website, in the Consultant's e-mail distribution,
                        publication in Scout &amp; Cellar Brand Standards
                        Bulletin, product inserts, or any other commercially
                        reasonable method. Unless Scout &amp; Cellar notifies
                        Consultants otherwise at the time of an amendment's
                        announcement, all amendments shall be effective 30 days
                        after the date of the notification or on the effective
                        date indicated in the method of notification, whichever
                        is later. The continuation of a Consultant's Scout &amp;
                        Cellar business or a Consultant's acceptance of bonuses
                        or commissions constitutes acceptance of any and all
                        amendments. The ability to modify the Agreement does not
                        extend to the dispute resolution section of the
                        Agreement, as those provisions can only be modified by
                        way of mutual consent.
                      </p>
                    </li>
                    <li>
                      <strong>Delays</strong>
                      <p>
                        Scout &amp; Cellar shall not be responsible for delays
                        and failures in performance of its obligations when
                        performance is made commercially impracticable due to
                        circumstances beyond its reasonable control. This
                        includes, without limitation, strikes, labor
                        difficulties, riots, wars, fires, floods, deaths,
                        pandemics, acts of God, curtailments of a party's source
                        of supply, or government decrees or orders.
                      </p>
                    </li>
                    <li>
                      <strong>Severability</strong>
                      <p>
                        If any provision of the Agreement, in its current form
                        or as amended, is found to be invalid, illegal, or
                        unenforceable for any reason, only the invalid
                        portion(s) of the provision shall be severed. The
                        remaining terms and provisions shall remain in full
                        force and effect and shall be construed as if such
                        severed provision never comprised a part of the
                        Agreement.
                      </p>
                    </li>
                    <li>
                      <strong>Waiver</strong>
                      <p>
                        Scout &amp; Cellar requires full compliance with the
                        Agreement and state and federal laws governing the
                        conduct of a business. Failure of Scout &amp; Cellar to
                        exercise any right or power under the Agreement or to
                        insist upon strict compliance by a Consultant with any
                        obligation or provision of the Agreement, or any
                        variance of Scout &amp; Cellar's customs or practices or
                        terms of the Agreement, shall not constitute a waiver of
                        Scout &amp; Cellar's right to demand full compliance
                        with the Agreement. Waiver by Scout &amp; Cellar can
                        only be effectuated in writing by an authorized officer
                        of the Company.
                      </p>
                    </li>
                    <li>
                      <strong>Retroactive Application of Amendments</strong>
                      <p>
                        Amendments shall not apply retroactively to conduct that
                        occurred prior to the effective date of the amendment,
                        with the exception of items listed as “ongoing conduct”
                        in Part Two, Section 2.2.5.10 of these Policies and
                        Procedures.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>CONFIDENTIALITY</strong>
                  <ol>
                    <li>
                      <strong>Confidential Information</strong>
                      <p>
                        By completing and submitting the Consultant Agreement,
                        the Consultant acknowledges that all product
                        information, Consultant and customer information, and
                        any data that the Consultant may create or compile
                        therefrom, including but not limited to Business
                        Reports, Customer lists (including names, contact
                        information, and other data), Consultant lists
                        (including names, contact information and other data),
                        information pertaining to Downline genealogy, and any
                        other information which may contain financial or
                        business information, product and purchasing
                        information, customer and Consultant contact and profile
                        details, Consultant lists, operating and production
                        procedures, product development information, financial
                        data and marketing materials are confidential and
                        proprietary and constitute trade secrets belonging to
                        Scout & Cellar (hereinafter “Confidential Information”).
                        Consultants agree not to disclose any Confidential
                        Information. A Consultant shall use the same level of
                        care to protect Confidential Information that Consultant
                        uses to protect Consultant's own sensitive and
                        proprietary information. A Consultant shall use
                        Confidential Information only for the purposes of
                        performing Consultant's obligations or exercising rights
                        under the respective Consultant Agreement.
                      </p>
                    </li>
                    <li>
                      <strong>
                        Confidential Information Access Guidelines
                      </strong>
                      <p>
                        A Consultant shall limit access to Confidential
                        Information to only those persons who have a legitimate
                        need to know such information in the performance of
                        Consultant's rights and obligations under the respective
                        Consultant Agreement. Each person who is given access to
                        Confidential Information shall be bound by this
                        confidentiality obligation. A Consultant shall be
                        responsible for the acts and omissions of Consultant's
                        respective employees, contractors, household members,
                        and agents with respect to such confidentiality
                        obligations.
                      </p>
                    </li>
                    <li>
                      <strong>
                        Consultant Acknowledgement of Confidential Information
                        Policy
                      </strong>
                      <p>
                        Consultant will not use or disclose Confidential
                        Information to any person except in strict accordance
                        with the Consultant Agreement and will take all
                        reasonable precautions to prevent its unauthorized
                        dissemination, both during and after the term of this
                        Agreement. Consultant will not use Confidential
                        Information to sell or market products or services other
                        than Scout &amp; Cellar products and services or in
                        connection with any other business during the term of
                        and after termination of this Agreement. Consultant
                        understands that Consultant will be deemed to breach
                        Consultant's obligations to Scout &amp; Cellar with
                        respect to Confidential Information or trade secrets if
                        Consultant works or performs services (including
                        consulting or advisory services) for a competitor
                        (hereafter “Competitive Businesses”) of Scout &amp;
                        Cellar in any position in which Consultant is required
                        to or does use, disclose or otherwise employ any
                        Confidential Information obtained during Consultant's
                        relationship with Scout &amp; Cellar. Consultant
                        understands and agrees that this provision does not
                        prohibit Consultant from working, or performing services
                        for, a company other than Scout &amp; Cellar during the
                        term of the Consultant Agreement or after the
                        termination of the Consultant Agreement, but requires
                        Consultant not to use, share or otherwise communicate
                        Confidential Information (including trade secrets) to or
                        for such a business.
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              <strong>SECTION 2: CONSULTANTS</strong>
              <ol>
                <li>
                  <strong>BECOMING A CONSULTANT</strong>
                  <ol>
                    <li>
                      <strong>Consultant Enrollment</strong>
                      <p>
                        An individual must complete and submit the Consultant
                        Agreement to register with Scout &amp; Cellar and to
                        receive commissions. The Consultant Agreement is
                        accessible online via the Scout &amp; Cellar website.
                        Scout &amp; Cellar will accept an “electronic signature”
                        whereby the individual agrees and accepts the terms and
                        conditions of the Consultant Agreement. An electronic
                        signature creates a legally binding agreement between
                        the Consultant and Scout &amp; Cellar.
                      </p>
                    </li>
                    <li>
                      <strong>Enrollment Restrictions</strong>
                      <p>
                        The following individuals are prohibited from joining
                        Scout &amp; Cellar as a Consultant:
                      </p>
                      <p>
                        a. Employees, officers, or directors of Scout &amp;
                        Cellar and/or its affiliates;
                      </p>
                      <p>
                        b. Any individual or entity who was, or owned an
                        interest in, a Consultant whose relationship with Scout
                        &amp; Cellar terminated within the prior six months;
                      </p>
                      <p>
                        c. An individual that is currently incarcerated or in
                        another correctional institution;
                      </p>
                      <p>d. Any individual with a felony conviction; and</p>
                      <p>
                        e. Any individual who is ineligible to work in the
                        United States.
                      </p>
                    </li>
                    <li>
                      <strong>Enrollment Requirements</strong>
                      <p>
                        At the time of joining, the new Consultant will be asked
                        to:
                      </p>
                      <p>
                        a. Purchase a Business Basics Kit (except for residents
                        of North Dakota, where the purchase of a Business Basics
                        Kit is optional); and
                      </p>
                      <p>
                        b. Provide a valid email address and credit card that
                        complies with these Policies &amp; Procedures.
                      </p>
                    </li>
                    <li>
                      <strong>Consultant Information</strong>
                      <p>
                        Each Consultant is responsible for keeping all
                        Consultant Information current and accurate,
                        specifically including email and phone number contact
                        information. Each Consultant may modify any Consultant
                        Information, including address, email address and phone
                        number at any time. Consultant must contact the Support
                        department to update the email address on Consultant's
                        profile. To change from a sole proprietorship to a
                        business entity, or from one type of business entity to
                        another, please refer to the steps in Part 1, Sect
                        2.2.2.5 of these Policies and Procedures. Without
                        limitation of the foregoing, Business Entity Consultants
                        must immediately report any changes in the Ownership of
                        the Business Entity. A Consultant must submit relevant
                        legal documentation in support of a name change request.
                      </p>
                    </li>
                    <li>
                      <strong>Handling Personal Information</strong>
                      <p>
                        If a Consultant receives Personal Information from or
                        about Consultants, Customers, or prospective Consultants
                        or Customers, it is the Consultant's responsibility to
                        maintain the security of such information. A Consultant
                        should shred or irreversibly delete the Personal
                        Information of others as soon as the Consultant no
                        longer needs it. Personal Information is information
                        that identifies or permits a person or entity to contact
                        an individual. It includes an individual's name,
                        address, email address, phone number, credit card
                        information, social security or tax identification
                        number and other information associated with these
                        details. The California Consumer Privacy Act Addendum to
                        the Consultant Agreement is expressly incorporated into
                        and made part of these Policies &amp; Procedures.
                        Sharing Consultant or Customer Personal Information in
                        any circumstance is considered a violation of the
                        Consultant Agreement, except when obtaining express
                        written permission from a Consultant whose information
                        is being shared. Customer Personal Information must
                        remain private at all times.
                      </p>
                    </li>
                    <li>
                      <strong>Consultant Information Audits</strong>
                      <p>
                        Scout &amp; Cellar will periodically conduct audits to
                        ensure that all Consultant Information is consistent
                        with the Consultant Agreement and these Policies and
                        Procedures. These audits may include (but are not
                        limited to) reviews of email addresses, Personalized
                        URLs (PURL), and Company Names used for Scout &amp;
                        Cellar business purposes. If a Consultant's Information
                        is found to be in violation of the Consultant Agreement
                        or Policies and Procedures, Scout &amp; Cellar is not
                        responsible for any costs (financial or otherwise) that
                        a Consultant incurs due to any required changes. If a
                        Consultant's Personalized URL or email address is found
                        to be in violation, Scout &amp; Cellar will notify the
                        Consultant of needed changes. The Consultant must
                        provide a compliant PURL or email address within 30 days
                        and must switch to the compliant PURL or email address
                        for all Scout &amp; Cellar business purposes within 60
                        days of the initial notification. Failure to comply may
                        be considered a breach of the Agreement and may result
                        in the termination of the relationship.
                      </p>
                    </li>
                    <li>
                      <strong>Brand Standards Education</strong>
                      <ol>
                        <li>
                          The Brand Standards Team will send out a Brand
                          Standards Basics education video and quiz to each new
                          Consultant during the first week after the Consultant
                          enters into a Consultant Agreement with Scout &
                          Cellar. This video and quiz cover regulatory
                          information relevant to the operation of a Scout &
                          Cellar Consultant's independent business. Completion
                          of the quiz with a 9/10 score or higher (hereafter
                          “passing score”) is mandatory to qualify for
                          recognition, incentives, rewards, prizes, and bonuses
                          outside of the standard Compensation Plan and should
                          occur within 30 days of receiving the education link.
                        </li>
                        <li>
                          If any Consultant fails to submit a passing score, the
                          applicable Consultant account will be ineligible for
                          inclusion in recognition (which may include but is not
                          limited to Tuesday Tasting and other monthly
                          recognition, AMP recognition and exclusive events,
                          Incentive Trip qualification and recognition), until
                          the Consultant achieves a passing score on the quiz.
                          Pay will not be suspended and Consultants will not be
                          terminated for failure to achieve a passing score on
                          the quiz.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <strong>Business Basics Kit Refund Policy</strong>
                      <p>
                        The Company believes in its program and its products. If
                        for any reason a Consultant enrolls and finds that the
                        business is not for them, the company will provide a
                        full refund of the BBK and any unopened wine, within 30
                        days of the join date. Any refunds requested after 30
                        but before 365 days will be subject to a 10% restocking
                        fee. Business Basics Kit refunds are not available after
                        a Consultant's first Anniversary Date, except where
                        required by law.
                      </p>
                    </li>
                    <li>
                      <strong>Consultant Status</strong>
                      <p>
                        When an individual completes and submits a Consultant
                        Agreement with Scout &amp; Cellar, and the Agreement is
                        accepted, the individual becomes a Scout &amp; Cellar
                        Independent Consultant who is a self- employed,
                        independent contractor. A Consultant is not an agent of,
                        employee of, or in partnership with the Company and may
                        not represent themselves as such, including on Social
                        Media. Consultants may not represent themselves as
                        anything other than an “Independent Consultant” or a
                        “Founder's Club Member” for those who qualified for such
                        title. Consultants have no authority to bind Scout &amp;
                        Cellar to any obligation.
                      </p>
                    </li>
                    <li>
                      <strong>Usual Course of Consultant Business</strong>
                      <p>
                        The Consultant acknowledges and agrees that the
                        Company's usual course of business is selling Scout &
                        Cellar's products. Consultant represents and warrants
                        that the Consultant is not in the business of selling
                        wine or other Scout & Cellar products. The Consultant
                        acknowledges and agrees that Company's usual course of
                        business is not education, marketing, and promotions.
                      </p>
                      <p>
                        The Consultant represents and warrants that the
                        Consultant is in the business of education, marketing,
                        and promotions. The Consultant represents and warrants
                        that the Consultant can and does have business
                        relationships other than that which the Consultant has
                        with Company for which/whom the Consultant can and does
                        perform education, marketing, and promotional services,
                        and that the Consultant can maintain the Consultant's
                        education, marketing, and promotional business without
                        reliance upon the Company.
                      </p>
                      <p>
                        The Consultant acknowledges and agrees that these
                        acknowledgments, representations, and warranties in this
                        section are material inducements to the Company's
                        willingness to enter into the Consultant Agreement with
                        the Consultant, upon which the Company has relied when
                        deciding whether to enter into the Consultant Agreement
                        with Consultant.
                      </p>
                    </li>
                    <li>
                      <strong>Consultant ID Number</strong>
                      <p>
                        All Consultants are given a unique Consultant
                        Identification Number when joining the Company.
                        Consultant shall use Consultant's ID Number to identify
                        the Consultant to the Company, place orders, structure
                        organizations and track commissions and bonuses. A
                        Consultant may provide the ID Number to Customers and
                        potential Customers to assist the Company in identifying
                        and linking the Customer or potential Customer to that
                        Consultant. Consultant ID numbers may be required when a
                        Consultant contacts Support.
                      </p>
                    </li>
                    <li>
                      <strong>Income Taxes</strong>
                      <p>
                        Consultants are responsible for paying their own
                        self-employment taxes, federal income taxes and other
                        taxes required by law. Consultants must adhere to any
                        federal, state, and local laws, as well as Company rules
                        and regulations pertaining to their independent Scout
                        &amp; Cellar business or the acquisition, receipt,
                        holding, selling, distributing, or advertising of Scout
                        &amp; Cellar' services or opportunity.
                      </p>

                      <ol>
                        <li>
                          <strong>1099 Procedures</strong>
                          <p>
                            Every year, Scout &amp; Cellar will provide an IRS
                            Form 1099 MISC (Non-employee Compensation) earnings
                            statement to each U.S. resident as required by the
                            Internal Revenue Service. Each Consultant is
                            responsible for paying local, state and federal
                            taxes on any income generated as a Consultant. If a
                            Scout &amp; Cellar business is tax exempt, the
                            Federal Tax Identification Number must be provided
                            to Scout &amp; Cellar. Any Consultant that does not
                            provide a valid tax identification number is subject
                            to the federal backup withholding laws.
                          </p>
                        </li>
                        <li>
                          <strong>Taxable Scout &amp; Cellar Income</strong>
                          <p>
                            Taxable Income from Scout & Cellar includes (but is
                            not limited to):
                          </p>
                          <ul>
                            <li>
                              Commissions paid as “cash” through
                              HyperWallet/Scout Account;
                            </li>
                            <li>
                              Any SkyWallet bonuses or funds other than those
                              obtained for reasons of product damage or defect;
                            </li>
                            <li>
                              The retail value of any prize, incentive reward,
                              trip, or other experience earned by the Consultant
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>W9 Forms</strong>
                          <p>
                            W-9s are required for all Consultants and should be
                            submitted via email to w9form@scoutandcellar.com
                            immediately upon joining, or prior to the effective
                            date of these Policies and Procedures if the
                            Consultant has not previously submitted a W9.
                            Consultants can find a copy of the W-9 form in The
                            Cellar.
                          </p>
                        </li>
                        <li>
                          <strong>Non-receipt of W9 Form</strong>
                          <p>
                            All Consultants must provide their W9 by the end of
                            their join month or they will be subject to
                            disciplinary action, which may include Lockout, on
                            the 1st of the following month unless they have not
                            earned any compensation.
                          </p>
                          <p>
                            If a consultant has not earned any compensation in
                            their join month, they will not be subject to
                            disciplinary action for failure to submit a W9 form
                            until the end of their first full month, pending
                            receipt of their W9. TIN information provided by the
                            consultant will be run through the IRS' TIN Matching
                            system to confirm accuracy. If inaccurate
                            information was provided by the consultant per the
                            IRS, the consultant will be contacted and placed on
                            Financial Hold pending receipt of correct
                            information. Any Consultant placed on Hold for over
                            60 days may be subject to termination.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <strong>Residency and Age</strong>
                      <p>
                        An individual applying to become a Consultant must live
                        in the USA and must be twenty-one (21) years of age or
                        older, or the age of majority in the place of residency.
                      </p>
                    </li>
                    <li>
                      <strong>Social Security</strong>
                      <p>
                        Scout &amp; Cellar requires a Social Security number of
                        all Consultants for purposes of internal identification.
                        Social Security numbers will be kept strictly
                        confidential. Scout &amp; Cellar requires either a
                        Federal Tax Identification Number or an Employer
                        Identification Number for individuals enrolling a
                        business into a Consultant position; the individual will
                        also be required to provide their Social Security
                        number.
                      </p>
                    </li>
                    <li>
                      <strong>Fictitious Positions</strong>
                      <p>
                        A Consultant must be a real person. Any attempt by a
                        Consultant to falsify documents, or enroll as a
                        fictitious person, or enroll a fictitious Consultant, or
                        use a Social Security number which is fictitious, or
                        does not belong to the party indicated is grounds for
                        disciplinary action, which may include suspension or
                        termination of the Consultant position.
                      </p>
                    </li>
                    <li>
                      <strong>Consultant Benefits</strong>
                      <p>
                        Once Scout &amp; Cellar accepts the Consultant
                        Agreement, the Consultant will have access to several
                        benefits. Benefits include the following:
                      </p>
                      <ul>
                        <li>
                          Ability to educate about, market, and promote Scout
                          &amp; Cellar products, services, and the Clean-
                          Crafted<sup>TM</sup> Commitment;
                        </li>
                        <li>
                          Participation in the Scout &amp; Cellar Compensation
                          Plan;
                        </li>
                        <li>
                          Access to Scout &amp; Cellar literature, marketing
                          materials, industry news, and other communications;
                        </li>
                        <li>
                          Participation in Scout &amp; Cellar-sponsored support
                          service training, motivational and recognition
                          functions; and
                        </li>
                        <li>
                          Participation in promotional and incentive contests
                          and programs sponsored by Scout &amp; Cellar.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>
                        Term of Agreement, Renewal, and Renewal Fee
                      </strong>
                      <p>
                        Scout &amp; Cellar reserves the right to not renew a
                        Consultant Agreement in its sole discretion. Otherwise,
                        the Consultant Agreement is effective from the date of
                        acceptance by Scout &amp; Cellar and will automatically
                        renew every twelve (12) months on the anniversary of the
                        date Consultant entered into the Consultant Agreement
                        (also known as the Consultant's “Join Date”), unless
                        either party notifies the other in writing that it does
                        not wish to renew the Consultant Agreement prior to the
                        next renewal date, or unless terminated earlier as
                        provided in the Agreement.
                      </p>
                      <p>
                        One year after a person becomes an Independent
                        Consultant, the Consultant will be billed an annual
                        Renewal Fee of $129.95 plus applicable sales tax, which
                        includes the renewal of the Consultant's Personal Scout
                        &amp; Cellar website and access to additional technology
                        programs and initiatives which may be rolled out from
                        time-to-time for optional Consultant best practice
                        education and support. This Renewal Fee will be charged
                        automatically to Consultant's primary credit card on
                        file, or the credit card designated for payment of
                        Personal Website Membership by Consultant in The Cellar,
                        and paid to Scout &amp; Cellar unless the Consultant
                        Agreement is cancelled or terminated.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>OPERATING A CONSULTANT POSITION</strong>
                  <ol>
                    <li>
                      <strong>
                        Spouses and Common Law Married Couples; Adult Children
                      </strong>
                      <p>
                        Except as described in this section, spouses, registered
                        domestic partners, or common law married couples who
                        wish to become Consultants must be jointly mentored as a
                        single Consultant under a single Mentor using a single
                        Social Security Number. Spouses, registered domestic
                        partners, and common law married couples may neither
                        mentor each other directly or indirectly nor have
                        different Mentors.
                      </p>
                      <p>
                        Children over the age of twenty-one (21) residing with
                        their parents who meet all of the eligibility
                        requirements may have their own Scout &amp; Cellar
                        independent business.
                      </p>
                      <p>
                        This provision is not applicable where two existing
                        Consultants marry each other (or enter into a registered
                        domestic partnership or common law marriage) or where
                        one spouse, registered domestic partner, or member of a
                        common law married couple receives an independent Scout
                        &amp; Cellar business via inheritance.
                      </p>
                    </li>
                    <li>
                      <strong>Types of Consultant Entities</strong>
                      <ol>
                        <li>
                          <strong>Individual Consultants</strong>
                          <p>
                            An Individual Scout &amp; Cellar Consultant is
                            someone who solely operates his or her own position
                            or a married couple that operate their business
                            together. Scout &amp; Cellar will not recognize any
                            informal team that joined as a single Consultant on
                            or after 3/15/2019. Spouses who joined as an
                            informal team prior to this date will continue to be
                            recognized as such by Scout &amp; Cellar.
                          </p>
                        </li>
                        <li>
                          <strong>Business Entities as Consultants</strong>
                          <p>
                            After applying, a Consultant may later convert their
                            business to a corporation, LLC or partnership
                            (hereinafter “Business Entity”) for commission
                            purposes by making the election and sending in the
                            following documentation to Customer Support: In
                            addition to submitting a signed Consultant Agreement
                            from each Owner of the Business Entity, a Business
                            Entity must submit a properly completed Business
                            Entity Registration Form, evidence of ownership, and
                            at least one of the following: Certificate of
                            Incorporation, Articles of Organization, Partnership
                            Agreement or relevant documents via the form at
                            https://scoutandcellar.com/contact/. If a Business
                            Entity has only one owner and the owner has
                            previously submitted a signed Consultant Agreement,
                            the earlier Agreement satisfies the above Consultant
                            Agreement requirement. The Company must receive
                            these documents within thirty (30) days from the
                            date the Consultant signed the Consultant Agreement
                            and purchased a Business Basics Kit (except
                            residents of North Dakota, where the purchase of
                            Business Basics Kit is not required). If Company
                            does not receive appropriate documents within the
                            30-day time period, Consultant shall remain active
                            as an individual and Company shall disregard any
                            election by Consultant of their intention to
                            convert.
                          </p>
                          <p>
                            All Owners of a Business Entity that enroll as a
                            Consultant (hereafter “Business Entity Consultant”)
                            shall be jointly and severally liable for and shall
                            indemnify and hold harmless Scout &amp; Cellar from
                            and against any breach of the Consultant Agreement
                            by that Business Entity or any indebtedness or other
                            obligation to Scout &amp; Cellar of such Business
                            Entity. Owners are responsible for complying with
                            all applicable laws in any and all jurisdictions or
                            localities in which the Business Entity conducts
                            business and maintaining the Business Entity in good
                            standing with all applicable jurisdictions. Owners
                            of a Business Entity are responsible for any and all
                            fees relating to the formation and maintenance of
                            the Business Entity.
                          </p>
                        </li>
                        <li>
                          <strong>
                            Actions by Non-Owners of a Business Entity
                          </strong>
                          <p>
                            All education, marketing and mentoring activities of
                            a Business Entity Consultant must be conducted only
                            by the Owners of the Business Entity; these
                            activities cannot be conducted by persons (including
                            employees, agents, or contractors) who are not
                            Owners of the Business Entity without the express
                            written consent of the Company. An exception exists
                            for employees, independent contractors, or agents of
                            an Independent Consultant who are posting to social
                            media on the Consultant's behalf, only on pages or
                            profiles where the Consultant conducts their Scout
                            &amp; Cellar business. Consultants are responsible
                            for ensuring such content does not violate the
                            Consultant Agreement and these Policies and
                            Procedures.
                          </p>
                        </li>
                        <li>
                          <strong>
                            Business Entity Consultants and Responsibility for
                            Non-Owner-created Violations
                          </strong>
                          <p>
                            Each Business Entity Consultant is responsible for
                            the actions of its owners, officers, directors,
                            members, shareholders, partners, employees,
                            contractors, and agents, if any, and as otherwise
                            allowed by these Policies &amp; Procedures. If such
                            individuals engage in any activity which, if
                            performed by the Consultant, would violate the
                            Consultant Agreement, such activity will be deemed a
                            violation by the Consultant and the Company may take
                            remedial action pursuant to the Consultant Agreement
                            and seek other appropriate remedies against such
                            Consultant.
                          </p>
                        </li>
                        <li>
                          <strong>Change of Status</strong>
                          <p>
                            Subject to the above requirements and restrictions,
                            a Consultant may change status from a sole
                            proprietorship to a corporation, limited liability
                            company, partnership or trust, or from one type of
                            Business Entity to another, by submitting a signed
                            Consultant Agreement and, if applicable, a Business
                            Entity Registration Form and, where applicable, at
                            least one of the following: Certificate of
                            Incorporation, Articles of Organization, Partnership
                            Agreement or relevant Trust documents. In addition,
                            a Consultant may add Consultant's spouse to a sole
                            proprietorship as a co-applicant to the Consultant's
                            existing independent Scout &amp; Cellar business by
                            submitting a new Consultant Agreement. In each such
                            case, upon the Company's acceptance of the new
                            Consultant Agreement and, if applicable, the
                            Business Entity Registration Form (and applicable
                            supporting document) and the Consultant's original
                            Consultant Agreement will automatically terminate
                            and be replaced and superseded by the newly formed
                            Consultant Agreement. Note that none of the changes
                            described above will permit a Consultant to change
                            Mentors, except as specified in Part 1, Section
                            2.3.4, or to assign or transfer a Consultant
                            Agreement except as specified in Part 1, Section
                            2.2.5.2.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <strong>Dissolution of a Business Entity</strong>
                      <p>
                        Scout &amp; Cellar is not able to divide commissions
                        among multiple parties, nor is it able to divide a
                        downline organization. Consequently, in the event a
                        business entity that is enrolled as a Business Entity
                        Consultant dissolves, the owners of the business entity
                        must instruct the Company on the identity of the proper
                        party who is to receive and operate the independent
                        Scout &amp; Cellar business of the Business Entity
                        Consultant. Such an independent Scout &amp; Cellar
                        business shall be awarded to a single individual or
                        entity that was previously recognized by the Company as
                        an owner of the business entity; Scout &amp; Cellar will
                        not divide the business among multiple parties or issue
                        separate commission or bonus payments. If the business
                        entity wishes to sell or transfer its independent Scout
                        &amp; Cellar business, it must do so pursuant to Part 1,
                        Section 2.2.5.2 below. In addition, the recipient of the
                        independent Scout &amp; Cellar business must also
                        execute and submit a Consultant Agreement to the Company
                        within thirty (30) days from the date of the dissolution
                        of the business entity or the subject independent Scout
                        &amp; Cellar business will be cancelled.
                      </p>
                    </li>
                    <li>
                      <strong>
                        Naming an Independent Scout &amp; Cellar Business
                      </strong>
                      <p>
                        No Consultant may use any trade name, business name or
                        DBA that includes any Scout &amp; Cellar trademark,
                        trade name, brand name or that otherwise violates Scout
                        &amp; Cellar's Core Values, the Consultant Agreement, or
                        these Policies &amp; Procedures, including when naming
                        or registering a Business Entity.
                      </p>
                    </li>
                    <li>
                      <strong>Succession or Transfer of Businesses</strong>
                      <ol>
                        <li>
                          <strong>
                            Transfer of Consultant Agreement Upon Death
                          </strong>
                          <p>
                            A Consultant may leave Consultant's independent
                            Scout &amp; Cellar business to any heirs. Because
                            Scout &amp; Cellar cannot divide bonuses or
                            commissions among multiple beneficiaries or
                            transferees, in all cases where there are multiple
                            beneficiaries or transferees, all beneficiaries or
                            transferees must form a Business Entity
                            (corporation, LLC, partnership, etc.), and Scout
                            &amp; Cellar will transfer the business and issue
                            commissions to the Business Entity. In the case of a
                            business transfer via testamentary instrument, the
                            beneficiary of the business must provide Scout &amp;
                            Cellar with certified letters testamentary and
                            written instructions of the trustee/personal
                            representative of the estate, or an order of the
                            court, that provides direction on the proper
                            disposition of the business. The beneficiary must
                            also execute and submit to the Company a Scout &amp;
                            Cellar Consultant Agreement within thirty (30) days
                            from the date on which the business is transferred
                            by the estate to the beneficiary or the subject
                            independent Scout &amp; Cellar business will be
                            cancelled.
                          </p>
                        </li>
                        <li>
                          <strong>
                            Sale or Transfer of an Independent Business
                          </strong>
                          <p>
                            Requests to sell, transfer, or change ownership
                            within a Business Entity or individual Scout &amp;
                            Cellar business must be submitted in writing to the
                            Company using the contact form at
                            https://scoutandcellar.com/contact/. Such requests
                            must be accompanied by the written approval of the
                            transferor Consultant's Mentor and two Upline
                            leaders with the career title of Director or higher.
                            In the event there are not two Upline leaders at
                            this career title, consent must be obtained from the
                            two highest career ranking Consultants in the
                            Upline. Regardless of a Consultant obtaining the
                            needed consent from Consultant's Upline, Scout &amp;
                            Cellar may deny a business sale or transfer if, in
                            the Company's sole discretion, the Company
                            determines that the buyer or transferee does not
                            meet the Company's terms and conditions as stated in
                            the then-current Consultant Agreement and Policies
                            &amp; Procedures. Approval of transfers is not
                            effective unless given in writing by the Company.
                          </p>
                          <p>
                            Approval of such requests is dependent on both the
                            transferor Consultant and the transferee being in
                            good standing with the Consultant Agreement and
                            Policies &amp; Procedures. No business associated
                            with a suspended Consultant account or under
                            investigation may be transferred unless and until
                            the matter is resolved. Likewise, no Consultant who
                            is suspended, or under investigation may be the
                            beneficiary of a sale or transfer. Any individual or
                            entity who was, or owned an interest in, a
                            Consultant whose relationship with Scout &amp;
                            Cellar terminated within the prior six months is
                            prohibited from purchasing a Scout &amp; Cellar
                            Independent Business
                          </p>
                          <p>
                            In extreme cases involving family members who are
                            Consultants within the same Downline, Scout &amp;
                            Cellar may authorize a position swap. Scenarios in
                            which a position swap might be allowed include but
                            are not limited to serious illness or accident,
                            long-term disability, tragedy, or other
                            circumstances involving significant life changes
                            that impede the ability of one family member to
                            continue running Consultant's independent Scout
                            &amp; Cellar business. Requests for a position swap
                            must follow the same procedures outlined above and
                            are subject to the same Upline consent requirements.
                            Regardless of a Consultant obtaining the needed
                            consent from Consultant's Upline, Scout &amp; Cellar
                            may approve or deny a position swap if, in the
                            Company's sole discretion, the Company determines
                            that the relevant parties do not meet the Company's
                            terms and conditions as stated in the then-current
                            Consultant Agreement and Policies &amp; Procedures.
                          </p>
                          <p>
                            If a sale or transfer is approved under any
                            circumstances, the buyer/transferee of the business
                            must complete a Consultant Agreement before the
                            transfer will be finalized by Scout &amp; Cellar.
                            Because Scout &amp; Cellar cannot split commissions
                            earned in the same month, Scout &amp; Cellar will
                            finalize the transfer after the end of the month in
                            which the Consultant Agreement is submitted. At the
                            end of the calendar year, Scout &amp; Cellar will
                            issue a 1099-MISC to the Consultant for any
                            commissions paid for the months prior to the
                            finalization of the transfer and to the
                            buyer/transferee for any commissions paid for the
                            months after the finalization of the transfer.
                          </p>
                        </li>
                        <li>
                          <strong>Business Distribution Upon Divorce</strong>
                          <p>
                            Scout &amp; Cellar is not able to divide bonuses or
                            commissions among multiple parties, nor is it able
                            to divide a downline organization. Consequently, in
                            the event a Consultant divorces Consultant's spouse,
                            any settlement or divorce decree must award the
                            business in its entirety to one party. Scout &amp;
                            Cellar will recognize as the owner of the business
                            the former spouse to whom the business is awarded
                            pursuant to a legally binding settlement agreement
                            or decree of the court. The former spouse who
                            receives the Scout &amp; Cellar business (if
                            different than the individual who originally signed
                            the applicable Consultant Agreement) must also
                            execute and submit a Scout &amp; Cellar Consultant
                            Agreement within 30 days from the date on which the
                            divorce becomes final or the business will be
                            cancelled. The other spouse need not observe the
                            six-month waiting period set forth in Part 1,
                            Section 2.3.4 and may immediately enroll as a
                            Consultant under any Mentor of choice.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <strong>
                        Actions of Household Members, Employees or Agents
                      </strong>
                      <p>
                        Each Consultant is responsible for the actions of
                        Consultant's immediate household members (regardless of
                        the household members' status as Scout &amp; Cellar
                        Consultant[s]), except for children over the age of
                        twenty-one (21) that have their own Scout &amp; Cellar
                        independent businesses.
                      </p>
                    </li>
                    <li>
                      <strong>Multiple Consultant Accounts</strong>
                      <p>
                        Each person is limited to one single Consultant Account
                        and one single Customer Account. A consultant who has an
                        interest or ownership in any entity that is affiliated
                        with a Consultant Account is prohibited from maintaining
                        or being affiliated with an additional Consultant
                        Account. A Consultant may, however, maintain or
                        otherwise be associated with one Customer Account (e.g.
                        A married couple may not have a Consultant account and
                        more than one Customer account, regardless of whose name
                        appears on the accounts).
                      </p>
                    </li>
                    <li>
                      <strong>
                        Consultant Accounts Associated with Multiple Individuals
                      </strong>
                      <ol>
                        <li>
                          For purposes of compensation, incentives, recognition,
                          or other perks and programs, each Consultant account
                          will be treated as one Consultant, regardless of the
                          number of individuals associated with a given
                          Consultant account. As such, each Consultant account
                          may earn one (1) of any bonus, incentive, or other
                          reward. Multiple bonuses, incentives, or other rewards
                          will not be paid out to each individual on the
                          account.
                        </li>
                        <li>
                          At Scout &amp; Cellar's sole and exclusive discretion,
                          married couples acting as a single Consultant (who
                          joined as a Consultant on or before 3/15/2019) may
                          purchase access to one additional incentive slot or
                          reward, but only if the incentive has already been
                          earned by the Consultant.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>MENTORING</strong>
                  <ol>
                    <li>
                      <strong>Mentoring Other Consultants</strong>
                      <p>
                        Consultants may mentor other persons to become
                        Consultants. However, Consultants earn Commissions and
                        Performance Bonuses in the Program based solely on the
                        marketing and promotion of products and the
                        Clean-Crafted<sup>TM</sup> Commitment, and not based on
                        the recruitment or enrollment (mentoring) of other
                        Consultants.
                      </p>
                      <p>
                        It is not the responsibility of the Scout &amp; Cellar
                        Customer Support team to onboard and train new
                        Consultants. Consultants are Independent Business owners
                        and it is each Consultant's responsibility to equip
                        themself with the knowledge needed to conduct their
                        Independent Scout &amp; Cellar Business.
                      </p>
                    </li>
                    <li>
                      <strong>Responsibilities of Mentors</strong>
                      <p>
                        Mentors should present the products and the Program to
                        others in a manner that complies with the Consultant
                        Agreement and these Policies and Procedures. In
                        addition, Mentors are responsible for helping,
                        motivating, and training their Downlines about the
                        products and the Program. As such, Mentors should:
                      </p>
                      <ul>
                        <li>
                          Communicate to their Downlines to ensure that their
                          Downline Consultants do not make improper product or
                          income claims, engage in illegal or inappropriate
                          conduct or otherwise violate the Consultant Agreement;
                        </li>
                        <li>
                          Assist and motivate their mentored Consultants by
                          having ongoing contact and communication, which may
                          include written correspondence, personal meetings,
                          telephone contact, voicemail, e- mail, text messages
                          and sessions and/or accompanying their mentored
                          Consultants to Scout &amp; Cellar educational
                          offerings; and
                        </li>
                        <li>
                          Motivate their mentored Consultants in subject matter
                          regarding Scout &amp; Cellar products, effective
                          education and marketing techniques, the Compensation
                          Plan, and compliance with these Policies and
                          Procedures.
                        </li>
                        <li>
                          Never charge a fee for coaching or mentoring directly
                          related to the Downline's Independent Business.
                          Charging fees may be acceptable only to recoup the
                          cost associated with venue or equipment rental, and
                          Consultants must not profit from such reimbursements.
                        </li>
                        <li>
                          Always remember that Mentoring and educating a
                          Downline Consultant is an essential part of ensuring
                          your Downline is effectively communicating and abiding
                          by the Core Values and requirements of these Policies
                          and Procedures and as such is the responsibility of
                          the Mentor.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Applicant Rights</strong>
                      <p>
                        Because of mentoring ethics, Scout &amp; Cellar
                        encourages any person in the process of enrolling as a
                        new Consultant (“Applicant”) to enroll in the Program
                        under the Mentor who initially introduced the Applicant
                        to the Program. Every Consultant, however, has the right
                        to choose who Consultant's Mentor will be. As such, if
                        an Applicant asks to be registered under another Mentor
                        prior to submitting the Consultant Agreement, Scout
                        &amp; Cellar reserves the right to honor such a request.
                      </p>
                      <p>
                        Scout &amp; Cellar does not endorse or condone any of
                        its Consultants to recruit the Customers or Consultants
                        of any other Consultant under any circumstances relating
                        to the Scout &amp; Cellar or other business opportunity.
                        If such conduct is reported to the Company, the Company
                        may deem such conduct to be a breach of the Consultant
                        Agreement, resulting in termination of the Consultant
                        Agreement.
                      </p>
                      <p>
                        If two Consultants both claim to be the Mentor of an
                        Applicant, Scout &amp; Cellar shall regard the first
                        Consultant Agreement received as the controlling
                        Consultant Agreement and shall designate the Consultant
                        listed as the Mentor on such Consultant Agreement as the
                        Applicant's Mentor.
                      </p>
                      <p>
                        Scout &amp; Cellar reserves the sole and exclusive right
                        to determine the final disposition between Consultants
                        regarding claims of Mentorship of another Consultant.
                        CONSULTANTS WAIVE ANY AND ALL CLAIMS AGAINST THE
                        COMPANY, ITS OFFICERS, DIRECTORS, OWNERS, EMPLOYEES, AND
                        AGENTS THAT RELATE TO OR ARISE FROM THE COMPANY'S
                        DECISION REGARDING THE DISPOSITION OF ANY DOWNLINE
                        ORGANIZATION THAT IS IMPLICATED IN A DISPUTE BETWEEN
                        CONSULTANTS.
                      </p>
                    </li>
                    <li>
                      <strong>Change of Mentor</strong>
                      <p>
                        Consultants changing from one Mentor to another is
                        strictly prohibited absent extraordinary circumstances
                        at the discretion of the Company as further described
                        below.
                      </p>
                      <p>
                        The only means by which a Consultant may legitimately
                        change Consultant's Mentor is by voluntarily canceling
                        Consultant's Consultant Agreement in writing and
                        remaining inactive for at least six months. Following
                        the period of inactivity, the former Consultant may
                        reapply under a new Mentor. The Consultant will lose all
                        rights to Consultant's former downline organization upon
                        cancellation.
                      </p>

                      <ol>
                        <li>
                          <strong>Extraordinary Circumstances</strong>
                          <p>
                            The Company, at its sole discretion, may authorize a
                            change of Mentor in extraordinary circumstances such
                            as a mistake in the enrollment process, serious
                            illness, or a life-altering change in circumstance.
                            In such instances, the Consultant requesting the
                            transfer must submit a written request to the
                            Company for the change of Mentor and also submit a
                            written authorization from Consultant's current
                            Mentor as well as the two (2) Consultants
                            immediately above such Mentor, in addition to
                            acknowledgement from the transferee's new Mentor.
                            Additional documentation related to the
                            extraordinary circumstances may be required.
                          </p>
                        </li>
                        <li>
                          <strong>
                            Genealogy Changes and Compensation Plan Manipulation
                          </strong>
                          <p>
                            The Company will not authorize such a change to
                            support any placement exercises which would
                            compromise the compensation plan. Examples of this
                            include (but are not limited to):
                          </p>
                          <ul>
                            <li>
                              Genealogy Changes made to redistribute Downline
                              Volume;
                            </li>
                            <li>
                              Encouraging Consultants to cancel a Consultant
                              Agreement for reasons related to Compensation (via
                              verbal or written statements, offering to purchase
                              a Consultant’s business, or other means);
                            </li>
                            <li>
                              Any activity that results in higher commission
                              payments for a Consultant without that Consultant
                              engaging in business-building activity (such as
                              volume associated with adding new Downline
                              Consultants, adding new Customers, or placing
                              orders).
                            </li>
                          </ul>

                          <p>
                            Further, the Company maintains a record of all
                            genealogy change requests made under this provision
                            so that it may take appropriate action with regard
                            to Consultants who repeatedly make such requests or
                            who share a common upline demonstrating a team trend
                            with respect to these requests.
                          </p>
                        </li>
                        <li>
                          <strong>Improper Change of Mentor</strong>
                          <p>
                            In cases in which a Consultant has attempted to or
                            managed to change Consultant’s Mentor despite
                            failing to comply with the Consultant Agreement and
                            Policies & Procedures, Scout & Cellar reserves the
                            sole and exclusive right to determine the final
                            disposition of the Downline organization that was
                            developed by the Consultant in Consultant’s second
                            line of mentorship. CONSULTANTS WAIVE ANY AND ALL
                            CLAIMS AGAINST SCOUT & CELLAR, ITS OFFICERS,
                            DIRECTORS, OWNERS, EMPLOYEES, AND AGENTS THAT RELATE
                            TO OR ARISE FROM SCOUT & CELLAR’S DECISION REGARDING
                            THE DISPOSITION OF ANY DOWNLINE ORGANIZATION THAT
                            DEVELOPS BELOW A CONSULTANT WHO HAS IMPROPERLY
                            CHANGED MENTORS.
                          </p>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              <strong>SECTION 3: COMPENSATION PLAN</strong>
              <ol>
                <li>
                  <strong>Bonus and Commission Qualifications</strong>
                  <p>
                    A Consultant must be in compliance with the Consultant
                    Agreement and Policies & Procedures to qualify for bonuses
                    and commissions. So long as a Consultant complies with the
                    Consultant Agreement and Policies & Procedures, the Company
                    shall pay commissions to such Consultant in accordance with
                    the Compensation Plan.
                  </p>

                  <ol>
                    <li>
                      Consultants shall not pay for downline orders to help
                      themselves or any downline consultants achieve a
                      particular rank or bonus. All bonuses and commissions must
                      be earned by the Consultant receiving them.
                    </li>
                    <li>
                      Scout & Cellar will not issue a payment to a Consultant
                      without the receipt of all required paperwork, including,
                      in the case of a business entity, a signed Business Entity
                      Registration Form and supporting documentation.
                    </li>
                    <li>
                      Scout & Cellar reserves the right to postpone bonus and
                      commission payments until such time the cumulative amount
                      exceeds $20.
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Computation of Commissions and Discrepancies</strong>
                  <ol>
                    <li>
                      A Consultant must review each monthly statement and
                      bonus/commission report promptly. If a Consultant believes
                      any errors have been made regarding commissions, bonuses,
                      financial reports, or charges, the Consultant must notify
                      Scout & Cellar in writing within thirty (30) days of the
                      date of the purported error or incident in question. After
                      the thirty-day “grace period,” no additional requests will
                      be considered for commission, bonus, or other reward
                      recalculations, except in the discretion of the Company.
                      This grace period also applies to Consultant Tasting
                      Rewards, and in this case, begins on the business day
                      following the closure of a qualifying Tasting.
                      <ol>
                        <li>
                          Scout & Cellar will not be responsible for any errors,
                          omissions, or problems regarding commissions, bonuses,
                          financial reports, or charges not reported to Scout &
                          Cellar within thirty (30) days.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Reports</strong>
                  <p>
                    - All information provided by Scout & Cellar including, but
                    not limited to personal volume (or any part thereof) and
                    downline mentoring activity is believed to be accurate and
                    reliable. Nevertheless, due to various factors, (including,
                    but not limited to the inherent possibility of human and
                    mechanical error; the accuracy, completeness, and timeliness
                    of orders; denial of credit cards, and other related
                    factors) reports provided in the Consultant’s Cellar may be
                    delayed from time to time. Scout & Cellar is committed to
                    providing Consultants with accurate and reliable information
                    so that a Consultant can successfully run their business. In
                    the event a Consultant finds an error or experiences a delay
                    in accessing timely information, the Consultant should
                    contact Customer Support via the form at
                    https://scoutandcellar.com/contact.
                  </p>
                </li>
                <li>
                  <strong>Payment Processing</strong>
                  <p>
                    Scout & Cellar uses an independent third-party payment
                    processor (“Payment Processor”) to pay Commissions and
                    Performance Bonuses earned by Consultants through the
                    Compensation Plan. The Payment Processor will set up an
                    account for Consultants (“Scout Account”) and will deposit
                    monies owed to Consultants into their Scout Account. With
                    the exception of certain Performance Bonus payments made on
                    an exception basis, all Commissions or Performance Bonuses
                    that Consultants may earn will be paid through this program.
                    However, this payment processing service may be terminated
                    or modified by the Company or the Payment Processor at any
                    time upon notice as specified in these Policies and
                    Procedures. CONSULTANTS WAIVE ANY AND ALL CLAIMS AGAINST THE
                    COMPANY, THE PAYMENT PROCESSOR, AND THEIR OFFICERS,
                    DIRECTORS, OWNERS, EMPLOYEES, AND AGENTS IN THE EVENT THAT
                    THE COMPANY AND/OR ITS PAYMENT PROCESSOR MAKE AN ERROR THAT
                    RESULTS IN AN UNDERPAYMENT OR OVERPAYMENT TO A CONSULTANT,
                    AND EACH CONSULTANT AUTHORIZES THE COMPANY, THROUGH THE
                    PAYMENT PROCESSOR, TO DEBIT OR CREDIT CONSULTANT’S ACCOUNT
                    AS NECESSARY TO CORRECT ERRORS.
                  </p>
                  <p>
                    Consultant expressly authorizes that the following payment
                    processor fees may be deducted from Scout Account funds.
                    These fees are subject to changes made by the Payment
                    Processor and may change with as little as 30 days’ notice:
                  </p>

                  <ol>
                    <li>Monthly Platform Fee: $1.75</li>
                    <li>Personal Check Fee: $3.00</li>
                    <li>Debit Card Transaction Fee: $1.50</li>
                    <li>Card Cost (if not loaded within 60 days): $2.95</li>
                    <li>
                      ACH Returned Charge (Incorrect bank account or routing
                      number): $10.00
                    </li>
                  </ol>

                  <p>
                    Note: There is not a Transaction Fee associated with ACH.
                  </p>
                </li>
                <li>
                  <strong>Refund Adjustments</strong>
                  <p>
                    When a refund is issued to a Customer or Consultant under
                    Part 1, Section 4 of the Policies and Procedures, the
                    qualifications, Commissions, and Performance Bonuses
                    attributable to the returned product(s) upon which the
                    refund(s) were issued will be deducted from the Consultant’s
                    current and future qualifications, Commissions, and
                    Performance Bonuses. These deductions will be made as soon
                    as the month in which the refund was given and will continue
                    every Commission Period thereafter until the Commissions and
                    Performance Bonuses are recovered from the Consultant who
                    received the Commissions and Performance Bonus on the volume
                    of the returned product. In the event any Consultant
                    terminates the applicable Consultant Agreement and the
                    amounts of the Commissions and Performance Bonuses
                    attributable to the refunded product(s) have not yet been
                    fully recovered by Scout & Cellar, the remainder of the
                    outstanding balance may be set off against any earnings
                    amounts owed to the terminated Consultant or against any
                    refunds due the terminated Consultant.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <strong>SECTION 4: ORDERING AND SHIPMENTS</strong>
              <ol>
                <li>
                  <strong>General Order Policies</strong>
                  <ol>
                    <li>
                      Federal law requires a signature be obtained from an
                      individual over the age of 21 for all shipments which
                      include alcoholic products. Notes with a signature left
                      for the common carrier cannot be accepted as a replacement
                      for an individual signing for the shipment. Scout & Cellar
                      recommends that orders are shipped to a business address
                      or a nearby holding facility for prompt, successful
                      delivery and to protect the order contents. Consultants
                      are trained to advise their Customers of this important
                      practice. The Company cannot guarantee the condition of
                      any order if delivery is not made on the first delivery
                      attempt. Orders that are not delivered on the initial
                      attempt may be held in a facility that is not temperature
                      controlled. Orders which contain only non-alcoholic
                      products may be left at the delivery address without a
                      signature.
                    </li>
                    <li>
                      A Consultant shall not use another Consultant’s or
                      Customer’s credit card to join the Company. A Consultant
                      may not place orders for Consultants or customers in their
                      downline organization using their own credit card in order
                      to qualify for any fast start bonuses, trips, promotions
                      or other incentive programs. This is considered
                      manipulation of the Compensation Plan. An individual
                      engaging in such activity will be in breach of the
                      Agreement and Scout & Cellar may immediately terminate the
                      Agreement without notice and an opportunity to cure.
                    </li>
                    <li>
                      Regarding an order with an invalid or incorrect payment,
                      the Company will attempt to contact the Consultant by
                      phone, mail, or e-mail in order to obtain another form of
                      payment. If these attempts are unsuccessful after ten (10)
                      business days, the order will be canceled.
                    </li>
                    <li>Prices are subject to change without notice.</li>
                    <li>
                      A Consultant or Customer who is the recipient of an
                      incorrect order must notify the Company within 14
                      (fourteen) calendar days from receipt of the order.
                    </li>
                    <li>
                      When a card processor forcibly reverses a credit card
                      transaction resulting in a return of funds to the
                      cardholder, this is known as a chargeback. When Scout &
                      Cellar receives a chargeback notice, the account in which
                      the service was purchased (and any other accounts held by
                      the Consultant or a member of the Consultant’s household)
                      is immediately blocked, and all related services in the
                      account are terminated (I.E. Scout Circle subscriptions).
                      If a Consultant requests a chargeback and does not timely
                      reply to correspondence from Scout & Cellar about said
                      chargeback, the failure to communicate may be considered a
                      breach of the Agreement and the Consultant’s account may
                      be subject to termination.
                    </li>
                    <li>
                      If a chargeback was requested inadvertently, a Consultant
                      or Customer must contact the credit card provider and
                      issue a chargeback reversal. Reversing the chargeback is
                      the only way to restore a blocked account.
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Deliveries</strong>
                  <ol>
                    <li>
                      Each order must be addressed to a single end consumer of
                      the products contained in that order. If the order
                      contains any alcoholic products, the end consumer must be
                      21 and available to provide identification and proof of
                      their age to the courier upon delivery. Failure to provide
                      this information may result in a non-deliverable order.
                    </li>
                    <li>
                      Subject to applicable state laws, customers/end consumers
                      may ship orders to the Consultant's address for final
                      delivery. Such orders must be paid for by the end consumer
                      and shipped with the end consumer listed as the recipient
                      n the shipping label and must not be opened by the
                      Consultant. Consultants are responsible for knowing and
                      abiding by any applicable state or local regulations which
                      may restrict the Consultant's ability to receive orders
                      for their customers.
                    </li>
                    <li>
                      <strong>Non-Deliverable Orders</strong>
                      <p>
                        In some cases, an order may be returned to the Company
                        because the common carrier is unable to deliver it to
                        the provided shipping address, which may happen because
                        the Customer or Consultant did not accept the order; the
                        Customer or Consultant was not available to accept
                        delivery for the order, which requires an adult
                        signature upon delivery; or the Customer of Consultant
                        provided incorrect shipping information.
                      </p>
                      <p>
                        When this happens, the Company will, at its sole
                        discretion, contact the Consultant and attempt to reship
                        the order. If reshipment is not possible or desired, no
                        later than five (5) days after the initial contact, the
                        Company will refund the cost of the order less a
                        twenty-five percent (25%) restocking fee and shipping
                        and handling fees and neither the Consultant nor
                        Consultant’s Upline will receive credit for the order.
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              <strong>
                SECTION 5: ORDER CANCELLATIONS, RETURNS AND REFUNDS
              </strong>
              <p>
                The Company is confident that its Customers and Consultants will
                be completely satisfied with their purchases. However, if a
                Consultant or Customer is dissatisfied, they may return all or
                part of their order according to the following guidelines. The
                following policy is the exclusive method for requesting or
                processing returns or refunds, and any return or refund
                transaction shall be solely between the end- use Customer and
                Scout & Cellar.
              </p>

              <ol>
                <li>
                  <strong>Order Cancellations</strong>
                  <p>
                    A Consultant or Customer may cancel an order placed through
                    a tasting within three (3) business days of placing the
                    order. If the cancellation is timely, the Consultant or
                    Customer will receive a 100% refund of the purchase price,
                    applicable sales taxes, and shipping costs. Tasting orders
                    are not cancellable following this three-business-day period
                    and are then subject to the Company standard return policies
                    as further described below. Orders placed outside of a
                    tasting may be cancelled for a full refund any time before a
                    shipping label has been printed for the order. After a
                    shipping label has been printed for an order, the order is
                    considered “shipped” and is subject to the Company’s
                    standard return policies, except as provided above.
                  </p>
                </li>
                <li>
                  <strong>Returns of Damaged or Defective Products</strong>
                  <ol>
                    <li>
                      <strong>Damaged Products</strong>
                      <p>
                        If a Consultant or Customer receives broken or leaking
                        bottles or otherwise-damaged products, they may contact
                        the Customer Support department immediately at
                        https://scoutandcellar.com/contact/. Scout & Cellar will
                        either:
                      </p>
                      <ul>
                        <li>
                          Ship replacement(s) of equal value to the end consumer
                          on the original order; or
                        </li>
                        <li>Provide a credit of the amounts paid.</li>
                      </ul>
                      <p>
                        To help the Company resolve the issue, photos may be
                        requested to determine the best course of action.
                        Consultants and Customers may be given the opportunity
                        to keep items with damaged labels at special pricing, at
                        the discretion of the Company. All claims must be made
                        within seven (7) days of receipt.
                      </p>
                    </li>
                    <li>
                      <strong>Defective Products</strong>
                      <p>
                        If a Consultant or Customer believes they have received
                        a defective product, the Consultant or Customer may
                        contact the Customer Support Department within sixty
                        (60) days from the date of the order. Scout & Cellar
                        will either:
                      </p>
                      <ul>
                        <li>Ship equal value replacement(s); or</li>
                        <li>Provide a credit of the amounts paid.</li>
                      </ul>
                      <p>
                        For alcoholic products, defective means that the wine is
                        flawed or corked; not “I don't like it.”
                      </p>
                    </li>
                    <li>
                      <strong>Defective "Cellar Store" Merchandise</strong>
                      <p>
                        Defective or incorrectly-sized items purchased through
                        the Cellar Store (see glossary) may be exchanged within
                        sixty (60) days of the original purchase date by
                        contacting Customer Support to obtain a return shipping
                        label. Once the item to be exchanged is received at
                        Scout & Cellar, the Company will either:
                      </p>
                      <ul>
                        <li>
                          Create a new order without charging the Customer or
                          Consultant to re-ship the item if exchanging for the
                          same item or a different size of the same wearable
                          item, or
                        </li>
                        <li>
                          Issue Company store credit in the original amount paid
                          if exchanging for a different item.
                        </li>
                      </ul>
                      <p>
                        For best results on entertaining-related merchandise,
                        please hand wash only. Any wear and tear resulting from
                        actions outside of this practice will not be eligible
                        for replacement. All Merch purchased while on "sale
                        and/or clearance” is final sale.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>
                    Returns Under the Satisfaction/“Do The Right Thing”
                    Guarantee
                  </strong>
                  <p>
                    If a customer is not satisfied with a Scout & Cellar wine,
                    the customer or the corresponding Consultant may contact
                    Customer Support within sixty (60) days from the date of the
                    order for a credit to be used at Scout & Cellar for the
                    amount paid (less applicable shipping charges and taxes.)
                    Consultants who are not satisfied with a Scout & Cellar wine
                    ordered under the Consultant’s Customer or Consultant
                    account, in the absence of any damage or defect, may return
                    unused bottles as further described in this section. If a
                    Customer or Consultant would like to return any unused
                    bottles, the Consultant or Customer may contact Customer
                    Support for a return shipping label. Once the shipment has
                    been received at our warehouse, the Company will issue a
                    credit in the amount paid (less applicable shipping charges
                    and a 25% restocking fee.)
                  </p>
                </li>
                <li>
                  <strong>
                    Consultant Abuse of Refund, Credit, and Order Placement
                    Policies
                  </strong>
                  <p>
                    Excessive and/or improper refund, credit, or order placement
                    activity may constitute a breach of the Consultant
                    Agreement. Scout & Cellar reserves the right to review this
                    activity and terminate the Consultant Agreement of any
                    Consultant for excessive or improper refund, credit, or
                    order placement activity.
                  </p>
                </li>
                <li>
                  <strong>
                    Out of Stock, Backorders, and Missing/Wrong Items
                  </strong>
                  <p>
                    When a product is out of stock, is on backorder, or there
                    are missing/incorrect items in an order, Scout & Cellar will
                    abide by the following procedures to resolve the issue:
                  </p>

                  <ol>
                    <li>
                      <strong>Backorders</strong>
                      <p>
                        If a product is on backorder, Scout & Cellar will
                        immediately split the order, ship the products in stock
                        right away and ship the backordered items when they
                        arrive in the warehouse at no additional cost. The
                        packing slip for the first shipment will identify the
                        items missing from the box and provide details about
                        when they will be received.
                      </p>
                    </li>
                    <li>
                      <strong>Out of Stock</strong>
                      <p>
                        If a product is out of stock, Scout & Cellar will select
                        a comparable substitute. The packing slip will identify
                        the item that sold out and the item being substituted.
                        In most substitution scenarios, the replacement will be
                        of equal or greater value than the product originally
                        purchased at no additional cost. In rare circumstances
                        where this is not the case, Scout & Cellar will extend a
                        credit towards a future purchase for the difference.
                      </p>
                    </li>
                    <li>
                      <strong>Incorrect Items</strong>
                      <p>
                        In the event a shipment contains incorrect items,
                        Customers or Consultants should submit an inquiry using
                        the contact form at https://scoutandcellar.com/contact/.
                        Scout & Cellar will ship the correct items right away
                        and will make arrangements to pick up the items sent by
                        mistake at no additional cost. Customers or Consultants
                        who would like to keep any incorrect items from a
                        shipment should submit an inquiry at
                        https://scoutandcellar.com/contact/ to purchase the
                        items with special pricing.
                      </p>
                    </li>
                    <li>
                      <strong>Missing Items</strong>
                      <p>
                        In the event a shipment is missing items, Customers or
                        Consultants should submit an inquiry using the contact
                        form at https://scoutandcellar.com/contact/. Scout &
                        Cellar will ship the missing item right away or extend
                        store credit at the Customer or Consultant's choice.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Storage (Abandonment Policy)</strong>
                  <p>
                    Completed Local Pick Up orders by Scout & Cellar that are
                    not picked up from our warehouse located in Farmers Branch
                    after thirty (30) calendar days are considered abandoned and
                    will be returned to stock and refunded less a 25% restocking
                    fee.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <strong>LEGALITY</strong>
              <ol>
                <li>
                  <strong>Privacy & Confidentially</strong>
                  <p>
                    Information is collected on Scout & Cellar’s websites by
                    Scout & Cellar. Scout & Cellar is committed to protecting an
                    individual’s privacy and will use personal identifiable
                    information responsibly. Please click
                    https://scoutandcellar.com/privacy to view the Privacy
                    Policy or login to your Cellar account for more information.
                  </p>

                  <ol>
                    <li>
                      <strong>Information Collection and Use</strong>
                      <p>
                        We may collect information from several different points
                        on our website or the Consultant Cellar when you make a
                        purchase from Scout and Cellar or have other
                        interactions where personal data is provided.
                        Information includes, but is not limited to name,
                        address, telephone number, and email address, as well as
                        demographic personal information such as income level,
                        gender, and other personal information that may be
                        provided by the Scout & Cellar on an optional basis.
                        Scout & Cellar is the owner of all information collected
                        on its websites. We will not share or rent this personal
                        information with or to anyone else in any way that is
                        different from what is disclosed in the Privacy Policy
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Entire Agreement</strong>
                  <p>
                    The Consultant Agreement and Policies & Procedures in its
                    current form, and as may be amended by Scout & Cellar in the
                    future, supersedes all prior communications, understandings
                    and agreements between the parties and contains the entire
                    agreement between the parties relating to its subject
                    matter.
                  </p>
                </li>
                <li>
                  <strong>Intellectual Property</strong>
                  <p>
                    Scout & Cellar does not allow the use of its trade names,
                    trademarks, designs, or symbols outside of corporate
                    produced and approved sales aids by any person, including
                    Scout & Cellar Consultants, without prior written
                    authorization from Scout & Cellar. This consent must be on
                    file with Scout & Cellar’s Brand Standards department prior
                    to any use. Questions about the approval process can be
                    submitted through the Brand Standards Contact form in the
                    Knowledge Center or otherwise sent to
                    <a href="mailto:brandstandards@scoutandcellar.com">
                      brandstandards@scoutandcellar.com
                    </a>
                    .
                  </p>
                </li>
                <li>
                  <strong>Unsolicited Emails and Other Communications</strong>
                  <p>
                    A Consultant may not use or transmit unsolicited mass e-mail
                    distribution, unsolicited e-mail or engage in “spamming” in
                    connection with the advertising, promotion or sale of Scout
                    & Cellar products or the Program, or the operation of
                    Consultant’s Independent Scout & Cellar Business. The term
                    “unsolicited e-mail” means the transmission via electronic
                    mail of any material or information to any person on an
                    unsolicited basis. The exceptions to this prohibition are
                    e-mail to: (i) any person who gave the Consultant prior
                    consent to send such e-mail; or (ii) any person with whom
                    the Consultant has an established business or personal
                    relationship. Any e-mail sent by or for a Consultant
                    advertising or promoting the Company's products, the Program
                    or the Consultant’s independent Scout & Cellar business must
                    comply with requirements applicable to commercial e-mailers
                    found in the Controlling the Assault of Non-Solicited
                    Pornography and Marketing Act (“CAN-SPAM”) and the related
                    Federal Trade Commission (“FTC”) regulations, and any other
                    applicable laws and regulations. Without limiting the
                    preceding paragraph, any e-mail sent by a Consultant
                    advertising or promoting the Scout & Cellar products, the
                    Program or the Consultant’s independent Scout & Cellar
                    business must meet all of the following requirements:
                  </p>

                  <ol>
                    <li>
                      The e-mail must clearly identify the Consultant as the
                      sender of the e-mail and as a Scout & Cellar Independent
                      Consultant;
                    </li>
                    <li>
                      There must be a functioning return e-mail address to the
                      sender;
                    </li>
                    <li>
                      There must be a notice in the e-mail that advises that the
                      recipient may reply to the e-mail via the functioning
                      return e-mail address to request that future e-mail
                      solicitations or correspondence not be sent to the
                      recipient (a functioning “opt-out” notice);
                    </li>
                    <li>
                      The e-mail must include the Consultant’s physical mailing
                      address;
                    </li>
                    <li>
                      The e-mail must clearly and conspicuously disclose that
                      the message is an advertisement or solicitation;
                    </li>
                    <li>
                      The use of deceptive subject lines and/or false header
                      information is prohibited; and
                    </li>
                    <li>
                      All “opt-out” requests, whether received by e-mail or
                      regular mail, must be honored.
                    </li>
                  </ol>

                  <p>
                    Scout & Cellar may periodically send commercial e-mails on
                    behalf of Consultants and Consultants agree that Scout &
                    Cellar may send such e-mails and that the Consultants’
                    physical and e-mail addresses may be included in such
                    e-mails as outlined above.
                  </p>
                </li>
                <li>
                  <strong>Telemarketing Limitations</strong>
                  <p>
                    Consultants must not engage in telemarketing in relation to
                    the operation of the Consultant's business. The term
                    “telemarketing” means the placing of one or more telephone
                    calls to an individual or entity to induce the purchase of
                    the Company's products, or to recruit them for the Company's
                    Program.
                  </p>
                  <p>
                    The FTC and the Federal Communications Commission (“FCC”)
                    each have laws that restrict telemarketing practices. Both
                    federal agencies, as well as a number of states, have “do
                    not call” regulations as part of their telemarketing laws.
                  </p>
                  <p>
                    While a Consultant may not be considered a “telemarketer” in
                    the traditional sense, these regulations broadly define the
                    term “telemarketer” and “telemarketing” so that the
                    unintentional action of calling someone whose telephone
                    number is listed on the federal “Do Not Call” registry could
                    cause the Consultant to violate the law. These regulations
                    must not be taken lightly, as they carry significant
                    penalties.
                  </p>
                  <p>
                    “Cold calls” or “state-to-state calls” made to prospective
                    Customers or Consultants that promote either Scout & Cellar
                    products or the Scout & Cellar Program is considered
                    telemarketing and is prohibited.
                  </p>

                  <ol>
                    <li>
                      <strong>Exceptions to Telemarketing Regulations</strong>
                      <p>
                        A Consultant may place telephone calls to prospective
                        Customers or Consultants under the following limited
                        situations:
                      </p>

                      <ol>
                        <li>
                          If the Consultant has an established business
                          relationship with the prospect;
                        </li>
                        <li>
                          In response to a personal inquiry or application
                          regarding the Scout & Cellar Program or Scout &
                          Cellar’s products, within three (3) months immediately
                          before the date of such a call;
                        </li>
                        <li>
                          If the Consultant receives written and signed
                          permission from the prospect authorizing the
                          Consultant to call;
                        </li>
                        <li>
                          If the call is to family members, personal friends,
                          and acquaintances. However, if a Consultant makes a
                          habit of collecting business cards from everyone
                          he/she meets and subsequently calls them, the FTC may
                          consider this a form of telemarketing that is not
                          subject to this exemption;
                        </li>
                        <li>
                          Consultants engaged in calling “acquaintances,” must
                          make such calls on an occasional basis only and not as
                          a routine practice.
                        </li>
                      </ol>
                    </li>
                  </ol>

                  <p>
                    A Consultant shall not use automatic telephone dialing
                    systems in the operation of Consultant’s Independent Scout &
                    Cellar Business. Failure to abide by these policies or
                    regulations as set forth by the FTC and FCC regarding
                    telemarketing may constitute a breach of the Consultant
                    Agreement, resulting in the termination of the Consultant
                    Agreement.
                  </p>
                </li>
                <li>
                  <strong>Robocalls</strong>
                  <p>
                    In all states or otherwise applicable areas where prohibited
                    by law, a Consultant may not transmit, or cause to be
                    transmitted through a third party, (by telephone, facsimile,
                    computer or other device), an unsolicited advertisement to
                    any equipment, which has the capacity to transcribe text or
                    images from an electronic signal received over a regular
                    telephone line, cable line, ISDN, T1 or any other signal
                    carrying device, except as set forth in this section.
                  </p>
                </li>
              </ol>
            </li>
          </ol>

          <p>
            <strong>PART 2: CONSULTANT ACTIVITY GUIDELINES</strong>
          </p>

          <ol>
            <li>
              <strong>
                SECTION 1: CONSULTANT RESPONSIBILITIES IN THE NORMAL COURSE OF
                BUSINESS
              </strong>

              <ol>
                <li>
                  <strong>Professional Conduct</strong>

                  <p>
                    Consultants are expected to conduct themselves in a
                    professional manner at all times and shall protect and
                    promote the good reputation of Scout & Cellar through the
                    following, including on social media or other online
                    platforms:
                  </p>

                  <ul>
                    <li>
                      Be forthcoming, transparent, and professional and conduct
                      business with integrity, understanding and respect;
                    </li>
                    <li>
                      Not engage in illegal, deceptive, misleading, or unethical
                      conduct or practices, including making statements,
                      representations, guarantees or warranties, or publishing
                      misleading or deceptive advertising materials about the
                      Company, its products or the Program;
                    </li>
                    <li>
                      Refrain from making disparaging or misleading statements
                      about Scout & Cellar, including but not limited to its
                      employees, Consultants, partners, products and
                      Compensation Plan;
                    </li>
                    <li>
                      Refrain from any advertising or marketing of alcohol to
                      minors or in spaces where minors may total more than 30%
                      of the advertisement’s projected audience. Because
                      applicable regulations can vary at a state or even local
                      level, all Consultants are responsible for knowing and
                      adhering to any alcohol advertising regulations of the
                      jurisdiction where the advertisement is placed.
                    </li>
                    <li>
                      Refrain from making disparaging or misleading statements
                      about Scout & Cellar’s actual or perceived competitors;
                      and
                    </li>
                    <li>
                      Not engaging in behaviors that fall outside the level of
                      professional conduct, including, but not limited to,
                      substance abuse; verbal abuse and bullying; harassment or
                      discrimination because of race, gender, religion, sexual
                      orientation, sex, color, national origin, ancestry,
                      physical disability, mental disability, medical condition,
                      genetic information, marital status, gender identity,
                      gender expression, age, or military and veteran status;
                      hate or violence-inciting or driven activity; or
                      fraudulent, misleading or deceptive conduct.
                    </li>
                    <li>
                      Use the Scout & Cellar Core Values (Part 1, Section 1.1.2
                      of these Policies and Procedures) to guide your Scout &
                      Cellar Independent Business and all related activity.
                    </li>
                  </ul>

                  <p>
                    The determination of what violates the Professional Conduct
                    terms is in Scout & Cellar's sole discretion. The Company
                    may determine, in its sole discretion, that violation of the
                    Professional Conduct terms constitutes a breach of the
                    Consultant Agreement, resulting in the termination of the
                    Consultant Agreement.
                  </p>
                </li>
                <li>
                  <strong>
                    Income Disclosure Statement, Income Claims, and Compensation
                    Plan Claims
                  </strong>
                  <p>
                    In an effort to conduct best business practices, Scout &
                    Cellar has developed the Income Disclosure Statement
                    (“IDS”). The Scout & Cellar IDS is designed to convey
                    truthful, timely, and comprehensive information regarding
                    the income that Scout & Cellar Consultants earn. A copy of
                    the IDS must be presented to a prospective Consultant
                    (anyone who is not a party to a current Scout & Cellar
                    Consultant Agreement) anytime the Compensation Plan is
                    presented or discussed, or any type of income claim or
                    earnings representation is made. Additionally, a disclaimer
                    which presents the “typical” income of a Scout & Cellar
                    Consultant must be included when discussing or presenting
                    the Compensation Plan or making any allowable Income Claim.
                    Examples of compliant disclaimers are provided at the bottom
                    of the 2022 Compensation Plan document, available in the
                    Cellar. Consultants may discuss the Compensation Plan and
                    income aspects of their Scout & Cellar business only through
                    private, one-on-one conversations.
                  </p>

                  <ol>
                    <li>
                      <strong>Income Claims Examples</strong>
                      <p>
                        The terms “income claim” and/or “earnings
                        representation” (collectively “income claim”) include:
                        (1) statements of average earnings, (2) statements of
                        non-average earnings, (3) statements of earnings ranges,
                        (4) statements of any Consultant’s Personal or Downline
                        Volume over any period, (5) income testimonials, (6)
                        lifestyle claims, and (7) hypothetical claims. Examples
                        of “statements of atypical earnings” include, “Our
                        number one Consultant earned over $1 million last year”
                        or “Our average ranking Consultant makes $5,000 per
                        month.” “I just got a new inground pool.” An example of
                        a “statement of earnings ranges” is “The monthly income
                        for our higher-ranking Consultants is $10,000 on the low
                        end to $30,000 a month on the high end.” Copies of the
                        IDS may be downloaded and printed without charge from
                        https://scoutandcellar.com using the “Income Disclosure”
                        link in the sitemap at the bottom of the page.
                      </p>
                    </li>
                    <li>
                      <strong>Income and Lifestyle Claims</strong>
                      <p>
                        When presenting or discussing the Scout & Cellar
                        opportunity or Compensation Plan to a prospective
                        Consultant, Consultants should not make income
                        projections, income claims, income testimonials, or
                        disclose their Scout & Cellar income (including, but not
                        limited to, the showing of checks, copies of checks,
                        bank statements, or tax records), or the income of any
                        other Scout & Cellar Consultant. Consultants may not
                        publish any Personal Volume or Downline Volume figures,
                        as such figures imply a non-compliant income claim. Nor
                        may Consultants make “lifestyle” income claims.
                      </p>
                      <p>
                        A “lifestyle” income claim is a statement or depiction
                        that implies or states that the Consultant is able to
                        enjoy a luxurious or successful lifestyle due to the
                        income earned from the Consultant’s Scout & Cellar
                        business. Examples of prohibited lifestyle claims
                        include, but are not limited to, representations (either
                        through audio, visual or written medium) that a
                        Consultant was able to quit a job, earn replacement-
                        level income, acquire expensive or luxury material
                        possessions, travel to exotic or expensive destinations,
                        get paid to consume Scout & Cellar products (especially
                        wine), or earn free Scout & Cellar products (especially
                        wine).
                      </p>
                    </li>
                    <li>
                      <strong>Income Claims in Video Format</strong>
                      <p>
                        All Income Claims in any video format are non-compliant.
                        The Company has discretion to determine what does or
                        does not constitute a prohibited income claim. Questions
                        should be directed to brandstandards@scoutandcellar.com.
                      </p>
                    </li>
                    <li>
                      <strong>Compensation Plan Claims</strong>
                      <p>
                        When presenting or discussing the Scout & Cellar
                        Compensation Plan, Consultants must make it clear to
                        prospects that financial success in Scout & Cellar
                        requires commitment, effort, and marketing skill.
                        Conversely, a Consultant must never represent that one
                        can be successful without diligently applying
                        themselves. Examples of misrepresentations in this area
                        include, but are not limited to:
                      </p>

                      <ul>
                        <li>
                          It’s a <strong>turnkey system</strong>.
                        </li>
                        <li>
                          The system will <strong>do the work for you</strong>.
                        </li>
                        <li>
                          Just get in and your{" "}
                          <strong>downline will build through spillover</strong>
                          .
                        </li>
                        <li>
                          The products <strong>sells themselves</strong>!
                        </li>
                        <li>
                          <strong>
                            “I receive residual income” or “I receive passive
                            income”
                          </strong>{" "}
                          (including any income from recurring Scout Circle™ or
                          Auto-Sip™ subscriptions)
                        </li>
                        <li>
                          <strong>No quotas or minimum sales</strong> to remain
                          active
                        </li>
                      </ul>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Alcohol Consumption Policy</strong>
                  <p>
                    Scout & Cellar and the Winery Team are ambassadors for
                    Responsible Consumption of alcohol because we care about
                    people and value providing an opportunity for each of us to
                    live a better life.
                  </p>
                  <p>
                    As an Independent Consultant, you are a brand ambassador, a
                    leader, a host, and a teammate to those around you. As a
                    result, we encourage you to consume responsibly in all
                    situations, with this in mind.
                  </p>

                  <ol>
                    <li>
                      <strong>The Risks of Overconsumption</strong>
                      <p>Overconsumption can:</p>
                      <ul>
                        <li>
                          Cause physical and/or emotional harm to you and those
                          around you
                        </li>
                        <li>Set the wrong example that others may follow</li>
                        <li>
                          Damage or strain your important relationships with
                          customers and Consultants
                        </li>
                        <li>
                          Negatively impact the goodwill of the Scout & Cellar
                          brand and its products
                        </li>
                      </ul>
                      <p>
                        Additionally, drinking and driving is a serious
                        violation of not only these Policies and Procedures, but
                        the law and puts the safety of you and those around you
                        at risk. Arrests and convictions related to alcohol
                        consumption can have devastating consequences. In some
                        states and under these Policies & Procedures, they will
                        serve as a roadblock to future work in the alcohol
                        industry. Consultants are responsible for knowing and
                        abiding by safe behavior, their applicable state
                        regulations, and these Policies & Procedures, and Scout
                        & Cellar reserves the right to immediately terminate its
                        Consultant Agreement with any Consultant found to be in
                        violation of them.
                      </p>
                    </li>
                    <li>
                      <strong>What is Responsible Consumption?</strong>
                      <p>
                        Responsible Consumption means that representatives of
                        Scout & Cellar and any Consultants wishing to enjoy any
                        Scout & Cellar product should consume in moderation and
                        encourage others to do the same.
                      </p>
                      <p>
                        Exactly what constitutes Responsible Consumption may
                        change based on context, including (but not limited to):
                      </p>
                      <ul>
                        <li>
                          Whether Consultants, customers, or Winery Team members
                          are present
                        </li>
                        <li>
                          Whether you or your guests will be driving after
                          consuming
                        </li>
                        <li>Your physical size</li>
                        <li>Length of time between drinks</li>
                        <li>Whether drinks are being consumed with food</li>
                      </ul>
                      <p>
                        It is important to note that alcohol impacts each
                        individual differently and every situation is unique, so
                        you are encouraged to consider your unique context when
                        making these decisions.
                      </p>
                    </li>
                    <li>
                      <strong>
                        What can I do to encourage Responsible Consumption?
                      </strong>
                      <ul>
                        <li>Lead by example and limit your own consumption</li>
                        <li>
                          Limiting consumption (or responsible consumption) can
                          mean different things for different people, as factors
                          like weight and how your body metabolizes alcohol
                          differ from person to person. Additionally, the
                          recommended level of alcohol consumption is not
                          standard. Here are some resources you can use to
                          determine what “responsible Consumption” means for
                          you:
                          <ul>
                            <li>
                              <a
                                href="https://www.cdc.gov/alcohol/fact-sheets/alcohol-use.htm"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://www.cdc.gov/alcohol/fact-sheets/alcohol-use.htm
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.niaaa.nih.gov/alcohol-health/overview-alcohol-consumption/moderate-binge-drinking"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://www.niaaa.nih.gov/alcohol-health/overview-alcohol-consumption/moderate-binge-drinking
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.recoveryanswers.org/resource/guide-drinking-levels/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://www.recoveryanswers.org/resource/guide-drinking-levels/
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          Follow our Tasting Guidelines which prohibit pouring
                          more than 10 ounces of alcohol per guest during a
                          Tasting
                        </li>
                        <li>
                          Offer food and water to your guests when you are
                          hosting
                        </li>
                        <li>
                          Plan ahead! Use a designated driver, public
                          transportation, or a ride-sharing service if you’ll be
                          traveling after consuming alcohol.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>
                        What should I do if I am struggling with substance abuse
                        related to alcohol?
                      </strong>
                      <ul>
                        <li>
                          Share your struggle with someone you trust – a spouse,
                          partner, friend or relative.
                        </li>
                        <li>
                          Ask for help! There are many well-respected
                          organizations that provide substance abuse support and
                          counseling:
                          <ul>
                            <li>
                              <a
                                href="https://www.aa.org/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://www.aa.org/
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.samhsa.gov/find-help/national-helpline"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://www.samhsa.gov/find-help/national-helpline
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://womenforsobriety.org/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://womenforsobriety.org/
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          If working your Scout & Cellar business is creating a
                          stumbling block for you during this time, please
                          consider reaching out to our Brand Standards team for
                          support.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>
                        What should I do if I suspect someone on my team is
                        struggling with substance abuse related to alcohol?
                      </strong>
                      <ul>
                        <li>
                          Do not avoid the situation. We understand it may be
                          awkward, but we encourage you to lean into our Core
                          Values of Family and Doing The Right Thing, share your
                          concerns directly with the person and offer
                          appropriate levels of support as a leader, mentor, or
                          friend.
                        </li>
                        <li>
                          Offer points of connection that do not include alcohol
                          consumption so as to be thoughtful and inclusive,
                          while at the same time, creating a safe place for
                          those who may be struggling.
                        </li>
                        <li>
                          Know your limits! You are a leader, mentor, or friend,
                          not a substance abuse counselor. Setting appropriate
                          boundaries and pointing someone to qualified resources
                          is the right thing to do.
                        </li>
                        <li>
                          Consult publicly available resources for additional
                          support. Some well-respected organizations that
                          provide substance abuse support and counseling are:
                          <ul>
                            <li>
                              <a
                                href="https://www.aa.org/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://www.aa.org/
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.samhsa.gov/find-help/national-helpline"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://www.samhsa.gov/find-help/national-helpline
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://womenforsobriety.org/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                https://womenforsobriety.org/
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          Alert our Brand Standards team if you are aware of a
                          situation that is putting people at risk.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Reporting Policy</strong>
                  <ol>
                    <li>
                      Consultants who become aware that another Consultant has
                      violated the Consultant Agreement should notify Scout &
                      Cellar. A link to submit a ticket to Brand Standards is
                      located in The Cellar>Brand & Marketing>Submit a Ticket to
                      Brand Standards. Details and screenshots of the occurrence
                      should be included in the report if available.
                    </li>
                    <li>
                      Consultants are encouraged to nominate other Consultants
                      whom they find are setting a good example to follow with
                      regards to the Policies & Procedures. Nominations are
                      accepted through the Brand Standards email address.
                    </li>
                    <li>
                      Abuse of the Reporting Policy may be considered a
                      violation of the Policies and Procedures. This includes,
                      but is not limited to, situations which interfere with
                      Scout & Cellar’s ability to conduct a compliance
                      investigation, such as over-reporting of the same
                      potential violation.
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>PROHIBITED CONSULTANT PRACTICES</strong>
                  <ol>
                    <li>
                      <strong>Non-Solicitation</strong>
                      <p>
                        During the term of the Consultant Agreement and for two
                        years thereafter, a Consultant may not, using Scout &
                        Cellar’s trade secrets or other Confidential
                        Information, directly or indirectly solicit any Scout &
                        Cellar Consultant or any Scout & Cellar employee for
                        engagement as an employee, or as an independent
                        consultant, contractor or distributor of any direct
                        selling or network marketing company, nor will
                        Consultant solicit any Scout & Cellar employee to become
                        a Consultant of Scout & Cellar during this period.
                        “Solicit” includes:
                      </p>
                      <ul>
                        <li>
                          communicating information or offering to provide
                          information about any other direct selling or network
                          marketing business opportunity to a Scout & Cellar
                          Consultant or employee;
                        </li>
                        <li>
                          • Posting or messaging information about another
                          direct selling or network marketing business
                          opportunity on any social media site. Consultant posts
                          about such a business must contain no references to
                          the business opportunity and instead contain only
                          information (such as benefits and features) about the
                          products of the non-Scout & Cellar business;
                        </li>
                        <li>
                          Tagging any Scout & Cellar Consultant or employee with
                          a post on any social media site that provides
                          information or offers to provide information about
                          another direct selling or network marketing business
                          opportunity; and
                        </li>
                        <li>
                          Enrolling or attempting to enroll a Scout & Cellar
                          Consultant or employee as a consultant, independent
                          contractor or distributor in another direct selling or
                          network marketing company; and
                        </li>
                      </ul>
                      <p>
                        This conduct constitutes soliciting even if the
                        Consultant’s actions are in response to an inquiry made
                        by another person who is a Consultant or a Scout &
                        Cellar employee.
                      </p>
                      <p>
                        If a former Consultant is in violation of this
                        non-solicitation provision more than one year after the
                        termination of their Consultant agreement, their
                        Non-Solicitation Period extended to one year from the
                        date of the Consultant's last solicitation of any other
                        Scout & Cellar Consultant or Winery Team member.
                      </p>

                      <ol>
                        <li>
                          <strong>
                            Household Members and Non-Solicitation
                          </strong>
                          <p>
                            A Consultant will be held in violation of the
                            Non-Solicitation Policy if their spouse or Household
                            Member engages in solicitation on behalf of the
                            Consultant, regardless of the Household Member’s or
                            spouse’s status as a Scout & Cellar Consultant. For
                            example, if a Consultant’s spouse enrolls with
                            another Direct Selling company (or other business)
                            and proceeds to use the Scout & Cellar Consultant’s
                            Confidential Information to grow the non-Scout &
                            Cellar business, the Scout & Cellar Consultant will
                            be held in violation of the Non-Solicitation policy.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <strong>Competitive Businesses and Comarketing</strong>
                      <p>
                        Consultants are permitted to market or otherwise take
                        part in one or more non-Scout & Cellar businesses. If a
                        Consultant is engaged in a non-Scout & Cellar business,
                        it is the responsibility of the Consultant to ensure
                        that the Consultant’s independent Scout & Cellar
                        business is operated and marketed entirely separate and
                        apart from all other businesses in which they take part.
                        The purpose of this policy is twofold: to avoid
                        potential confusion among customers about the
                        relationship(s) between Scout & Cellar and the other
                        business, and to ensure a Consultant is not
                        unintentionally in violation of any applicable
                        regulations – especially those related to alcohol –
                        which may vary by state or municipality.
                      </p>
                      <p>
                        A Consultant that is marketing a non-Scout & Cellar
                        business, product, or service must ensure that any
                        marketing materials (including but not limited to social
                        media posts) about Scout & Cellar or the other business
                        are posted separately. When marketing more than one
                        business on a given Social Media profile or account, the
                        Consultant must identify themself as an Independent
                        Scout & Cellar Consultant on each post related to Scout
                        & Cellar. All posts related to Scout & Cellar must
                        include #IndependentConsultant #ScoutAndCellar or
                        similar identification so as not to create confusion
                        about which company is being promoted.
                      </p>
                      <p>
                        Due to regulations on alcohol promotion and advertising,
                        Consultants may not market another business involving
                        the sale of alcohol on the same social media page as
                        their Independent Scout & Cellar Business.
                      </p>

                      <ol>
                        <li>
                          <strong>Personal Social Media</strong>
                          <p>
                            A Consultant may market their Scout & Cellar
                            business using a personal page on any social media
                            platform besides TikTok. On such a profile, the
                            Consultant may:
                          </p>
                          <ul>
                            <li>Post personal information</li>
                            <li>Market Scout & Cellar; and/or</li>
                            <li>
                              Market a separate business (including other Direct
                              Selling businesses)
                            </li>
                          </ul>
                          <p>
                            Posts about Scout & Cellar or a non-Scout & Cellar
                            business must be separate. All posts related to
                            Scout & Cellar must be identified with both
                            “#IndependentConsultant” and “#ScoutAndCellar” or
                            substantially similar identification to avoid
                            confusion about which company or product is being
                            promoted.
                          </p>
                          <p>
                            A Personal Social Media page or profile cannot
                            include a banner or cover photo promoting any
                            business.
                          </p>
                        </li>
                        <li>
                          <strong>Business Social Media</strong>
                          <p>
                            A Consultant may create a Scout & Cellar business
                            page on any social media platform (other than
                            TikTok); however, the Consultant may not market a
                            non-Scout & Cellar business on this page, including
                            cover or banner photos.
                          </p>
                          <p>
                            A Consultant may create a non-Scout & Cellar
                            business page on any social media platform; however,
                            the Consultant may not post about Scout & Cellar on
                            this page, including cover or banner photos.
                          </p>
                        </li>
                        <li>
                          <strong>Business Conduct</strong>
                          <p>
                            Section 1.5.1 of Part 2 of the Policies and
                            Procedures, about Non-Solicitation, is applicable
                            when co- marketing two businesses.
                          </p>
                          <p>
                            Consultants may not hold tastings in conjunction
                            with an event for their other non-Scout & Cellar
                            business. For example, holding a Scout & Cellar
                            tasting while promoting the same Consultant’s
                            jewelry business at the tasting is in violation of
                            this policy. Consultants may hold tastings with
                            consultants that represent another company so long
                            as all of the Tasting Guidelines are followed.
                          </p>
                          <p>
                            Consultants may not offer kickbacks for referrals.
                            I.E., If you join my team, I will give you a free
                            yoga session.
                          </p>
                          <p>
                            The Company has full discretion to determine if a
                            post or other co-marketing effort is confusing, has
                            the potential of causing confusion in the field, or
                            creates risk as it relates to any applicable rules,
                            laws or regulations that are applicable to the
                            Company
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <strong>Further Agreement to this Section</strong>
                      <p>
                        Consultant further agrees that the provisions contained
                        in this Section are reasonable and necessary to protect
                        the legitimate interests of the Company and that the
                        Company would not have accepted the Consultant’s
                        Consultant Agreement in the absence of the Consultant’s
                        agreement to these provisions. Nevertheless, it is
                        further agreed that such covenant shall be regarded as
                        divisible and shall be operative as to time, area and
                        scope to the extent that it may be so operative, and if
                        any part of it is declared invalid or unenforceable as
                        to time area, or scope, the validity and enforceability
                        of the remainder shall not be affected, and the
                        agreement shall be read to be restrictive to scope, area
                        and duration to the fullest extent of applicable law.
                        Consultant agrees that the Consultant’s breach or
                        threatened breach of such provisions would cause the
                        Company irreparable harm and significant injury, the
                        amount of which would be extremely difficult to estimate
                        and ascertain, thus making any remedy at law or in
                        damages inadequate. Each Consultant therefore agrees
                        that the Company shall be entitled, without the
                        necessity of posting a bond or security, to the issuance
                        of injunctive relief by any court or arbitrator of
                        competent jurisdiction, enjoining any breach or
                        threatened breach of the above provisions and for any
                        other relief such court deems appropriate. The rights
                        granted to the Company in this Section are in addition
                        to any other remedy available to the Company at law or
                        in equity.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Territory</strong>
                  <p>
                    No Consultant shall claim or imply that Consultant has
                    ownership of, or exclusivity in, any particular geographic
                    area, territory, market, or region. This includes using a
                    specific location (e.g. the name of a city, state, or
                    uniquely-named region) as part of the Consultant’s
                    Personalized URL or social media profile if used for Scout &
                    Cellar business purposes. There are no exclusive territories
                    granted to any Consultant, and all Consultants have the full
                    right to market, promote, and educate consumers about Scout
                    & Cellar products and otherwise conduct Consultant’s Scout &
                    Cellar Independent Businesses in all geographic areas and
                    territories in accordance with the terms of the Consultant
                    Agreement, the Policies & Procedures, and applicable law.
                  </p>

                  <ol>
                    <li>
                      <strong>Active Market</strong>
                      <p>
                        Consultants may not market or promote alcoholic Scout &
                        Cellar products outside the Active Market and may not
                        conduct Consultant’s Scout & Cellar independent
                        businesses in any geographic area or territory outside
                        the United States. For purposes of this Section, the
                        term “Active Market” means those municipalities,
                        counties, and states within the United States in which
                        wine may be sold and distributed by Scout & Cellar.
                        Because the Active Market may change from time-to-time,
                        please refer to The Cellar for the current Active
                        Market.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>REGULATORY CONSIDERATIONS</strong>

                  <ol>
                    <li>
                      <strong>Regulatory Considerations</strong>
                      <p>
                        The sale and transportation of wine is carefully
                        controlled in the United States on both the state and
                        federal levels. As a result, the Company must obtain
                        various approvals, permits and licenses and do business
                        in certain prescribed ways. To facilitate the company’s
                        compliance with applicable laws and regulations
                        pertaining to the sale and transportation of wine, the
                        Company has developed procedures and guidelines, which
                        must be followed by Consultants. Scout & Cellar, without
                        exception, expects Consultants to adhere to these
                        Policies and Procedures as well as any relevant
                        supplemental materials provided in The Cellar, which
                        will be updated from time to time as necessary. Scout &
                        Cellar leadership works to stay informed of all legal
                        and regulatory issues in the wine industry relating to
                        its business. Any Consultant who fails to adhere to the
                        procedures and guidelines that pertain to the Company’s
                        compliance with the sale and transportation of wine will
                        have breached the Consultant Agreement, resulting in the
                        Company’s right to immediately terminate the Consultant
                        Agreement pursuant to the terms of the Consultant
                        Agreement. Any concerns related to alcohol regulation
                        should be sent to the Brand Standards team through the
                        Brand Standards contact form in the Knowledge Center
                        (and linked at the top of these Policies and
                        Procedures).
                      </p>
                      <p>
                        In addition, it is important for Consultants to note
                        that each state has different laws, restrictions, and
                        requirements to host or conduct a tasting and to own and
                        operate an independent business. As an independent
                        business owner, each Consultant is advised to seek legal
                        counsel in the Consultant’s state to ensure compliance
                        with all additional requirements unique to the
                        Consultant’s state.
                      </p>
                      <p>
                        All alcohol regulatory guidelines contained in these
                        Policies and Procedures are in effect for all Scout &
                        Cellar Consultant business activities (including those
                        dealing with non-alcoholic products) unless an exception
                        is noted in Part 2, Section 1.7.9 for business activity
                        that does not involve alcoholic products. Any Consultant
                        business activity involving a combination of alcoholic
                        and non-alcoholic products must comply with all
                        regulatory guidelines for alcoholic products.
                      </p>
                    </li>
                    <li>
                      <strong>
                        Labeling, Packaging and Display of Scout & Cellar
                        Products
                      </strong>
                      <ol>
                        <li>
                          Consultants may not re-label, re-package, refill or
                          alter labels of any Scout & Cellar package or
                          merchandise, information, materials, or program in any
                          way. Any such repackaging or relabeling, including
                          creating “sample sizes” for off-site tastings, may
                          violate federal and state law, which may result in
                          criminal or civil penalties.
                          <p>
                            Consultants may use gift tags, such as those
                            available through Scout & Cellar, to personalize a
                            gifted wine bottle provided the tag does not hide or
                            otherwise alter the bottle’s label itself (i.e.
                            stickers or other labels that cannot be separated
                            from the bottle).
                          </p>
                        </li>
                        <li>
                          Consultants may not cause Scout & Cellar product or
                          trade names to be sold or displayed in a retail
                          establishment, including restaurants, trade shows, and
                          digital storefronts or marketplaces outside of
                          scoutandcellar.com, except upon the prior written
                          approval from the Company.
                        </li>
                        <li>
                          Consultants are strictly prohibited from carrying
                          inventory (outside of what is intended for personal
                          use) or reselling any Scout & Cellar product to
                          Customers or anyone else. All Customer purchases are
                          directly fulfilled by Scout & Cellar.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <strong>
                        Cash & Carry, Offers, Gifts & Charitable Donations
                      </strong>
                      <ol>
                        <li>
                          <strong>Cash & Carry</strong>
                          <p>
                            Consultants are not sellers, but rather educators,
                            marketers and promoters of Scout & Cellar products
                            and the Clean-Crafted Commitment. As a result,
                            Consultants are not licensed or authorized to sell
                            any product directly to Customers or among
                            consultants.
                          </p>
                          <p>
                            In addition, as a result of laws limiting volume of
                            wine shipped, which vary state to state, all orders
                            must be placed through the Scout & Cellar website
                            and wines must be shipped directly to the
                            end-consumer from Scout & Cellar.
                          </p>
                          <p>
                            Bulk orders sent to one address and intended to be
                            distributed to other Consultants or Customers are
                            prohibited and transactions of this nature will be
                            investigated for Cash & Carry activity.
                          </p>
                          <p>
                            All cash and carry activities or exchange of value
                            for wine are prohibited. Due to the serious nature
                            of Cash & Carry violations, any such violation may
                            be considered a breach of the Consultant Agreement
                            and result in immediate termination of the
                            Consultant Agreement.
                          </p>
                          <p>
                            Local Pickup is an exception to the shipping
                            requirement of this rule.
                          </p>
                          <p>
                            Examples of disallowed “Cash & Carry” can include
                            (but are not limited to):
                          </p>
                          <ul>
                            <li>
                              Any time where one Customer/Consultant provides
                              wine to another consultant/customer in exchange
                              for payment via cash, check, PayPal, Venmo or
                              other cash apps.
                            </li>
                            <li>
                              Providing Customers with bottles during a tasting
                              or event. An example: “Thanks for coming to my
                              tasting, you can purchase online, or I have extra
                              bottles here if you want to take one home and I
                              will just replenish my stash.”
                            </li>
                            <li>
                              Providing wine for Customers directly from your
                              personal stash. Ex. “I’ve purchased 4 bottles for
                              $22 apiece, who wants one? Just pay me back!”
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Cash & Carry and No-Ship States</strong>
                          <p>
                            A Consultant that lives in a state to which Scout &
                            Cellar ships products may not deliver to and accept
                            payment from a Consultant or Customer that lives in
                            a no ship state.
                          </p>
                        </li>
                        <li>
                          <strong>Consultant-Created Team Incentives</strong>
                          <p>
                            Managing Directors (MD’s) and Executive Directors
                            (ED’s) may create their own Team Incentives apart
                            from any offers Scout & Cellar may have, provided
                            the procedures in this Section are followed. This is
                            a benefit extended only to our Managing-or-Executive
                            Director Consultants and is therefore not applicable
                            to Consultants at other Career Titles. Creating
                            Incentives for customers is prohibited.
                          </p>
                          <p>
                            Because Consultants are not licensed or authorized
                            to sell wine, no incentive may be tied to the
                            purchase of wine.
                          </p>
                          <p>
                            Scout & Cellar is unable to provide administrative
                            support to consultants running a Team incentive.
                          </p>
                          <p>
                            Allowable Types of Incentives include (but are not
                            limited to)
                          </p>
                          <ul>
                            <li>
                              Team member who brings on the most Scout Circle
                              Club Members during Q4.
                            </li>
                            <li>
                              Team member with most new customer joins (within a
                              certain period).
                            </li>
                            <li>
                              Team member with the most tastings (within a
                              certain period).
                            </li>
                            <li>
                              Team member with a Rank advancement (within a
                              certain period).
                            </li>
                          </ul>
                          <p>
                            Litmus Test: If your incentive includes an audit for
                            volume totals or transactions processed, it is
                            likely non-compliant.
                          </p>
                          <p>
                            Acceptable Methods and Types of Rewards include (but
                            are not limited to)
                          </p>
                          <ul>
                            <li>Gift Cards</li>
                            <li>Day at the Spa</li>
                            <li>Retreats</li>
                            <li>Dinners</li>
                            <li>Tech gadgets</li>
                          </ul>

                          <strong>Process</strong>
                          <p>
                            Managing Directors & Executive Directors must submit
                            a request to Brand Standards for approval before an
                            incentive can be announced to a team.
                          </p>
                          <p>All Approval Requests must:</p>
                          <ul>
                            <li>
                              Be submitted through the Knowledge Center at least
                              two weeks before the intended start date of the
                              incentive.
                            </li>
                            <li>
                              Include all relevant details about the incentive.
                            </li>
                          </ul>
                          <p>
                            The Brand Standards team will review the request to
                            ensure it is aligned with all regulatory and Scout &
                            Cellar policies. Once the incentive is approved, it
                            must not be advertised publicly including through
                            any social media page or channel whose audience
                            extends beyond current Scout & Cellar consultants,
                            and cannot be used as a recruiting or marketing
                            tool.
                          </p>
                          <p>
                            Team Incentives will not be sponsored by Scout &
                            Cellar, and it will be the sole responsibility of
                            the MD or ED to provide any rewards.
                          </p>

                          <ol>
                            <li>
                              <strong>Customer Offers</strong>
                              <p>
                                Because Consultants are not licensed or
                                authorized to sell directly to Customers and
                                Consultants, they may not create or advertise
                                any Customer offers besides those that exist
                                solely through the Scout & Cellar website. This
                                includes, for example, offering a percentage
                                discount, a free bottle of wine with a minimum
                                purchase, free shipping, or any other offer if
                                it requires that the Consultant and Customer
                                exchange any funds.
                              </p>
                              <p>
                                Consultants may transfer Sky Wallet dollars to a
                                customer account to help pay for all or part of
                                a customer order or to cover the cost of
                                shipping. Consultants may also transfer Sky
                                Wallet dollars to other Consultants as allowed.
                                Any offer involving “free wine” must fully
                                comply with the Gifts policy below.
                              </p>
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <strong>Gifts</strong>
                      <p>
                        Consultants are welcome to give free gifts to anyone.
                        For a gift to be free, there cannot be a quid pro quo or
                        exchange of value attached to it.
                      </p>
                      <p>
                        If the gift is contingent on any behavior (including on
                        social media) or purchase, it is considered an exchange
                        of value and is not allowed. As a result, wine cannot be
                        considered a gift if it is being given away at a
                        tasting.
                      </p>
                      <p>
                        Giveaways of non-wine items via social media may only be
                        allowed if there is no purchase requirement or other
                        quid pro quo and the giveaway complies with the social
                        media platform’s Terms and Conditions and any applicable
                        laws.
                      </p>
                    </li>
                    <li>
                      <strong>
                        Charitable Contributions and Charitable Events
                      </strong>
                      <p>
                        Consultants are welcome to donate wine to a charitable
                        organization, subject to the Consultant’s local tax
                        laws. Consultants may not donate or otherwise cause a
                        monetary value to be assigned to a wine tasting (such as
                        through auctions or raffles), as tastings have no value
                        and are not a compensatory event. As a result, such
                        donations would violate most state alcohol and beverage
                        laws.
                      </p>
                      <p>
                        As with all activities as a business owner, Consultants
                        are responsible for ensuring that any gifts or
                        charitable contributions – including marketing messages
                        and promotions – comply with all applicable laws,
                        regulations and codes governing advertising, promotions,
                        competitions, and prize-draws.
                      </p>
                      <p>
                        Any Charitable Donation made through a Consultant’s
                        Scout & Cellar business which is advertised in advance
                        of the donation actually being made is non-compliant
                        under the Offers and Gifts policies.
                      </p>
                      <p>
                        A Consultant may advertise Charitable Donations made
                        through the Consultant’s Scout & Cellar business only:
                      </p>
                      <ul>
                        <li>After the donation has already been made and;</li>
                        <li>
                          Using dollar amounts instead of percentages. Due to
                          the variable nature of consultant compensation, any
                          representation of a donation using percentage figures
                          is inherently misleading.
                        </li>
                      </ul>
                      <p>
                        Scout & Cellar Consultants may attend a charitable event
                        (even if it includes Scout & Cellar wine pours) if the
                        charitable event is not a Scout & Cellar tasting. Refer
                        to Part 2, Section 1.7.6 for tasting guidelines. In this
                        instance, the Consultant must not attend in the capacity
                        of a Scout & Cellar Consultant and must not turn the
                        event into an “impromptu” Scout & Cellar Tasting.
                      </p>
                    </li>
                    <li>
                      <strong>Tasting & Pouring Policy</strong>
                      <p>
                        For the purposes of this section, a “wine tasting”
                        includes any event where alcoholic Scout & Cellar
                        products are available for sampling in a traditional
                        tasting format (digital or in-person), regardless of the
                        presence of any non-alcoholic Scout & Cellar products.
                        For guidelines on tasting events including only
                        non-alcoholic Scout & Cellar products, please see Part
                        2, Section 1.7.9 of this document.
                      </p>
                      <ol>
                        <li>
                          <strong>Approved In-Person Tasting Locations</strong>
                          <p>
                            Consultants may hold in-person wine tastings in the
                            following places if invitations are sent to specific
                            individuals:
                          </p>
                          <ul>
                            <li>Private residence;</li>
                            <li>Private office;</li>
                            <li>
                              In a private room at a public venue if walkups are
                              not allowed access to the private room; and
                            </li>
                            <li>
                              In a yoga studio, boutique, or other similar
                              establishment if the tasting is held after hours
                              and walkups are not allowed access to the
                              establishment during the tasting.
                            </li>
                          </ul>
                        </li>
                        <li>
                          For purposes of this provision, an invitation is an
                          announcement sent to a specific group of individuals
                          by mail, email, or other electronic means. It
                          expressly allows the use of sites such as Evite,
                          Paperless Post or Red Stamp, where Consultants are
                          creating a distribution list of specific email
                          addresses for a limited group of people. Tasting
                          invitations consisting only of invite-only, private
                          Facebook event pages are compliant with this policy.
                        </li>
                        <li>
                          Use of sites such as Eventbrite, Event Bee, Facebook
                          (including but not limited to public Facebook Event
                          pages or other public groups) or other social media
                          where the in-person event is being publicized at large
                          (to a social network or the public) is expressly
                          disallowed. This includes posts by the Consultant,
                          host, or venue holding the tasting. Virtual Tastings
                          are not an exception to this policy – all tasting
                          invitees (including those invited to Virtual Tastings)
                          should be contacted through private means of
                          communication, such as email, or a social media Event
                          post which is viewable only to invitees and
                          organizers.
                        </li>
                        <li>
                          Opportunity events which include a tasting are not an
                          exception to these rules. Consultants may hold
                          Opportunity Tastings as long as such events are free
                          to attend and the events comply with the guidelines
                          stated above. All Consultants should refer to and use
                          the “Opportunity Assets” which exist in The Cellar
                          (under “Shareable Assets”) to ensure all messaging and
                          visual assets for Opportunity Tastings comply with
                          Brand Standards.
                        </li>
                        <li>
                          Consultants may host private, virtual tastings via
                          video chat platforms including (but not limited to)
                          Facebook Live, Zoom, and Skype. Consultants are
                          responsible for ensuring that attendees are of legal
                          drinking age and should use Consultant’s best judgment
                          in ensuring the tasting is carried out safely.
                          Consultants must comply with the guidelines in Part 2,
                          Section 2.2.5.10 regarding public posts about virtual
                          tastings but are permitted to promote Scout & Cellar-
                          generated Tasting Links publicly via social media.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <strong>Tasting Guidelines</strong>
                      <p>
                        Consultants must adhere to the following guidelines when
                        conducting in-person tastings:
                      </p>
                      <ol>
                        <li>
                          For safety and regulatory reasons, designated tasting
                          hosts should pour the wine using the Posi-Pour
                          provided in the Business Basics Kit (or other similar
                          portion control system) and should never serve more
                          than 10 ounces total to any one tasting guest. The
                          Consultant and hosts of a tasting are responsible for
                          knowing and abiding by any state or local regulations
                          which further restrict tasting pours by number, size,
                          or other factors.
                        </li>
                        <li>
                          All tasting attendees must be of legal drinking age.
                          If a Consultant is unsure of a guest’s age, the
                          Consultant should check the attendee’s government
                          issued ID.
                        </li>
                        <li>
                          Attendees should never be allowed to drive if they do
                          not appear to be able to do so safely.
                        </li>
                        <li>
                          Open but unfinished bottles of wine should be left
                          with the host to avoid violation of open container or
                          other similar laws and to positively impact the
                          hosting experience.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <strong>Prohibition Against Charging</strong>
                      <p>
                        Consultants may not charge a fee for admission to any
                        venue where wine is being served, regardless of what the
                        charge is for. Nor may Consultants pour wine at an event
                        where a mandatory fee is being charged by someone else,
                        regardless of what the charge is for. To further
                        clarify, a ticketed event (whether for-profit or
                        charitable) including “free” drinks is not really free.
                        This also includes a free wine tasting occurring before
                        or after an event (i.e. a yoga class) with a charge, if
                        the event and tasting are represented as a single event
                        (such as sending a single invitation for both events).
                        Likewise, if a tip jar sits next to the wine expecting
                        “donations,” it is not free. An event which requires an
                        individual to pay for food while having access to Scout
                        & Cellar wines or at an otherwise compliant wine tasting
                        constitutes an impermissible sale of alcohol and is not
                        compliant with this policy.
                      </p>
                    </li>
                    <li>
                      <strong>Marketing Non-Alcoholic Products</strong>
                      <p>
                        Policies in this section only apply if there are no
                        alcoholic Scout & Cellar products open, tasted, or
                        purchased in conjunction (at the same time, event,
                        order, etc.) with non-alcoholic Scout & Cellar products:
                      </p>
                      <ol>
                        <li>
                          Consultants may distribute samples of non-alcoholic
                          Scout & Cellar products at events which would not
                          qualify as fully-compliant wine tastings, including
                          events which include an admission fee or which are
                          publicly announced or open to the public. If any
                          alcoholic Scout & Cellar products are present at such
                          an event, those products must:
                          <p>- Be for display purposes only, AND</p>
                          <p>
                            - Be unopened and sealed OR be empty and dry upon
                            arrival at the event, AND
                          </p>
                          <p>
                            - Remain sealed or dry for the duration of the
                            event.
                          </p>
                        </li>
                        <li>
                          Offers or gifts involving non-alcoholic products must
                          not be used to entice sales of alcoholic products.
                          Activities which constitute a violation of this policy
                          are likely also unlawful given regulations restricting
                          how alcoholic products may legally be marketed.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Manipulation of the Compensation Plan</strong>
                  <p>
                    Manipulation or gaming the compensation plan is strictly
                    prohibited. This includes, but is not limited to, activity
                    such as:
                  </p>
                  <ol>
                    <li>
                      The enrollment of individuals or entities without the
                      knowledge of and/or execution of a Consultant Agreement by
                      such individuals or entities;
                    </li>
                    <li>
                      The fraudulent enrollment of an individual or entity
                      (including but not limited to non-existent individuals or
                      entities) as a Consultant or Customer. This includes but
                      is not limited to:
                      <ol>
                        <li>
                          Using another individual’s social security number to
                          enroll
                        </li>
                        <li>Misrepresentation of an individual’s age</li>
                        <li>Use of a pet’s name</li>
                        <li>Using fake address or email address information</li>
                      </ol>
                    </li>
                    <li>
                      Purchasing Scout & Cellar wine on behalf of another
                      Consultant or Customer (with or without their knowledge),
                      or under another Consultant’s or Customer’s ID number to
                      qualify for commissions or bonuses;
                    </li>
                    <li>
                      “Gifting” new Consultants or Customers to another
                      Consultant for the purpose of triggering bonuses; and/or
                    </li>
                    <li>
                      Any other mechanism or means intended to create the
                      illusion that someone has qualified for title/rank
                      advancement, incentives, prizes, commissions, or bonuses
                      that is not driven by bona fide product or service
                      purchases by end user consumers. Such activity is
                      considered a breach of the Consultant Agreement and may
                      result in the immediate termination of the Consultant
                      Agreement of any Consultant involved.
                      <p>
                        Any activity used to build a Consultant’s Scout & Cellar
                        business that is contradictory to the normal business
                        building model may be considered 'manipulating the
                        compensation plan'. Scout & Cellar has full discretion
                        in determining whether any manipulative activity has
                        taken place.
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              <strong>SECTION 2: SALES & MARKETING</strong>
              <p>
                Scout & Cellar’s Marketing team has created a library of
                pre-approved marketing materials which are designed to help
                Consultants build and promote their Scout & Cellar business.
                These marketing materials include business cards, flyers, Scout
                & Cellar apparel and gear and more and can be found in the
                Cellar. Consultants may use the pre-approved marketing materials
                to market their Scout & Cellar business, but they are not
                required to do so. Consultants can request approval for
                independently created marketing materials that are not currently
                available by using the Brand Standards Contact Form located in
                the Cellar and the Scout & Cellar Knowledge Center. Scout &
                Cellar is not responsible for any costs incurred by a Consultant
                if the Consultant produces materials before seeking approval and
                the request is denied.
              </p>

              <ol>
                <li>
                  <strong>
                    Consultant-Created Education, Advertising and Marketing
                    Tools
                  </strong>
                  <ol>
                    <li>
                      <strong>Marketing Tool Approval</strong>
                      <p>
                        Consultants are permitted to create their own
                        educational, training, advertising, and/or promotional
                        materials, and marketing aids, including social media
                        assets, videos, and other print materials (collectively
                        “Marketing Tools”) to promote the Scout & Cellar
                        opportunity and products only as provided in this
                        Section.
                      </p>
                      <p>
                        If a Consultant creates or uses any Marketing Tools
                        outside of a Social Media platform, they are responsible
                        for ensuring the Tools are a) are not deceptive, b)
                        contain only substantiated claims, and c) properly
                        identify Scout & Cellar’s trademarks and copyrights. If
                        Consultants have a regulatory or safety concern related
                        to any assets they have created, Consultants are
                        encouraged to submit any Consultant-created or
                        Consultant-commissioned Marketing Tools to Brand
                        Standards for approval. This can be done by completing
                        the request form located in the Knowledge Center.
                      </p>
                      <p>
                        Consultants who receive authorization from Scout &
                        Cellar to produce and publish Marketing Tools may make
                        approved Marketing Tools available to other Consultants
                        free of charge if they wish but may not sell the
                        Marketing Tools to other Consultants. Any sale or
                        attempt to sell Marketing Tools to another Consultant
                        may constitute a breach of the Consultant Agreement.
                      </p>
                      <p>
                        A Consultant who has created a Scout & Cellar Marketing
                        Tool (regardless of prior approval) grants Scout &
                        Cellar and other Consultants an irrevocable and
                        royalty-free license to use the Marketing Tools for
                        Scout & Cellar business purposes, and waives all claims,
                        including but not limited to, intellectual property
                        rights claims, and/or claims for remuneration against
                        Scout & Cellar, its officers, directors, owners, agents,
                        and other Independent Consultants for the posting and/or
                        use of the Marketing Tools. Scout & Cellar may make
                        these Marketing Tools available for use by other
                        Consultants, free of charge, by including the same in
                        each Consultant’s Cellar.
                      </p>
                    </li>
                    <li>
                      Scout & Cellar reserves the right to rescind approval for
                      any previously approved Marketing Tool(s) (including those
                      originally created by Scout & Cellar), and Consultants
                      waive all claims against Scout & Cellar, its officers,
                      directors, owners, employees, and agents for damages,
                      expenses, costs, or remuneration of any other nature
                      arising from or relating to such rescission.
                      <ol>
                        <li>
                          A Consultant who uses unapproved marketing materials
                          assumes all liability for any claims that may violate
                          regulations imposed by the FTC, FDA, TTB, or any other
                          applicable regulatory authority. Consultants who
                          violate this policy can also be held responsible for
                          any potential revenue loss, legal fees or other
                          Company losses that may result from their violation.
                          Scout & Cellar will not reimburse a Consultant for any
                          expenses due to reprints or redesign of unapproved
                          marketing materials. Use of unapproved marketing
                          materials constitutes a breach of the Consultant
                          Agreement and may result in termination of the
                          Consultant Agreement.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Use of Company Names and Protected Materials</strong>
                  <ol>
                    <li>
                      Consultants must protect and promote the good reputation
                      of Scout & Cellar. The marketing and promotion of Scout &
                      Cellar, the Scout & Cellar opportunity, the Compensation
                      Plan, and Scout & Cellar products will be consistent with
                      the public interest, and must avoid all discourteous,
                      deceptive, misleading, unethical, or immoral conduct and
                      practices.
                    </li>
                    <li>
                      All promotional materials supplied or created by the
                      Company must be used in their original form and cannot be
                      changed, amended, or altered except upon prior written
                      approval from Scout & Cellar.
                    </li>
                    <li>
                      The name of Scout & Cellar, each of its product offerings
                      and other names that have been adopted by Scout & Cellar
                      in connection with its business are proprietary trade
                      names, trademarks and service marks of the Company. As
                      such, these marks are of great value to Scout & Cellar and
                      are supplied to Consultants for their use only in an
                      expressly authorized manner.
                    </li>
                    <li>
                      <strong>
                        Use of Scout & Cellar’s Intellectual Property
                      </strong>
                      <p>
                        Scout & Cellar prohibits unauthorized use of its trade
                        names, trademarks, trade secrets, designs, copyrights,
                        symbols, or other intellectual property outside of
                        corporate produced and approved marketing materials by
                        any person, including Scout & Cellar Consultants,
                        without prior written authorization from Scout & Cellar.
                        Unauthorized use of these items is a violation of these
                        Policies and Procedures and may also constitute an
                        Intellectual Property Infringement.
                      </p>
                      <p>
                        This includes, but is not limited to, use of the name
                        “Scout & Cellar,” “Clean-Crafted,” and/or "Clean-
                        Crafted Commitment" and any of Scout & Cellar’s other
                        brands, marks, or tradenames – including (but not
                        limited to) “Scouting Grounds” and “Scout Wild”. The use
                        of “Scout & Cellar”, "Clean-Crafted", “Clean-Crafted
                        Commitment” or any of Scout & Cellar’s other brands,
                        marks, or tradenames or any derivative thereof, on any
                        item not produced by the Company is prohibited, except
                        when the Consultant is identified as a "Scout & Cellar
                        Independent Consultant" or "S&C Independent Consultant."
                      </p>
                      <ol>
                        <li>
                          <strong>
                            Identification as a Scout & Cellar Consultant
                          </strong>
                          <p>
                            In all cases where a Consultant would like to use
                            the words “Scout & Cellar”, “Clean-CraftedTM wine”
                            or any variation of either in their social media
                            usernames and/or handles it must be accompanied by
                            the Consultant’s name or business entity under which
                            they conduct business and the words “Independent
                            Consultant.” In all social media posts related to
                            Scout & Cellar, they must disclose their full names
                            and conspicuously identify themselves as Scout &
                            Cellar Independent Consultants. Use of “Scout” or
                            “Cellar” independently in a social media handle or
                            username is not a violation of this policy. Cases
                            where both terms (including variations) are used
                            together will be considered in violation, at Scout &
                            Cellar’s discretion.
                          </p>
                          <p>For example:</p>
                          <p>Beatriz’ Cellar - OK</p>
                          <p>Scout with Annie - OK</p>
                          <p>Hannah’s Scouting Cellar - NOT OK</p>
                          <p>Gabe’s Clean-Crafted Wines – NOT OK</p>
                          <p>Chris’ Clean Wine – NOT OK</p>
                        </li>
                        <li>
                          In addition to the foregoing, Consultants who wish to
                          use a Scout & Cellar logo may use only the Scout &
                          Cellar Wine Consultant or Independent Consultant logos
                          in social networking profiles or approved
                          consultant-created Marketing Materials. The Scout &
                          Cellar Wine Consultant and Independent Consultant
                          logos are available in The Cellar. Consultants may not
                          use or create any other versions of the Scout & Cellar
                          logo. Consultants who wish to create a logo for their
                          Independent Business may do so provided the logo
                          adheres to all Policies and the Consultant Agreement.
                        </li>
                        <li>
                          Anonymous postings or use of an alias is prohibited.
                        </li>
                      </ol>
                    </li>
                    <li>
                      Additional guidelines relating to the use of the Scout &
                      Cellar name are as follows:
                      <ol>
                        <li>
                          All stationery (e.g. thank-you cards, letterhead,
                          envelopes, and business cards) must include the
                          specific Scout & Cellar Wine Consultant or Independent
                          Consultant logo provided by the Company.
                        </li>
                        <li>
                          All emails related to Consultants’ independent
                          business must include the Scout & Cellar approved
                          signature block which can be found in The Cellar under
                          “Brand & Marketing”.
                        </li>
                        <li>
                          Consultants may not answer the telephone by saying
                          “Scout & Cellar,” “Scout & Cellar Incorporated,” or by
                          any other manner that would lead the caller to believe
                          that they have reached Scout & Cellar’ Corporate
                          offices. A Consultant may only represent that he/she
                          is a Scout & Cellar Independent Consultant.
                        </li>
                        <li>
                          All correspondence and business cards relating to or
                          in connection with a Consultant’s Scout & Cellar
                          business shall contain the Consultant’s name followed
                          by the term “Consultant” or “Independent Consultant.”
                          Consultants who have qualified as “Founder’s Club
                          Members” may also identify themselves as such, but the
                          identification must indicate that the Founder’s Club
                          Member is also a “Consultant” or “Independent
                          Consultant”. Consultants may not refer to themselves
                          as “Founding Consultants” or any similar term other
                          than “Founder’s Club Member”.
                        </li>
                        <li>
                          Particular photos and graphic images created or used
                          by Scout & Cellar in its advertising, marketing
                          packaging and websites are the result of paid
                          contracts with outside vendors that do not extend to
                          Consultants. Consultants must first receive written
                          permission to use images published by Scout & Cellar
                          which are not either: (a) contained in the Brand and
                          Marketing section of The Cellar, (b) publicly
                          available on the Scout & Cellar website or, (c)
                          publicly available via an official Scout & Cellar
                          social media profile.
                        </li>
                        <li>
                          Consultants may not produce for sale or distribution
                          any Company event, webinar or speech, nor may a
                          Consultant reproduce Scout & Cellar audio or video
                          clips for sale or for personal use without prior
                          written permission from the Company. This includes
                          re-uploading Company-produced video content to video
                          or audio sharing platforms such as YouTube, Vimeo, or
                          SoundCloud.
                        </li>
                        <li>
                          Scout & Cellar reserves the right to rescind its prior
                          approval of any marketing aid or promotional material
                          to comply with changing laws and regulations or brand
                          strategies and may request the removal from the
                          marketplace of such materials without financial
                          obligation to the impacted Consultant.
                        </li>
                        <li>
                          Consultants shall not promote non-Scout & Cellar
                          products or services in conjunction with Scout &
                          Cellar products on the same non-social media website,
                          same advertisement or social media post, or same event
                          without prior approval from the Company. The Scout &
                          Cellar “Blog Button” or DTUKG graphic is the only form
                          of promotion acceptable on any non-social media
                          website which also markets another business, and must
                          not be used in any situation that would imply a health
                          claim or income claim related to Scout & Cellar.
                          Consultants may participate in an event with
                          Consultants from other companies, provided the Scout &
                          Cellar consultant does not market or promote any other
                          business in relation to the event. Refer to the
                          Co-Marketing and Tastings Guideline policies (Part 2,
                          Sections 1.5.2 and 1.7.6, respectively) for further
                          guidelines.
                        </li>
                        <li>
                          Consultants shall not advertise their Scout & Cellar
                          business through Google Ads, Facebook Ads, Craigslist,
                          promote function within any social media platform, or
                          any other paid platform online, nor may they use any
                          Search Engine Optimization for their Company provided
                          website. Paid advertising opportunities are available
                          to consultants under Part 2, Section 2.3.1 of these
                          Policies and Procedures.
                        </li>
                        <li>
                          Due to the “live” nature of such items, social media
                          posts, email addresses, URLs, and other online content
                          that may be non-compliant shall be considered “Ongoing
                          Conduct” and must be updated to remain compliant with
                          any Amendments on or before the Amendments’ effective
                          date. In the event Scout & Cellar is unaware of such
                          non-compliant material at the time of publication, it
                          is still considered a violation of the Consultant
                          Agreement, and the involved Consultant shall be
                          subject to discipline in accordance with these
                          Policies & Procedures, which may include termination.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Media Inquiries</strong>
                  <p>
                    Consultants must not initiate any interaction with the media
                    (including but not limited to radio, podcasts, television,
                    billboards, print, online publications, speaking
                    engagements, mass mailings or any other channel Scout &
                    Cellar may deem to be applicable) or attempt to respond to
                    media inquiries regarding Scout & Cellar, its services, or
                    their Independent Scout & Cellar business. All inquiries by
                    any type of media must be immediately referred to the Scout
                    & Cellar Marketing team through the contact form at
                    https://scoutandcellar.com/press. This policy is designed to
                    ensure that accurate and consistent information is provided
                    to the public, as well as a proper public image for the
                    Scout & Cellar brand.
                  </p>
                  <ol>
                    <li>
                      <strong>Media Circulation</strong>
                      <p>
                        Subject to the above, Consultants are permitted to
                        advertise in Consultant’s local newspaper, community
                        newsletters, and local business directories, and through
                        local opportunities, including Consultant’s local
                        Chamber of Commerce, provided that any publication
                        containing such advertisement has a circulation no
                        greater than 10,000. Consultants may also promote
                        Consultant’s independent businesses with social media
                        influencers who have less than 10,000 total followers
                        across platforms at the time of the promotion, as long
                        as that influencer’s platform is consistent with Scout &
                        Cellar’s Core Values. Scout & Cellar has the sole and
                        exclusive right to determine whether an influencer’s
                        platform satisfies these requirements. Influencers who
                        have over 10,000 total followers across all platforms
                        and are interested in marketing Scout & Cellar products
                        should be directed to contact the Company at
                        <a
                          href="https://scoutandcellar.com/contact"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://scoutandcellar.com/contact
                        </a>
                        .
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Social Networking and Social Media</strong>
                  <ol>
                    <li>
                      <strong>Consultants Are Responsible for Postings</strong>
                      <p>
                        It is the Consultant’s obligation to ensure that online
                        marketing activities are truthful, are not deceptive and
                        do not mislead Consultants or Customers in any way.
                      </p>
                      <p>
                        Consultants are personally responsible for their
                        postings (including hashtags) and all other online
                        activity that relates to the Company. Even if a
                        Consultant does not own or operate the blog or social
                        media site, if a Consultant (or their immediate
                        household member) posts to any such site about Scout &
                        Cellar, the Consultant is responsible for that posting.
                        Consultants are also responsible for postings which
                        occur on any blog or social media site that the
                        Consultant owns, operates or controls.
                      </p>
                      <p>
                        Consultants are further responsible for ensuring that
                        any out-of-date materials or posts containing out-
                        of-date or superseded materials are removed in order to
                        avoid confusion or conflicting information.
                      </p>
                    </li>
                    <li>
                      <strong>Social Media Sites</strong>
                      <p>
                        Scout & Cellar encourages Consultants to join social
                        media sites, online forums, discussion groups, blogs,
                        and other forms of internet communication to leverage
                        the power of the Scout & Cellar brand and to share the
                        story of the Scout & Cellar products and the Program.
                        Online social media sites may be used to drive traffic
                        to Consultants’ replicated or independent websites or to
                        the Scout & Cellar website. Social media sites include
                        (but are not limited to) such sites as Facebook,
                        LinkedIn, Twitter, Instagram, etc.
                      </p>
                      <p>
                        As of February 2022, the Community Guidelines for TikTok
                        specifically prohibit posts depicting or promoting
                        “Multi-Level Marketing” companies. As a result, all
                        Consultants must refrain from posting Scout & Cellar
                        content to TikTok.
                      </p>
                      <p>
                        Consultants may not market or promote Scout & Cellar
                        products or products bearing Scout & Cellar names,
                        marks, and/or logos on retail sites including but not
                        limited to Amazon, eBay, Etsy, or other similar sites or
                        sites like wine-searcher.com.
                      </p>
                      <p>
                        Social media sites may be used to promote Scout & Cellar
                        products and memberships. Profiles a Consultant
                        generates in any social community where Scout & Cellar
                        or the Program are discussed or mentioned must clearly
                        identify the Consultant as an Independent Consultant,
                        and when a Consultant participates in those communities,
                        Consultants must comply with the terms and conditions of
                        the Consultant Agreement, including without limitation,
                        the Professional Conduct terms.
                      </p>
                      <ol>
                        <li>
                          <strong>
                            Allowable Uses of Private Social Media
                          </strong>
                          <p>
                            Consultants are permitted to create and manage
                            private groups and private event pages for their
                            Scout & Cellar business on social media, including
                            on Facebook. These private spaces should be used to
                            communicate only with individuals who have a
                            pre-existing relationship with the Consultant.
                            Consultants that set up or participate in these
                            private spaces assume all risk related to Policy
                            violations which occur in those spaces, as even
                            private posts may be subject to regulatory review.
                            Any violation which occurs on or through a private
                            group or event page will be treated the same as
                            those occurring on public pages. Public event pages
                            may not be used to advertise or invite attendees to
                            a tasting, and any use of a private social media
                            profile, group, or event not covered in this section
                            is considered a violation.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      Consultants may not use blog spam, spamdexing or any other
                      mass-replicated methods to leave blog comments relating to
                      Scout & Cellar or its products. Comments that Consultants
                      create or leave must be useful, unique, relevant, and
                      specific to the blog’s article.
                    </li>
                    <li>
                      <strong>Deceptive and Prohibited Postings</strong>
                      <p>
                        Posting statements that are prohibited by this section
                        constitutes a breach of the Consultant Agreement and may
                        result in the termination of the Consultant Agreement.
                      </p>
                      <ol>
                        <li>
                          Consultants must ensure that their postings are
                          truthful and accurate. Postings that are false,
                          misleading, or deceptive are prohibited. This
                          includes, but is not limited to, false or deceptive
                          postings relating to the Scout & Cellar products, the
                          Program, and/or Consultant biographical information
                          and/or credentials. In particular, as it relates to
                          Scout & Cellar products, the following are
                          specifically prohibited:
                        </li>
                        <li>
                          Referencing Scout & Cellar or its products as “clean”
                          instead of “clean-crafted”. Consultants may use
                          “clean” to describe a lifestyle consistent with the
                          goals of the Clean Crafted Commitment<sup>TM</sup>,
                          but may not use “clean” if it implies a health or
                          medical claim as described below.
                          <p>
                            OK: Scout & Cellar is a great fit for my clean
                            lifestyle!
                          </p>
                          <p>
                            Not OK: Scout & Cellar’s clean wine (or clean
                            coffee) is my favorite!
                          </p>
                          <p>
                            OK: S&C’s products are a great fit for my clean
                            lifestyle
                          </p>
                          <p>
                            Not OK: Drinking clean wine has improved my well
                            being
                          </p>
                        </li>
                        <li>
                          Making health related or medical claims about Scout &
                          Cellar products. This includes but is not limited to
                          claiming that Scout & Cellar wines are “headache free”
                          or “hangover free” or do not cause headaches,
                          hangovers, or other physical conditions, as well as
                          referring to Scout & Cellar products as “healthy” or
                          “good for you.”
                        </li>
                        <li>
                          Making generalizations about characteristics of
                          specific Scout & Cellar products as though they apply
                          to our entire product line, including but not limited
                          to claiming that our wines are “organic,” or
                          “biodynamic”. Consultants may only use descriptors of
                          this nature when speaking about specific products that
                          have such characteristics posted on the product's
                          Soil-to-Sip Report<sup>TM</sup> or product description
                          page at{" "}
                          <a
                            href="https://scoutandcellar.com"
                            target="_blank"
                            rel="noreferrer"
                          >
                            https://scoutandcellar.com
                          </a>
                          .
                        </li>
                        <li>
                          Making statements about the specific amount of
                          calories, sugar, or other measurable characteristics
                          of the Scout & Cellar products, except when such
                          information is made publicly available by Scout &
                          Cellar, such as through each product's Soil-to-Sip
                          Report™️ or product description page. This is
                          applicable whether using numbers or percentages,
                          directly or in comparison to other products, and in
                          general or specifically, except as otherwise expressly
                          stated by Scout & Cellar.
                        </li>
                        <li>
                          Referring to Scout & Cellar Independent Consultants as
                          “sellers” instead of “marketers,” “educators,” or
                          “promoters” of the Company and the Clean-CraftedTM
                          Commitment, or referring to Consultant business
                          activities as “selling”.
                        </li>
                        <li>
                          Claiming that a Consultant or Scout & Cellar is
                          “hiring” when referring to becoming an Independent
                          Consultant.
                        </li>
                        <li>
                          Claiming that Scout & Cellar offers “free shipping”.
                          Instead, consultants should communicate that any time
                          there is no additional shipping charge, “Shipping Is
                          Included” with the order.
                        </li>
                        <li>
                          Comparing Scout & Cellar’s products directly or
                          indirectly with competitors’ products, including by
                          (but not limited to) listing the specific amount of
                          calories, sugar, or other measurable characteristics
                          of the competitors’ product or by making any negative
                          statement about the competitors’ product.
                        </li>
                        <li>
                          Consultants also shall not post, or link to any posts
                          or other material, that would be in violation of Part
                          2, Section 1.1 of these Policies and Procedures
                          (Professionalism).
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Landing Page Services</strong>
                  <p>
                    Consultants may use “landing page” services such as LinkTree
                    to link to their Scout & Cellar PURL in cases where only one
                    link may be included in a social media profile (i.e. on
                    Instagram).
                  </p>
                </li>
                <li>
                  <strong>Posting Private Information</strong>
                  <p>
                    Consultants must respect the privacy of others and be
                    thoughtful and courteous in their postings. Consultants
                    should seek authorization from the person for whom they’d
                    like to post information, before using their name or picture
                    or likeness thereof in a post.
                  </p>
                </li>
                <li>
                  <strong>Public Social Media Commenting</strong>
                  <p>
                    Consultants may not market their Personal URL in the
                    comments of any Scout & Cellar social media posts. Nor may
                    Consultants use social media outlets to comment on other
                    brand products that are competitive to Scout & Cellar in
                    order to drive marketing efforts and direct Customers to
                    their Personal URL.
                  </p>
                </li>
                <li>
                  <strong>Hashtags</strong>
                  <p>
                    Consultants may use hashtags to market their Scout & Cellar
                    business, provided that the hashtag does not represent
                    inappropriate or deceptive advertising per Part 2, Section
                    2.4.4 or any other policies. Scout & Cellar has created a
                    list of approved and prohibited hashtags. This list is not
                    intended to be comprehensive but serves as a guideline for
                    using hashtags. The Consultant should refer to this list
                    before using a particular hashtag. If a Consultant prefers
                    to use a hashtag that is not already approved, and is unsure
                    that the use of the hashtag is appropriate, the Consultant
                    should contact the Brand Standards Team at
                    brandstandards@scoutandcellar.com.
                  </p>
                </li>
                <li>
                  <strong>Independent Websites</strong>
                  <p>
                    Scout & Cellar provides Consultants with their own
                    replicated websites (also referred to as Personalized URLs
                    or “PURLs”) from which they can market Scout & Cellar
                    products and the Program.
                  </p>
                  <p>
                    Consultants may also create an independent website to market
                    the Consultant’s Independent business, provided it is
                    registered and approved by the Brand Standards Team. The
                    request for approval must be made through the Knowledge
                    Center by submitting the form for Independent Website
                    approval. The website must be approved before it goes live.
                    Consultants shall receive an approval/denial notice within
                    30 days from the date the request is submitted.
                  </p>
                  <p>
                    A Consultant must identify as an Independent Scout & Cellar
                    Consultant on an Independent website. (This does not apply
                    to PURLs as the website link will satisfy this requirement).
                    Because Consultants are not licensed or authorized to sell
                    directly to Customers, products may not be sold on the
                    Independent Website.
                  </p>
                  <p>
                    Scout & Cellar will not be responsible for any loss incurred
                    by a Consultant related to any required changes to the
                    publication of any marketing material that has not been
                    approved or is otherwise in violation of the Policies and
                    Procedures. These changes include (but are not limited to)
                    required edits to social media profiles or posts, websites,
                    Consultant Information, or reprinting marketing materials.
                  </p>
                  <p>
                    This policy also applies if any changes or corrections are
                    required due to new or updated regulatory or legal rules or
                    guidelines or the Policies & Procedures.
                  </p>
                  <strong>Existing Non-Scout & Cellar website</strong>
                  <p>
                    If a Consultant has a non-Scout & Cellar website, the
                    Consultant may link it to either their replicated Scout &
                    Cellar site or an independently created Scout & Cellar site.
                    The Consultant may use the Scout & Cellar approved “Blog
                    Button” or “DTUKG Graphic” which is located in the Cellar to
                    link to another site.
                  </p>
                  <p>
                    By using the Independent Consultant website button, the
                    Consultant is representing and warranting that the content
                    on their independent website is consistent with the Scout &
                    Cellar Core Values and does not violate any laws, rules,
                    regulations, or these Policies & Procedures in any way.
                  </p>
                  <p>
                    This link may be promoted with language which states “To
                    learn more about Scout & Cellar and the Clean-Crafted
                    <sup>TM</sup> Lifestyle please click here."
                  </p>
                  <strong>URLs</strong>
                  <p>
                    The URL for the website must comply with Part 2, Section 2
                    of the Policies & Procedures. It may not contain any
                    descriptors that would imply a health or medical claim, or
                    the use of Clean-Crafted.
                  </p>
                  <p>
                    Unacceptable URLs include, but are not limited to, URLs
                    containing any of the following: organic, clean, healthy,
                    healthy, clean living, sugar free, biodynamic.
                  </p>
                  <p>
                    Scout and Cellar Independent Websites must comply with all
                    rules pertaining to Comarketing of businesses in Part 2,
                    Section 1.5.2. of the policy.
                  </p>
                  <strong>Processing Fees</strong>
                  <p>
                    For any Content-rich Independent Website, there is a
                    one-time $49.95 processing fee which includes the initial
                    review and approval process and later changes up to 2
                    times/per consultant/per month. There is an annual renewal
                    fee of $19.95 which will be charged on the anniversary date
                    of the initial website review submission.
                  </p>
                  <p>
                    For Independent Websites which only exist as a URL Redirect
                    or Blog Button placement (and have no other Scout &
                    Cellar-related content to approve), there is no one-time or
                    annual review fee.
                  </p>
                </li>
                <li>
                  <strong>
                    Domain Names, Email Addresses and Online Aliases
                  </strong>
                  <ol>
                    <li>
                      Consultants cannot use or register domain names, email
                      addresses, and/or online aliases that use Scout & Cellar
                      or Scout & Cellar product names. Scout & Cellar and its
                      products are registered trademarks and unauthorized use is
                      an infringement of our rights. Further, doing so could
                      cause confusion, or may be misleading or deceptive, and
                      leads individuals to believe or assume the communication
                      is from or is the property of Scout & Cellar. Scout &
                      Cellar, at its sole discretion, will decide what could
                      cause confusion, mislead, or be considered deceptive.
                      <p>
                        If you have a question whether your chosen name or
                        address is acceptable, you may submit it to the Brand
                        Standards team for review before using it. Scout &
                        Cellar is not responsible for any loss a Consultant may
                        incur should Scout & Cellar demand that the Consultant
                        stop using any infringing information.
                      </p>
                      <p>
                        Examples of the improper use include but are not limited
                        to: ScoutAndCellar@msn.com; www.ScoutCellarDirect.com;
                        www.facebook.com/Cleanwine or derivatives as described
                        herein.
                      </p>
                      <p>
                        Consultants who use social media sites must also comply
                        with the rules associated with such websites or
                        networks. For example, some sites prohibit users from
                        advertising products or promoting financial
                        opportunities.{" "}
                        <strong>
                          Federal and state agencies have established guidelines
                          and rules for what may and may not be communicated in
                          relation to Scout & Cellar’s products, opportunities
                          and/or a Consultant’s personal experience. Even if
                          truthful, stating a personal experience may not
                          conform to these regulatory guidelines.
                        </strong>{" "}
                        Consultants who provide testimonials on social
                        networking sites and otherwise on the internet are
                        responsible for ensuring that their testimonials comply
                        with all applicable laws and regulations.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Use of Third-Party Intellectual Property</strong>
                  <p>
                    If Consultants use the trademarks, trade names, service
                    marks, copyrights, or intellectual property of any third
                    party in any posting, it is solely their responsibility to
                    ensure that they have received the proper license to use
                    such intellectual property and pay the appropriate license
                    fee. All third-party intellectual property must be properly
                    referenced as the property of the third party, and
                    Consultants must adhere to any restrictions and conditions
                    that the owner of the intellectual property places on the
                    use of its property.
                  </p>
                </li>
                <li>
                  <strong>
                    Promotion of Scout & Cellar Products at Retail
                  </strong>
                  <p>
                    Consultants must not publicly interact with any individual
                    retailer of Scout & Cellar products (except the scenarios
                    described below in this section or with prior written
                    permission from the Winery Team), to market Scout & Cellar
                    products or the retailer of S&C products. This includes
                    public social media posts, email or text “blasts” to more
                    than one individual, and commenting about Scout & Cellar's
                    retail presence directly through the retailer's social
                    media.
                  </p>
                  <p>
                    If a customer asks a Consultant about Scout & Cellar
                    products' presence in a retail setting, the Consultant must
                    not reply publicly, regardless of how or where the customer
                    made the relevant inquiry. Failure to abide by this policy
                    likely also indicates unlawful behavior under federal and
                    state-level alcohol regulations.
                  </p>
                  <p>Exceptions are as follows:</p>
                  <ul>
                    <li>
                      Consultants may post about a Scout & Cellar-sponsored
                      event held at a retailer of Scout & Cellar products only
                      if:
                      <ul>
                        <li>
                          The post or ad does not include any “laudatory
                          language” referring to a specific retailer of S&C
                          products, AND
                        </li>
                        <li>
                          All mentions of a retailer are inconspicuous and do
                          not stand out from the rest of the ad or post, AND
                        </li>
                        <li>No prices are listed in the post, AND</li>
                        <li>
                          The post is framed squarely on the event rather than
                          individual products associated with the event, AND
                        </li>
                        <li>
                          The post includes the date, time, location (including
                          retailer name and address), products being sampled (if
                          any), and other relevant information about the event.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Consultants may repost any retailer-related posts from the
                      official Scout & Cellar or related brand social media
                      pages, but may not add any content that did not exist in
                      the original post.
                    </li>
                    <li>
                      Consultants may discuss Scout & Cellar's retail presence
                      only as described above or orally, either in a one-on-one
                      conversation or as part of a small private tasting.
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              <strong>
                SECTION 3: TERMINATION OF RELATIONSHIP AND ACCOUNT
              </strong>
              <ol>
                <li>
                  Independent Consultants represent the Scout & Cellar brand any
                  time they are working their Scout & Cellar independent
                  business. Especially while representing the Scout & Cellar
                  brand, Independent Consultants should conduct themselves in
                  such a way that is consistent with the Scout & Cellar Core
                  Values, as described in Part 1, Section 1.1.2 of these
                  Policies and Procedures.
                  <ol>
                    <li>
                      Disregard for or failure to behave in accordance with the
                      Core Values or these Policies and Procedures constitutes a
                      violation of the Consultant Agreement. Further, the
                      failure to engage with and/or take corrective action at
                      the request of Brand Standards also constitutes a
                      violation of the Consultant Agreement.
                    </li>
                    <li>
                      Violation of the Agreement also includes the violation of
                      any common law duty, including but not limited to any
                      illegal, fraudulent, deceptive or unethical business
                      conduct, or any act or omission by a Consultant that, in
                      the sole discretion of the Company may damage its
                      reputation or goodwill. (Such damaging act or omission
                      need not be related to the Consultant’s independent Scout
                      & Cellar business.)
                    </li>
                  </ol>
                </li>
                <li>
                  Upon receipt of a report that a Consultant violated the
                  Consultant Agreement or Policies & Procedures, Scout & Cellar
                  will investigate the matter.
                  <p>
                    During the investigation period, Scout & Cellar may place
                    the account of the Consultant under investigation on Hold
                    (also referred to as “Suspended status”), without advance
                    notice. Should the investigation results show that the
                    Consultant was not in violation of the Agreement, Scout &
                    Cellar will remove the Hold.
                  </p>
                  <p>
                    Following a review, if Scout & Cellar determines that a
                    Consultant breached the Consultant Agreement or Policies &
                    Procedures or engaged in any illegal, fraudulent, deceptive,
                    or unethical business conduct, Scout & Cellar may
                    immediately terminate the Consultant Agreement.
                  </p>
                  <p>
                    Examples of conduct that will result in immediate
                    termination of the Consultant Agreement include, without
                    limitation: a Consultant’s misrepresentation relating to
                    Company or Consultant’s Independent Business; a Consultant’s
                    failure to engage with and/or take corrective action at the
                    request of the Company’s Brand Standards department; or a
                    Consultant’s breach of any provision of the Consultant
                    Agreement.
                  </p>
                  <p>
                    In some instances, depending upon the nature of the conduct
                    and in Scout & Cellar’s discretion, Scout & Cellar may
                    instead give written notice of the breach and an opportunity
                    to cure the breach. In those instances, the Consultant’s
                    failure to timely cure the breach will result in termination
                    of the Consultant Agreement.
                  </p>
                  <p>
                    Upon receipt of a report that a Consultant breached the
                    Consultant Agreement or Policies & Procedures, Scout &
                    Cellar may temporarily suspend the Consultant’s Scout &
                    Cellar website or Cellar access, without advance notice.
                    Upon determining that a Consultant breached the Consultant
                    Agreement or Policies & Procedures, Scout & Cellar may
                    permanently terminate the Consultant’s Scout & Cellar
                    website or website access, without advance notice.
                  </p>
                </li>
                <li>
                  Scout & Cellar may take any other measure expressly allowed
                  within any provision of the Consultant Agreement or which
                  Scout & Cellar deems practicable to implement and appropriate
                  to equitably resolve injuries caused partially or exclusively
                  by the Consultant’s policy violation or contractual breach.
                </li>
                <li>
                  If the Company terminates the Consultant Agreement due to a
                  breach by a Consultant, the Company reserves the right to
                  reject any future reapplications by Consultant as a Consultant
                  and pursue all applicable legal and equitable remedies.
                </li>
                <li>
                  The Company has no obligation to share evidence of breaches of
                  the Consultant Agreement or Policies and Procedures violations
                  with any Consultant, including in cases of termination, except
                  as required by law.
                </li>
                <li>
                  A Consultant’s account can also be terminated for the
                  following reasons:
                  <ol>
                    <li>
                      Any Consultant whose account is on “Suspended” status for
                      over 30 consecutive days for any reason - including but
                      not limited to Policies and Procedures violations - may be
                      subject to termination.
                    </li>
                    <li>
                      <ol>
                        <li>
                          <strong>
                            Termination of All Consultant Accounts
                          </strong>
                          <p>
                            Scout & Cellar reserves the right to terminate all
                            Consultant Agreements upon thirty (30) days written
                            notice in the event that it elects to: (1) cease
                            business operations; (2) dissolve as a corporate
                            entity; or (3) terminate marketing of its products
                            utilizing independent consultants.
                          </p>
                        </li>
                        <li>
                          <strong>
                            Lockout and Termination for Non-payment of the
                            Annual Renewal Fee
                          </strong>
                          <p>
                            If the Company does not receive a Consultant’s
                            Renewal Fee during the calendar month containing
                            their anniversary date, the Consultant’s account
                            will be suspended until the Consultant does one of
                            the following: 1) contacts Customer Support to pay
                            the Renewal Fee; 2) informs the Company that
                            Consultant wants to cancel the applicable Consultant
                            Agreement; or 3) the Consultant’s account has been
                            suspended for over 30 days, at which point it will
                            be terminated.
                          </p>
                        </li>
                        <li>
                          <strong>Notice of Termination</strong>
                          <p>
                            Company shall notify Consultant of suspension or
                            termination of the Consultant Agreement by written
                            notice to the Consultant’s last known mailing
                            address or email address.
                          </p>
                          <p>
                            All written notices required by this Agreement will
                            be deemed effective three (3) business days after
                            mailing or immediately if sent by email.
                          </p>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Cancellation of a Consultant Account</strong>
                  <p>
                    A Scout & Cellar Independent Consultant has the right to
                    cancel this Agreement at any time, for any reason.
                  </p>
                  <p>
                    If a Consultant who voluntarily cancels this Agreement is
                    also enrolled in a Scout & Cellar monthly wine purchasing
                    program, the Consultant’s participation in that program
                    shall also be cancelled unless the Consultant uses the
                    contact form at https://scoutandcellar.com/contact/ to set
                    up a new Customer account and wine club at the time of their
                    Consultant account’s cancellation.
                  </p>
                  <ol>
                    <li>
                      <strong>Notice of Consultant Cancellation</strong>
                      <p>
                        Consultant must notify Company of cancellation of the
                        Consultant agreement by written notice to the Company at
                        its principal place of business (see Contact Information
                        above for this address) or via the contact form at
                        https://scoutandcellar.com/contact/. Notice must include
                        the Consultant’s name, address, and Consultant ID
                        Number.
                      </p>
                      <p>
                        All written notices required by this Agreement will be
                        deemed effective three (3) business days after mailing
                        or immediately if sent by email.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Effects of Termination or Cancellation</strong>
                  <ol>
                    <li>
                      Upon termination or cancellation of the Consultant
                      Agreement, a Consultant shall have no right, title, claims
                      or interest to his or her downline or any bonus and/or
                      commissions from the volume generated by them.
                    </li>
                    <li>
                      Any Consultant whose agreement has been terminated or
                      cancelled (with the exceptions listed in Part 2, Sections
                      3.8.2.1and 3.8.2.2 below) is not eligible to reapply for a
                      Scout & Cellar business for six (6) calendar months
                      following the termination or cancellation of the
                      Consultant Agreement, with the exception of Consultants
                      terminated for Policy violations. These Consultants should
                      refer to Part 2, Section 3.8.2.2 for reapplication
                      guidelines. Former Consultants who reapply after the 6
                      month cooldown period will be treated as brand new
                      Consultants.
                      <ol>
                        <li>
                          Consultants whose Consultant Agreements were
                          terminated solely for failure to pay the annual
                          Renewal Fee may be re-activated within 60 days
                          following the expiration of the agreement, provided
                          the Renewal Fee is paid in full immediately upon
                          reactivation. If the former Consultant re-activates
                          within the 60-day time limit, the Consultant will
                          resume the rank and position held immediately prior to
                          the termination of the Consultant Agreement.
                          Consultant will need to enter into a new Consultant
                          Agreement. However, said Consultant’s paid-as level
                          will not be restored unless they qualify at that
                          payout level in the new month. The Consultant is not
                          eligible to receive commissions for the period of time
                          that the Consultant Agreement was terminated.
                        </li>
                        <li>
                          A Scout & Cellar Consultant whose Agreement is
                          terminated for breach of the Consultant Agreement or
                          other violation of the Policies & Procedures may
                          reapply to become a Consultant, twelve (12) calendar
                          months from the date of termination. Any such
                          Consultant wishing to reapply must submit a letter to
                          the Scout & Cellar Compliance department setting forth
                          the reasons why he/she believes Scout & Cellar should
                          allow him or her to operate a Scout & Cellar business.
                          It is within Scout & Cellar’s sole discretion whether
                          to permit such an individual to re-enroll as a Scout &
                          Cellar Consultant. Each case will be determined on its
                          own merits. Upon approval of re-enrollment, the
                          Consultant will be treated as a brand-new Consultant
                          and there will not be a re-establishment of any former
                          downline or customer lists. This provision does not
                          apply to Consultants who are terminated for failure to
                          pay Renewal Fee, failure to meet minimum personal
                          volume to remain Active, failure to submit W9 form, or
                          failure to submit the required Business Entity
                          paperwork.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>
                    Consultant Responsibilities upon Termination or Cancellation
                  </strong>
                  <ol>
                    <li>
                      Consultants must, within five (5) business days, pay all
                      amounts due and owing to Scout & Cellar;
                    </li>
                    <li>
                      Consultants must immediately cease representing the
                      individual(s) or Business Entity as an Independent
                      Consultant of Company and marketing Scout & Cellar
                      products and services;
                    </li>
                    <li>
                      Consultants will be ineligible to receive any compensation
                      as an Independent Consultant not earned as of the date of
                      termination of the Consultant Agreement, including income
                      resulting from Consultant’s own marketing efforts and the
                      marketing efforts and other activities of the Consultant’s
                      former downline organization. Consultant hereby authorizes
                      Company to withhold any payments due to Consultant under
                      the Compensation Plan for any amounts due and owing to
                      Company to the fullest extent allowed by applicable law.
                    </li>
                    <li>
                      Consultant must immediately cease all use of Scout &
                      Cellar Intellectual Property (as defined in the Consultant
                      Agreement) and Confidential Information (as defined in the
                      Consultant Agreement and these Policies and Procedures)
                      and must cease holding classes, workshops, tastings, and
                      presentations or otherwise displaying, offering for sale,
                      or promoting Company products.
                    </li>
                    <li>
                      If the Consultant posts on any social media site on which
                      the individual has previously self- identified as a
                      Consultant, there must be a conspicuous disclosure
                      accompanying such post that the individual is no longer a
                      Scout & Cellar Independent Consultant.
                    </li>
                    <li>
                      A Consultant whose Consultant Agreement is terminated or
                      cancelled for any reason will lose all Consultant rights,
                      benefits, and privileges. There is no expectation of whole
                      or partial refund for Business Basics Kits (BBK) or for
                      Back-Office, Replicated Website, or renewal fees if a
                      Consultant’s Consultant Agreement is terminated. Refunds
                      for Business Basics Kits and/or Renewal Fees may be
                      approved on a case-by-case basis and depend on a variety
                      of factors (including but not limited to the amount of
                      time elapsed since the BBK or renewal fee transaction and
                      the amount of commission earned since the BBK or Renewal
                      Fee’s Order Date).
                    </li>
                    <li>
                      Any individual who has previously been a Scout & Cellar
                      consultant and is not fully-compliant with the Consultant
                      Responsibilities upon Termination or Cancellation is not
                      eligible to rejoin as a Consultant, regardless of the
                      reason for termination or time elapsed since termination.
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    );
  };
  // policy text data  (IndependentAgreement)
  IndependentAgreement = () => {
    return (
      <div>
        <div className="agreementData">
          <h4>Independent Consultant Agreement</h4>
          <h6>Terms and Conditions</h6>
          <p>
            As a Scout &amp; Cellar Consultant (referred herein as an
            “Independent Consultant” or “Consultant”) of Wine Retriever LLC dba
            Scout &amp; Cellar (collectively referred to as “Scout &amp; Cellar”
            or the “Company”), I understand and agree that our relationship will
            be governed by the terms and conditions herein as follows:
          </p>
          <ul>
            <>
              <p>
                1. <strong>Definition of this Agreement.</strong>&nbsp;As an
                Independent Consultant, I understand that I must comply with the
                terms and conditions set forth in this Agreement, including the
                Scout &amp; Cellar Policies &amp; Procedures (the “Policies
                &amp; Procedures”) and the{" "}
                <a href="https://scoutandcellar.box.com/s/y2u3cfdev3tcr2naekr7yr80a0i1y32k">
                  Scout &amp; Cellar Compensation Plan
                </a>
                , which are both incorporated into and made a part of this
                Agreement. As used herein, the term “Agreement” refers to these
                three documents collectively. I understand that I am solely
                responsible for the means and methods by which I promote and
                market and educate consumers regarding Scout &amp; Cellar
                products and its Clean-Crafted Commitment<sup>TM</sup>, subject
                to my compliance with the Agreement. I further understand that
                this Agreement requires integrity, honesty and responsibility in
                my behavior and actions with the Company, Scout &amp; Cellar
                Members, and my fellow Consultants.
              </p>
            </>
            <>
              <p>
                2. <strong>Independent Contractor Status. </strong>A Consultant,
                including a Business Entity Consultant (as defined in the
                Policies &amp; Procedures), shall at all times be an independent
                contractor and not an employee, partner, legal representative,
                or franchisee of Scout &amp; Cellar. A Consultant shall not be
                held out as an agent of Scout &amp; Cellar for any purpose other
                than described in this Agreement. No fiduciary relationship
                exists between the Parties. A Consultant shall, at all times,
                have and maintain control of the manner and means of the
                Consultant's performance under this Agreement, subject to
                compliance with this Agreement. Consultants have no authority,
                either express or implied, to bind Scout &amp; Cellar to any
                obligation.
              </p>
            </>
            <>
              <p>
                Consultants shall not be treated as employees of Scout &amp;
                Cellar for any purpose including, without limitation, federal,
                state or local tax purposes or retirement benefits. Scout &amp;
                Cellar will not withhold or make payments for state or federal
                income tax, social security, make unemployment insurance or
                disability insurance contributions, or obtain workers'
                compensation insurance on behalf of a Consultant. As a result,
                Consultants shall not receive or be entitled to receive any
                insurance or benefit plan sponsored by Scout &amp; Cellar and
                will not be covered by Scout &amp; Cellar's workers'
                compensation, unemployment insurance or retained coverage. Any
                contrary final determination by an arbitrator, court, or other
                tribunal shall require the amendment of this Agreement in any
                way necessary to establish an independent contractor
                relationship.
              </p>
            </>
            <>
              <p>
                For Consultants who received $600 or more in compensation in any
                calendar year, Scout &amp; Cellar shall report their payments as
                required using IRS Form 1099, and the Consultants shall report
                all such payments to the appropriate federal, state and local
                taxing authorities. Consultants are fully responsible for paying
                applicable local, state, federal and other taxes on any income
                earned from the marketing and promotion of Scout &amp; Cellar
                products and any payments or other monetary or non-monetary
                compensation under this Agreement. Scout &amp; Cellar will not
                withhold or make payments for state or federal income tax,
                social security, make unemployment insurance or disability
                insurance contributions, or obtain workers' compensation
                insurance on behalf of a Consultant.
              </p>
            </>
            <>
              <p>
                Consultants are solely responsible for paying all expenses
                incurred during the course of business, including any license
                requirements or fees associated with operating as an independent
                business or Independent Consultant, and assume the business risk
                in connection with their independent Scout &amp; Cellar
                businesses. There is no guarantee that there is or will be a
                market for the Company's products or that Consultants will earn
                money.
              </p>
            </>
            <>
              <p>
                I understand that I must complete and submit to the Company an
                IRS W-9 and shall update the W-9, as required by law, and as set
                forth in more detail in the Policies &amp; Procedures.
              </p>
            </>
            <>
              <p>
                I acknowledge and agree that Company's usual course of business
                is selling Scout & Cellar products. I represent and warrant that
                I am not in the business of selling Scout & Cellar products. I
                represent and warrant that I am in the business of marketing,
                promotions and education. I acknowledge and agree that Company's
                usual course of business is not marketing, promotions and
                education.
              </p>
            </>
            <>
              <p>
                I acknowledge and agree that these acknowledgments,
                representations, and warranties in this section are material
                inducements to Company's willingness to enter into this
                Agreement with me, upon which Company has relied when deciding
                whether to enter into the Consultant Agreement with me.
              </p>
            </>
            <>
              <p>
                3. <strong>Business Kit.</strong> I agree to purchase a
                non-commissionable Business Kit from Scout & Cellar. I
                understand that a Business Kit is the only purchase required to
                conduct business as a Scout & Cellar Independent Consultant,
                except where, by law, the purchase of a Business Kit cannot be
                required. I also agree to pay any renewal fees required to
                extend the term of this Agreement. If you are a Montana
                resident, you may return your Starter Kit for a full refund
                within fifteen (15) days from the date of purchase. Please see
                the Policies & Procedures for more detailed return policies and
                procedures.
              </p>
            </>
            <>
              <p>
                4. <strong>Sales Tax.</strong> I understand that a sale is not
                final until inputted into the Scout &amp; Cellar online order
                system and that the appropriate sales/use tax amount will be
                charged, collected and remitted to the appropriate agencies.
                When my orders are placed with the Company, sales tax is charged
                on the actual retail price, taking into account any discounts
                applied.
              </p>
            </>
            <>
              <p>
                5.{" "}
                <strong>
                  Services to be performed by Independent Consultants.
                </strong>
              </p>
              <ul>
                <>
                  <p>
                    a) My Scout &amp; Cellar business will promote, market and
                    educate on Scout &amp; Cellar products and its Clean-Crafted
                    Commitment<sup>TM</sup>, including wine, by conducting
                    in-person or virtual Events or on my personal Independent
                    Consultant website, if applicable, and tasting experiences
                    using the Scout &amp; Cellar process described in the
                    Policies &amp; Procedures. My business will promote, market
                    and facilitate orders of Scout &amp; Cellar products only to
                    end users. I will inform my customers that Scout &amp;
                    Cellar offers a Satisfaction Guarantee Policy with respect
                    Scout &amp; Cellar products, and I will assist my customers
                    with initiating a return under such policy with respect to
                    any Scout &amp; Cellar products.
                  </p>
                </>
                <>
                  <p>
                    b) I cannot carry inventory of wine for sale directly to
                    Members, customers, or other Consultants. Due to the
                    regulations of the sale of alcoholic beverages, all wine
                    sales must be made between Scout &amp; Cellar and the end
                    user directly through the Company website. I also agree to
                    promote responsible consumption of wine and not serve wine
                    to minors or facilitate the sale of wine to minors.
                  </p>
                </>
                <>
                  <p>
                    c) Self-Hosted Wine Tastings. I understand that I may only
                    purchase wine for tastings for my personal guests and may
                    not purchase wine on behalf of another individual.
                  </p>
                </>
                <>
                  <p>
                    d) Wine Tasting Approved Locations. I understand that I may
                    only conduct wine tastings in private venues where there is
                    a designated event host who has pre-purchased wines from
                    Scout &amp; Cellar. Consultants may not pour wine at public
                    events or where there is a fee to attend or a charge for
                    alcohol.
                  </p>
                </>
                <>
                  <p>
                    e) Direct Shipping Licenses. I understand the Company,
                    including its subsidiaries and winery partners, is the
                    licensed entity and that all orders must be processed and
                    fulfilled through the Company or its approved licensees. I
                    cannot deliver or sell wines directly to customers or do
                    anything that would jeopardize the Company's good standing
                    and permits or licenses.
                  </p>
                </>
                <>
                  <p>
                    f) Non-Alcoholic Products. I understand that policies
                    restricting Consultant activity with regard to alcoholic
                    Scout & Cellar products automatically extend to
                    non-alcoholic Scout & Cellar products unless expressly
                    stated within the Policies and Procedures.
                  </p>
                </>
              </ul>
            </>
            <>
              <p>
                6.{" "}
                <strong>
                  Sponsoring Independent Consultants Responsibilities.
                </strong>{" "}
                In the event I sponsor an applicant to be an Independent
                Consultant and the application is accepted by Scout &amp;
                Cellar, I will accept the duties and obligations of education,
                support and recognition as set forth in the Agreement.
              </p>
            </>
            <>
              <p>
                7.{" "}
                <strong>
                  Use of Scout &amp; Cellar Intellectual Property.
                </strong>
                &nbsp;I acknowledge that, upon Scout &amp; Cellar's acceptance
                of the Agreement, Scout &amp; Cellar has granted me a limited,
                non-exclusive license to use its trademarks, service marks,
                trade names, patents, software coding (including source code)
                and copyrighted materials (“Scout &amp; Cellar Intellectual
                Property”), all of which is owned solely by Scout &amp; Cellar
                and/or its licensors, and that my use of Scout &amp; Cellar
                Intellectual Property is strictly limited by the terms of the
                Policies &amp; Procedures. Examples of Scout &amp; Cellar
                Intellectual Property are provided in the Policies &amp;
                Procedures. I may use Scout &amp; Cellar Intellectual Property
                only (a) after obtaining written permission from Scout &amp;
                Cellar prior to use, or (b) where the Scout &amp; Cellar
                Intellectual Property appears on materials distributed by Scout
                &amp; Cellar for use by Independent Consultants. I agree to use
                written, recorded or other promotional or advertising materials
                that have been produced, distributed and approved in writing by
                Scout &amp; Cellar. Any other promotional or advertising
                materials I use will be used in accordance with the Policies
                &amp; Procedures. All rights and licenses granted in or under
                this Agreement shall terminate automatically upon the
                termination of this Agreement.
              </p>
            </>
            <>
              <p>
                8. <strong>Site Downtime.</strong> I acknowledge that the
                website for Scout &amp; Cellar may be subject to temporary
                shutdowns from time to time for maintenance and/or due to causes
                beyond Scout &amp; Cellar's or its vendor's reasonable control,
                and that Scout &amp; Cellar shall have no liability to me by
                reason of any such shutdowns.
              </p>
            </>
            <>
              <p>
                9.{" "}
                <strong>Ownership and Use of Confidential Information.</strong>
                &nbsp;I acknowledge that Scout &amp; Cellar owns all product,
                Consultant and customer information and data that I may create
                or compile, including but not limited to Business Reports,
                Customer lists (including names, contact information, and other
                data), Consultant lists (including names, contact information
                and other data), information pertaining to Downline<sup>
                  1
                </sup>{" "}
                genealogy, and any other information which may contain financial
                or business information, product and purchasing information,
                customer and Consultant contact and profile details, Consultant
                lists, operating and production procedures, product development
                information, financial data and marketing materials which are
                confidential and proprietary and constitute trade secrets
                belonging to Scout &amp; Cellar (hereinafter “Confidential
                Information”) (collectively, “Confidential Information”), and
                that all Confidential Information is confidential and that its
                disclosure could cause significant harm to Scout &amp; Cellar. I
                will not use or disclose Confidential Information to any person
                except in strict accordance with this Agreement and will take
                all reasonable precautions to prevent its unauthorized
                dissemination, both during and after the term of this Agreement.
                I will not use Confidential Information to sell products or
                services other than Scout &amp; Cellar products and services or
                in connection with any other business during the term of and
                after termination of this Agreement. I understand that I will be
                deemed to breach my obligations to Scout &amp; Cellar with
                respect to Confidential Information or trade secrets if I work
                or perform services (including consulting or advisory services)
                for a competitor of Scout &amp; Cellar in any position in which
                I am required to or do use, disclose or otherwise employ any
                Confidential Information obtained during my relationship with
                Scout &amp; Cellar. I understand and agree that this provision
                does not prohibit me from working for another company during the
                term of this Agreement or after the termination of this
                Agreement, but requires me not to use, share or otherwise
                communicate Confidential Information (including trade secrets)
                to such a company or to perform services for such a company. I
                agree that a breach of this provision shall cause irreparable
                harm to Scout &amp; Cellar and that Scout &amp; Cellar will be
                entitled to injunctive relief in the event of a breach of this
                provision, in addition to any other legal or equitable remedies
                to which Scout &amp; Cellar may be entitled. I further agree
                that the terms of this Agreement shall be deemed Confidential
                Information and shall be subject to the provisions of this
                Section 9. Upon Scout &amp; Cellar's reasonable written request,
                I agree to return to Scout &amp; Cellar all Confidential
                Information, including but not limited to all marketing
                collateral, marketing plans, documentation, notes, plans,
                drawings and copies thereof. All information is provided “AS IS”
                and without any warranty, express, implied or otherwise,
                regarding its accuracy or performance.
              </p>
            </>
            <>
              <p>
                <sup>1</sup> A Consultant's “Downline” includes the group of
                Consultants directly mentored by that Consultant, along with any
                Consultants beneath the aforementioned group.
              </p>
            </>
            <>
              <p>
                10. <strong>Authorized Business and Product Claims.</strong>
                &nbsp;Any claims that I make about my Scout &amp; Cellar
                business shall be in compliance with the Policies &amp;
                Procedures. I further agree to limit any claims I make about my
                Scout &amp; Cellar business, including, but not limited to
                earnings ability, to those claims authorized or approved in
                writing by Scout &amp; Cellar. I understand and acknowledge that
                this obligation extends to any statements I may make in response
                to customer inquiries about my Scout &amp; Cellar business or
                any Scout &amp; Cellar products.
              </p>
            </>
            <>
              <p>
                11. <strong>Conflicting Obligations.</strong>&nbsp;I represent
                and warrant that I have no agreements, relationships, or
                commitments to any person or entity that conflict with the
                provisions of this Agreement, my obligations to Scout &amp;
                Cellar under this Agreement and/or my ability to perform
                services under this Agreement. I will not enter into any such
                conflicting agreement during the term of this Agreement.
              </p>
              <ul>
                <>
                  <p>
                    1) <strong>Non-Solicitation.</strong>&nbsp;During the term
                    of this Consultant Agreement and for two years thereafter, a
                    Consultant may not, using Company's trade secrets, directly
                    or indirectly solicit any Scout &amp; Cellar Consultant or
                    any Scout &amp; Cellar employee for engagement as an
                    employee, or as an independent consultant, contractor or
                    distributor of any direct selling or network marketing
                    company, nor will Consultant solicit any Scout &amp; Cellar
                    employee to become a Consultant of Scout &amp; Cellar during
                    this period. “Solicit” includes (i) communicating
                    information or offering to provide information about any
                    other direct selling or network marketing business
                    opportunity to a Scout &amp; Cellar Consultant or employee;
                    (ii) posting or messaging information about another direct
                    selling or network marketing business opportunity on any
                    social media site utilized by the Consultant to promote her
                    or his Scout &amp; Cellar business; (iii) tagging any Scout
                    &amp; Cellar Consultant or employee with a post on any
                    social media site that provides information or offers to
                    provide information about another direct selling or network
                    marketing business opportunity; (iv) enrolling or attempting
                    to enroll a Scout &amp; Cellar Consultant or employee as a
                    consultant, independent contractor or distributor in another
                    direct selling or network marketing company. This conduct
                    constitutes soliciting even if the Consultant's actions are
                    in response to an inquiry made by another person who is a
                    Consultant or a Scout &amp; Cellar employee; and (v) any
                    additional actions defined as Solicitation in the
                    “Prohibited Consultant Practices – Non-Solicitation" item in
                    the Policies and Procedures.
                  </p>
                </>
              </ul>
            </>
            <>
              <p>
                2). <strong>Release and Permission.&nbsp;</strong>I hereby grant
                Scout & Cellar and its subsidiaries, affiliates, partners,
                designees, agents, successors or assigns an unrestricted,
                perpetual, worldwide, irrevocable, royalty-free, transferable,
                sub-licensable and fully paid-up license to use, reuse, license,
                reproduce, modify, adapt, publish, edit, translate, display,
                perform, distribute, transmit, broadcast, communicate to the
                public and otherwise exhibit throughout the world, create
                derivative works from, and otherwise exploit and use my name,
                including nicknames and social media handles, likeness, image,
                photograph, biographical information, testimonial information,
                voice, persona, opinions, comments, and in any and all media and
                by any means of transmission, distribution or communication,
                whether now known or hereafter created, including by way of
                example and not limitation, any television, radio, the Internet
                and online forums, and in audio visual works, photographs, sound
                recordings, marketing and public relations materials,
                publications and the like (collectively, “Media Materials”) for
                advertising, publicizing, marketing and promotion of Scout &amp;
                Cellar, and I waive remuneration for such use. I further waive
                my right to inspect or approve all preliminary, draft or
                finished Media Materials.
              </p>
            </>
            <>
              <p>
                3) <strong>Term and Termination of this Agreement.</strong>
              </p>
              <ul>
                <>
                  <p>
                    a) <strong>Term.</strong>&nbsp;This Agreement is effective
                    from the date of acceptance by Scout & Cellar and will
                    automatically renew every twelve (12) months on the
                    anniversary of the date I enter into this Agreement pursuant
                    to the terms set forth in more detail in the Policies &
                    Procedures, unless terminated earlier as provided in the
                    Agreement.
                  </p>
                </>
                <>
                  <p>
                    b) <strong>Involuntary Termination. </strong>Scout &amp;
                    Cellar may immediately terminate this Agreement in the event
                    of any prohibited actual or attempted assignment of the
                    Agreement, or my misrepresentation relating to Company or my
                    Independent Consultant business, or my breach of any
                    provision of this Agreement. If Company terminates this
                    Agreement, the Company may reject any future reapplications
                    by me as a Consultant and pursue all applicable legal
                    remedies.
                  </p>
                </>
                <>
                  <p>
                    c).{" "}
                    <strong>
                      Voluntary Termination. A Scout &amp; Cellar Independent
                      Consultant has the right to terminate this Agreement at
                      any time, for any reason. Notice of termination must be
                      submitted in writing to the Company at its principal place
                      of business or via the contact form at{" "}
                      <a href="https://scoutandcellar.com/contact">
                        https://scoutandcellar.com/contact
                      </a>
                      . Notice must include the Consultant's name, address, and
                      Consultant ID Number.
                    </strong>
                  </p>
                </>
              </ul>
            </>
            <>
              <p>
                4){" "}
                <strong>
                  Events upon Termination of this Agreement.&nbsp;
                </strong>
                Upon termination of this Agreement,
              </p>
              <ul>
                <>
                  <p>
                    a) I will (i) within five (5) business days pay all amounts
                    due and owing to Scout &amp; Cellar; (ii) immediately cease
                    representing myself as an Independent Consultant of Company;
                    and (iii) be ineligible to receive any compensation as an
                    Independent Consultant not earned as of the date of
                    termination of this Agreement. I hereby authorize Company to
                    withhold from any payments due me under the Compensation
                    Plan any amounts due and owing to Company to the fullest
                    extent allowed by applicable law.
                  </p>
                </>
                <>
                  <p>
                    b) I will immediately cease all use of Scout &amp; Cellar
                    Intellectual Property and Confidential Information (as
                    defined in this Agreement and the Policies and Procedures)
                    and will cease holding classes, workshops, tastings, and
                    presentation or otherwise displaying, offering for sale or
                    promoting Company products. I agree and acknowledge that the
                    Policies and Procedures further describe the events that
                    shall occur upon termination of this Agreement.
                  </p>
                </>
              </ul>
            </>
            <>
              <p>
                5) <strong>Transferability.&nbsp;</strong>Neither this Agreement
                nor my Scout &amp; Cellar business may be transferred or
                assigned by me or operated in partnership with any other person
                without Scout &amp; Cellar's prior written consent. Company may
                assign this Agreement at any time.
              </p>
            </>
            <>
              <p>
                6) <strong>Entire Agreement: Amendment.</strong>&nbsp;This
                Agreement (including the Policies &amp; Procedures and
                Compensation Plan) in its current form, and as may be amended by
                Scout &amp; Cellar in the future, supersedes all prior
                communications, understandings and agreements between the
                parties and constitutes the entire agreement between the parties
                relating to its subject matter. I have carefully read and agree
                to comply with this Agreement and the Policies &amp; Procedures
                and Compensation Plan, each of which are incorporated into and
                made a part of this Agreement. I understand that I must be in
                good standing to be eligible for bonuses or commissions from
                Scout &amp; Cellar. I also understand that this Agreement may be
                amended by Scout &amp; Cellar in its sole discretion, and I
                agree to abide by all such amendments. Notification of
                amendments shall be posted to my Back Office (“The Cellar”).
                Amendments shall become effective thirty (30) days after notice
                of the amendment is posted, but amended policies shall not apply
                retroactively to conduct that occurred prior to the effective
                date of the amendment, unless expressly stated otherwise. The
                continuation of my Scout &amp; Cellar business or my acceptance
                of bonuses or commissions after the effective date of amendments
                shall constitute my acceptance of any and all amendments.
              </p>
            </>
            <>
              <p>
                7) <strong>Indemnification/Offset.</strong>&nbsp;I will
                indemnify and hold harmless Company, its subsidiaries, managers,
                officers, employees, agents and assigns from and against any
                damages, claims or liabilities and expenses (including
                attorneys' fees) incident to my: (a) activities as an
                Independent Consultant including, without limitation, any
                unauthorized representations made by me; (b) any negligent,
                reckless or intentionally wrongful act of myself or my
                assistants, employees, contractors or agents, including with
                respect to claims by third parties related to infringement of
                third party intellectual property rights; (c) a determination by
                an arbitrator, court, agency, or other tribunal that I am not an
                independent contractor, (d) breach by me or by my assistants,
                employees, contractors or agents of any of the terms of this
                Agreement; or (e) violation of or failure to comply with any
                applicable federal, state or local laws or regulations. Company
                shall have the right to offset any amounts owed by me to Company
                (including, without limitation, the repayment of commissions as
                a result of charge backs and/or product returns) against the
                amount of any commissions or bonuses owed to me to the fullest
                extent permitted by applicable law.
              </p>
            </>
            <>
              <p>
                8) <strong>Limitation of Damages.</strong>&nbsp;TO THE EXTENT
                PERMITTED BY LAW, COMPANY AND ITS AFFILIATES, OFFICERS MANAGERS,
                ASSOCIATES AND OTHER REPRESENTATIVES SHALL NOT BE LIABLE FOR,
                AND I HEREBY RELEASE THE FOREGOING FROM, AND WAIVE ANY CLAIM OF
                ANY SPECIAL, INCIDENTAL, INDIRECT, PUNITIVE OR EXEMPLARY, OR
                CONSEQUENTIAL DAMAGES OF ANY KIND OR NATURE, INCLUDING, WITHOUT
                LIMITATION, DAMAGES FOR LOST PROFITS, LOST BUSINESS, AND LOST
                OPPORTUNITIES, HOWEVER CAUSED, ARISING OUT OF OR RELATING TO THE
                COMPANY'S PERFORMANCE, NON- PERFORMANCE, ACT OR OMISSION WITH
                RESPECT TO THE BUSINESS RELATIONSHIP OR OTHER MATTERS BETWEEN
                MYSELF AND THE COMPANY, WHETHER SUCH LIABILITY IS ASSERTED ON
                THE BASIS OF CONTRACT, TORT, OR OTHER THEORY OF LIABILITY
                (INCLUDING BUT NOT LIMITED TO NEGLIGENCE OR STRICT LIABILITY, OR
                OTHERWISE, EVEN IF SCOUT &amp; CELLAR OR ITS AFFILIATES HAVE
                BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. FURTHERMORE, IT
                IS AGREED THAT ANY DAMAGE TO ME SHALL NOT EXCEED, AND IS HEREBY
                EXPRESSLY LIMITED TO THE AMOUNT OF PRODUCTS AND SERVICES, IF
                APPLICABLE, OWNED OR HELD BY ME, COMMISSIONS, BONUSES AND
                OVERRIDES.
              </p>
            </>
            <>
              <p>
                9) <strong>Cumulative Remedies/Waiver.</strong>&nbsp;All rights,
                powers and remedies given to either party are cumulative, not
                exclusive and in addition to any and all other rights and
                remedies provided by law. No failure or delay of either party to
                exercise any power or right under this Agreement or to insist
                upon strict compliance by me with any obligation or provision
                shall constitute a waiver of such party's right to demand exact
                compliance therewith. Waiver by Scout &amp; Cellar can be
                effective only in writing by an authorized officer of Scout
                &amp; Cellar.
              </p>
            </>
            <>
              <p>
                10) <strong>Injunctive Relief.</strong>&nbsp;Either Scout &amp;
                Cellar or I may apply to a court of competent jurisdiction for
                temporary, preliminary or permanent injunctive relief on the
                ground that without such relief the agreement to arbitrate in
                this Agreement may be rendered ineffectual. For example, any
                breach of the confidentiality or non-solicitation provisions of
                this Agreement by me would cause Scout &amp; Cellar immediate
                and irreparable harm that could not be made whole solely by
                monetary damages; therefore, seeking injunctive relief in court
                before or simultaneous with demanding arbitration, is
                appropriate.
              </p>
            </>
            <>
              <p>
                11) <strong>Other Terms.</strong>
              </p>
              <ul>
                <>
                  <p>
                    a) I have full legal capacity to enter into this Agreement
                    in the state in which I reside. I agree to comply with all
                    laws, rules and regulations governing the conduct of my
                    business.
                  </p>
                </>
                <>
                  <p>
                    b) I will refer to the Company's website and/or the Policies
                    &amp; Procedures to confirm the Company's current states of
                    operation, which may change at any time. I understand that I
                    may not conduct business in any state that has not been
                    confirmed by Scout &amp; Cellar as an authorized state for
                    the marketing, education and promotion of Scout &amp; Cellar
                    products and its Clean-Crafted CommitmentTM via the Scout
                    &amp; Cellar program.
                  </p>
                </>
                <>
                  <p>
                    c) I certify that I am not in the Upline or Downline team of
                    any other household member who is a Scout &amp; Cellar
                    Independent Consultant.
                  </p>
                </>
                <>
                  <p>
                    d) If any provision of this Agreement is determined to be
                    invalid or unenforceable, that determination will not affect
                    any other provision of this Agreement and the provision in
                    question will be modified by the reviewing arbitrator,
                    court, agency, or other tribunal so as to be rendered
                    enforceable. The headings in this Agreement are inserted for
                    convenience only and are not part of the Agreement.
                  </p>
                </>
                <>
                  <p>
                    e) All written notices required by this Agreement to be
                    given to me will be deemed effective three (3) business days
                    after mailing to my most current mailing or immediately if
                    sent to the email address on file with Scout &amp; Cellar.
                  </p>
                </>
              </ul>
            </>
            <>
              <p>
                12) <strong>Dispute Resolution.</strong>&nbsp;I agree that any
                controversy, claim or dispute of whatever nature arising between
                me, on the one hand, and Scout &amp; Cellar, on the other,
                including but not limited to those arising out of or relating to
                this Agreement, including the Policies &amp; Procedures, or a
                breach thereof, or the commercial, economic or other
                relationship of a Consultant and Scout &amp; Cellar, whether
                such claim is based on rights, privileges, or interests
                recognized by or based upon statute, contract, tort common law,
                or otherwise (“Dispute”), shall be settled through negotiation,
                mediation, or arbitration, as provided in this Section 23.
              </p>
              <ul>
                <>
                  <p>
                    a) <strong>Negotiation.</strong>&nbsp;If a Dispute arises,
                    the parties shall first attempt in good faith to resolve it
                    promptly by negotiation. Any of the parties involved in the
                    Dispute may initiate negotiation by providing notice (the
                    “Dispute Notice”) to each involved party setting forth the
                    subject of the Dispute and the relief sought by the party
                    providing the Dispute Notice, and designating a
                    representative who has full authority to negotiate and
                    settle the Dispute.
                  </p>
                </>
                <>
                  <p>
                    b) <strong>Mediation.</strong>&nbsp;At any time twenty-one
                    (21) days or more after the Dispute Notice is provided, but
                    prior to the initiation of arbitration, regardless of
                    whether negotiations are continuing, any party may submit
                    the Dispute to the American Arbitration Association (“AAA”)
                    for mediation by providing notice of such request to all
                    other concerned parties and providing such notice and a copy
                    of all relevant Dispute Notices and notices responding
                    thereto to AAA.
                  </p>
                </>
                <>
                  <p>
                    c) <strong>Arbitration.</strong>&nbsp;Any Dispute not
                    resolved in writing by negotiation or mediation shall be
                    subject to and shall be settled exclusively by final,
                    binding arbitration before a single arbitrator in Dallas,
                    Texas, in accordance with the then-prevailing Commercial
                    Arbitration Rules of AAA. No party may commence Arbitration
                    with respect to any Dispute unless that party has pursued
                    negotiation and, if requested, mediation, as provided
                    herein, provided, however, that no party shall be obligated
                    to continue to participate in negotiation or mediation if
                    the parties have not resolved the Dispute within seventy
                    (70) Days after the Dispute Notice was provided to any party
                    (or a longer period as may be agreed by the parties).
                  </p>
                </>
                <>
                  <p>
                    d) <strong>Class Action Waiver.</strong> Consultant agrees
                    that by entering into the above agreement to arbitrate,
                    Consultant is waiving Consultant's right to have any dispute
                    or claim brought, heard or arbitrated as a class action
                    lawsuit or class action arbitration, any private attorney
                    general lawsuit or private attorney general arbitration, or
                    any joint or consolidated lawsuit or joint or consolidated
                    arbitration of any kind. The Parties agree that an
                    arbitrator shall not have any authority to hear or arbitrate
                    any class or collective action. The Parties agree that any
                    claim that all or part of this class action waiver is
                    unenforceable shall be determined by a state or federal
                    court located in Dallas, Texas and not by an arbitrator. The
                    Parties further agree that if a court determines that the
                    limitations of this paragraph are deemed invalid or
                    unenforceable, any putative class, private attorney general,
                    or representative action must be brought in a court of
                    proper jurisdiction and not in arbitration.
                  </p>
                </>
                <>
                  <p>
                    e) <strong>Dispute Documents Confidential.&nbsp;</strong>All
                    communications, whether oral, written or electronic, in any
                    negotiation, mediation or arbitration pursuant to this
                    Section shall be treated as confidential and those made in
                    the course of negotiation or mediation, including any offer,
                    promise or other statement, whether made by any of the
                    parties, their agents, employees, experts, attorneys, or
                    mediator or any AAA employee, shall also be treated as
                    settlement negotiations for purposes of applicable rules of
                    evidence and shall be inadmissible for any purpose,
                    including impeachment, in any arbitration or other
                    proceeding involving the parties, provided that evidence
                    that is otherwise admissible or discoverable shall not be
                    rendered inadmissible or non-discoverable as a result of its
                    use in negotiation or mediation.
                  </p>
                </>
                <>
                  <p>
                    f) <strong>Costs of Dispute.&nbsp;</strong>The costs of
                    negotiation, mediation, arbitration, a proceeding for
                    injunctive relief or an action to enforce an arbitration
                    award, including fees and expenses of any mediator,
                    arbitrator, AAA, or other persons independent of all parties
                    acting with the consent of the parties to facilitate
                    settlement, shall be shared in equally by Consultant, on the
                    one hand, and Scout &amp; Cellar on the other. The parties
                    shall bear their own legal fees and other expenses incurred
                    in negotiation, mediation, arbitration or any court
                    proceeding. Nothing in this paragraph shall prevent a party
                    from seeking recovery of its/their attorney's fees and costs
                    in any legal proceeding if such recovery is permitted by
                    statute or applicable law.
                  </p>
                </>
                <>
                  <p>
                    g) <strong>Venue and Jurisdiction.&nbsp;</strong>Any party
                    may seek specific performance of this Section, and any party
                    may seek to compel each other party to comply with this
                    Section by petition to any court of competent jurisdiction.
                    An action to enforce an arbitrator's award hereunder may be
                    brought before any court of competent jurisdiction. For
                    purposes of any provisional or equitable relief sought under
                    this Section, the parties consent to exclusive jurisdiction
                    and venue in the courts of the State of Texas residing in
                    the City of Dallas, or the United States District Court for
                    the Northern District of Texas. The pendency of mediation or
                    arbitration shall not preclude a party from seeking
                    provisional remedies in aid of the arbitration from a court
                    of appropriate jurisdiction, and the parties agree not to
                    defend against any application for provisional relief on the
                    ground that mediation or arbitration is pending. Each party
                    in any proceeding under this policy shall be responsible for
                    its own attorney's fees, legal expenses, and costs. If any
                    portion of this Section is held to be unenforceable for any
                    reason, the remainder shall remain in full force and effect.
                    Nothing in this Section shall preclude any party from
                    seeking interim or provisional relief concerning the
                    Dispute, including a temporary restraining order, a
                    preliminary injunction, or an order of attachment, either
                    prior to or during negotiation, mediation or arbitration. In
                    the event any portion of this provision regarding
                    arbitration is found to be unenforceable, such portion shall
                    be severable from the remainder of this provision, which
                    shall remain in full force and effect. Any amendment to this
                    provision, or to the Dispute Resolution provision in the
                    Policies &amp; Procedures, shall not apply to: (1) a dispute
                    arising prior to the effective date of such amendment; or
                    (2) a Consultant who declines to participate in the Scout
                    &amp; Cellar Program following the Effective Date of any
                    such amendment. Nothing in this Agreement requires
                    arbitration of claims that as a matter of law (after
                    application of Federal Arbitration Act preemption
                    principles) cannot be made subject to a predispute
                    arbitration agreement.
                  </p>
                </>
                <>
                  <p>
                    h) <strong>Governing Law.</strong>&nbsp;The Federal
                    Arbitration Act shall govern all matters relating to
                    arbitration. The law of the State of Texas, without regard
                    to principles of conflicts of laws, shall govern all other
                    matters relating to or arising from the Agreement, the Scout
                    &amp; Cellar Business, relationship between the parties, or
                    any other claim between the parties.
                  </p>
                </>
                <>
                  <p>
                    i) <strong>Louisiana Residents.&nbsp;</strong>The foregoing
                    dispute resolution provisions shall apply to Louisiana
                    residents with the exception that governing law,
                    jurisdiction, and venue shall be in Louisiana.
                  </p>
                </>
              </ul>
            </>
            <>
              <p>
                13) <strong>Entire Agreement.</strong>&nbsp;The Policies &amp;
                Procedures are incorporated into this Agreement, along with the
                Compensation Plan, and constitutes the entire agreement of the
                parties regarding their business relationship.
              </p>
            </>
            <>
              <p>
                14){" "}
                <strong>
                  California Consumer Privacy Act Addendum <br />
                </strong>
                The California Consumer Privacy Act of 2018, Civil Code Sections
                1798.100 <em>et seq.</em> together with any amendments, rules,
                regulations, and decisions (the “CCPA”) impose specific
                obligations on the Company as a Business and on the Consultant
                as a Business with regard to the processing, handling, use, and
                protection of Personal Information of California Consumers. This
                CCPA Addendum sets forth the data privacy requirements imposed
                by the CCPA and is incorporated by reference into the Agreement.{" "}
              </p>
              <ul>
                <>
                  <p>
                    a) <strong>Definitions</strong> <br />
                    For purposes of this CCPA Addendum, the following terms
                    shall mean as follows:
                  </p>
                  <ul>
                    <>
                      <p>
                        i) <strong>“Consumer” </strong>means a natural person
                        who is a California resident as defined under the CCPA.
                      </p>
                    </>
                    <>
                      <p>
                        ii) <strong>“Personal Information” </strong>means
                        information that identifies, relates to, describes, is
                        reasonably capable of being associated with, or could
                        reasonably be linked, directly or indirectly, with a
                        particular Consumer or household received by Consultant
                        in connection with the Services including, but not
                        limited to, the examples of Personal Information
                        identified in the CCPA.
                      </p>
                    </>
                    <>
                      <p>
                        iii) <strong>“Personal Information Breach”</strong>{" "}
                        means any breach of security leading to the unauthorized
                        access and exfiltration, theft, or disclosure of
                        nonencrypted or nonredacted Personal Information
                        resulting from the failure to implement and maintain
                        reasonable security procedures and practices as set
                        forth in the CCPA.{" "}
                      </p>
                    </>
                    <>
                      <p>
                        iv){" "}
                        <strong>
                          “Reasonable Security Procedures and Practices”
                        </strong>{" "}
                        means security measures appropriate to the nature of the
                        Personal Information that are implemented and maintained
                        to prevent the unauthorized access and exfiltration,
                        theft, or disclosure of nonencrypted or nonredacted
                        Personal Information and which comply with the
                        applicable Center for Internet Security (“CIS”)
                        Controls.
                      </p>
                    </>
                    <>
                      <p>
                        v) <strong>“Sell” </strong>means selling, renting,
                        releasing, disclosing, disseminating, making available,
                        transferring, or otherwise communicating orally, in
                        writing, or by electronic or other means, a Consumer's
                        Personal Information by the Consultant to a third party
                        for monetary or other valuable consideration.
                      </p>
                    </>
                    <>
                      <p>
                        vi) <strong>“Service Provider,” </strong>means the
                        Consultant and the services (“Services”) provided by the
                        Consultant as specified in the Agreement.{" "}
                      </p>
                    </>
                  </ul>
                </>
                <>
                  <p>
                    b) <strong>Service Provider Relationship. </strong>The
                    Company and Consultant agree that Consultant is a separate
                    business entity and is acting as a Service Provider to
                    Company under the Agreement and under the CCPA. The services
                    provided by the Consultant are specified in the Agreement.
                    The Company may direct the Consultant to collect Personal
                    Information directly from a Consumer on the Company’s behalf
                    and also may provide Personal Information to the Consultant.
                    In such event, Consultant shall be deemed a Service Provider
                    under this CCPA Addendum and the CCPA.
                  </p>
                </>
                <>
                  <p>
                    c) <strong>Obligations of Consultant.</strong>
                  </p>
                  <ul>
                    <>
                      <p>
                        i) Consultant shall implement Reasonable Security
                        Procedures and Practices regarding the Personal
                        Information.{" "}
                      </p>
                    </>
                    <>
                      <p>
                        ii) Consultant shall notify the Company immediately upon
                        becoming aware of a Personal Information Breach
                        involving the Personal Information.
                      </p>
                    </>
                    <>
                      <p>
                        iii) If Consultant receives a request to know or a
                        request to delete from a Consumer regarding the Personal
                        Information and does not comply with such request,
                        Consultant shall explain the basis for the denial and
                        inform the Consumer to submit the request directly to
                        the Company and provide the Consumer with the contact
                        information for the Company.
                      </p>
                    </>
                    <>
                      <p>
                        iv) Consultant, as a Service Provider, agrees that it
                        will not:
                      </p>
                      <ul>
                        <>
                          <p>(1) Sell the Personal Information;</p>
                        </>
                        <>
                          <p>
                            (2) Retain, use, or disclose the Personal
                            Information for any purpose other than for the
                            specific purpose of performing the Services as
                            specified in the Agreement; and
                          </p>
                        </>
                        <>
                          <p>
                            (3) Retain, use, or disclose the Personal
                            Information outside the direct business relationship
                            between the Consultant and the Company, including to
                            provide services to another person or entity.
                            However, Consultant may combine the Personal
                            Information with personal information received from
                            other persons or entities to which it is a Service
                            Provider to the extent necessary to detect data
                            security incidents, or protect against fraudulent or
                            illegal activity.
                          </p>
                        </>
                      </ul>
                    </>
                    <>
                      <p>
                        v) Consultant hereby certifies that it understands the
                        restrictions set forth in (c)(iv)(1)-(3) above.
                      </p>
                    </>
                  </ul>
                </>
                <>
                  <p>
                    d) <strong>Deletion</strong>. Upon Company's written
                    request, and subject to and in accordance with all
                    applicable laws, Consultant, as a Service Provider, agrees
                    to promptly delete any and all Personal Information.
                  </p>
                  <ul>
                    <>
                      <p>
                        e) <strong>Termination</strong>. The Company shall have
                        the right to terminate the Agreement and/or CCPA
                        Addendum in the event that Consultant is or becomes
                        non-compliant with this CCPA Addendum or the CCPA
                        regarding the Personal Information.
                      </p>
                    </>
                  </ul>
                </>
              </ul>
            </>
            <>
              <p>
                <strong>Indemnification. </strong>Notwithstanding any other
                limitation of liability or indemnity provisions to the contrary
                in the Agreement, if Consultant breaches any of its obligations
                under this CCPA Addendum or the CCPA, Consultant shall
                indemnify, defend, and hold the Company harmless from and
                against all loss, cost, harm, expense (including reasonable
                attorney's fees), liabilities or damages (“Damages”) arising
                from the breach. For avoidance of doubt, Damages include (i)
                monetary fines and penalties issued by any regulatory or
                governmental authority, and (ii) amounts paid to third parties
                as damages or amounts paid under the Company's indemnity
                obligations to third parties, which shall be considered direct
                damages.{" "}
              </p>
            </>
          </ul>
          <p>
            I acknowledge that I have read, understand and agree to the terms
            set forth in this Scout &amp; Cellar Independent Consultant
            Agreement. I certify that all of the information provided by me in
            connection with becoming an Independent Consultant and in this
            Agreement is true and accurate. I am 21 years of age or older, and I
            have a valid Social Security number or individual Taxpayer
            Identification number.
          </p>
        </div>
      </div>
    );
  };
  // method to download  the required text file from backend
  downloadFile = async () => {
    await axios
      .get(
        !this.state.currentButton
          ? "../Agreement-PDF/Independent Consultant Agreement.pdf"
          : "../Agreement-PDF/Policies & Procedures.pdf",
        {
          responseType: "blob",
        }
      )
      .then((res) => {
        !this.state.currentButton
          ? fileDownload(res.data, "Independent Consultant Agreement.pdf")
          : fileDownload(res.data, "Policies & Procedures.pdf");
      });
  };

  handleScroll = (e) => {
    if (
      Math.abs(
        e.target.scrollTop + e.target.clientHeight - e.target.scrollHeight
      ) > 10
    ) {
      this.setState({ scrollReachEnd: false });
    } else {
      this.setState({ scrollReachEnd: true });
    }
  };

  //to see is user has accepted the agreement
  handleChangecheckbox = (e) => {
    let userData = this.props.userData;
    if (e.target.id === "checkbox1") {
      if (
        !this.props.userData.policy_procedures &&
        !this.props.userData.indepedent_agreement
      ) {
        this.toggleButton(false);
        window.scrollTo(0, 0);
        this.myRef.current.scrollTo(0, 0);
      }
      userData["indepedent_agreement"] =
        !this.props.userData.indepedent_agreement;
    } else {
      if (
        !this.props.userData.policy_procedures &&
        !this.props.userData.indepedent_agreement
      ) {
        this.toggleButton(true);
        window.scrollTo(0, 0);
        this.myRef.current.scrollTo(0, 0);
      }
      userData["policy_procedures"] = !this.props.userData.policy_procedures;
    }
    this.props.setUserData(userData);
    this.props.setrightFooterButtonDisabled(
      !(userData["indepedent_agreement"] && userData["policy_procedures"])
    );
  };

  // toggle which policy nneds to be displayed
  toggleButton = (toggle) => {
    this.setState({ currentButton: toggle });
    this.props.setCurrentAgreement(toggle);
  };

  componentDidMount = () => {
    const { indepedent_agreement, policy_procedures } = this.props.userData;
    this.props.setrightFooterButtonDisabled(
      !(indepedent_agreement && policy_procedures)
    );
  };

  render() {
    const { currentButton, scrollReachEnd } = this.state;
    const { indepedent_agreement, policy_procedures } = this.props.userData;
    return (
      <React.Fragment>
        {/* Header for mobile view */}
        {window.innerWidth <= 550 ? (
          <Header
            step={2}
            agreement={true}
            handleBackButton={this.props.handleBackButton}
            topBarNavigation={this.props.topBarNavigation}
          />
        ) : null}
        <div
          className={
            window.innerWidth >= 550
              ? "AGcomponentMargin "
              : "AGmobileComponent"
          }
        >
          <div className="mobileAgreementLeftMargin">
            <span className="AGhead1">LET’S MAKE THIS OFFICIAL!</span>
            <div className="AGhead2">
              Please review and agree to both the Independent Consultant
              Agreement &amp; Policy and Procedures
            </div>
            {/* buttons to select the requested policy */}
            <div className="row">
              <div className="col-lg-3 col-md-6 mobileAgreementButtonWidth">
                <div
                  className={
                    currentButton
                      ? "agreementButton1 agreementButtonNotActive1"
                      : "agreementButton1 "
                  }
                  onClick={() => this.toggleButton(false)}
                >
                  Independent <br /> Consultant Agreement
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mobileAgreementButtonWidth">
                <div
                  className={
                    !currentButton
                      ? "agreementButton2 agreementButtonNotActive2"
                      : "agreementButton2 "
                  }
                  onClick={() => this.toggleButton(true)}
                >
                  Policy and Procedures
                </div>
              </div>
            </div>

            <div className="col-lg-6 ">
              <div className="downloadButton" onClick={this.downloadFile}>
                <FiDownload style={{ marginTop: "-0.3em" }} /> &nbsp;{" "}
                {!currentButton
                  ? "Download Independent Consultant Agreement"
                  : "Download Policy and Procedures"}
              </div>
            </div>
            {/* to display selected policy data */}
            <div className="col-lg-6 ">
              <div
                className="agreementPolicy"
                onScroll={this.handleScroll}
                ref={this.myRef}
              >
                {!currentButton
                  ? this.IndependentAgreement()
                  : this.PolicyAgreement()}
              </div>
            </div>
            <div className="AGhead3">
              Please review and agree to both the Independent Consultant
              Agreement &amp; Policy and Procedures
            </div>
            {/* check Box to accept agreement */}
            <div className="col-lg-8 ">
              <div className="acceptAgreement">
                {scrollReachEnd ? (
                  <>
                    {!currentButton ? (
                      <>
                        <Checkbox
                          id="checkbox1"
                          name="checkbox1"
                          checked={indepedent_agreement}
                          onChange={this.handleChangecheckbox}
                          className="checkBoxAccept"
                          style={{
                            color: "#DCBA80",
                          }}
                        />
                        {window.innerWidth >= 550 ? (
                          <span
                            id="checkbox1"
                            className="checkboxText mobileAcceptCheckBox"
                            onClick={this.handleChangecheckbox}
                          >
                            I have read and accepted Independent Consultant
                            Agreement.
                          </span>
                        ) : (
                          <div
                            id="checkbox1"
                            className="checkboxText mobileAcceptCheckBox mobileAcceptCheckBox1"
                            onClick={this.handleChangecheckbox}
                          >
                            I have read and accepted Independent Consultant
                            Agreement.
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <Checkbox
                          id="checkbox2"
                          name="checkbox2"
                          checked={policy_procedures}
                          onChange={this.handleChangecheckbox}
                          className="checkBoxAccept"
                          style={{
                            color: "#DCBA80",
                          }}
                        />
                        <span
                          id="checkbox2"
                          className="checkboxText mobileAcceptCheckBox"
                          onClick={this.handleChangecheckbox}
                        >
                          I have read and accepted Policy and Procedures.
                        </span>
                      </>
                    )}
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Agreement;
