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
          <p>SECTION 1: THE COMPANY</p>
          <ol>
            <li>
              <p>
                Wine Retriever LLC DBA Scout &amp; Cellar LLC (“Scout &amp;
                Cellar” or the “Company”), a Texas Limited Liability Company,
                and its successors and assigns, is a federally licensed and
                bonded Texas winery. “Scout &amp; Cellar “or the “Company”
                includes any of its affiliated or subsidiary wineries.
              </p>
            </li>
            <li>
              <p>
                <b>Core Values</b>
                <br />
                Independent Consultants should be guided by the Scout &amp;
                Cellar Core Values. Those Core Values are:
              </p>
              <ol>
                <li>
                  <p>
                    We <b>DO THE RIGHT THING</b>, no matter what it’s as simple
                    as the golden rule and always has been.
                  </p>
                </li>
                <li>
                  <p>
                    We wear our purpose on our sleeve because we believe in
                    Clean-Crafted, we’re committed to complete{" "}
                    <b>TRANSPARENCY</b>.
                  </p>
                </li>
                <li>
                  <p>
                    We love what we do, fiercely and honestly, even that’s an
                    understatement. Our <b>PASSION</b> for wine, for the planet,
                    and for those we love, is at our very core.
                  </p>
                </li>
                <li>
                  <p>
                    We are who we are and that’s all we are. We’re here because
                    we believe in making tomorrow better. Our{" "}
                    <b>AUTHENTICITY</b> guides every decision we make.
                  </p>
                </li>
                <li>
                  <p>
                    We’re at our best when we’re together. –We empower each
                    other through our collective energy, and we celebrate our
                    victories, no matter how big or small. This isn’t a team,
                    it’s a <b>FAMILY</b>.
                  </p>
                </li>
              </ol>
            </li>
          </ol>
          <p>
            SECTION 2: POLICIES AND PROCEDURES INCORPORATED INTO CONSULTANT
            AGREEMENT
          </p>
          <ol>
            <li>
              <p>
                These Policies and Procedures in their current form and as
                amended from time to time in the sole discretion of the Company
                (the “Policies and Procedures”) are incorporated into and form a
                part of the Consultant Agreement(hereinafter, “Consultant
                Agreement”), which sets forth Scout &amp; Cellar’s and the
                Independent Consultant’s legal rights and obligations regarding
                the Program. The Program is defined as:
              </p>
              <ol>
                <li>
                  <p>
                    Marketing, promoting, and educating consumers about Scout
                    &amp; Cellar products as described herein;
                  </p>
                </li>
                <li>
                  <p>
                    Participating in the Compensation Plan (receiving
                    Commissions and Bonuses, when and if eligible);
                  </p>
                </li>
                <li>
                  <p>Mentoring other Consultants into the Program;</p>
                </li>
                <li>
                  <p>Building a downline;</p>
                </li>
                <li>
                  <p>Advancing through the levels in the Compensation Plan;</p>
                </li>
                <li>
                  <p>
                    Receiving information and communications from Scout &amp;
                    Cellar; and
                  </p>
                </li>
                <li>
                  <p>
                    Participating in Scout &amp; Cellar’s support, service,
                    education, recognition and incentive programs for
                    Consultants, upon payment of any applicable charges.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                In the event of any conflict between the Scout &amp; Cellar
                Independent Consultant Agreement, on the one hand, and these
                Policies and Procedures, on the other hand, these Policies and
                Procedures shall control. Each Consultant is responsible for
                reading, understanding and following the most current version of
                these Policies and Procedures. As used in these Policies and
                Procedures, the term “Mentor” refers to a Consultant who enrolls
                another Consultant into the Scout &amp; Cellar program and is
                listed as the Mentor in the Company database. The act of
                enrolling others and training them to become Consultants is
                called “mentoring”. When mentoring a Consultant or potential
                Consultant, the Mentor shall provide access to the most current
                version of these Policies and Procedures (including the
                Compensation Plan).
              </p>
            </li>
            <li>
              <p>
                Amendments shall not apply retroactively to conduct that
                occurred prior to the effective date of the amendment. However,
                due to the “live” nature of such items, social media posts,
                email addresses, and URLs that are non-compliant shall be
                considered ongoing conduct and must be updated to remain
                compliant with any Amendments on or before the Amendments’
                effective date. Consultant’s continued participation in Scout
                &amp; Cellar’s Program, including marketing of the Company’s
                products and receiving commission payments, shall constitute
                acceptance of any changes or additions to the Policies and
                Procedures.
              </p>
            </li>
          </ol>
          <p>SECTION 3: JOINING AS A CONSULTANT</p>
          <ol>
            <li>
              <p>
                <b>To become a Consultant, you must:</b>
              </p>
              <ol>
                <li>
                  <p>Be 21 years of age or older;</p>
                </li>
                <li>
                  <p>
                    Be a legal resident of the United States or the District of
                    Columbia;
                  </p>
                </li>
                <li>
                  <p>Have a valid Social Security number;</p>
                </li>
                <li>
                  <p>Not be in jail or in another correctional institution;</p>
                </li>
                <li>
                  <p>Not have ever been convicted of a felony;</p>
                </li>
                <li>
                  <p>
                    Not be a current employee, officer, or director of Scout
                    &amp; Cellar and/or its affiliates;
                  </p>
                </li>
                <li>
                  <p>
                    Not be an owner of any interest in any entity that is also
                    registered as a Consultantand whose Consultant account has
                    been Active in the past 6 months;
                  </p>
                </li>
                <li>
                  <p>
                    Not have or be associated as an owner, officer,
                    member,shareholder and/or affiliate with more than two
                    accounts with the Company - 1) a single Consultant Account
                    and 2) a single Customer Account;
                  </p>
                </li>
                <li>
                  <p>
                    Complete and submit a Consultant Agreement that is accepted
                    by the Company;
                  </p>
                </li>
                <li>
                  <p>
                    Purchase a Business Basics Kit (except for residents of
                    North Dakota, where the purchase of a Business Basics Kit
                    isoptional); and
                  </p>
                </li>
                <li>
                  <p>
                    Have a valid email address that complies with these Policies
                    &amp; Procedures and a valid credit card
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                Scout &amp; Cellar reserves the right to accept or reject any
                Consultant Agreement for any reason in its sole discretion.
              </p>
            </li>
            <li>
              <p>
                <b>Term of Agreement and Renewal</b>
              </p>
              <ol>
                <li>
                  <p>
                    The Consultant Agreement is effective from the date of
                    acceptance by Scout &amp; Cellar and will automatically
                    renew every twelve (12) months on the anniversary of the
                    date Consultant entered into the Consultant Agreement
                    pursuant to these terms, unless terminated earlier as
                    provided in the Consultant Agreement.{" "}
                    <b>
                      One year after a person becomes an Independent Consultant,
                      the Consultant will be billed an annual $99.95 Renewal Fee
                      (increasing to $129.95 for renewals occurring on or after
                      1/1/2021) plus applicable sales tax, which includes the
                      renewal of the Consultant’s Personal Scout &amp; Cellar
                      website and access to additional technology programs and
                      initiatives which may be rolled out from time-to-time for
                      Consultant best practice education and support. This
                      Renewal Fee will be charged automatically to Consultant’s
                      primary credit card on file, or any credit card designated
                      for payment of Personal Website Membership by Consultant
                      in The Cellar, and paid to Scout &amp; Cellar unless you
                      cancel your Consultant Agreement.
                    </b>
                  </p>
                </li>
                <li>
                  <p>
                    The Consultant Agreement will there after automatically
                    renew for successive one-year terms unless either party
                    notifies the other in writing that it does not wish to renew
                    the Consultant Agreement on the anniversary date. If the
                    Company does not receive a Consultant’s Renewal Feeduring
                    the calendar month containing their anniversary date, the
                    Consultant’s account will be suspended until the Consultant
                    does one of the following: contacts Customer Support to pay
                    the Renewal Fee; informs the Company that Consultant wants
                    to cancel the applicable Consultant Agreement; or the
                    Consultant’s account has been suspended for 30 days. In the
                    case of this last option, Scout &amp; Cellar reserves the
                    right to cancel any Consultant Agreement for which the
                    Consultant account has been suspended for over 30 days due
                    to failure to pay the Renewal Fee.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>W-9s</b>
                <br />
                W-9s are required for all Consultants and should be submitted
                via email to w9form@scoutandcellar.com immediately upon joining,
                or prior to the effective date of these Policies and Procedures
                if the Consultant has not previously submitted a W-9.
                Consultants can find a copy of the W-9 form in The Cellar.
              </p>
            </li>
            <li>
              <p>
                <b>Independent Contractor Status</b>
              </p>
              <ol>
                <li>
                  <p>
                    Consultant acknowledges and agrees that Company’s usual
                    course of business is selling wine. Consultant represents
                    and warrants that Consultant is not in the business of
                    selling wine. Consultant represents and warrants that
                    Consultant is in the business of education, marketing and
                    promotions. Consultant acknowledges and agrees that
                    Company’s usual course of business is not education,
                    marketing and promotions.
                    <br />
                    Consultant represents and warrants that Consultant is
                    customarily engaged in the business of education, marketing
                    and promotions, that Consultant can and does have business
                    relationships other than that which Consultant has with
                    Company for which/whom Consultant can and does perform
                    education, marketing and promotional services, and that
                    Consultant can maintain Consultant’s education, marketing
                    and promotional business without reliance upon Company.
                  </p>
                </li>
                <li>
                  <p>
                    Consultant acknowledges and agrees that these
                    acknowledgments, representations, and warranties in this
                    section are material inducements to Company’s willingness to
                    enter into the Consultant Agreement with Consultant, upon
                    which Company has relied when deciding whether to enter into
                    the Consultant Agreement with Consultant.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Joining and Becoming Active</b>
                <br />
                Once an applicant(“Applicant”) has submitted a signed Consultant
                Agreement, purchased a Business Basics Kit (except for residents
                of North Dakota), submitted any other documents that the Company
                may require, and Scout &amp; Cellar has accepted and processed
                the Consultant Agreement, the Applicant will become a Consultant
                and will be assigned a Scout &amp; Cellar Identification
                Number(“ID Number”) and Password.
              </p>
              <ol>
                <li>
                  <p>
                    Consultant shall use Consultant’s ID Number to identify the
                    Consultant to the Company, place orders, structure
                    organizations and track commissions and bonuses. A
                    Consultant may provide the ID Number to Customers and
                    potential Customers to assist the Company in identifying and
                    linking the Customer or potential Customer to that
                    Consultant.
                  </p>
                </li>
                <li>
                  <p>
                    Consultants shall use the Password to access The Cellar
                    through which Consultant can order products, access
                    performance records, and communicate with Customers and
                    downline Consultants.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Spouses and Common Law Married Couples; Adult Children</b>
              </p>
              <ol>
                <li>
                  <p>
                    Except as described in this section, spouses, registered
                    domestic partners, or common law married couples who wish to
                    become Consultants must be jointly mentored as a single
                    Consultant under a single Mentor using a single Social
                    Security Number.
                  </p>
                </li>
                <li>
                  <p>
                    Spouses, registered domestic partners,and common law married
                    couples may neither mentor each other directly or indirectly
                    nor have different Mentors.
                  </p>
                </li>
                <li>
                  <p>
                    Children over the age of twenty-one (21) residing with their
                    parents who meet all of the eligibility requirements may
                    have their own Scout &amp; Cellar independent business.
                  </p>
                </li>
                <li>
                  <p>
                    For information regarding the disposition of a Consultant
                    Agreement and the independent Scout &amp; Cellar business
                    operated by a married couple upon divorce, see Section 12b.
                  </p>
                </li>
                <li>
                  <p>
                    The above provision prohibiting spouses, registered domestic
                    partners, or common law married couples from each having
                    their own separate independent Scout &amp; Cellar businesses
                    is not applicable where two existing Consultants marry each
                    other (or enter into a registered domestic partnership or
                    common law marriage) or where one spouse, registered
                    domestic partner, or member of a common law married couple
                    receives an independent Scout &amp; Cellar business via
                    inheritance.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Consultant Information</b>
                <br />
                Each Consultant is responsible for keeping all Consultant
                Information current and accurate, specifically including email
                and phone number contact information. Each Consultant may modify
                any Consultant Information, including address, email address and
                phone number at any time. Consultant must contact the Support
                department to update the email address on Consultant’s profile.
                To change from a sole proprietorship to a business entity, or
                from one type of business entity to another, please refer to the
                steps in Section 3k. Without limitation of the foregoing,
                Business Entities that are Consultants must immediately report
                any changes in the Ownership of the Business Entity. A
                Consultant must submit relevant legal documentation in support
                of a name change request.
              </p>
            </li>
            <li>
              <p>
                <b>Actions of Household Members, Employees or Agents</b>
                <br />
                Each Consultant is responsible for the actions of
                Consultant’simmediate household members, except for children
                over the age of twenty-one (21) that have their own Scout &amp;
                Cellar independent businesses. Each Business Entity Consultant
                is responsible for the actions of its owners, officers,
                directors, members, shareholders, partners, employees,
                contractors and agents, if any, and as otherwise allowed by
                these Policies &amp; Procedures. If such individuals engage in
                any activity which, if performed by the Consultant, would
                violate the Consultant Agreement, such activity will be deemed a
                violation by the Consultant and the Company may take remedial
                action pursuant to the Consultant Agreement and seek other
                appropriate remedies against such Consultant.
              </p>
            </li>
            <li>
              <p>
                <b>Handling Personal Information</b>
                <br />
                If a Consultant receives Personal Information from or about
                prospective Consultants or Customers, it is the Consultant’s
                responsibility to maintain the security of such information. A
                Consultant should shred or irreversibly delete the Personal
                Information of others as soon as the Consultant no longer needs
                it. Personal Information is information that identifies or
                permits a person or entity to contact an individual. It includes
                an individual’s name, address, email address, phone number,
                credit card information, social security or tax identification
                number and other information associated with these details. The
                California Consumer Privacy Act Addendum to the Independent
                Contractor Agreement is expressly incorporated into and made
                part of these Policies &amp; Procedures.
              </p>
            </li>
            <li>
              <p>
                <b>Business Entities as Consultants</b>
              </p>
              <ol>
                <li>
                  <p>
                    A corporation, limited liability company, partnership or
                    trust incorporated or organized in the United States and
                    having its principal place of business in the same
                    (hereinafter “Business Entity”) may apply to be a
                    Consultant. In addition to the Consultant Agreement, a
                    Business Entity must submit a properly completed Business
                    Entity Registration Form and at least one of the following:
                    Certificate of Incorporation, Articles of Organization,
                    Partnership Agreement or relevant Trust documents via the
                    form at https://scoutandcellar.com/contact/. The Company
                    must receive these documents within fourteen (14) days from
                    the date the Consultant signed the Consultant Agreement and
                    purchased a Business Basics Kit (except residents of North
                    Dakota where the purchase of Business Basics Kit is not
                    required). If not received within such 14-day time period,
                    the Company reserves the right to terminate the Consultant
                    Agreement without notice.
                  </p>
                </li>
                <li>
                  <p>
                    All Owners of a Business Entity that enrolls as a Consultant
                    (hereafter “Business Entity Consultant”) shall be jointly
                    and severally liable for and shall indemnify and hold
                    harmless Scout &amp; Cellar from and against any breach of
                    the Consultant Agreement by that Business Entity or any
                    indebtedness or other obligation to Scout &amp; Cellar of
                    such Business Entity. Owners are responsible for complying
                    with all applicable laws in any and all jurisdictions or
                    localities in which the Business Entity conducts business
                    and maintaining the Business Entity in good standing with
                    all applicable jurisdictions. Owners of a Business Entity
                    are responsible for any and all fees relating to the
                    formation and maintenance of the Business Entity.
                  </p>
                </li>
                <li>
                  <p>
                    All education, marketing and mentoring activities of a
                    Business Entity Consultant must be conducted only by the
                    Owners of the Business Entity; these activities cannot be
                    conducted by persons (including employees, agents or
                    contractors) who are not Owners of the Business Entity
                    without the express written consent of the Company.
                  </p>
                </li>
                <li>
                  <p>
                    A Business Entity Consultant that undergoes a change of
                    Ownership must comply with Section 12d or it may have its
                    Consultant Agreement terminated.
                  </p>
                </li>
                <li>
                  <p>
                    No Consultant may use any trade name, business name or DBA
                    that includes any Scout &amp; Cellar trademark, trade name,
                    brand name or that otherwise violates Scout &amp; Cellar
                    Brand Guidelines or these Policies &amp; Procedures. When
                    naming a business entity, Consultants may not use any words
                    or phrases that are inconsistent with the Company’s Core
                    Values, Mission Statement, or these Policies &amp;
                    Procedures.
                  </p>
                </li>
                <li>
                  <p>
                    Subject to the above requirements and restrictions, a
                    Consultant may change status from a sole proprietorship to a
                    corporation, limited liability company, partnership or
                    trust, or from one type of Business Entity to another, by
                    submitting a signed Consultant Agreement and, if applicable,
                    a Business Entity Registration Form and, where applicable,
                    at least one of the following: Certificate of Incorporation,
                    Articles of Organization, Partnership Agreement or relevant
                    Trust documents. In addition, a Consultant may add
                    Consultant’s spouse to a sole proprietorship as a
                    co-applicant to the Consultant’s existing independent Scout
                    &amp; Cellar business by submitting a new Consultant
                    Agreement. In each such case, upon the Company’s acceptance
                    of the new Consultant Agreement and, if applicable, the
                    Business Entity Registration Form (and applicable supporting
                    document) and the Consultant’s original Consultant Agreement
                    will automatically terminate and be replaced and superseded
                    by the newly formed Consultant Agreement. Note that none of
                    the changes described above will permit a Consultant to
                    change Mentors, except as specified in Section 7d, or to
                    assign or transfer a Consultant Agreement except as
                    specified in Section 13d.
                  </p>
                </li>
                <li>
                  <p>
                    For purposes of compensation, incentives, recognition, or
                    other perks and programs, Business Entities will be treated
                    as one Consultant, regardless of the number of owners.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Restrictions on Interest in Multiple Consultant Accounts</b>
                <br />
                Each person is limited to being affiliated with one single
                Consultant Account and one single Customer Account. Any person
                who is a Consultant or has any interest or ownership in any
                entity that is affiliated with a Consultant Account is
                prohibited from maintaining or being affiliated with an
                additional Consultant Account. A Consultant may, however,
                maintain or otherwise be associated with one Customer Account
                (e.g. A married couple may not have a Consultant account and
                more than one Customer account, regardless of whose name appears
                on the accounts).
              </p>
            </li>
            <li>
              <p>
                <b>Consultant Accounts Associated with Multiple Individuals</b>
              </p>
              <ol>
                <li>
                  <p>
                    For purposes of compensation, incentives, recognition, or
                    other perks and programs, each Consultant account will be
                    treated as one Consultant, regardless of the number of
                    individuals associated witha given Consultant account. As
                    such, each Consultant account may earn one (1) of any bonus,
                    incentive, or other reward.
                  </p>
                </li>
                <li>
                  <p>
                    No informal Consultantteams will be recognized by Scout
                    &amp; Cellar, with the exception of married couples who
                    joined as an informal team prior to March 15, 2019.
                  </p>
                </li>
                <li>
                  <p>
                    At Scout &amp; Cellar’s sole and exclusive discretion,
                    married couples acting as a single Consultant may purchase
                    access to one additional incentiveslotor reward, but only if
                    the incentive has already been earned by the Consultant.
                  </p>
                </li>
              </ol>
            </li>
          </ol>
          <p>SECTION 4: CONSULTANT REQUIREMENTS AND RESTRICTIONS</p>
          <ol>
            <li>
              <p>
                <b>Regulatory Considerations</b>
                <br />
                The sale and transportation of wine is carefully controlled in
                the United States on both the state and federal levels. As a
                result, the Company must obtain various approvals, permits and
                licenses and dobusiness in certain prescribed ways. To
                facilitate the company’s compliance with applicable laws and
                regulations pertaining to the sale and transportation of wine,
                the Company has developed procedures and guidelines, which must
                be followed by Consultants. Scout &amp; Cellar, without
                exception, expects Consultants to adhere to the procedures and
                guidelines providedin The Cellar, which will be updated from
                time to time as necessary. Scout &amp; Cellar leadership works
                to stay informed of all legal and regulatory issues in the wine
                industry relating to its business. Any Consultant who fails to
                adhere to the procedures and guidelines that pertain to the
                Company’s compliance with the sale and transportation of wine
                will have breached the Consultant Agreement, resulting in the
                Company’s right to immediately terminate the Consultant
                Agreement pursuant to the terms of the Consultant Agreement.Any
                concerns related to alcohol regulation should be sent via email
                to brandstandards@scoutandcellar.com.
                <br />
                In addition, it is important for Consultants to note that each
                state has different laws, restrictions and requirements to host
                or conduct a tasting and to own and operate an independent
                business. As independent business owners, each Consultant is
                advised to seek legal counsel in the Consultant’s state to
                ensure compliance with all additional requirements unique to
                Consultant’s state.
              </p>
            </li>
            <li>
              <p>
                <b>
                  Labeling, Packaging and Display of Scout &amp; Cellar Products
                </b>
              </p>
              <ol>
                <li>
                  <p>
                    Consultants may not re-label, re-package, refill or alter
                    labels of any Scout &amp; Cellar package or merchandise,
                    information, materials or program in any way. Any such
                    repackaging or relabeling may violate federal and state law,
                    which may result in criminal or civil penalties.
                  </p>
                </li>
                <li>
                  <p>
                    Consultants may not cause Scout &amp; Cellar product or
                    trade names to be sold or displayed in a retail
                    establishment, including restaurants and trade shows, except
                    upon the prior written approval from the Company.
                  </p>
                </li>
                <li>
                  <p>
                    Consultants are strictly prohibited from reselling wine to
                    Customers or anyone else. All Customer purchases are
                    directly fulfilled by Scout &amp; Cellar.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>
                  Cash &amp; Carry, Offers, Gifts &amp; Charitable Donations
                </b>
              </p>
              <ol>
                <li>
                  <p>
                    <b>Cash &amp; Carry</b>
                    <br />
                    Consultants are not sellers, but rather marketers and
                    promoters of Scout &amp; Cellar products. As a result,
                    Consultants are not licensed or authorized to sell any
                    product directly to Customers or among consultants. In
                    addition, as a result of laws limiting volume of wine
                    shipped, which vary state to state, all orders must be
                    placed through the Scout &amp; Cellar website and wines must
                    be shipped directly to the end-consumer from Scout &amp;
                    Cellar. Local Pickup is an exception to the shipping
                    requirement of this rule. All cash and carry activities or
                    exchange of value for wine are prohibited. Due to the
                    serious nature of Cash &amp; Carry violations, any such
                    violation may result in immediate suspension or termination
                    as allowed under Section11A.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Offers</b>
                    <br />
                    Because Consultants are not licensed or authorized to sell
                    directly to Customers, Consultants may not create their own
                    offers outside of the Scout &amp; Cellar website. This
                    includes, for example, offering a percentage discount, a
                    free bottle of wine with a minimum purchase, free shipping
                    or any other offerif it requires that the Consultant and
                    Customer exchange any funds. Consultants may transfer Sky
                    Wallet dollars to a Customer account to help pay for all or
                    part of a Customerorder or to cover the cost of shipping.
                    Consultants may also transfer Sky Wallet dollars to other
                    Consultants as allowed. Any offer of “free wine” must fully
                    comply with the Gifts policy in Section 4d, item 3.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Gifts</b>
                    <br />
                    Consultants are welcome to give free gifts to anyone. For a
                    gift to be free, there cannot be a <i>quid pro quo</i> or
                    exchange of value attached to it. As a result, wine cannot
                    be considered a gift if it is being given away at a tasting.
                    If the gift is contingent on a behavior (including on social
                    media) or purchase, it is considered an exchange of value
                    and is not allowed. Giveaways of non-wine items via social
                    media may be allowed if there is no purchase requirement or
                    other <i>quid pro quo</i> and the giveaway complies with the
                    social media platform’s Terms and Conditions and any
                    applicable laws.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Charitable Contributions</b>
                  </p>
                  <ol>
                    <li>
                      <p>
                        Consultants are welcome to donate wine to a charitable
                        organization, subject to the Consultant’s local tax
                        laws. Consultants may not, however, donate or otherwise
                        assign a value to a wine tasting, as tastings have no
                        value and are not a compensatory event.As a result, such
                        donations would violate most state alcohol and beverage
                        laws.
                      </p>
                    </li>
                    <li>
                      <p>
                        As with all activities as a business owner, Consultants
                        are responsible for ensuring that any gifts or
                        charitable contributions including marketing messages
                        and promotions - comply with all applicable laws,
                        regulations and codes governing advertising, promotions,
                        competitions and prize-draws where the Consultant lives.
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Tasting &amp; Pouring Policy</b>
              </p>
              <ol>
                <li>
                  <p>
                    <b>Approved In-Person Tasting Locations</b>
                  </p>
                  <ol>
                    <li>
                      <p>
                        Consultants may hold in-person wine tastings in the
                        following places if invitations are sent to specific
                        individuals:
                      </p>
                      <ol>
                        <li>
                          <p>Private residence;</p>
                        </li>
                        <li>
                          <p>Private office;</p>
                        </li>
                        <li>
                          <p>
                            In a private room at a public venue if walkups are
                            not allowed access to the private room; and
                          </p>
                        </li>
                        <li>
                          <p>
                            In a yoga studio, boutique, or other similar
                            establishment if the tasting is held after hours and
                            walkups are not allowed access to the establishment
                            during the tasting.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p>
                        For purposes of this provision, an invitation is an
                        announcement sent to a specific group of individuals by
                        mail, e-mail or other electronic means. It expressly
                        allows the use of sites such as Evite, Paperless Post or
                        Red Stamp, where Consultants are creating a distribution
                        list of specific email addresses for a limited group of
                        people.
                      </p>
                    </li>
                    <li>
                      <p>
                        Use of sites such as Eventbrite, Event Bee, Facebook
                        (including but not limited to Facebook Event pages or
                        other groups, regardless of whether they are private) or
                        other social media where the in-person event is being
                        publicized at large to a social network, including any
                        private pages or functionality of such networks, or the
                        public is expressly disallowed. Under these Policies
                        &amp; Procedures, events publicized using these channels
                        do not comply with the above Tasting &amp; Pouring
                        Policy and will constitute a Brand Standards violation.
                        This includes posts by the Consultant, host, or venue
                        holding the tasting. Virtual Tastings are not an
                        exception to this policy –all tasting invitees
                        (including those invited to Virtual Tastings) should be
                        contacted through private means of communication, such
                        as email.
                      </p>
                    </li>
                    <li>
                      <p>
                        Opportunity events which include a tasting are not an
                        exception to these rules. Consultants may hold
                        Opportunity Tastings so as long as such events are free
                        to attend, and the events comply with the guidelines
                        stated above. Resources exist in The Cellar to ensure
                        all messaging and visual assets for Opportunity Tastings
                        comply with Brand Standards and are expected to be used.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    <b>Prohibition Against Charging</b>
                    <br />
                    Consultants may not charge a fee for admission to any venue
                    where wine is being served, regardless of what the charge is
                    for. Nor may Consultants pour wine at an event where a
                    mandatory fee is being charged by someone else, regardless
                    of what the charge is for. To further clarify, a ticketed
                    event (whether for-profit or charitable) including “free”
                    drinks is not really free. Likewise, if a tip jar sits next
                    to the wine expecting “donations,” it is not free. An event
                    which requires an individual to pay for food while having
                    access to Scout &amp; Cellar wines or at an otherwise
                    compliant wine tasting constitutes an impermissible sale of
                    alcohol and is not compliant with this policy.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Tasting Guidelines</b>
                    <br />
                    Consultants must adhere to the following guidelines when
                    conducting in-person tastings:
                  </p>
                  <ol>
                    <li>
                      <p>
                        Designated tasting hosts/hostesses should pour the wine
                        using the Posi-Pour provided in the Business Basics Kit
                        and should never serve more than 10 ounces total to any
                        one tasting guest.
                      </p>
                    </li>
                    <li>
                      <p>
                        All tasting attendees must be of legal drinking age. If
                        a Consultant is unsure of a guest’s age, the Consultant
                        should check the attendee’s government issued ID.
                      </p>
                    </li>
                    <li>
                      <p>
                        Attendees should never be allowed to drive if they do
                        not appear to be able to do so safely.
                      </p>
                    </li>
                    <li>
                      <p>
                        Open but unfinished bottles of wine should be left with
                        the host or hostess to avoid violation of open carry or
                        other similar laws and to positively impact the hosting
                        experience.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    <b>Virtual Tastings</b>
                    <br />
                    Consultants may host private, virtual tastings via video
                    chat platforms including (but not limited to) Facebook Live,
                    Zoom, and Skype. Consultants are responsible for ensuring
                    that attendees are of legal drinking age, and should use
                    Consultant’s best judgment in ensuring the tasting is
                    carried out safely. Consultants must comply with the
                    guidelines in Section 4E.1.iii regarding public posts about
                    virtual tastings, but are permitted to promote Scout &amp;
                    Cellar-generated Tasting Links2 publicly via social media.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Territory</b>
              </p>
              <ol>
                <li>
                  <p>
                    No Consultant shall claim or imply that Consultanthas
                    ownership of, or exclusivity in, any particular geographic
                    area, territory, market or region. This includes using a
                    specific location (e.g., The name of a city, state, or
                    uniquely-named region) as part of the Consultant’s
                    Personalized URL, email address, or social media profile if
                    used for Scout &amp; Cellar business purposes. There are no
                    exclusive territories granted to any Consultant, and all
                    Consultants have the full right to market, promote, and
                    educate consumers about Scout &amp; Cellar products and
                    otherwise conduct Consultant’s Scout &amp; Cellar
                    Independent Businesses in all geographic areas and
                    territoriesin accordance with the terms of the Consultant
                    Agreement and applicable law.
                  </p>
                </li>
                <li>
                  <p>
                    Consultants may not market or promote Scout &amp; Cellar
                    products outside the Active Market and may not conduct
                    Consultant’s Scout &amp; Cellar independent businesses in
                    any geographic area or territory outside the United States.
                    For purposes of this Section, the term “Active Market” means
                    those municipalities, counties, and states within the United
                    States in which wine may be sold and distributed by Scout
                    &amp; Cellar. Because the Active Market may change from
                    time-to-time, please refer to The Cellar for the current
                    Active Market.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Media Inquiries</b>
              </p>
              <ol>
                <li>
                  <p>
                    Consultants are not authorized to interact with the media,
                    including but not limited toradio, podcasts, television,
                    billboards, print, online publications, speaking
                    engagements, mass mailings or through any other channel
                    Scout &amp; Cellar may deem to be unfair, regarding the
                    Scout &amp; Cellar business or products. All opportunities
                    and inquiries from the media shall be directed to the
                    Company at https://scoutandcellar.com/contact to ensure that
                    accurate and consistent information regarding the Scout
                    &amp; Cellar brand is being presented to the public.
                  </p>
                </li>
                <li>
                  <p>
                    Subject to the above, Consultants are permitted to advertise
                    in Consultant’s local newspaper, community newsletters, and
                    local business directories, and through local opportunities,
                    including Consultant’s local Chamber of Commerce, provided
                    that any publication containing such advertisement has a
                    circulation no greater than 10,000. Consultants may also
                    promote Consultant’s independent businesses with social
                    media influencers who have less than 10,000 total followers
                    across platformsat the time of the promotion, as long as
                    that influencer’s platform is consistent with Scout &amp;
                    Cellar’s Core Values. Scout &amp; Cellar has the sole and
                    exclusive right to determine whether an influencer’s
                    platform satisfies these requirements. Influencers who have
                    over 10,000 total followers across all platforms and are
                    interested in marketing Scout &amp; Cellar products should
                    be directed to contact the Company at
                    https://scoutandcellar.com/contact.
                  </p>
                </li>
              </ol>
            </li>
          </ol>
          <p>SECTION 5: CONSULTANT RESPONSIBILITIESAND LEGAL CONSIDERATIONS</p>
          <ol>
            <li>
              <p>
                <b>Professional Conduct</b>
                <br />
                Consultants are expected to conduct themselves in a professional
                manner at all times and shall protect and promote the good
                reputation of Scout &amp; Cellar through the following:
              </p>
              <ol>
                <li>
                  <p>
                    Be forthcoming, transparent and professional and conduct
                    business with integrity, understanding and respect;
                  </p>
                </li>
                <li>
                  <p>
                    Not engage in illegal, deceptive, misleading or unethical
                    conduct or practices, including making statements,
                    representations, guarantees or warranties, or publishing
                    misleading or deceptive advertising materials about the
                    Company, its products or the Program;
                  </p>
                </li>
                <li>
                  <p>
                    Refrain from making disparaging or misleading statements
                    about Scout &amp; Cellar, including but not limited to its
                    employees, Consultants, partners, products and Compensation
                    Plan;
                  </p>
                </li>
                <li>
                  <p>
                    Refrain from making disparaging or misleading statements
                    about Scout &amp; Cellar’s actual or perceived competitors;
                    and
                  </p>
                </li>
                <li>
                  <p>
                    Not engaging in behaviors that fall outside the level of
                    professional conduct, including, but not limited to,
                    substance abuse; verbal abuse and bullying; harassment or
                    discrimination because of race, gender, religion, sexual
                    orientation, sex, color, national origin, ancestry, physical
                    disability, mental disability, medical condition, genetic
                    information, marital status, gender identity, gender
                    expression, age, or military and veteran status; hate or
                    violence-inciting or driven activity; or fraudulent,
                    misleading or deceptive conduct.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                The determination of what violates the Professional Conduct
                terms is in Scout &amp; Cellar's sole discretion. The Company
                may determine, in its sole discretion, that violation of the
                Professional Conduct terms constitutes a breach of the
                Consultant Agreement, resulting in the termination of the
                Consultant Agreement.
              </p>
            </li>
            <li>
              <p>
                <b>Reporting Policy</b>
                <br />
                Consultants who become aware that another Consultant has
                violated the Consultant Agreement should notify Scout &amp;
                Cellar. A link to submit a ticket to Brand Standards is located
                in The Cellar&gt;Brand &amp; Marketing&gt;Submit a Ticket to
                Brand Standards. Details and screenshots of the occurrence
                should be included in the report if available.
              </p>
            </li>
            <li>
              <p>
                <b>
                  Confidential Information, Non-Solicitation, and Competitive
                  Businesses
                </b>
              </p>
              <ol>
                <li>
                  <p>
                    By completing and submitting the Consultant Agreement, the
                    Consultant acknowledges that all product, Consultant and
                    customer information and data that the Consultant may create
                    or compile, including but not limited to Business Reports,
                    Customer lists (including names, contact information, and
                    other data), Consultant lists (including names, contact
                    information and other data), information pertaining to
                    Downline genealogy, and any other information which may
                    contain financial or business information, product and
                    purchasing information, customer and Consultant contact and
                    profile details, Consultant lists, operating and production
                    procedures, product development information, financial data
                    and marketing materials are confidential and proprietary and
                    constitute trade secrets belonging to Scout &amp; Cellar
                    (hereinafter “Confidential Information”). Consultants agree
                    not to disclose any Confidential Information. A Consultant
                    shall use the same level of care to protect Confidential
                    Information that Consultant uses to protect Consultant’s own
                    sensitive and proprietary information. A Consultant shall
                    use Confidential Information only for the purposes of
                    performing Consultant’s obligations or exercising rights
                    under the respective Consultant Agreement.
                  </p>
                </li>
                <li>
                  <p>
                    A Consultant shall limit access to Confidential Information
                    to only those persons who have a legitimate need to know
                    such information in the performance of Consultant’s rights
                    and obligations under the respective Consultant Agreement.
                    Each person who is given access to Confidential Information
                    shall be bound by this confidentiality obligation. A
                    Consultant shall be responsible for the acts and omissions
                    of Consultant’s respective employees, contractors, and
                    agents with respect to such confidentiality obligations.
                  </p>
                </li>
                <li>
                  <p>
                    Consultant will not use or disclose Confidential Information
                    to any person except in strict accordance with the
                    Consultant Agreement and will take all reasonable
                    precautions to prevent its unauthorized dissemination, both
                    during and after the term of this Agreement. Consultant will
                    not use Confidential Information to sell products or
                    services other than Scout &amp; Cellar products and services
                    or in connection with any other business during the term of
                    and after termination of this Agreement. Consultant
                    understands that Consultant will be deemed to breach
                    Consultant’s obligations to Scout &amp; Cellar with respect
                    to Confidential Information or trade secrets if Consultant
                    works or performs services (including consulting or advisory
                    services) for a competitor of Scout &amp; Cellar in any
                    position in which Consultantis required to or does use,
                    disclose or otherwise employ any Confidential Information
                    obtained during Consultant’s relationship with Scout &amp;
                    Cellar. Consultant understands and agrees that this
                    provision does not prohibit Consultantfrom working for a
                    competitor of Scout &amp; Cellar during the term of the
                    Consultant Agreement or after the termination of the
                    Consultant Agreement, but requires Consultant not to use,
                    share or otherwise communicate Confidential Information
                    (including trade secrets) to such a competitor or to perform
                    services for such a competitor.
                  </p>
                </li>
                <li>
                  <p>
                    During the term of the Consultant Agreement and for one year
                    thereafter, a Consultant may not, using Company’s trade
                    secrets, directly or indirectly solicit any Scout &amp;
                    Cellar Consultant or any Scout &amp; Cellar employee for
                    engagement as an employee, or as an independent consultant,
                    contractor or distribute or of any direct selling or network
                    marketing company, nor will Consultant solicit any Scout
                    &amp; Cellar employee to become a Consultant of Scout &amp;
                    Cellar during this period. “Solicit” includes (i)
                    communicating information or offering to provide information
                    about any other direct selling or network marketing business
                    opportunity to a Scout &amp; Cellar Consultant or employee;
                    (ii) posting or messaging information about another direct
                    selling or network marketing business opportunity on any
                    social media site utilized by the Consultant to promote
                    Consultant’s Scout &amp; Cellar business; (iii) tagging any
                    Scout &amp; Cellar Consultant or employee with a post on any
                    social media site that provides information or offers to
                    provide information about another direct selling or network
                    marketing business opportunity; and(iv) enrolling or
                    attempting to enroll a Scout &amp; Cellar Consultant or
                    employee as a consultant, independent contractor or
                    distributor in another direct selling or network marketing
                    company. This conduct constitutes soliciting even if the
                    Consultant’s actions are in response to an inquiry made by
                    another person who is a Consultantor a Scout &amp; Cellar
                    employee.
                  </p>
                </li>
                <li>
                  <p>
                    If a Consultant is engaged in another non-Scout &amp; Cellar
                    business, it is the responsibility of the Consultant to
                    ensure that the Consultant’s independent Scout &amp; Cellar
                    business is operated entirely separate and apart from all
                    other businesses and/or competitive businesses, including
                    but not limited to: for-profit blogs (such as those
                    receiving ad revenue), social media channels, Independent
                    Websites, at all Scout &amp; Cellar-related events and on
                    any Scout &amp; Cellar-related materials or displays.
                  </p>
                </li>
                <li>
                  <p>
                    Consultants may not directly or indirectly recruit other
                    Scout &amp; Cellar Consultants for any other earning
                    opportunity. Consultants found to be in violation of this
                    non-solicitation policy are subject to significant
                    disciplinary actions, as outlined in Section 11A of these
                    Policies and Procedures.
                  </p>
                </li>
                <li>
                  <p>
                    Consultant further agrees that the provisions contained in
                    this Section are reasonable and necessary to protect the
                    legitimate interests of the Company and that the Company
                    would not have accepted the Consultant’s Consultant
                    Agreement in the absence of the Consultant’s agreement to
                    these provisions. Nevertheless, it is further agreed that
                    such covenant shall be regarded as divisible and shall be
                    operative as to time, area and scope to the extent that it
                    may be so operative, and if any part of it is declared
                    invalid or unenforceable as to time area, or scope, the
                    validity and enforceability of the remainder shall not be
                    affected, and the agreement shall be read to be restrictive
                    to scope, area and duration to the fullest extent of
                    applicable law. Consultant agrees that the Consultant’s
                    breach or threatened breach of such provisions would cause
                    the Company irreparable harm and significant injury, the
                    amount of which would be extremely difficult to estimate and
                    ascertain, thus making any remedy at law or in damages in
                    adequate. Each Consultant therefore agrees that the Company
                    shall be entitled, without the necessity of posting a bond
                    or security, to the issuance of injunctive relief by any
                    court or arbitrator of competent jurisdiction, enjoining any
                    breach or threatened breach of the above provisions and for
                    any other relief such court deems appropriate. The rights
                    granted to the Company in this Section are in addition to
                    any other remedy available to the Company at law or in
                    equity.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>No International Sale or Marketing</b>
                <br />
                Due to legal restrictions on the sale of alcohol, Scout &amp;
                Cellar must limit the sale and marketing of the Scout &amp;
                Cellar products and the presentation of the Program to potential
                Customers and Consultants located in an Active Market within the
                United States and the Districtof Columbia. Scout &amp; Cellar
                products and Marketing Materials may not be shipped into or sold
                in any foreign countries, including Canada.
              </p>
            </li>
          </ol>
          <p>SECTION6: TEAM BUILDING AND TRAINING</p>
          <ol>
            <li>
              <p>
                <b>Mentoring Other Consultants</b>
                <br />
                Consultants may mentorother persons to become Consultants.
                However, Consultants earn Commissions and Performance Bonuses in
                the Program only based on the marketing and promotion of
                products, and not based on the recruitment or enrollment
                (mentoring) of other Consultants.
                <br />
                It is not the responsibility of the Scout &amp; Cellar Customer
                Support team to onboard and train new Consultants. Instead,
                training and onboarding of new consultants is the responsibility
                of Mentors.
              </p>
            </li>
            <li>
              <p>
                <b>Responsibilities of Mentors</b>
                <br />
                To ensure that Mentors are acting in accordance with the Scout
                &amp; Cellar Core Values, Mentors should present the products
                and the Program to others in a manner that complies with the
                Consultant Agreement, including the requirements of these
                Policies and Procedures regarding business ethics. In addition,
                Mentors are responsible for helping, motivating, and training
                their Downlines. As such, Mentors should:
              </p>
              <ol>
                <li>
                  <p>
                    Train and communicate to their Downlines to ensure that
                    their Downline Consultants do not make improper productor
                    income claims, engage in illegal or inappropriate conduct or
                    otherwise violate the Consultant Agreement;
                  </p>
                </li>
                <li>
                  <p>
                    Assist, motivate, and train their mentored Consultants by
                    having ongoing contact and communication, which may include
                    written correspondence, personal meetings, telephone
                    contact, voicemail, e-mail, text messages and training
                    sessions and/or accompanying their mentored Consultants to
                    Scout &amp; Cellar trainings; and
                  </p>
                </li>
                <li>
                  <p>
                    Motivate and train their mentored Consultants in subject
                    matter regarding Scout &amp; Cellar products, effective
                    education and marketing techniques, the Compensation Plan,
                    and compliance with these Policies and Procedures.
                  </p>
                </li>
                <li>
                  <p>
                    Always remember that Mentoring and educating a Downline
                    Consultant is an essential part of ensuring your Downline is
                    effectively communicating and abiding by the Core Values and
                    requirements of these Policies and Procedures and as such is
                    the responsibility of the Mentor.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Applicant Rights</b>
                <br />
                Because of mentoring ethics, Scout &amp; Cellarencourages any
                new Consultant to enroll in the Program under the Mentor who
                initially introduced the Applicant to the Program. Every
                Consultant, however, has the right to choose who Consultant’s
                Mentor will be. As such, if an Applicant asks to be registered
                under another Mentor prior to submitting the Consultant
                Agreement, Scout &amp; Cellar reserves the right to honor such a
                request.
                <br />
                Scout &amp; Cellar does not endorse or condone any of its
                Consultants to recruit the Customers or Consultants of any other
                Consultant under any circumstances relating to the Scout &amp;
                Cellar opportunity. If such conduct is reported to the Company,
                the Company may deem such conduct to be a breach of the
                Consultant Agreement, resulting in termination of the Consultant
                Agreement.
                <br />
                If two Consultants both claim to be the Mentor of an Applicant,
                Scout &amp; Cellar shall regard the first Consultant Agreement
                received as the controlling Consultant Agreement and shall
                designate the Consultant listed as the Mentoron such Consultant
                Agreement as the Applicant’s Mentor.
                <br />
                Scout &amp; Cellar reserves the sole and exclusive right to
                determine the final disposition between Consultants regarding
                claims of Mentorship of another Consultant.{" "}
                <b>
                  CONSULTANTS WAIVE ANY AND ALL CLAIMS AGAINST THE COMPANY, ITS
                  OFFICERS, DIRECTORS, OWNERS, EMPLOYEES, AND AGENTS THAT RELATE
                  TO OR ARISE FROM THE COMPANY’S DECISION REGARDING THE
                  DISPOSITION OF ANY DOWNLINE ORGANIZATION THAT IS IMPLICATED IN
                  A DISPUTE BETWEEN CONSULTANTS.
                </b>
              </p>
            </li>
            <li>
              <p>
                <b>Change of Mentor</b>
              </p>
              <ol>
                <li>
                  <p>
                    Consultants changing from one Mentorto another is strictly
                    prohibited absent extra ordinary circumstances at the
                    discretion of the Companyas further described below.
                  </p>
                </li>
                <li>
                  <p>
                    The only means by which a Consultant may legitimately change
                    Consultant’s Mentoris by voluntarily canceling Consultant’s
                    Consultant Agreement in writing and remaining inactive for
                    at least six months. Following the period of inactivity, the
                    former Consultant may reapply under a new Mentor. The
                    Consultant will lose all rights to Consultant’s former
                    downline organization upon cancellation.
                  </p>
                </li>
                <li>
                  <p>
                    The Company has sole discretion to authorize a change of
                    Mentor in extraordinary circumstances such as a mistake in
                    the enrollment process, serious illness or a life-altering
                    change in circumstance. In such instances, the Consultant
                    requesting the transfer must submit a written request to the
                    Company for the change of Mentor and also submit a written
                    authorization from Consultant’s current Mentor as well as
                    the two (2) Consultants immediately above such Mentor.
                    Additional documentation related to the extraordinary
                    circumstances may be required.
                  </p>
                </li>
                <li>
                  <p>
                    The Company will not authorize such a change to support any
                    placement exercises or compensation plan gaming. Examples of
                    this include (but are not limited to):
                  </p>
                  <ol>
                    <li>
                      <p>
                        Genealogy Changes made to redistribute Downline Volume;
                      </p>
                    </li>
                    <li>
                      <p>
                        Encouraging Consultants to cancel a Consultant Agreement
                        for reasons related to Compensation (via verbal or
                        written statements, offering to purchase a Consultant’s
                        business, or other means);
                      </p>
                    </li>
                    <li>
                      <p>
                        Any activity that results in higher commission payments
                        for a Consultant without that Consultant engaging in
                        business-building activity (such as adding new Downline
                        Consultants, adding new Customers, or placing orders).
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    Further, the Company maintains a record of all genealogy
                    change requests made under this provision so that it may
                    take appropriate action with regard to Consultants who
                    repeatedly make such requests or who share a common upline
                    demonstrating a team trend with respect to these requests.
                  </p>
                </li>
                <li>
                  <p>
                    In cases in which a Consultant has improperly changed
                    Consultant’s Mentor, Scout &amp; Cellar reserves the sole
                    and exclusive right to determine the final disposition of
                    the Downline organization that was developed by the
                    Consultant in Consultant’ssecond line of mentorship.{" "}
                    <b>
                      CONSULTANTS WAIVE ANY AND ALL CLAIMS AGAINST SCOUT &amp;
                      CELLAR, ITS OFFICERS, DIRECTORS, OWNERS, EMPLOYEES, AND
                      AGENTS THAT RELATE TO OR ARISE FROM SCOUT &amp; CELLAR’S
                      DECISION REGARDING THE DISPOSITION OF ANY DOWNLINE
                      ORGANIZATION THAT DEVELOPS BELOW A CONSULTANT WHO HAS
                      IMPROPERLY CHANGED MENTORS.
                    </b>
                  </p>
                </li>
              </ol>
            </li>
          </ol>
          <p>SECTION7: ORDERING AND SHIPMENTS</p>
          <ol>
            <li>
              <p>
                <b>General Order Policies</b>
              </p>
              <ol>
                <li>
                  <p>
                    Federal law requires a signature be obtained from an
                    individual over the age of 21 for all wine shipments. Notes
                    with a signature left for the common carrier cannot be
                    accepted as a replacement for an individual signing for the
                    shipment. Orders should be shipped to a business address or
                    a nearby holding facility for prompt, successful delivery
                    and to protect the wine. Consultants are trained to advise
                    their Customersof this important practice. The Company
                    cannot guarantee the condition of any wine if delivery is
                    not made on the first delivery attempt. Orders that are not
                    delivered on the initial attempt may be held in a facility
                    that is not temperature controlled.
                  </p>
                </li>
                <li>
                  <p>
                    A Consultant shall not use another Consultant’s or
                    Customer’s credit card to join the Company or purchase
                    product without the account holder’s written permission.
                    Such documentation must be kept by the Consultant
                    indefinitely in the event the Company needs to refer to the
                    same.
                  </p>
                </li>
                <li>
                  <p>
                    Regarding an order with an invalid or incorrect payment, the
                    Company will attempt to contact the Consultant by phone,
                    mail or e-mail in order to obtain another form of payment.
                    If these attempts are unsuccessful after ten (10) business
                    days, the order will be canceled.
                  </p>
                </li>
                <li>
                  <p>Prices are subject to change without notice.</p>
                </li>
                <li>
                  <p>
                    A Consultant or Customerwho is the recipient of an incorrect
                    order must notify the Company within 14 (fourteen) calendar
                    days from receipt of the order.
                  </p>
                </li>
                <li>
                  <p>
                    When a card processor forcibly reverses a credit card
                    transaction resulting in a return of funds to the
                    cardholder, this is known as a chargeback. When Scout &amp;
                    Cellarreceives a chargeback notice, the account in which the
                    service was purchased is immediately blocked, and all
                    related services in the account are terminated.
                  </p>
                </li>
                <li>
                  <p>
                    If a chargeback was requested inadvertently, a Consultantor
                    Customer must contact the credit card provider and issue a
                    chargeback reversal. Reversing the chargeback is the only
                    way to restore a blocked account.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Non-Deliverable Orders</b>
                <br />
                In some cases, an order may be returned to the Company because
                the common carrier is unable to deliver it to the provided
                shipping address, which may happen because the Customer or
                Consultant did not accept the order; the Customer or Consultant
                was not available to accept delivery for the order, which
                requires an adult signature upon delivery; or the Customer of
                Consultant provided incorrect shipping information.
                <br />
                When this happens, the Company will, at its sole discretion,
                contact the Consultant and attempt to reship the order. If
                reshipment is not possible or desired, no later than five (5)
                days after the initial contact, the Company will refund the cost
                of the order less a twenty-five percent (25%)restocking fee and
                shipping and handling fees and neither the Consultant nor
                Consultant’s Upline will receive credit for the order.
              </p>
            </li>
          </ol>
          <p>SECTION8: ORDER CANCELLATIONS, RETURNS AND REFUNDS</p>
          <p>
            The Company desires that its Customers and Consultants be completely
            satisfied with their purchases. If a Consultant or Customer is
            dissatisfied, they may return all or part of their order according
            to the following guidelines. The following policy is the exclusive
            method for requesting or processing returns or refunds, and any
            return or refund transaction shall be solely between the end-use
            Customerand Scout &amp; Cellar.
          </p>
          <ol>
            <li>
              <p>
                <b>Order Cancellations</b>
                <br />A Consultant or Customer may cancel an order placed
                through a tasting within three (3) business days of placing the
                order. If the cancellation is timely, the Consultant or Customer
                will receive a 100% refund of the purchase price, applicable
                sales taxes, and shipping costs. Tasting orders are not
                cancellable following this three-business day time periodand are
                then subject to the Company standard return policies as further
                described below. Orders placed outside of a tasting may be
                cancelled for a full refund any time before a shipping label has
                been printed for the order. After a shipping label has been
                printed for an order, the order is considered “shipped” and is
                subject to the Company standard return policies.
              </p>
            </li>
            <li>
              <p>
                <b>Returns of Damaged or Defective Products: </b>
              </p>
              <p>
                If a Consultant or Customer receives a broken or leaking
                bottle(s), they may contact Customer Service immediately at
                https://scoutandcellar.com/contact/. Scout &amp; Cellar will (i)
                ship replacement(s) of equal value to the end consumer on the
                original order; or (ii) provide a credit of the amounts paid. To
                help the Company resolve the issue, photos may be requested to
                determine the best course of action. Consultants and Customers
                may be given the opportunity to keep bottles with damaged labels
                at exclusive pricing, at the discretion of the Company. All
                claims must be made within seven (7) days of receipt.
              </p>
              <p>
                If a Consultant or Customer believes they have received a
                defective bottle of wine, the Consultant or Customer may contact
                the Customer Service Department within sixty (60) days from the
                date of the order. Scout &amp; Cellar will (i) ship equal value
                replacement(s); or (ii) provide a credit of the amounts paid.
                Defective means that the wine is flawed or corked; not “I don’t
                like it.”
              </p>
              <p>
                Defective or incorrectly-sized Merch items may be exchanged
                within sixty (60) days of the original purchase date by
                contacting Customer Service to obtain a return shipping label.
                Once the Merch item to be exchanged is received at Scout &amp;
                Cellar, the Company will either (i) create a new order without
                charging the Customer or Consultant tore-ship the item if
                exchanging for the same item or a different size of the same
                wearable item, or (ii) issue Company store credit in the
                original amount paid if exchanging for a different item. For
                best results on entertaining related merchandise, please hand
                wash only. Any wear and tear outside of this practice will not
                be eligible for replacement. All Merch purchased while on "sale
                and/or clearance” is final sale.
              </p>
            </li>
            <li>
              <p>
                <b>Returns Under the Satisfaction Guarantee Policy</b>
              </p>
              <p>
                If a customer is not satisfied with a Scout &amp; Cellar wine,
                the customer or the corresponding Consultant may contact
                Customer Service within sixty (60) days from the date of the
                order for a credit to be used at Scout &amp; Cellar for the
                amount paid (less applicable shipping charges and taxes.)
                Consultants who are not satisfied with a Scout &amp; Cellar wine
                ordered under the Consultant’s Customer or Consultant account,
                in the absence of any damage or defect, may return unused
                bottles as further described in this item. If a Customer or
                Consultant would like to return any unused bottles, the
                Consultant or Customermay contact Customer Service for a return
                shipping label. Once the shipment has been received at our
                warehouse, the Company will issue a credit in the amount paid
                (less applicable shipping charges and a 25% restocking fee.)
              </p>
            </li>
            <li>
              <p>
                <b>
                  Consultant Abuse of Refund, Credit, and Order Placement
                  Policies
                </b>
              </p>
              <p>
                Excessive and/or improper refund, credit, or order placement
                activity may constitute a breach of the Consultant Agreement.
                Scout &amp; Cellar reserves the right to review this activity
                and terminate the Consultant Agreement of any Consultant for
                excessive or improper refund, credit, or order placement
                activity.
              </p>
            </li>
            <li>
              <p>
                <b>Out of Stock, Backorders, and Missing/Wrong Bottles</b>
              </p>
              <p>
                When wine is out of stock, is on backorder, or there are
                missing/incorrect bottles in an order, Scout &amp; Cellar will
                abide by the following procedures to resolve the issue:
              </p>
              <p>
                <b>Backorders</b>
                <br />
                If a wine is on backorder, Scout &amp; Cellar will immediately
                split the order, ship the wines in stock right away and ship the
                backordered wines when they arrive in the warehouse at no
                additional cost. The packing slip for the first shipment will
                identify the wine missing from the box and provide details about
                when it will be received.
              </p>
              <p>
                <b>Out of Stock</b>
                <br />
                If a wine is out of stock, Scout &amp; Cellar will select a
                comparable substitute. The packing slip will identify the wine
                that sold out and the wine being substituted. In most
                substitution scenarios, the replacement wine will be of equal or
                greater value than the wine originally purchased at no
                additional cost. In rare circumstances where this is not the
                case, Scout &amp; Cellar will extend a credit towards a future
                purchase for the difference.
              </p>
              <p>
                <b>Incorrect Bottles</b>
                <br />
                In the event a shipment contains incorrect bottles, Customers or
                Consultants should submit an inquiry using the contactform at
                https://scoutandcellar.com/contact/. Scout &amp; Cellar will
                ship the correct bottles right away and will make arrangements
                to pick up the bottles sent by mistake at no additional cost.
                Customers or Consultants who would like to keep any incorrect
                bottles from a shipment should submit an inquiry at
                https://scoutandcellar.com/contact/to purchase the bottles with
                special pricing.
              </p>
              <p>
                <b>Missing Bottles</b>
                <br />
                In the event a shipment ismissing bottles, Customers or
                Consultants should submit an inquiry using the contact form at
                https://scoutandcellar.com/contact/. Scout &amp; Cellar will
                ship the missing bottles right away or extend a refund or store
                credit at the Customer or Consultant’s choice.
              </p>
            </li>
            <li>
              <p>
                <b>Storage (Abandonment Policy)</b>
                <br />
                Completed orders by Scout &amp; Cellar that are not picked up
                from our warehouse located in Farmers Branch after thirty (30)
                calendar days are considered abandoned and will be returned to
                stock and refunded less a 25% restocking fee.The Company will
                notify the order owner via email that suchorder is still
                available for pickup at least five (5) days prior to the order
                being considered abandoned.
              </p>
            </li>
          </ol>
          <p>SECTION9: ADVERTISING POLICIES</p>
          <ol>
            <li>
              <p>
                <b>
                  Consultant-Created Education, Advertising and Marketing Tools
                </b>
                <br />
                Consultants are permitted to create their own educational
                materials, training materials, advertising materials,
                promotional materials, and marketingaids, including social media
                assets, videos, and other print materials (collectively
                “MarketingTools”) to promote the Scout &amp; Cellar opportunity
                and products only as provided in this Section.
              </p>
              <p>
                To ensure that any Marketing Tools that a Consultant creates or
                uses a) are not deceptive, b) contain only substantiated claims,
                and c) properly identify Scout &amp; Cellar’s trademarks and
                copyrights, all Marketing Tools that a Consultant creates or has
                created on Consultant’s behalf (with the exception of Marketing
                Tools that are only used in social media posts) must be
                submitted to the Company for review at
                https://scoutandcellar.com/contact at least two weeks prior to
                the date that the Consultant anticipates using the
                MarketingTool(s). Such Marketing Tools may only be used or
                displayed to the public if the Consultant receives written
                approval from the Company. Consultants who receive written
                authorization from Scout &amp; Cellar to produce and publish
                Marketing Tools may make approved Marketing Tools available to
                other Consultants free of charge if they wish but may not sell
                the Marketing Tools to other Consultants. Any sale or attempt to
                sell Marketing Tools to another Consultant may constitute a
                breach of the Consulting Agreement. Scout &amp; Cellar reserves
                the right to rescind approval for any previously approved
                MarketingTool(s),{" "}
                <b>
                  and Consultants waive all claims against Scout &amp; Cellar,
                  its officers, directors, owners, employees, and agents for
                  damages, expenses, costs, or remuneration of any other nature
                  arising from or relating to such rescission.
                </b>
                <br />
                At Scout &amp; Cellar’s discretion, approved Marketing Tools
                will be made available for use by other Consultants, free of
                charge, by including the same in each Consultant’s Cellar.{" "}
                <b>
                  A Consultant who has created an approved Marketing Tool grants
                  Scout &amp; Cellar and other Consultants an irrevocable and
                  royalty-free license to use the Marketing Tools for Scout
                  &amp; Cellar business purposes, and waives all claims,
                  including but not limited to intellectual property rights
                  claims, and/or claims for remuneration against Scout &amp;
                  Cellar, its officers, directors, owners, agents, and other
                  Independent Consultants for the posting and/or use of the
                  Marketing Tools.
                </b>
              </p>
            </li>
            <li>
              <p>
                <b>Use of Company Names and Protected Materials</b>
              </p>
              <ol>
                <li>
                  <p>
                    Consultants must protect and promote the good reputation of
                    Scout &amp; Cellar. The marketing and promotion of Scout
                    &amp; Cellar, the Scout &amp; Cellar opportunity, the
                    Compensation Plan, and Scout &amp; Cellar products will be
                    consistent with the public interest, and must avoid all
                    discourteous, deceptive, misleading, unethical or immoral
                    conduct and practices.
                  </p>
                </li>
                <li>
                  <p>
                    All promotional materials supplied or created by the Company
                    must be used in their original form and cannot be changed,
                    amended or altered except upon prior written approval from
                    Scout &amp; Cellar.
                  </p>
                </li>
                <li>
                  <p>
                    The name of Scout &amp; Cellar, each of its product
                    offerings and other names that have been adopted by Scout
                    &amp; Cellar in connection with its business are proprietary
                    trade names, trademarks and service marks of the Company. As
                    such, these marks are of great value to Scout &amp; Cellar
                    and are supplied to Consultants for their use only in an
                    expressly authorized manner.
                  </p>
                </li>
                <li>
                  <p>
                    Consultants’ use of the name “Scout &amp; Cellar” and/or
                    "clean-crafted" and any of Scout &amp; Cellar’s other
                    brands, marks, or tradenames is restricted to protect Scout
                    &amp; Cellar's proprietary rights so that the Company's
                    protected names will not be compromised by unauthorized use.
                    Use of “Scout &amp; Cellar”, "clean-crafted", or any of
                    Scout &amp; Cellar’s other brands, marks, or tradenames or
                    any derivative of anyof theseon any item not produced by the
                    Company is prohibited except when the Consultant is
                    identifiedas a "Scout &amp; Cellar Independent Consultant"
                    or "S&amp;C Independent Consultant."
                  </p>
                </li>
                <li>
                  <p>
                    Further guidelines relating to the use of the Scout &amp;
                    Cellar name are as follows:
                  </p>
                  <ol>
                    <li>
                      <p>
                        All stationery (e.g. thank-you cards, letterhead,
                        envelopes, and business cards) must include the specific
                        Scout &amp; Cellar Independent Wine Consultant logo
                        provided by the Company.
                      </p>
                    </li>
                    <li>
                      <p>
                        All emails related to Consultants’ independent business
                        must include the Scout &amp; Cellar approved signature
                        block which can be found in The Cellar.
                      </p>
                    </li>
                    <li>
                      <p>
                        Consultants may not use the name “Scout &amp; Cellar”
                        while answering the telephone, creating a voice message,
                        using an answering service; or as a handle, login, or
                        username on Zoom, GoToMeeting or any other similar
                        online communication tool, but they may state, “Scout
                        &amp; Cellar Independent Consultant”or “Independent
                        Scout &amp; Cellar Consultant”.
                      </p>
                    </li>
                    <li>
                      <p>
                        Particular photos and graphic images created or used by
                        Scout &amp; Cellar in its advertising, marketing
                        packaging and websites are the result of paid contracts
                        with outside vendors that do not extend to Consultants.
                        Consultants must first receive written permission to use
                        image spublished by Scout &amp; Cellar which are not
                        contained in the Brand and Marketing section of The
                        Cellar, publicly available on the Scout &amp; Cellar
                        website or official Scout &amp; Cellar social media
                        profiles.
                      </p>
                    </li>
                    <li>
                      <p>
                        Consultants may not produce for sale or distribution any
                        Company event, webinaror speech, nor may a Consultant
                        reproduce Scout &amp; Cellar audio or video clips for
                        sale or for personal use without prior written
                        permission from the Company.
                      </p>
                    </li>
                    <li>
                      <p>
                        Scout &amp; Cellar reserves the right to rescind its
                        prior approval of any marketing aid or promotional
                        material to comply with changing laws and regulationsor
                        brand strategies and may request the removal from the
                        marketplace of such materials without financial
                        obligation to the impacted Consultant.
                      </p>
                    </li>
                    <li>
                      <p>
                        Consultants shall not promote non-Scout &amp; Cellar
                        products or services in conjunction with Scout &amp;
                        Cellar products on the same websites, same
                        advertisement, or same event without prior approval from
                        the Company.
                      </p>
                    </li>
                    <li>
                      <p>
                        Consultants shall not advertise their Scout &amp; Cellar
                        business through Google Ads, Facebook Ads, Craigslist,
                        promote function within any social media platform, or
                        any other paid platform online, nor may they use any
                        Search Engine Optimization for their Company provided
                        website.
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Income Claims</b>
              </p>
              <ol>
                <li>
                  <p>
                    When presenting or discussing the Scout &amp; Cellar
                    opportunity or Compensation Plan to a prospective
                    Consultant, Consultants may not make income projections,
                    income claims, income testimonials, or disclose their Scout
                    &amp; Cellar income (including, but not limited to, the
                    showing of checks, copies of checks, bank statements, or tax
                    records), or the income of any other Scout &amp; Cellar
                    Consultant. Nor may Consultants make “lifestyle” income
                    claims.
                  </p>
                </li>
                <li>
                  <p>
                    A “lifestyle” income claim is a statement or depiction that
                    impliesor states that the Consultant is able to enjoy a
                    luxurious or successful lifestyle due to the income earned
                    from the Consultant’s Scout &amp; Cellar business. Examples
                    of prohibited lifestyle claims include, but are not limited
                    to, representations (either through audio, visualor written
                    medium) that a Consultant was able to quit ajob, acquire
                    expensive or luxury material possessions, travel to exotic
                    or expensive destinations, get paid to drink wine, or earn
                    free wine.
                  </p>
                </li>
                <li>
                  <p>
                    The Company has discretion to determine what does or does
                    not constitute a prohibited income claim. Questions should
                    be directed to brandstandards@scoutandcellar.com.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Compensation Plan Claims</b>
              </p>
              <ol>
                <li>
                  <p>
                    When presenting or discussing the Scout &amp; Cellar
                    Compensation Plan, Consultants must make it clear to
                    prospects that financial success in Scout &amp; Cellar
                    requires commitment, effort, and marketing skill.
                    Conversely, a Consultant must never represent that one can
                    be successful without diligently applying themselves.
                    Examples of misrepresentations in this area include, but are
                    not limited to:
                  </p>
                  <ol>
                    <li>
                      <p>It’s a turnkey system.</p>
                    </li>
                    <li>
                      <p>The system will do the work for you.</p>
                    </li>
                    <li>
                      <p>
                        Just get in and your downline will build through
                        spillover.
                      </p>
                    </li>
                    <li>
                      <p>Just join and I’ll build your downline for you.</p>
                    </li>
                    <li>
                      <p>The Company does all the work for you.</p>
                    </li>
                    <li>
                      <p>
                        All you have to do is buy your products every month.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    The above are just examples of improper representations
                    about the Compensation Plan and the Scout &amp; Cellar
                    opportunity. It is important that Consultants do not make
                    these, or any other representations, that could lead a
                    prospect to believe that they can be successful as a
                    Consultant without commitment, effort, and marketing skill.
                  </p>
                </li>
                <li>
                  <p>
                    Any time a Consultant is discussing the Compensation Plan or
                    any other aspect of the business opportunity or income,
                    Consultant should include the following Income Disclaimerand
                    a link to the Income Disclosure Statement (
                    <a href="https://scoutandcellar.box.com/s/unomb7o4p6bxjah5iu3l0efcg64iyolv">
                      https://scoutandcellar.com/IDS
                    </a>{" "}
                    or Exhibit B in this document):
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Compensation Plan Claims</b>
              </p>
              <ol>
                <li>
                  <p>
                    When presenting or discussing the Scout &amp; Cellar
                    Compensation Plan, Consultants must make it clear to
                    prospects that financial success in Scout &amp; Cellar
                    requires commitment, effort, and marketing skill.
                    Conversely, a Consultant must never represent that one can
                    be successful without diligently applying themselves.
                    Examples of misrepresentations in this area include, but are
                    not limited to:
                  </p>
                  <ol>
                    <li>
                      <p>It’s a turnkey system.</p>
                    </li>
                    <li>
                      <p>The system will do the work for you.</p>
                    </li>
                    <li>
                      <p>
                        Just get in and your downline will build through
                        spillover.
                      </p>
                    </li>
                    <li>
                      <p>Just join and I’ll build your downline for you.</p>
                    </li>
                    <li>
                      <p>The Company does all the work for you.</p>
                    </li>
                    <li>
                      <p>
                        All you have to do is buy your products every month.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    The above are just examples of improper representations
                    about the Compensation Plan and the Scout &amp; Cellar
                    opportunity. It is important that Consultants do not make
                    these, or any other representations, that could lead a
                    prospect to believe that they can be successful as a
                    Consultant without commitment, effort, and marketing skill.
                  </p>
                </li>
                <li>
                  <p>
                    Any time a Consultant is discussing the Compensation Plan or
                    any other aspect of the business opportunity or income,
                    Consultant should include the following Income Disclaimer
                    and a link to the Income Disclosure Statement (
                    <a href="https://scoutandcellar.box.com/s/unomb7o4p6bxjah5iu3l0efcg64iyolv">
                      https://scoutandcellar.com/IDS
                    </a>{" "}
                    or Exhibit B in this document):
                    <br />
                    Scout &amp; Cellar makes no representations or guarantees
                    that Scout &amp; Cellar Independent Consultants
                    participating in the business opportunities described on the
                    Scout &amp; Cellar website, within the Compensation Plan, as
                    re-stated by Independent Consultants during their
                    team-building efforts (“Compensation Information”), or in
                    any other way, will generate any income. Any representation
                    or guarantee of earnings, whether made by Scout &amp; Cellar
                    or an Independent Consultant, would be misleading. As with
                    any business, each Consultant’s business results will vary,
                    and will be based on, among other factors, the Consultant’s
                    individual capacity, business experience, diligence, network
                    scope, expertise and motivation. Your success will depend
                    upon how effectively you exercise these qualities.
                    Interested people are cautioned not to place any reliance on
                    any Compensation Information and are urged to perform their
                    own due diligence prior to making any decision to
                    participate.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Social Networking and Social Media </b>
                <br />
                Scout &amp; Cellar encourages Consultants to join social media
                sites, online forums, discussion groups, blogs, and other forms
                of internet communication to leverage the power of the Scout
                &amp; Cellar brand and to share the story of the Scout &amp;
                Cellar products and the Program. Online social media sites may
                be used to drive traffic to Consultants’replicated websites or
                to the Scout &amp; Cellarwebsite. Social media sites include
                such sites as Facebook, LinkedIn, Twitter, Instagram, etc.
                Consultants may not market or promote Scout &amp; Cellar
                productsor products bearing Scout &amp; Cellar names, marks,
                and/or logos on retail sites including but not limited to
                Amazon, Ebay, Etsy, or other similar sites or sites like
                wine-searcher.com.
                <br />
                Social media sites may be used to offer or refer Scout &amp;
                Cellar products and memberships. Profiles a Consultant generates
                in any social community where Scout &amp; Cellar or the Program
                are discussed or mentioned must clearly identify the Consultant
                as an Independent Consultant, and when a Consultant participates
                in those communities, Consultants must comply with the terms and
                conditions of the Consultant Agreement, including without
                limitation, the Professional Conduct terms (including without
                limitation, the prohibitions against verbal abuse and bullying;
                harassment or discrimination because of race, gender, religion,
                sexual orientation, sex, color, national origin, ancestry,
                physical disability, mental disability, medical condition,
                genetic information, marital status, gender identity, gender
                expression, age, or military and veteran status; hate-or
                violence-inciting or driven activity; or fraudulent, misleading
                or deceptive conduct). The determination of what violates the
                Professional Conduct termsis in Scout &amp; Cellar’s sole
                discretion, The Company may determine, in its sole discretion,
                that violation of the Professional Conduct terms constitutes a
                breach of the Consultant Agreement, resulting in the termination
                of the Consultant Agreement. If a link is provided, it must link
                to the posting Consultant’s replicated website.
                <br />
                Consultants may not use blog spam, spamdexing or any other
                mass-replicated methods to leave blog comments relating to Scout
                &amp; Cellar or its products. Comments Consultants createor
                leave must be useful, unique, relevant, and specific to the
                blog’s article.
                <br />
                Consultants who use social media sites must also comply with the
                rules associated with such websites or networks. For example,
                some sites prohibit users from advertising products or promoting
                financial opportunities. Federal and state agencies have
                established guidelines and rules for what may and may not be
                communicated in relation to Scout &amp; Cellar opportunities and
                even a Consultant’s personal experience may not conform to these
                regulatory guidelines. Consultants who provide testimonials on
                social networking sites and otherwise on the internet are
                responsible for ensuring that their testimonials comply with all
                applicable laws and regulations.
                <br />
                In addition to the foregoing general provision, the Company’s
                specific policies regarding Social Networking and Social Media
                are as follows:
              </p>
              <ol>
                <li>
                  <p>
                    <b>Consultants Are Responsible for Postings</b>
                    <br />
                    Consultants are personally responsible for their postings
                    (including hashtags) and all other online activity that
                    relates to the Company. Even if a Consultant does not own or
                    operate a blog or social media site, if a Consultant posts
                    to any such site that relates to Scout &amp; Cellar or which
                    can be traced to the Company, the Consultant is responsible
                    for the posting. Consultants are also responsible for
                    postings which occur on any blog or social media site that
                    the Consultant owns, operates or controls.
                    <br />
                    Consultants are further responsible for ensuring that any
                    out-of-date materials or posts containing out-of-date or
                    superseded materials are removed in order to avoid confusion
                    or conflict in information.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Identification as a Scout &amp; Cellar Consultant</b>
                  </p>
                  <ol>
                    <li>
                      <p>
                        Consultants may not use the words “Scout &amp; Cellar”,
                        “clean-crafted wine” or any variation of either in their
                        social media usernames and/or handles unless it is
                        accompanied by the name or business entity under which
                        they conduct business and the words “Independent
                        Consultant.”In all social media posts related to Scout
                        &amp; Cellar, they must disclose their full names and
                        conspicuously identify themselves as Scout &amp; Cellar
                        Independent Consultants.
                      </p>
                    </li>
                    <li>
                      <p>
                        In addition to the foregoing, Consultants may use the
                        Scout &amp; Cellar Independent Consultant logo in social
                        networking profiles. The Scout &amp; Cellar Independent
                        Consultant logo is available in The Cellar. Consultants
                        may not use any other Scout &amp; Cellar logo.
                      </p>
                    </li>
                    <li>
                      <p>
                        Anonymous postings or use of an alias is prohibited.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    <b>Use of Third-Party Intellectual Property</b>
                    <br />
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
                  <p>
                    <b>Privacy</b>
                    <br />
                    Consultants must respect the privacy of others and be
                    thoughtful and courteous in their postings.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Professionalism</b>
                    <br />
                    Consultants must conduct themselves with professionalism on
                    social media sites, including by compliance with the terms
                    and conditions of the Consultant Agreement (including
                    without limitation, the Professional Conduct terms).
                    Consultants should also carefully check their postings for
                    spelling, punctuation, and grammatical errors.
                    <br />
                    Consultants may not market their Personal URL in the
                    comments of any Scout &amp; Cellar social media posts. Nor
                    may Consultants use social media outlets to comment on other
                    brand products that are competitive to Scout &amp; Cellar in
                    order to drive marketing efforts and direct Customers to
                    their Personal URL.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Deceptive and Prohibited Postings</b>
                  </p>
                  <ol>
                    <li>
                      <p>
                        Consultants must ensure that their postings are truthful
                        and accurate. Postings that are false, misleading or
                        deceptive are prohibited. This includes, but is not
                        limited to, false or deceptive postings relating to the
                        Scout &amp; Cellar products, the Program, and/or
                        Consultant biographical information and/or credentials.
                        In particular, as it relates to Scout &amp; Cellar
                        products, the following are specifically prohibited:
                      </p>
                      <ol>
                        <li>
                          <p>
                            Referencing Scout &amp; Cellar or its productsas
                            “clean” instead of “clean-crafted”. Consultants may
                            use “clean” to describe a lifestyle consistent with
                            the goals of the Clean Crafted Commitment, but may
                            not use “clean” if it implies a health or medical
                            claimas described below.
                          </p>
                        </li>
                        <li>
                          <p>
                            Making health related or medical claims including
                            but not limited to claiming that Scout &amp; Cellar
                            wines are “headache free” or “hangover free” or do
                            not cause headaches, hangovers, or other physical
                            conditions. This includes but is not limited to
                            referring to Scout &amp; Cellar wines as “healthy”
                            or “good for you.”
                          </p>
                        </li>
                        <li>
                          <p>
                            Making generalizations about characteristics of
                            specific Scout &amp; Cellar products as though they
                            apply to our entire product line, including but not
                            limited to claiming that our wines are
                            “gluten-free,” “organic,” or “vegan”. Consultants
                            may only use descriptors of this nature when
                            speaking about specific wines that have such
                            characteristics posted on the wine’s Product Listing
                            page at https://scoutandcellar.com.
                          </p>
                        </li>
                        <li>
                          <p>
                            Making statements about the specific amount of
                            calories, sugar, or other measurable characteristics
                            of the Scout &amp; Cellar wines whether using
                            numbers or percentages, either directly or in
                            comparison to other wines in general or
                            specifically, except as otherwise expressly stated
                            by Scout &amp; Cellar.
                          </p>
                        </li>
                        <li>
                          <p>
                            Referring to Scout &amp; Cellar Independent
                            Consultants as “sellers” instead of “marketers,”or
                            referring to Consultant business activities as
                            “selling”.
                          </p>
                        </li>
                        <li>
                          <p>
                            Claiming that a Consultant or Scout &amp; Cellar is
                            “hiring” when referring to becoming an Independent
                            Consultant.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <p>
                        <b>
                          Consultants also shall not make any posting, or link
                          to any posting or other material, that:
                        </b>
                      </p>
                      <ol>
                        <li>
                          <p>Is sexually explicit, obscene or pornographic;</p>
                        </li>
                        <li>
                          <p>
                            Is offensive, profane, hateful, threatening,
                            abusive, defamatory, bullying, harassing, or
                            discriminatoryin violation of the Professional
                            Conduct terms;
                          </p>
                        </li>
                        <li>
                          <p>Is solicitous of any unlawful behavior;</p>
                        </li>
                        <li>
                          <p>
                            Engages in personal attacks on any individual,
                            group, or entity;
                          </p>
                        </li>
                        <li>
                          <p>
                            Is in violation of any intellectual property rights
                            of the Company or any third party; or
                          </p>
                        </li>
                        <li>
                          <p>
                            Is not consistent with the standards set forth in
                            these Policies and Procedures, including the
                            Professional Conduct termsand Core Values.
                          </p>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    <b>Social Media Sites with Website-like Features</b>
                    <br />
                    Scout &amp; Cellar reserves the sole and exclusive right to
                    classify certain social media sites as websites and require
                    that Consultants using, or who wish to use, such sites
                    adhere to the Company’s policies relating to Independent
                    Websitesas stated in Section 9(e)(viii)).
                  </p>
                </li>
                <li>
                  <p>
                    <b>Independent Websites</b>
                  </p>
                  <ol>
                    <li>
                      <p>
                        Scout &amp; Cellar provides Consultants with their own
                        replicated websites from which they can market Scout
                        &amp; Cellar products and the Program.Consultants may
                        not have an independent website that redirectsto their
                        replicated Scout &amp; Cellar websiteor exists solely or
                        primarily to market the Consultant’s independent Scout
                        &amp; Cellar business.
                      </p>
                    </li>
                    <li>
                      <p>
                        However, if a Consultant has an independent website for
                        other reasons and would like to promote their Scout
                        &amp; Cellarindependent business on that site, they may
                        install the Scout &amp; Cellar approved Blog Button,
                        which is available in The Cellar. By using the Blog
                        Button, Consultants are representing and warranting that
                        thecontent on their independent website is consistent
                        with the Scout &amp; Cellar Core Values and does not
                        violate any laws, rules, regulations or these Policies
                        &amp; Procedures in any way.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    <b>Unsolicited Emails and Other Communications</b>
                    <br />A Consultant may not use or transmit unsolicited mass
                    e-mail distribution, unsolicited e-mail or engage in
                    “spamming” in connection with the advertising, promotion or
                    sale of Scout &amp; Cellar products or the Program, or the
                    operation of Consultant’s Independent Scout &amp; Cellar
                    Business. The term “unsolicited e-mail” meansthe
                    transmission via electronic mail of any material or
                    information to any person on an unsolicited basis. The
                    exceptions to this prohibition are e-mail to: (i) any person
                    who gave the Consultant prior consent to send such e-mail;
                    or (ii) any person with whom the Consultant has an
                    established business or personal relationship. Any e-mail
                    sent by or for a Consultant advertising or promoting the
                    Company's products, the Program or the Consultant’s
                    independent Scout &amp; Cellar business must comply with
                    requirements applicable to commercial e-mailers found in the
                    Controlling the Assault of Non-Solicited Pornography and
                    Marketing Act (“CAN-SPAM”) and the related Federal Trade
                    Commission (“FTC”)regulations, and any other applicable laws
                    and regulations.Without limitingthe preceding paragraph, any
                    e-mail sent by a Consultant advertising or promoting the
                    Scout &amp; Cellar products, the Program or the Consultant’s
                    independent Scout &amp; Cellar business must meet all of the
                    following requirements:
                  </p>
                  <ol>
                    <li>
                      <p>
                        the e-mail must clearly identify the Consultant as the
                        sender of the e-mail and as a Scout &amp; Cellar
                        Independent Consultant;
                      </p>
                    </li>
                    <li>
                      <p>
                        there must be a functioning return e-mail address to the
                        sender;
                      </p>
                    </li>
                    <li>
                      <p>
                        there must be a notice in the e-mail that advises that
                        the recipient may reply to the e-mail via the
                        functioning return e-mail address to request that future
                        e-mail solicitations or correspondence not be sent to
                        the recipient(a functioning “opt-out” notice);
                      </p>
                    </li>
                    <li>
                      <p>
                        the e-mail must include the Consultant’s physical
                        mailing address;
                      </p>
                    </li>
                    <li>
                      <p>
                        the e-mail must clearly and conspicuously disclose that
                        the message is an advertisement or solicitation;
                      </p>
                    </li>
                    <li>
                      <p>
                        the use of deceptive subject lines and/or false header
                        information is prohibited; and
                      </p>
                    </li>
                    <li>
                      <p>
                        all “opt-out” requests, whether received by e-mail or
                        regular mail, must be honored.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    Scout &amp; Cellar may periodically send commercial e-mails
                    on behalf of Consultants and Consultants agree that Scout
                    &amp; Cellar may send such e-mails and that the Consultants’
                    physical and e-mail addresses may be included in such
                    e-mails as outlined above.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Telemarketing Limitations</b>
                    <br />
                    Consultants must not engage in telemarketing in relation to
                    the operation of the Consultant's business. The term
                    “telemarketing” means the placing of one or more telephone
                    calls to an individual or entity to induce the purchase of
                    the Company's products, or to recruit them for the Company's
                    Program.
                    <br />
                    The FTC and the Federal Communications Commission (“FCC”)
                    each have laws that restrict telemarketing practices. Both
                    federal agencies, as well as a number of states, have “do
                    not call” regulations as part of their telemarketing laws.
                    <br />
                    While a Consultant may not be considered a “telemarketer” in
                    the traditional sense, these regulations broadly define the
                    term “telemarketer” and “telemarketing” so that the
                    unintentional action of calling someone whose telephone
                    number is listed on the federal “Do Not Call” registry could
                    cause the Rep to violate the law. These regulations must not
                    be taken lightly, as they carry significant penalties.
                    <br />
                    “Cold calls” or “state-to-state calls” made to prospective
                    Customers or Consultants that promote either Scout &amp;
                    Cellar products or the Scout &amp; Cellar Program is
                    considered telemarketing and is prohibited.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Exceptions to Telemarketing Regulations</b>
                    <br />A Consultant may place telephone calls to prospective
                    Customers or Consultants under the following limited
                    situations:
                  </p>
                  <ol>
                    <li>
                      <p>
                        If the Consultant has an established business
                        relationship with the prospect;
                      </p>
                    </li>
                    <li>
                      <p>
                        In response to a personal inquiry or application
                        regarding the Scout &amp; Cellar Program or Scout &amp;
                        Cellar’s products, within three (3) months immediately
                        before the date of such a call;
                      </p>
                    </li>
                    <li>
                      <p>
                        If the Consultant receives written and signed permission
                        from the prospect authorizing the Consultant to call;
                      </p>
                    </li>
                    <li>
                      <p>
                        If the call is to family members, personal friends, and
                        acquaintances. However, if a Consultant makes a habit of
                        collecting business cards from everyone he/she meets and
                        subsequently calls them, the FTC may consider this a
                        form of telemarketing that is not subject to this
                        exemption;
                      </p>
                    </li>
                    <li>
                      <p>
                        Consultants engaged in calling “acquaintances,” must
                        make such calls on an occasional basis only and not as a
                        routine practice.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    A Consultant shall not use automatic telephone dialing
                    systems in the operation of Consultant’s Independent Scout
                    &amp; Cellar Business. Failure to abide by these policies or
                    regulations as set forth by the FTC and FCC regarding
                    telemarketing may constitute a breach of the Consultant
                    Agreement, resulting in the termination of the Consultant
                    Agreement.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Robocalls</b>
                    <br />
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
          <p>SECTION10: COMPENSATION PLAN</p>
          <ol>
            <li>
              <p>
                <b>Bonus and Commission Qualifications</b>
                <br />A Consultant must be active and in compliance with the
                Consultant Agreementto qualify for bonuses and commissions. So
                long as a Consultant complies with the Consultant Agreement, the
                Company shall pay commissions to such Consultantin accordance
                with the Compensation Plan. For details regarding active status,
                please refer to Section 11 and the Compensation Plan Summary.
              </p>
              <ol>
                <li>
                  <p>
                    Scout &amp; Cellar will not issue a payment to a Consultant
                    without the receipt of all required paperwork, including, in
                    the case of a business entity, a signed Business Entity
                    Registration Form and supporting documentation.
                  </p>
                </li>
                <li>
                  <p>
                    Scout &amp; Cellar reserves the right to postpone bonus and
                    commission payments until such time the cumulative amount
                    exceeds $10.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Computation of Commissions and Discrepancies</b>
              </p>
              <ol>
                <li>
                  <p>
                    In order to qualify to receive commissions and bonuses, a
                    Consultant must be in good standing and comply with the
                    terms of the Consultant Agreement. Commissions, bonuses,
                    overrides, and achievement levels are calculated each month.
                  </p>
                </li>
                <li>
                  <p>
                    A Consultant must review eachmonthly statement and
                    bonus/commission report promptly and report any
                    discrepancies in writing to the Company within thirty (30)
                    days of receipt. After the thirty-day “grace period,” no
                    additional requests will be considered for commission,
                    bonus, or other rewardrecalculations, except in the
                    discretion of the Company. The thirty-day grace period for
                    Fast Start or Consultant Tasting Rewards begins one business
                    day after the qualifying tasting is closed by placing the
                    Host Order.
                  </p>
                </li>
                <li>
                  <p>
                    For additional information on payment of commissions, please
                    review the Compensation PlanSummary located in The Cellar
                    and in exhibit A of this document.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Payment Processing</b>
                <br />
                Scout &amp; Cellar uses an independent third-party payment
                processor (“Payment Processor”) to pay Commissions and
                Performance Bonuses earned by Consultants through the
                Compensation Plan. The Payment Processor will set up an account
                for Consultants (“Scout Account”) and will deposit monies owed
                to Consultants into their ScoutAccount. With the exception of
                certain Performance Bonus payments made on an exception basis,
                all Commissions or Performance Bonuses that Consultants may earn
                will be paid through this program. However, this payment
                processing service may be terminated or modified by the Company
                or the Payment Processor at any time upon notice as specified in
                these Policies and Procedures.{" "}
                <b>
                  CONSULTANTS WAIVE ANY AND ALL CLAIMS AGAINST THE COMPANY THE
                  PAYMENT PROCESSOR AND THEIR OFFICERS, DIRECTORS, OWNERS,
                  EMPLOYEES, AND AGENTS IN THE EVENT THAT THE COMPANY AND/OR ITS
                  PAYMENT PROCESSOR MAKE AN ERROR THAT RESULTS IN AN
                  UNDERPAYMENT OR OVERPAYMENT TO A CONSULTANT, AND EACH
                  CONSULTANT AUTHORIZES THE COMPANY, THROUGH THE PAYMENT
                  PROCESSOR, TO DEBIT OR CREDIT CONSULTANT’S ACCOUNT AS
                  NECESSARY TO CORRECT ERRORS.
                </b>
                <br />
                Consultant expressly authorizes that the following payment
                processor fees may be deducted from Scout Account funds:
              </p>
              <ol>
                <li>
                  <p>Monthly Platform Fee: $1.75</p>
                </li>
                <li>
                  <p>Personal Check Fee: $3.00</p>
                </li>
                <li>
                  <p>Debit Card Transaction Fee: $1.50</p>
                </li>
                <li>
                  <p>Card Cost (if not loaded within 60 days): $2.95</p>
                </li>
                <li>
                  <p>
                    ACH Returned Charge (Incorrect bank account or routing
                    number): $10.00
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>Note: There is not a Transaction Fee associated with ACH.</p>
            </li>
            <li>
              <p>
                <b>Refund Adjustments</b>
                <br />
                When a refund is issued to a Customer or Consultant under
                Section 8 above, the qualifications, Commissions, and
                Performance Bonuses attributable to the returned product(s)upon
                which the refund(s) were issued will be deducted from the
                Consultant’s current and future qualifications, Commissions, and
                Performance Bonuses. These deductions will be madeas soon as the
                month in which the refund was given and will continue every
                Commission Period thereafter until the Commissions and
                Performance Bonuses are recovered from the Consultant who
                received the Commissions and Performance Bonus on the sale of
                the returned product. In the event any Consultant
                terminatestheapplicableConsultantAgreementand the amounts of the
                Commissions and Performance Bonuses attributable to the refunded
                product(s) have not yet been fully recovered by Scout &amp;
                Cellar, the remainder of the outstanding balance may be set off
                against any earnings amounts owed to the terminated Consultant
                or against any refunds due the terminated Consultant.
              </p>
            </li>
          </ol>
          <p>SECTION11: TERMINATION OF AGREEMENT</p>
          <ol>
            <li>
              <p>
                Independent Consultants represent the Scout &amp; Cellar brand
                any time they are working their Scout &amp; Cellar independent
                business, wearing or displaying the Scout &amp; Cellar logo,
                participating in a Scout &amp; Cellar event, holding themselves
                out as Independent Consultants on social media or otherwise, or
                consuming Scout &amp; Cellar wine. Independent Consultants
                should behave in such a way that is consistent with the Scout
                &amp; Cellar Core Values, as described in Section 1 of these
                Policies and Procedures.
              </p>
              <ol>
                <li>
                  <p>
                    Disregard for or failure to behave in accordance with these
                    Core Values constitutes a violation of the Consultant
                    Agreement. Further, the failure to engage with and/or take
                    corrective action at the request of Brand Standards also
                    constitutes a violation of the Consultant Agreement.
                  </p>
                </li>
                <li>
                  <p>
                    Violation of the Consultant Agreement also includes the
                    violation of any common law duty, including but not limited
                    to any applicable duty of loyalty, any illegal, fraudulent,
                    deceptive or unethical business conduct, or any act or
                    omission by a Consultant that, in the sole discretion of the
                    Company may damage its reputation or goodwill (such damaging
                    act or omission need not be related to the Consultant’s
                    independent Scout &amp; Cellar business).
                  </p>
                </li>
                <li>
                  <p>
                    Any violation of the Consultant Agreement may result, at
                    Scout &amp; Cellar's discretion, in one or more corrective
                    measures. These include but are not limited to:
                  </p>
                  <ul>
                    <li>
                      <p>Issuance of a written warning or admonition;</p>
                    </li>
                    <li>
                      <p>
                        Requiring the Consultant to take immediate corrective
                        measures;
                      </p>
                    </li>
                    <li>
                      <p>
                        Withholding from a Consultant all or part of the
                        Consultant’s bonuses and commissions during the period
                        that Scout &amp; Cellar is investigating any conduct
                        allegedly in violation of the Consultant Agreement. If a
                        Consultant’s independent Scout &amp; Cellar business is
                        canceled for disciplinary reasons, the Consultant will
                        not be entitled to recover any commissions withheld
                        during the investigation period;
                      </p>
                    </li>
                    <li>
                      <p>
                        Suspension of the individual’s Consultant Agreement and
                        independent Scout &amp; Cellar business for one or more
                        pay periods (without pay);
                      </p>
                    </li>
                    <li>
                      <p>
                        Involuntary termination of the offender’s Consultant
                        Agreement;
                      </p>
                    </li>
                    <li>
                      <p>
                        Suspension and/or termination of the Consultant’s Scout
                        &amp; Cellar website or website access; or
                      </p>
                    </li>
                    <li>
                      <p>
                        Any other measure expressly allowed within any provision
                        of the Consultant Agreement or which Scout &amp; Cellar
                        deems practicable to implement and appropriate to
                        equitably resolve injuries caused partially or
                        exclusively by the Consultant’s policy violation or
                        contractual breach.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    In situations deemed appropriate by Scout &amp; Cellar, the
                    Company may institute legal proceedings for monetary and/or
                    equitable relief.
                  </p>
                </li>
                <li>
                  <p>
                    The Company has no obligation to share evidence of Policies
                    and Procedures violations with any Consultant, including in
                    cases of termination, except as required by law.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Involuntary Termination</b>
                <br />
                Company may immediately terminatethe Consultant Agreementinthe
                event of any prohibited actual or attempted assignment of the
                Agreement, or Consultant’s misrepresentation relating to Company
                or Consultant’s Independent Business, or Consultant’s failure to
                engage with and/or take corrective action at the request of the
                Company’s Brand Standards department,or Consultant’s breach of
                any provision of the Consultant Agreement. If Company terminates
                the Consultant Agreement due to a breach by Consultant, the
                Company may reject any future reapplications by Consultant as a
                Consultant and pursue all applicable legal remedies.
                <br />
                Scout &amp; Cellar reserves the right to terminate all
                Consultant Agreements upon thirty (30) days written notice in
                the event that it elects to: (1) cease business operations; (2)
                dissolve as a corporate entity; or (3) terminate marketing of
                its products utilizing independent consultants.
                <br />
                Company may, in its sole discretion, and to protect its rights
                and avoid potential damage to itself or others, suspend a
                Consultant’s ability to participate in the Program while Company
                investigates an alleged breach of the Consultant Agreement.
              </p>
            </li>
            <li>
              <p>
                <b>Voluntary Termination</b>
                <br />A Scout &amp; Cellar Independent Consultant has the right
                to terminate this Agreement at any time, for any reason.
                <br />
                If a Consultant who voluntarily terminates this Agreement is
                also enrolled in a Scout &amp; Cellar monthly wine purchasing
                program, the Consultant’s participation in that program shall
                also be cancelled unless the Consultant uses the contact form at
                https://scoutandcellar.com/contact/to set up a new Customer
                account and wine club.
              </p>
            </li>
            <li>
              <p>
                <b>Cancellation for Inactivity</b>
                <br />
                If a Consultant fails to market Scout &amp; Cellar products
                resulting inat least $600 in commissionablevolumeof Scout &amp;
                Cellar product over any twelve-consecutive monthperiod, such
                Consultant’s Consultant Agreement and independent Scout &amp;
                Cellarbusiness will be cancelled for inactivity. If such a
                Consultant is also enrolled in a Scout &amp; Cellar monthly wine
                purchasing program,the Consultant’s participation in that
                program shall also be cancelled. Should the Consultant desire to
                maintain an active wine club, the Consultant should use the
                contact form at https://scoutandcellar.com/contact/to set up a
                new Customer account.
              </p>
            </li>
            <li>
              <p>
                <b>Notice of Termination</b>
                <br />
                Company shall notify Consultant of suspension or termination of
                the Consultant Agreement by written notice to the Consultant’s
                last known mailing address or email address.
                <br />
                Consultant shall notify Company of termination of the Consulting
                agreement by written notice to the Company at its principal
                place of business or via the contact form at
                https://scoutandcellar.com/contact/. Notice must include the
                Consultant’s name, address, and Consultant ID Number.
                <br />
                All written notices required by this Agreement to be given will
                be deemed effective three (3) business days after mailing or
                immediately if sent by email.
              </p>
            </li>
            <li>
              <p>
                <b>Events upon Termination</b>
                <br />
                Upon termination of the Consultant Agreement, Consultant will
                (i) within five (5) business days pay all amounts due and owing
                to Scout &amp; Cellar; (ii) immediately cease representing the
                individual(s) or Business Entity as an Independent Consultant of
                Company; and (iii) be ineligible to receive any compensation as
                an Independent Consultant not earned as of the date of
                termination of the Consultant Agreement. Consultant hereby
                authorizes Company to withhold from any payments due to
                Consultant under the Compensation Plan any amounts due and owing
                to Company to the fullest extent allowed by applicable law.
                <br />
                Consultant will immediately cease all use of Scout &amp; Cellar
                Intellectual Property (as defined in the Independent Consultant
                Agreement) and Confidential Information (as defined in the
                Independent Consultant Agreement and these Policies and
                Procedures) and will cease holding classes, workshops, tastings,
                and presentation or otherwise displaying, offering for sale or
                promoting Company products.
                <br />
                If the Consultant posts on any social media site on which the
                individual has previously self-identified as a Consultant, there
                must be a conspicuous disclosure accompanying such post that the
                individual is no longer a Scout &amp; Cellar Independent
                Consultant.
                <br />A Consultant whose Consultant Agreement is terminatedfor
                any reason will lose all Consultant rights, benefits and
                privileges. This includes the right to represent such
                individualas an Independent Scout &amp; CellarConsultant, to
                market Scout &amp; Cellar products and services and the right to
                receive commissions, bonuses, or other income resulting from
                Consultant’s own marketing efforts and the marketing effortsand
                other activities of the Consultantand the Consultant’s former
                downline organization. There is no whole or partial refund for
                Business Basics Kits that are not currently marketable or for
                Back-Office, Replicated Website or renewal fees if a
                Consultant’s Consultant Agreementis cancelled.
              </p>
            </li>
            <li>
              <p>
                <b>Indemnification</b>
                <br />
                Each Consultant agreesto indemnify Scout &amp; Cellar for any
                and all costs, expenses, consumer reimbursements, fines,
                sanctions, damages, settlements or payments of any other nature
                that Scout &amp; Cellar incurs resulting from or relating to any
                act or omission by a Consultant that is illegal, fraudulent,
                deceptive, negligent, unethical, or in violation of the
                Consultant Agreement or any applicable Federal, state, or local
                law. Scout &amp; Cellar may elect to exercise its
                indemnification rights through withholding any compensation due
                the Consultant. This right of setoff shall not constitute Scout
                &amp; Cellar’s exclusive means of recovering or collecting funds
                due Scout &amp; Cellar pursuant to its right to indemnification.
              </p>
            </li>
          </ol>
          <p>
            <b>
              SECTION 12: TRANSFER AND DISTRIBUTION OF INDEPENDENT CONSULTANT
              BUSINESSES
            </b>
          </p>
          <ol>
            <li>
              <p>
                <b>Transfer of Consultant Agreement Upon Death</b>
                <br />A Consultant may leave Consultant’s independent Scout
                &amp; Cellar business to anyheirs. Because Scout &amp; Cellar
                cannot divide bonuses or commissions among multiple
                beneficiaries or transferees, the beneficiaries or transferees
                must form a Business Entity (corporation, LLC, partnership,
                etc.), and Scout &amp; Cellar will transfer the business and
                issue commissions to the Business Entity. In the case of a
                business transfer via testamentary instrument, the beneficiary
                of the business must provide Scout &amp; Cellar with certified
                letters testamentary and written instructions of the
                trustee/personal representative of the estate, or an order of
                the court, that provides direction on the proper disposition of
                the business. The beneficiary must also execute and submit to
                the Company a Scout &amp; Cellar Consultant Agreement within
                thirty (30) days from the date on which the business is
                transferred by the estate to the beneficiary or the subject
                independent Scout &amp; Cellar business will be canceled.
              </p>
            </li>
            <li>
              <p>
                <b>Business Distribution Upon Divorce</b>
                <br />
                Scout &amp; Cellar is not able to divide bonuses or commissions
                among multiple parties, nor is it able to divide a downline
                organization. Consequently, in the event a Consultant divorces
                Consultant’sspouse, any settlement or divorce decree must award
                the business in its entirety to one party. Scout &amp; Cellar
                will recognize as the owner of the business the former spouse to
                whomthe business is awarded pursuant to a legally binding
                settlement agreement or decree of the court. The former spouse
                who receives the Scout &amp; Cellar business must also execute
                and submit a Scout &amp; Cellar Consultant Agreementwithin 30
                days from the date on which the divorce becomes final or the
                business will be cancelled.The other spouse need not observe the
                six-month waiting period set forth in Section 7d above and may
                immediately enroll as a Consultant under any Mentor of choice.
              </p>
            </li>
            <li>
              <p>
                <b>Dissolution of a Business Entity</b>
                <br />
                Scout &amp; Cellar is not able to divide commissions among
                multiple parties, nor is it able to divide a downline
                organization. Consequently, in the event a business entity that
                is enrolled as a Business Entity Consultantdissolves, the owners
                of the business entity must instruct the Company on the identity
                of the proper party who is to receive and operatethe independent
                Scout &amp; Cellar business of the Business Entity Consultant.
                Such an independentScout &amp; Cellar business shall be awarded
                to a single individual or entity that was previously recognized
                by the Company as an owner of the business entity; Scout &amp;
                Cellarwill not divide the business among multiple parties or
                issue separate commission or bonus payments. If the business
                entity wishes to sell or transfer its independent Scout &amp;
                Cellar business, it must do so pursuant to Section 12d below.In
                addition, the recipient of the independent Scout &amp; Cellar
                business must also execute and submit a Consultant Agreementto
                the Company within thirty (30) days from the date of the
                dissolution of the business entity or the subject independent
                Scout &amp; Cellar business will be cancelled.
              </p>
            </li>
            <li>
              <p>
                <b>Sale or Transfer of an Independent Business</b>
                <br />
                Requests to sell or transfer an independent Scout &amp; Cellar
                business must be submitted in writing to the Company using the
                contact form at https://scoutandcellar.com/contact/. Such
                requests must be accompanied by the written approval of the
                transferor Consultant’s Mentor and two Upline leaders with the
                career title of Director or higher. In the event there are not
                two Upline leaders at this career title, consent must be
                obtained from the two highest career ranking Consultants in the
                Upline. Regardless of a Consultant obtaining the needed consent
                from Consultant’s Upline, Scout &amp; Cellar may approve or deny
                a business sale or transferif,in the Company’ssole discretion,
                the Company determines that the buyer or transferee does not
                meet the Company’s terms and conditions as stated in the
                then-current Consultant Agreement. Approval of transfers is not
                effective unless given in writing by the Company.
                <br />
                Approval of such requests is dependent on both the transferor
                Consultant and the transferee beingin good standing. No business
                that is on disciplinary suspension or under investigation may be
                transferred unless and until the matter is resolved. Likewise,
                no Consultant who is on disciplinary suspension, or under
                investigation may be the beneficiary of a sale or transfer. A
                Consultant may not transfer or sell Consultant’s business to a
                spouse, relative, or household member while working a competing
                direct selling company. Any Consultants with an active
                Consultant Agreement or whose Consultant Agreement was Active
                within the past 6 months are prohibited from purchasing a Scout
                &amp; Cellar Independent Business.
                <br />
                In extreme cases involving family members who are Consultants
                within the same Downline, Scout &amp; Cellar may authorize a
                position swap. Scenarios in which a position swap might be
                allowed include but are not limited to serious illness or
                accident, long-term disability, tragedy, or other circumstances
                involving significant life changes that impede the ability of
                one family member to continue running Consultant’s independent
                Scout &amp; Cellar business. Requests for a position swap must
                follow the same procedures outlined above and are subject to the
                same Upline consent requirements. Regardless of a Consultant
                obtaining the needed consent from Consultant’s Upline, Scout
                &amp; Cellar may approve or deny a position swapif, inthe
                Company’s sole discretion, the Company determines that the
                relevant parties do not meet the Company’s terms and conditions
                as stated in the then-current Consultant Agreement.
                <br />
                If a sale or transfer is approved under any circumstances, the
                buyer/transferee of the business must complete a Consultant
                Agreement before the transfer will be finalized by Scout &amp;
                Cellar. Because Scout &amp; Cellar cannot split commissions
                earned in the same month, Scout &amp; Cellar will finalize the
                transfer after the end of the month in which the Consultant
                Agreement is submitted. At the end of the calendar year, Scout
                &amp; Cellar will issue a 1099 to the Consultant for any
                commissions paid for the months prior to the finalization of the
                transfer and to the buyer/transferee for any commissions paid
                for the months after the finalization of the transfer.
              </p>
            </li>
          </ol>
          <p>
            <b>SECTION 13: ADDITIONAL TERMS</b>
          </p>
          <p>
            If any provision of the Consultant Agreement is determined to be
            invalid or unenforceable, that determination will not affect any
            other provision of this Agreement and the provision in question will
            be modified by the reviewing arbitrator, court, agency, or
            othertribunal court so as to be rendered enforceable. The Consultant
            Agreement in its current form, and as may be amended by Scout &amp;
            Cellar in the future, supersedes all prior communications,
            understandings and agreements between the parties and contains the
            entire agreement between the parties relating to its subject matter.
          </p>
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
                is selling wine. I represent and warrant that I am not in the
                business of selling wine. I represent and warrant that I am in
                the business of marketing, promotions and education. I
                acknowledge and agree that Company's usual course of business is
                not marketing, promotions and education.
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
                non-commissionable Business Kit from Scout &amp; Cellar. I
                understand that a Business Kit is the only purchase required to
                conduct business as a Scout &amp; Cellar Independent Consultant.
                I also agree to pay any renewal fees required to extend the term
                of this Agreement. If you are a Montana resident, you may return
                your Starter Kit for a full refund within fifteen (15) days from
                the date of purchase. Please see the Policies &amp; Procedures
                for more detailed return policies and procedures.
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
          : "../Agreement-PDF/Policies & Procedures November 2020.pdf",
        {
          responseType: "blob",
        }
      )
      .then((res) => {
        !this.state.currentButton
          ? fileDownload(res.data, "Independent Consultant Agreement.pdf")
          : fileDownload(res.data, "Policies & Procedures November 2020.pdf");
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
