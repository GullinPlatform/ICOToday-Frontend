<template>
  <div class="container container-padding">
    <div class="row">
      <div class="col-lg-3 col-md-4">
        <!-- Docs Side Menu-->
        <div class="padding-top-2x hidden-md-up"></div>
        <nav class="list-group">
          <router-link class="list-group-item"
                       :to="{name:'terms', query:{type:'terms'}}"
                       :class="{active:type==='terms'}">Terms and Services
          </router-link>
          <router-link class="list-group-item"
                       :to="{name:'terms', query:{type:'privacy'}}"
                       :class="{active:type==='privacy'}">Privacy Policy
          </router-link>
          <router-link class="list-group-item"
                       :to="{name:'terms', query:{type:'rating'}}"
                       :class="{active:type==='rating'}">Analyst Rating Guidelines
          </router-link>
        </nav>
      </div>
      <div class="col-lg-9 col-md-8" v-if="type==='terms'">
        <h2 class="mb-4">Terms and Services</h2>

        <p><strong>Introduction</strong></p>
        <p>Welcome to ICOToday! We provide an online investment platform for blockchain tokens.</p>
        <p>
          Users of this website (&quot;Site&quot;) may open an account as a &quot;Company&quot; (those looking for advice and an introduction to potential investors), as an &quot;Investor&quot; (those looking for companies to support) or they may view Content made available to the general public.</p>
        <p>
          By using ICOToday, including by simply viewing content on the Site, you are agreeing that you, and each person you allow to access ICOToday through your account, will abide by the terms of this Terms of Service (&quot;Agreement&quot;), which is set forth in its entirety below. This Agreement is between you and What'sPoppin LLC (&quot;we,&quot; &quot;ICOToday&quot; or the &quot;Company&quot;), and it governs your access to and use of the services, websites, and applications offered by ICOToday (the &quot;Services&quot;). Your access to and use of the Services are conditioned on your acceptance of and compliance with this Agreement.</p>
        <p>
          The Site is not directed to any person in any jurisdiction where (by reason of that person's nationality, residence or otherwise) the publication or availability of the Site is prohibited. Persons in respect of whom such prohibitions apply must not access the Site. For more information, see Section XII.a (Availability of Services).</p>
        <p>Capitalized terms used herein are defined in Section XIII (Definitions) of this Agreement.</p>
        <p>Significant regulatory considerations apply to the transactions and other activity taking place on the Site, and this Agreement sets forth terms on which companies interact with Investors through our platform.</p>
        <p>companies: If you are an companies, you are welcome to upload information about your business plan, including information you consider confidential (see Locked Information, as defined in Section XIII (Definitions)) to <a href="https://ICOToday.io">https://ICOToday.io</a>
          (the &quot;Site&quot;), and to designate which Investors may see that information (either by listing specific Investors, or by indicating categories of Investors that may see your Locked Information). We will use best efforts to display information you have designated as &quot;Locked&quot; only to Investors who have told us that they fit within the categories you have identified. We cannot, however, guarantee that Investors who see your Locked Information will not distribute that information. We also cannot guarantee that there will never be a software bug or a hacker attack that allows unauthorized viewing of Locked Information. Similarly, we cannot guarantee that Investors actually fit within the categories they have identified themselves under.
        </p>
        <p>
          INVESTORS: The only individuals who are authorized to create Investor accounts on the Site are sophisticated investors with personal or professional experience assessing the long term business prospects of early stage companies. Investors must understand the risk of investing in early stage companies, including the high likelihood of loss and long period of illiquidity. In addition, if you are using the site as an Investor, you must be sophisticated enough to protect your own interests. As an Investor, you may participate in one of the sales (&quot;Coinsales&quot;) offered through the Site. In the course of participating as investment opportunities through the Site, you may receive Locked Information. You will also select what kinds of companies you would like an introduction to and what kinds of business plans you would like to see. We do not guarantee to show you all business plans that meet your criteria, nor can we guarantee business plans that we show you will actually satisfy your criteria.</p>
        <p>
          GENERAL USERS: Certain portions of the Site will be visible to users who have not signed up as either companies or Investors. Those users, nevertheless, are bound by this agreement. companies should be aware that information they provide that is not designated as &quot;Locked&quot; will be visible to everybody.</p>
        <p><strong>1. GENERAL SECURITIES PRINCIPLES</strong></p>
        <p>
          The security laws applicable to private company finance are complicated and occasionally ambiguous. In general, they are designed to protect unsophisticated people from making poor investment decisions. Federal securities law requires securities sold in the United States to be registered with the Securities and Exchange Commission (&quot;SEC&quot;), unless the sale qualifies for an exemption. Generally, startup ventures use one or more of the &quot;private placement&quot; exemptions because they allow for the raising of capital without complying with the costly and time-consuming registration process. One of the requirements of the private placement exemption is that neither the company which is offering its securities nor any person acting on such issuer's behalf may offer or sell the securities by any form of &quot;general solicitation&quot;, except where, as provided under Rule 506© of Regulation D, the issuer has taken reasonable steps to verify that all of the investors in the offering are Accredited Investors. Furthermore, many states and foreign countries all have their own regulations governing securities transactions that must be observed. You must make your own assessment regarding regulatory requirements as may be applied to your activities on the Site.</p>
        <p><strong>2. USER OBLIGATIONS</strong></p>
        <ol>
          <li>To Act Responsibly. You are promising to act responsibly – which means:</li>
          <li>You are making the following Promises:</li>
          <li>Requirements to Use the Services.</li>
          <li>
            That you have the right, authority, and capacity to enter into this Agreement on your own behalf and on behalf on any entity for whom you are acting and to abide by all of the terms and conditions contained herein, and that if any aspect of your participation in ICOToday violates provisions of the law to which you are subject, you will cease using the Services and close your account;
          </li>
          <li>That you are at least 13 years old, and that if you are less than 18 years old, your parent or legal guardian has agreed to stand behind any agreement you enter into as a participant on ICOToday;</li>
          <li>That you shall not use a false name or email address owned or controlled by another person with the intent to impersonate that person or for any other reason;</li>
          <li>That you shall not use a User ID name that is subject to any rights of a person other than yourself without appropriate authorization;</li>
          <li>That you shall be solely responsible for maintaining the confidentiality of your password;</li>
          <li>That you will update your registration information with the Company as needed so that it remains true, correct and complete; and</li>
          <li>That you will conduct yourself in a professional manner in all your interactions with ICOToday and with any other ICOToday user.</li>
          <li>Your Use of Content on ICOToday requires.</li>
          <li>That you will only provide ICOToday with Content that you have a right to provide to ICOToday and to allow ICOToday to display through the Services,</li>
          <li>
            you own or control any and all rights in and to the Content, and the right to grant all of the rights and licenses in these Terms, and if you are not the holder of such rights, the holder of such rights has completely and effectively waived all such rights and irrevocably granted you the right to grant the licenses stated above without the need for payment to you or any other person or entity;
          </li>
          <li>That you have rights to all copyrights, trademarks, trade secrets, intellectual property or other material provided by you for display by ICOToday.</li>
          <li>That you understand that any other Content you find on or through ICOToday is the sole responsibility of the person who originated such Content;</li>
          <li>That you understand that your Content may be republished and if you do not have the right to submit Content for such use, it may subject you to liability. ICOToday will not be responsible or liable for any use of your Content by ICOToday in accordance with this Agreement;
          </li>
          <li>
            That you are not relying on ICOToday to, and that you understand that we do not, endorse, support, represent or guarantee the completeness, truthfulness, accuracy or reliability of any Content or communications posted via the Services or endorse any opinions expressed via the Services;
          </li>
          <li>That you understand that by using the Services, you may be exposed to Content that may contain any libelous, defamatory, obscene, offensive, threatening or otherwise harassing or hateful content, and that you have no claim against ICOToday for any such material; and</li>
          <li>
            That you understand that the Service may include advertisements or other similar items, which may be related to Content, queries made through the Services, or other information, and you have no claim against ICOToday for the placement of advertising or similar content on the Services or in connection with the display of any Content or other information from the Services.
          </li>
          <li>
            That you understand that the Service may not contain any addresses, email addresses, phone numbers or any contact information or (e) contain computer viruses, worms or other harmful files. Upon request by Company, you will furnish Company any documentation, substantiation or releases necessary to verify your compliance with these Terms.
          </li>
          <li>Requirements related to Investments.</li>
          <li>
            That you will only invest in a fund or other product offered through the Site after carefully reviewing and assessing the terms of the investment, including the related private placement memorandum, subscription agreement and organizational documents as well as any information provided through the Site;
          </li>
          <li>That you will use your own judgment before making any decision to invest or to accept an investment involving what is to you a material amount of money;</li>
          <li>
            That you will be solely responsible for complying with applicable law regarding any transaction, including without limitation the determination of whether any investor is an Accredited Investor and whether any investment complies with the terms of local law (whether the law of a U.S. state or of any foreign government with jurisdiction over you or any investor);
          </li>
          <li>That you will obtain such professional advice as is appropriate to protect your interests, including legal, tax, accounting and other advice (i.e., get a good startup attorney); and</li>
          <li>That you have reviewed and understand the discussion of risks found <a href="https://angel.co/risks">here</a>, and that you are otherwise aware of the risks of making angel investments</li>
          <li>You warrant that you will not:</li>
          <li>Violate the Community Rules of ICOToday.</li>
          <li>Expect ICOToday to evaluate, confirm or otherwise stand behind any user's statements or recommend any investment;</li>
          <li>
            Treat any Content, email or other information you receive as a result of your access to the Services as a recommendation or representation of any kind by ICOToday, an affiliate of ICOToday or any employee, officer, director, representative or other agent of the foregoing (each a &quot;Company Person&quot;) on which you should rely unless such information has been expressly identified as created by a Company Person;
          </li>
          <li>
            Claim any ownership right in any material, software or other intellectual property displayed on, published by or otherwise available through ICOToday, other than Content, software or intellectual property that you own or otherwise have rights to without regard for its appearance on ICOToday;
          </li>
          <li>Copy, store, permanently download, or re-distribute Content except as specifically allowed in this Agreement;</li>
          <li>Use any Content, or other information acquired from Company Persons, Investors or companies, or otherwise through your use of the Services, for commercial or investment activity outside of the Services, without prior written approval from the Company;</li>
          <li>Claim any right to access, view or alter any source code or object code of ICOToday;</li>
          <li>Use ICOToday to market services, particularly investment advisory services that might cause ICOToday to have to register as a broker dealer or investment adviser with the Securities &amp; Exchange Commission (SEC), or to be treated as an underwriter; or</li>
          <li>Market competing services to people you've identified through ICOToday.</li>
          <li>Indemnify ICOToday and Related Parties. You are promising to hold the Company harmless against any damage that may happen to us as a result of your use of ICOToday.</li>
          <li>
            You agree to indemnify and hold the Company and any of its employees, agents, affiliates, assigns and licensees (&quot;Company Person&quot;) harmless (including against costs and attorneys' fees) from any claim, demand, expenses, costs, or fees made by any third party due to or arising out of your access to or use of the Services, the violation of this Agreement or any applicable law, rule, or regulation by you, willful misconduct by you, the infringement by you, or any third party using your account, of any intellectual property or other right of any person or entity, or for any Content posted through the Services by you (including claims related to defamation, invasion of privacy or other violation of a person's rights). Your obligations under the foregoing indemnity may not be offset against any other claim you may have against the Company or any Company Person. You remain solely responsible for all Content that you upload, post, email, transmit, or otherwise disseminate using, or in connection with, the Services. You agree that the provisions in this paragraph will survive any termination of your account(s) or the Services.
          </li>
          <li>
            You hereby release any claims you may have against ICOToday and any Company Person that are in any way related to the Services or your use of Content, including any representations, recommendations or referrals you may receive as a result of your registration with ICOToday. You are solely responsible for your use of the Services, for any Content you provide, and for any consequences thereof, including the use of your Content by other users and third party partners.
          </li>
          <li>
            ICOToday Employees and Affiliates. You understand that Company Persons may participate in the Services as companies or Investors, and that ICOToday is not responsible for any of their activities, including statements or other information in any emails or other communications such individuals make in that capacity.
          </li>
          <li>
            By registering with ICOToday, or otherwise using the Services or viewing content made available through ICOToday in any way, you may have an opportunity to see Locked Information. It is expected that you will use discretion in determining what you do with that information. You agree, that you will not republish or redistribute any information you acquire through the Services via an Internet website, for which one of the principal purposes is to compete with ICOToday.
          </li>
          <li>Other User Obligations.</li>
          <li>You promise to comply with the terms of the license set forth in Section IV (Company Services and License) of this Agreement.</li>
          <li>
            You are granting ICOToday a limited, non-revocable license to publish all Content you upload to ICOToday, including any comments or other forum posts you may offer on the Site in order to provide the Services. Your Content will be viewable by other users of the Services and through third party services and websites. You should only provide Content that you are comfortable sharing with others.
          </li>
          <li>
            To the extent that ICOToday is determined, for any reason, not to be the licensee of any material you have provided to us, including all rights of paternity, integrity, disclosure and withdrawal and any other rights that may be known as or referred to as &quot;moral rights,&quot; &quot;artist's rights,&quot; &quot;droit moral,&quot; or the like (collectively &quot;Moral Rights&quot;), you hereby ratify and consent to any action that may be taken with respect to such Moral Rights by or authorized by ICOToday and agree not to assert any Moral Rights with respect thereto. You further agree that you will confirm any such ratifications, consents and agreements from time to time as requested by the Company.
          </li>
          <li>You acknowledge that ICOToday is not obligated to pay you or to cause any other party to pay you any compensation with respect to your activities on ICOToday, or to feature or otherwise display your Content on any web page.</li>
          <li>
            You acknowledge that you do not rely on the Company to monitor or edit the Services (including emails initiated by individuals, regardless of whether those individuals are otherwise associated with the Company) and that the Services may contain Content which you find offensive or which is untrue or misleading. You hereby waive any objections you might have with respect to viewing such content.
          </li>
          <li>
            You agree that this Agreement does not entitle you to any support, upgrades, updates, add-ons, patches, enhancements, or fixes for the Services (collectively, &quot;Updates&quot;). The Company, however, may occasionally provide automatic Updates to the Services at its sole discretion (and without any advanced notification to you). Any such Updates for the Services shall become part of the Services and subject to this Agreement.
          </li>
          <li>If you operate, manage or otherwise control a search engine or robot, or you republish a significant fraction of ICOToday content (as we may determine in our reasonable discretion), you must additionally follow these rules:</li>
          <li>You must use a descriptive user agent header.</li>
          <li>You must follow robots.txt at all times.</li>
          <li>You must make it clear how to contact you, either in your user agent string, or on your website if you have one.</li>
          <li>
            APIs available through the Service. We may make available one or more APIs for interacting with the Services. Your use of any ICOToday API on the Site is subject to this Agreement and the ICOToday API Rules, which will be posted before we make these APIs available (and which will then become part of this Agreement).
          </li>
        </ol>
        <p><strong>3. PRIVACY AND PROTECTION OF PERSONAL INFORMATION</strong></p>
        <ol>
          <li>
            Privacy Policy. ICOToday values your privacy. Please review our Privacy Policy to learn more about how we collect and use information about you via the Services. The Privacy Policy explains how ICOToday treats your personal information and protects your privacy when you access ICOToday and use the Services.
          </li>
          <li>
            Amendments to the Privacy Policy and Terms of Use. ICOToday may, in its sole discretion, modify or update these Terms and its Privacy Policy from time to time, and so you should review this page and the Privacy Policy page periodically. When we change these Terms or the Privacy Policy in a material manner, we will update the 'last modified' date at the bottom of each page and notify you that material changes have been made. Your continued use of the Service after any such change constitutes your acceptance of the new Terms of Use and Privacy Policy. If you do not agree to any of these terms or any future Terms of Use or Privacy Policy terms, do not use or access (or continue to access) the Service.
          </li>
        </ol>
        <p><strong>4. COMPANY SERVICES AND LICENSE</strong></p>
        <ol>
          <li>
            License to Use the Service. All right, title, and interest in and to the Services (excluding Content provided by users) is and will remain the exclusive property of ICOToday and its licensors. The Services are protected by copyright, trademark, and other laws of both the United States and foreign countries. Except as expressly provided herein, nothing in this Agreement gives you a right to use the ICOToday name or any of the ICOToday trademarks, logos, domain names or other distinctive brand features. Subject to your acceptance of this Agreement, ICOToday grants to you a worldwide, non-assignable, non-exclusive, non-transferable, revocable limited license to use the Services and related software and to display any non-confidential results of such Services anywhere on the rest of the web, provided that you:
          </li>
          <li>do not use the license to engage in any commercial activity;</li>
          <li>do not modify the content, except as described below;</li>
          <li>attribute ICOToday with a human and machine-followable link (an anchor tag) linking back to the page displaying the original source of the Content on ICOToday;</li>
          <li>update a particular piece of Content to the latest version on ICOToday; and</li>
          <li>delete Content that has been deleted on ICOToday.</li>
          <li>No Claim to Any Rights in Your Information. We will not claim any ownership interest in the Content provided by you to us solely because you have provided it, although we will claim a license sufficient to display such items through ICOToday.</li>
          <li>
            Company Will Display Content and Allow Communications Based on Filters. When you create an account with ICOToday, and at any time thereafter, you are able to set a variety of filters that are intended to control who can see your information and what information you will be shown. We will not intentionally violate those filters, although you must recognize that we cannot guarantee that there will never be a software bug or a hacker attack that will allow unauthorized viewing of material or unsolicited contacts to occur.
          </li>
        </ol>
        <p><strong>5. RESERVATION OF THE COMPANY'S RIGHTS</strong></p>
        <ol>
          <li>
            Right to Control Content. ICOToday may, but is not required to, monitor or control the Content posted via the Services. Our failure to exercise this right does not give you any right to make a claim against ICOToday. Any Content that has been uploaded through the Services may be deleted at any time without notice to you.
          </li>
          <li>Right to Discontinue the Services. ICOToday reserves the right to discontinue the Services or to change the Services in any way and at any time, with or without notice to you, without liability.</li>
          <li>
            Right to Terminate User Access. ICOToday reserves the right to terminate your access to the Services without notice and, if you violate this Agreement, to pursue other remedies at law or in equity. We may delete your account for any reason, and if we delete your account you will lose all access to any information, connections or other features that may have been associated with your account.
          </li>
          <li>
            Right to Refuse or Cancel Registration. The Company has the right to refuse registration of or cancel your user account in its discretion for any reason. In addition, the Company reserves the right at all times (but will not have an obligation) to remove or refuse to distribute any Content on the Services and to terminate users and/or reclaim usernames. We also reserve the right to access, read, preserve, and disclose any information as we reasonably believe is necessary to (i) satisfy any applicable law, regulation, legal process or governmental request, (ii) enforce this Agreement (including investigation of potential violations hereof), (iii) detect, prevent or otherwise address fraud, security or technical issues, (iv) respond to user support requests or (v) protect the rights, property or safety of ICOToday, its users and the public.
          </li>
          <li>
            User Acknowledgement. Without limiting the generality of the foregoing, you specifically acknowledge that the Company is exempt from liability to any person for any claim based upon its termination of an account or disabling of access to or removal of any Content, including material it believes, in its sole discretion to violate this Agreement, regardless of whether the material ultimately is determined to be infringing or otherwise prohibited, and regardless of whether such termination or disabling has the effect of reducing the value of any Content or opportunities that might otherwise have been available to you. By using the Services, you agree that notice to you through an email to the email address you provided in your profile constitutes notification of any removal or disabling if such notice is required.
          </li>
          <li>
            Comments, Feedback, Suggestions, Ideas, And Other Submissions. The Services may invite you to chat or participate in blogs, message boards, and other functionality and may provide you with the opportunity to create, submit, post, transmit, publish or distribute Content to the Company or to/via the Services. Any such material you transmit to the Company or otherwise through the Services will be treated as non-confidential and non-proprietary. All comments, feedback, suggestions, ideas, forum posts and other submissions disclosed, submitted or offered to the Company in connection with the use of the Services or otherwise, and any chat, blog, message board, online forum, text, email or other communication with the Company, shall deemed to have been licensed to the Company on a nonexclusive, worldwide, royalty-free, perpetual basis. For more information, see our Privacy Policy.
          </li>
        </ol>
        <p><strong>6. Tokens</strong></p>
        <p>Ownership</p>
        <p>
          Owning ICOCoin tokens does not in any way grant their holder any ownership or right to property in ICOCoins or on the ICOToday platform or that of any other related company. While the community's opinions and feedback may be taken into account, ICOCoin tokens do not give any right to participate in decision making or any direction of business development related to the ICOToday platform.</p>
        <p>Absence of guarantees of income or profit</p>
        <p>
          There is no guarantee that ICOCoin tokens will grow in value. If it happens, there are no guarantees that the rate of ICOCoins will not decrease, including significantly, due to some unforeseen events, or events over which the developers have no control, or because of force majeure circumstances.</p>
        <p>Risks associated with Ethereum</p>
        <p>Some ICOCoin tokens can be issued on the Ethereum blockchain. Therefore, any failure or malfunctioning of the Ethereum protocol may lead to the trading network of ICOCoin tokens working unexpectedly.</p>
        <p>Regulatory uncertainty</p>
        <p>
          Blockchain technologies are subject to supervision and control by various regulatory bodies around the world. ICOCoin tokens may fall under one or more requests or actions on their part, including but not limited to restrictions imposed on the use or possession of digital tokens such as ICOCoins, which may slow or limit the functionality or repurchase of ICOCoin tokens in the future.</p>
        <p>By sending cryptocurrency to purchase ICOCoin tokens from us, you represent and warrant that:</p>
        <p>Your purchase of ICOCoin tokens complies with applicable laws and regulations in your jurisdiction, including, but not limited to,</p>
        <p>(i) legal capacity and any other threshold requirements in your jurisdiction for the purchase of the ICOCoin tokens and entering into contracts with the ICOToday,</p>
        <p>(ii) any foreign exchange or regulatory restrictions applicable to such purchase, and</p>
        <p>(iii) any governmental or other consents that may need to be obtained;</p>
        <p>(b) You will comply with any applicable tax obligations in your jurisdiction arising from your purchase of ICOCoin tokens; and</p>
        <p>© You are not a citizen or resident of a geographic area in which acceptance of delivery of the ICOCoin tokens is prohibited by applicable law, decree, regulation, treaty, or administrative act.</p>
        <p>The regulatory status of the ICOCoin tokens and distributed ledger technology is unclear or</p>
        <p>unsettled in many jurisdictions. It is difficult to predict how or whether regulatory agencies may apply existing regulation with respect to such technology and its applications, including the ICOCoin tokens. It is likewise difficult to predict how or whether legislatures or</p>
        <p>regulatory agencies may implement changes to law and regulation affecting distributed ledger technology and its applications, including ICOCoin tokens. Regulatory actions</p>
        <p>could negatively impact the ICOCoin tokens in various ways, including, for purposes</p>
        <p>
          of illustration only, through a determination that the purchase, sale and delivery of the ICOCoin tokens constitutes unlawful activity or that the ICOCoin tokens are a regulated instrument that require registration or licensing of those instruments or some or all of the parties involved in the purchase, sale and delivery thereof. ICOToday may cease operations in a jurisdiction in the event that regulatory actions, or changes to law or regulation, make it illegal to operate in such jurisdiction, or commercially undesirable to obtain the necessary regulatory approval(s) to operate in such jurisdiction.</p>
        <p>ICOCoin tokens are not an investment</p>
        <p>
          ICOCoin tokens are not official or legally binding investments of any kind. ICOCoin digital tokens are designed to be used inside KIСKIСO to pay for the launch of crowdfunding projects, to purchase various attributes for crowdfunding projects, and for other internal processes and payments within the infrastructure of the ICOToday. In case of unforeseen circumstances, the objectives stated in this document may be changed. Despite the fact that we intend to reach all goals described in this document, all persons and parties involved in the purchase of ICOCoin tokens do so at their own risk.</p>
        <p>Quantum computers</p>
        <p>Technical innovations, like the development of quantum computers, may pose a danger to cryptocurrencies, including ICOCoin tokens.</p>
        <p>Risk of losing funds</p>
        <p>Funds collected in fundraising are in no way insured. If they are lost or lose their value, there is no private or public insurance representative that buyers can reach out to.</p>
        <p>Returning funds</p>
        <p>
          If a campaign does not end successfully, is canceled by its Project creator or moderators, the funds are returned to the wallets of those users who transferred funds to the wallet of the smart campaign. Fees charged by ICOToday are non-refundable even if a campaign does not end successfully.</p>
        <p>Risks of using new technologies</p>
        <p>
          ICOCoin tokens are a new and relatively untested technology. In addition to the risks mentioned in this document, there are certain additional risks that the team of the ICOToday platform cannot foresee. These risks may manifest themselves in other forms of risk than those specified herein.</p>
        <p>Crowdinvesting</p>
        <p>
          The ICOToday platform disclaims any and all responsibility or liability in relation to any obligations made by Project creator of crowdinvesting campaigns to Backers who bought their digital tokens on the ICOToday platform. The ICOToday is not a part of a contract between Project creator of crowdinvesting campaigns and their Backers… The function of the ICOToday platform is only to provide online software fundraising tools to individuals and entities that wish to raise cryptocurrencies for causes and projects they care about. The Project creator is solely responsible for fulfilling the promises made in their project.</p>
        <p><strong>7. LIMITS ON THE COMPANY'S OBLIGATIONS</strong></p>
        <ol>
          <li>We are not obligated to introduce you to any companies or Investor.</li>
          <li>Verifying Due Diligence. We are not responsible for doing diligence on the companies, Investors, or other users you meet through ICOToday or verifying any representations, materials or other information provided by companies, Investors, or other users to you.</li>
          <li>Verifying Accredited Investor Status. We are not responsible for verifying that that any Investor is accredited.</li>
          <li>
            No Recommendations. We do not recommend any startups for investment, endorse their fitness for investment or verify or claim the accuracy of information provided by startups on the Site or in our emails. In particular, we do not act as an investment adviser to any Investor(s) and no part of this Site is intended to constitute investment advice.
          </li>
          <li>Client Confidentiality. We are not obligated to maintain the confidentiality of any Content you give us, other than Locked Information, and with respect to Locked Information, we are not obligated to protect it other than by designating it as such.</li>
          <li>
            Intellectual Property Rights. The Company has no obligation to monitor or enforce any intellectual property rights that may be associated with Content you provide to us, but the Company does have the right to enforce such rights through any means it sees fit, including bringing and controlling actions on your behalf.
          </li>
          <li>Business Opportunities. In the event that the Company invests in any business, we are not obligated to make that investment opportunity available to anyone else.</li>
          <li>
            No Endorsement of Content. The Company does not control or endorse the Content, messages or information found in the Services or external websites that may be linked to or from ICOToday and, therefore, the Company specifically disclaims any responsibility with regard thereto.
          </li>
          <li>
            No Obligation to Display Content. The Company has no obligation to accept, display, review, verify, monitor or maintain any Content submitted by users, user forum posts, commentary, ratings or compliments (&quot;Comments&quot;). We have the right to delete Content or Comments from the Services without notice for any reason at any time. The Company may move, re-format, edit, alter, distort, remove or refuse to exploit Content or Comments without notice to you and without liability. Notwithstanding the forgoing rights, the Company reserves the right to treat Content provided by users and Comments as content stored at the direction of users for which the Company will not exercise editorial control except as required to enforce the rights of third parties and applicable Content restrictions when violations are brought to the Company's attention.
          </li>
          <li>
            Verifying Advertisement Accuracy. The Services may contain or deliver advertising and sponsorships. Advertisers and sponsors are responsible for ensuring that material submitted for inclusion is accurate and complies with applicable laws. We are not responsible for the illegality or any error, inaccuracy or problem in an advertiser's or sponsor's Content.
          </li>
        </ol>
        <p><strong>7. COPYRIGHT POLICY</strong></p>
        <ol>
          <li>
            ICOToday respects the intellectual property rights of others and expects users of the Services to do the same. We will respond to notices of alleged copyright infringement that comply with applicable law and are properly provided to us. The Digital Millennium Copyright Act (&quot;DMCA&quot;) provides recourse to copyright owners who believe that their rights under the U.S. Copyright Act have been infringed by acts of third parties over the Internet.
          </li>
          <li>
            If you believe that your copyrighted work has been copied without your authorization and is available on or in the Services in a way that may constitute copyright infringement, or if you believe that any material on the Services violates this Agreement or your intellectual property rights, please notify the Company as soon as possible by sending an email to <a
            href="/cdn-cgi/l/email-protection#4b3f2e2a260b0208041f242f2a32652224"><span class="__cf_email__" data-cfemail="720617131f323b313d261d16130b5c1b1d">[email&#160;protected]</span></a>, or by mailing a letter to the ICOToday.iopyright Agent (listed below) containing the following information in accordance with the DMCA: (i) identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material; (ii) identification of the copyrighted work claimed to have been infringed; (iii) your contact information, including your address, telephone number, and an email address; (iv) a statement by you that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent or the law; (v) a statement that the information in the notification is accurate, and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner; and (vi) a physical or electronic signature of the copyright owner or a person authorized to act on their behalf.
          </li>
          <li>Our ICOToday copyright Agent for notice of alleged copyright infringement or other legal notices regarding Content appearing on the Services is:</li>
          <li>What'sPoppin LLC</li>
          <li>Attn: Copyright</li>
          <li>1200 Jefferson ave</li>
          <li>Woodlyn, PA 19094</li>
          <li>Email: <a href="/cdn-cgi/l/email-protection#215544404c6168626e754e4540580f484e"><span class="__cf_email__" data-cfemail="0c78696d614c454f435863686d75226563">[email&#160;protected]</span></a></li>
          <li></li>
          <li>Please note that in addition to being forwarded to the person who provided the allegedly illegal content, we may send a copy of your notice (with your personal information removed) to <a href="https://www.chillingeffects.org/">Chilling Effects</a>
            for publication and/or annotation. You can see an <a href="https://www.chillingeffects.org/fairuse/notice.cgi?NoticeID=16887">example of such a publication</a>. A link to your published notice will be displayed on ICOToday in place of the removed Content.
          </li>
          <li>We reserve the right to remove Content alleged to be infringing or otherwise illegal without prior notice and at our sole discretion. In appropriate circumstances, ICOToday will also terminate a user's account if the user is determined to be a repeat infringer.</li>
        </ol>
        <p><strong>8. TERM AND TERMINATION</strong></p>
        <p>
          Unless terminated by the Company, this Agreement will remain in full force and effect while you use any of the Services. Subject to the last sentence of this Section VIII, you may terminate this Agreement at any time by deleting all Content you have provided to ICOToday and ceasing to use the Services. The Company may terminate this Agreement at any time, particularly if you are suspected of violating any provision of this Agreement. Upon termination of this Agreement for any reason, you shall destroy and remove from all computers, and other storage media all copies of any intellectual property owned by the Company or any other user of the Services that you acquired via use of the Services. Your representations in this Agreement and the provisions of Section II (User Obligations) and any other provision of this Agreement which by their nature are designed to survive termination shall survive any termination or expiration of this Agreement.</p>
        <p><strong>9. DISCLAIMERS; LIMITATIONS; WAIVERS OF LIABILITY</strong></p>
        <ol>
          <li>
            YOU EXPRESSLY AGREE THAT ACCESS TO AND USE OF THE SERVICES IS AT YOUR SOLE RISK AND IS PROVIDED ON AN &quot;AS IS&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF TITLE OR IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE (EXCEPT ONLY TO THE EXTENT PROHIBITED UNDER THE LAWS APPLICABLE TO TERMS OF SERVICE WITH ANY LEGALLY REQUIRED WARRANTY PERIOD TO THE SHORTER OF THIRTY DAYS FROM FIRST USE OR THE MINIMUM PERIOD REQUIRED). NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM COMPANY OR THROUGH THE SERVICE WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN. WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ITS AFFILIATES OR SUBSIDIARIES, OR ANY OF THEIR DIRECTORS, EMPLOYEES, AGENTS, ATTORNEYS, THIRD-PARTY CONTENT PROVIDERS, DISTRIBUTORS, LICENSEES OR LICENSORS (COLLECTIVELY, &quot;COMPANY PARTIES&quot;) WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. ANY CONTENT DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS DOWNLOADED AT YOUR OWN RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR LOSS OF DATA THAT RESULTS FROM SUCH DOWNLOAD OR YOUR USE OF THE SERVICE. COMPANY DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICE OR ANY HYPERLINKED WEBSITE OR SERVICE, AND COMPANY WILL NOT BE A PARTY TO OR IN ANY WAY MONITOR ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
          </li>
          <li>
            TO THE FULLEST EXTENT PERMITTED BY LAW, THE DISCLAIMERS OF LIABILITY CONTAINED HEREIN APPLY TO ANY AND ALL DAMAGES OR INJURY WHATSOEVER CAUSED BY OR RELATED TO USE OF, OR INABILITY TO USE, THE SERVICES UNDER ANY CAUSE OR ACTION WHATSOEVER OF ANY JURISDICTION, INCLUDING, WITHOUT LIMITATION, ACTIONS FOR BREACH OF WARRANTY, BREACH OF CONTRACT OR TORT AND THAT THE COMPANY PARTIES SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES IN ANY WAY WHATSOEVER ARISING OUT OF THE USE OF, OR INABILITY TO USE, THE SERVICES. YOU FURTHER SPECIFICALLY ACKNOWLEDGE THAT THE COMPANY PARTIES ARE NOT LIABLE, AND YOU AGREE NOT TO SEEK TO HOLD THE COMPANY PARTIES LIABLE, FOR THE CONDUCT OF THIRD PARTIES, INCLUDING OTHER USERS OF THE SERVICES AND OPERATORS OF EXTERNAL WEBSITES, AND THAT THE RISK OF THE SERVICES AND EXTERNAL WEBSITES AND OF INJURY FROM THE FOREGOING RESTS ENTIRELY WITH YOU.
          </li>
          <li>
            THE COMPANY IS NOT RESPONSIBLE FOR ANY TECHNICAL MALFUNCTION OR OTHER PROBLEMS OF ANY TELEPHONE NETWORK OR SERVICE, COMPUTER SYSTEMS, SERVERS OR PROVIDERS, COMPUTER OR MOBILE PHONE EQUIPMENT, SOFTWARE, FAILURE OF EMAIL OR MEDIA PLAYERS ON ACCOUNT OF TECHNICAL PROBLEMS OR TRAFFIC CONGESTION ON THE INTERNET OR AT ANY WEBSITE OR COMBINATION THEREOF, INCLUDING INJURY OR DAMAGE TO YOUR OR TO ANY OTHER PERSON'S COMPUTER, MOBILE PHONE OR OTHER HARDWARE OR SOFTWARE, RELATED TO OR RESULTING FROM USING OR DOWNLOADING MATERIALS IN CONNECTION WITH THE WEB AND/OR IN CONNECTION WITH THE SERVICES, INCLUDING ANY MOBILE SOFTWARE. UNDER NO CIRCUMSTANCES WILL THE COMPANY BE RESPONSIBLE FOR ANY LOSS OR DAMAGE, INCLUDING ANY LOSS OR DAMAGE TO ANY CONTENT OR PERSONAL INJURY OR DEATH, RESULTING FROM ANYONE'S USE OF THE SERVICES, ANY CONTENT OR THIRD PARTY APPLICATIONS, SOFTWARE OR CONTENT POSTED ON OR THROUGH THE SERVICES OR TRANSMITTED TO USERS OR ANY INTERACTIONS BETWEEN USERS OF THE SERVICES, WHETHER ONLINE OR OFFLINE.
          </li>
          <li>
            WE MAKE NO WARRANTY AND DISCLAIM ALL RESPONSIBILITY AND LIABILITY FOR THE COMPLETENESS, ACCURACY, AVAILABILITY, TIMELINESS, SECURITY OR RELIABILITY OF THE SERVICES OR ANY CONTENT THEREON OR ANY CONTENT YOU RECEIVE AS A RESULT OF YOUR RELATIONSHIP WITH ICOToday. ICOToday WILL NOT BE RESPONSIBLE OR LIABLE FOR ANY HARM TO YOUR COMPUTER SYSTEM, LOSS OF DATA OR OTHER HARM THAT RESULTS FROM YOUR ACCESS TO OR USE OF THE SERVICES OR ANY CONTENT. YOU ALSO AGREE THAT ICOToday HAS NO RESPONSIBILITY OR LIABILITY FOR THE DELETION OF, OR THE FAILURE TO STORE OR TO TRANSMIT, ANY CONTENT AND OTHER COMMUNICATIONS MAINTAINED BY THE SERVICES. WE MAKE NO WARRANTY THAT THE SERVICES WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE OR ERROR-FREE BASIS. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM ICOToday OR THROUGH THE SERVICES, WILL CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN.
          </li>
          <li>UNDER NO CIRCUMSTANCES WILL ANY COMPANY PERSON BE LIABLE TO YOU FOR MORE THAN THE AMOUNT YOU HAVE PAID THE COMPANY IN THE NINETY (90) DAYS IMMEDIATELY PRECEDING THE DATE ON WHICH YOU FIRST ASSERT ANY SUCH CLAIM.</li>
          <li>
            To the extent any provision(s) relating to arbitration, disclaimer, waiver of liability or any other rights and obligations set forth herein is not permissible or enforceable under foreign laws as applied to users from such foreign jurisdictions, each such provision shall be deemed removed and invalid, but all remaining provisions shall be in full force and effect.
          </li>
        </ol>
        <p><strong>10. DISPUTES WITH OTHERS</strong></p>
        <p>
          We reserve the right, but have no obligation, to monitor and/or manage disputes between you and other users of the Services. If you have a dispute with other users, you release the Company and hereby agree to indemnify the Company from claims, demands, and damages (actual and consequential) of every kind and nature, known and unknown, arising out of, or in any way connected with, such a dispute.</p>
        <p><strong>11. ARBITRATION</strong></p>
        <ol>
          <li>
            Informal Negotiations. To expedite resolution and control the cost of any dispute, controversy or claim related to this Agreement (&quot;Dispute&quot;), you and the Company agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating any arbitration. Such informal negotiations commence upon written notice from one person to the other. You will send your notice to 548 Market St., San Francisco, CA 94104-5401, ATTENTION: LEGAL DEPARTMENT. The Company will send its notice to your address as set forth in the books and records of the Company, or if no such address has been provided, by email to the email address provided by you in connection with your use of the Services.
          </li>
          <li>
            Binding Arbitration at Option of Either Party. If you and the Company are unable to resolve a Dispute through informal negotiations, either you or the Company may elect to have the Dispute (except those Disputes expressly excluded below) finally and exclusively resolved by confidential binding arbitration. Any election to arbitrate by one party shall be final and binding on the other. YOU UNDERSTAND THAT ABSENT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association (&quot;AAA&quot;) and, where appropriate, the AAA's Supplementary Procedures for Consumer Related Disputes (&quot;AAA Consumer Rules&quot;), both of which are available at the <a
            href="https://www.adr.org/">AAA website</a>. The determination of whether a Dispute is subject to arbitration shall be governed by the Federal Arbitration Act and determined by a court of proper jurisdiction rather than an arbitrator. Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Rules and, where appropriate, limited by the AAA Consumer Rules. If such costs are determined by the arbitrator to be excessive, the Company will pay all arbitration fees and expenses. The arbitration may be conducted, at the option of the claimant, either in person or by video conference. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by a party. The arbitrator must follow applicable law, and any award may be challenged within a reasonable period of time (not to exceed 30 days) if the arbitrator fails to do so. Except as otherwise provided in this Agreement, you and the Company may litigate in court to compel arbitration, stay proceedings pending arbitration or to confirm, modify, vacate or enter judgment on the award entered by the arbitrator. Judgment upon any award rendered by the arbitrator(s) may be entered and enforcement obtained thereon in any court having jurisdiction. All arbitration proceedings shall be closed to the public and confidential and all records relating thereto shall be permanently sealed, except as necessary to obtain court confirmation of the arbitration award. Each party shall have the right to participate by video conference in order to minimize travel and expense burdens. Subject to Section IX of this Agreement (Disclaimers; Limitations; Waivers Of Liability), the arbitrator shall have authority to grant any form of appropriate relief, whether legal or equitable in nature, including specific performance.
          </li>
          <li>
            Restrictions/No Class Actions. You and the Company agree that any arbitration shall be limited to the Dispute between the Company and you individually. To the full extent permitted by law, (1) no arbitration shall be joined with any other; (2) no Dispute between you and the Company is to be arbitrated on a class-action basis or will utilize class action procedures; and (3) you may not bring any Dispute in a purported representative capacity on behalf of the general public, other users of the Services or any other persons.
          </li>
          <li>
            Exceptions to Informal Negotiations and Arbitration. You and the Company agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (1) any Disputes seeking to enforce or protect, or concerning the validity of, any of your or the Company's intellectual property rights; (2) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy or unauthorized use; and (3) any claim for injunctive relief.
          </li>
        </ol>
        <p><strong>12. MISCELLANEOUS</strong></p>
        <ol>
          <li>Availability of Services.</li>
          <li>
            The Company operates and controls the Services from its offices in the United States. The Company makes no representation that the Services are appropriate or available in other locations. The information provided on or through the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject the Company to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so at their own risk and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
          </li>
          <li>
            Certain information provided by companies or Investors may be subject to U.S. export controls. Thus, no such materials may be downloaded, exported or re-exported (i) into (or to a national or resident of) Cuba, Iraq, North Korea, Iran, Syria or any other country to which the United States has embargoed goods; or (ii) to anyone on the U.S. Treasury Department's Specially Designated Nationals List or the U.S. Commerce Department's Denied Persons List. By downloading any material available through the Services, you represent and warrant that you are not located in, under the control of, or a national or resident of, any such country or on any such list. The parties specifically disclaim application of the United Nations Convention on Contracts for the International Sale of Goods.
          </li>
          <li>
            Injunctive Relief. You acknowledge that the rights granted and obligations made hereunder to the Company are of a unique and irreplaceable nature, the loss of which shall irreparably harm the Company and which cannot be replaced by monetary damages alone, so that the Company shall be entitled to injunctive or other equitable relief (without the obligations of posting any bond or surety) in the event of any breach or anticipatory breach by you. You irrevocably waive all rights to seek injunctive or other equitable relief and agree to limit your claims to claims for monetary damages (if any).
          </li>
          <li>Amendments to this Agreement. We may amend this Agreement at any time in our sole discretion, effective upon posting the amended Terms of Service at the domain of <a href="http://www.ICOToday.io">www.ICOToday.io</a>
            where the prior version of this Agreement was posted or by communicating these changes through any written or other contact method we have established with you. Your use of the Services following the date on which such amended Terms are published will constitute consent to such amendments. Neither the course of conduct between the parties nor trade practice will act to modify this Agreement.
          </li>
          <li>
            Venue and Governing Law. This Agreement and all aspects of the Services shall be governed by and construed in accordance with the internal laws of the United States and the State of California governing contracts entered into and to be fully performed in California (i.e., without regard to conflict of law's provisions) regardless of your location except that Section XI (Arbitration) of this Agreement shall be governed by the Federal Arbitration Act. For the purpose of any judicial proceeding to enforce an arbitration award or incidental to such arbitration or to compel arbitration, or if for any reason a claim proceeds in court rather than in arbitration, you hereby submit to the non-exclusive jurisdiction of the state and Federal courts sitting in San Francisco County, California, and agree that service of process in such arbitration or court proceedings shall be satisfactorily made upon a party if sent by certified, express or registered mail addressed to it at the address set forth in the books and records of the Company, or if no such address has been provided, by email to the email address provided by the relevant party to the Company in connection with its use of the Services. With respect to any Disputes not subject to informal dispute resolution or arbitration (as set forth above), you agree not to commence or prosecute any action in connection therewith other than in the state and federal courts located in San Francisco County, California, and you hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to, venue and jurisdiction in the state and federal courts located in San Francisco County, California. To the extent non-U.S. laws mandate a different approach with respect to governing law, venue, statute of limitation, and dispute resolution method with respect to certain non-U.S. persons, each such required standard shall be applied, but all other provisions under this section shall remain in full force.
          </li>
          <li>Waiver and Severability.</li>
          <li>
            The failure of the Company to require or enforce strict performance by you of any provision of this Agreement or to exercise any right under this Agreement shall not be construed as a waiver or relinquishment of the Company's right to assert or rely upon any such provision or right in that or any other instance. In fact, the Company may choose to enforce certain portions of this Agreement more strictly or to interpret certain provisions more strictly against certain users than it does against users in general, and such disparate treatment shall not be grounds for failing to comply with all this Agreement as so interpreted.
          </li>
          <li>
            You and the Company agree that if any portion of this Agreement, except any portion of Section XI.b (Binding Arbitration at Option of Either Party) is found illegal or unenforceable, in whole or in part by any court of competent jurisdiction, such provision shall, as to such jurisdiction, be ineffective to the extent of such determination of invalidity or unenforceability without affecting the validity or enforceability thereof in any other manner or jurisdiction and without affecting the remaining provisions of this Agreement, which shall continue to be in full force and effect. If Section XI.b is found to be illegal or unenforceable, then neither you nor the Company will elect to arbitrate any Dispute falling within that portion of Section XI.b found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within San Francisco County, California, and you and the Company agree to submit to the personal jurisdiction of that court.
          </li>
          <li>
            Section Headings; Verification Documentation; Waiver of Execution Defenses. The section headings used herein are for convenience only and shall not be given any legal import. Upon the Company's request, you will furnish the Company any documentation, substantiation or releases necessary to verify your compliance with this Agreement. You agree that this Agreement will not be construed against the Company by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of this Agreement and the lack of signing by the parties hereto to execute this Agreement.
          </li>
          <li>Prohibition of Assignment. You may not assign this Agreement without the Company's prior written consent.</li>
          <li>
            Entire Agreement. This Agreement contains the entire understanding of you and the Company, and supersedes all prior understandings of the parties hereto relating to the subject matter hereof, and cannot be changed or modified by you except as posted on the Services by the Company. No waiver by either party of any breach or default hereunder shall be deemed to be a waiver of any preceding or subsequent breach or default.
          </li>
          <li>
            Statute of Limitations. You and the Company both agree that regardless of any statute or law to the contrary but only to the extent permissible by law in each relevant jurisdiction, any claim or cause of action arising out of or related to use of the Services, this Agreement or our Privacy Policy must be filed within ONE (1) YEAR after such claim or cause of action arose or be forever barred.
          </li>
          <li>
            No Third Party Beneficiaries. This Agreement is between you and the Company. No user has any rights to force the Company to enforce any rights it may have against you or any other user, except to the extent that companies may enforce their own intellectual property rights related to Content offered through the Services.
          </li>
          <li>
            Government Use. If you are a part of an agency, department or other entity of the U.S. Government (&quot;Government&quot;), the use, duplication, reproduction, release, modification, disclosure or transfer of any of our products or Services is restricted in accordance with the Federal Acquisition Regulations as applied to civilian agencies and the Defense Federal Acquisition Regulation Supplement as applied to military agencies. The Services and any related software is a &quot;commercial item,&quot; &quot;commercial computer software&quot; and &quot;commercial computer software documentation.&quot; In accordance with such provisions, any use of the Services by the Government shall be governed solely by this Agreement.
          </li>
          <li>
            California Users and Residents. Under California Civil Code Section 1789.3, California users of the Services receive the following specific consumer rights notice: &quot;The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs may be contacted in writing at 1625 North Market Blvd., Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210.&quot;
          </li>
        </ol>
        <p><strong>13. DEFINITIONS</strong></p>
        <ol>
          <li>&quot;Community Rules&quot;: Participants in the ICOToday community will not, in connection with the Services:</li>
          <li>defame, libel, disparage, threaten, harass or intimidate anyone, including by the use of offensive comments related to race, national origin, gender, sexual preference or physical handicap;</li>
          <li>use any profane, obscene, pornographic or otherwise objectionable content or language;</li>
          <li>promote or describe how to perform violence, illegal drug or substance abuse, or any other illegal activity;</li>
          <li>violate the personal, privacy, contractual, intellectual property or other rights of any person;</li>
          <li>reveal, with respect to personal or privacy rights, any personal information about another individual, including an address, phone number, email address, credit card number or other information that could be used to track, contact or impersonate that individual;</li>
          <li>violate this Agreement or any local, state, federal or non-U.S. law, rule or regulation;</li>
          <li>
            trick, defraud, deceive or mislead the Company or other users, such as by submitting false reports of abuse or misconduct to the Company's support services, disguising the source of materials or other information you submit to the Services or using tools which anonymize your Internet protocol address to access the Services;
          </li>
          <li>
            interfere with or disrupt (or attempt to interfere with or disrupt) access and enjoyment of the Services of other users or any host or network, including, without limitation, creating or transmitting unwanted electronic communications such as &quot;spam&quot; to other users, overloading, flooding or mail-bombing the Services, or scripting the creation of Content in such a manner as to interfere with or create an undue burden on the Services;
          </li>
          <li>disparage, tarnish or otherwise harm, in the Company's opinion, the Company and/or the Services;</li>
          <li>upload or transmit (or attempt to upload or transmit) any material that acts as a passive or active information collection or transmission mechanism, such as viruses, worms, Trojan horses, spyware, adware or any other malicious or invasive code or program;</li>
          <li>reverse engineer, decompile, reverse assemble, modify or attempt to discover or copy any software, source code or structure that the Services utilize to generate web pages or any software or other products or processes accessible through the Services;</li>
          <li>
            access or search (or attempt to access or search) the Services by any means, such as any automated system or unauthorized script or software, other than currently available, published interfaces provide by ICOToday, unless you have been specifically allowed to do so in a separate Agreement with ICOToday (note crawling the Services is permissible in accordance with this Agreement, but scraping the Services is expressly prohibited without the prior consent of ICOToday);
          </li>
          <li>
            remove, obscure or change any copyright, trademark, hyperlink or other proprietary rights notices contained in or on the Services or any website on which the Services are offered or on a third party website and/or Company software on which Company code is embeddable or embedded on;
          </li>
          <li>remove, obscure or change any notice, banner, advertisement or other branding on the Services;</li>
          <li>submit any Content or material that falsely expresses or implies that such Content or material is sponsored or endorsed by the Company;</li>
          <li>interfere with or circumvent any security feature of the Services or any feature that restricts or enforces limitations on use of or access to the Services, such as probing or scanning the vulnerability of any system, network or breach; or</li>
          <li>sell access to the Services or any part thereof other than through a mechanism approved by the Company.</li>
          <li>&quot;Content&quot; means any information, text, graphics or other materials uploaded, downloaded or otherwise appearing on the Services. You retain ownership of all Content you submit, post, display or otherwise make available on the Services.</li>
          <li>&quot;Locked Information&quot; means, all information acquired by, through or in connection with your use of the Services or the Site that was provided by another person and which is identified as &quot;Locked&quot; in any manner reasonably designed to identify the character of such information.</li>
          <li>&quot;Qualified Purchaser&quot; is defined under Section 2(a)(51) of the Investment Company Act of 1940.</li>
          <li>In particular, Qualified Purchasers include:</li>
          <li>
            any natural person (including any person who holds a joint, community property, or other similar shared ownership interest in an issuer that is excepted under section 3©(7) of the Investment Company Act with that person's Qualified Purchaser spouse) who owns not less than $ 5,000,000 in &quot;Investments&quot; (as defined below);
          </li>
          <li>
            any company that is wholly owned directly or indirectly by or for two or more individuals who are related as siblings, spouses (including former spouses) or direct lineal descendents by birth or adoption, spouses of such persons, the estates of such persons, or foundations, charitable organizations or trusts established by or for the benefit of such persons, that owns not less than $ 5,000,000 in Investments;
          </li>
          <li>
            any trust that is not covered by clause (2) and that was not formed for the specific purpose of acquiring the securities offered, as to which the trustee or other person authorized to make decisions with respect to the trust, and each settlor or other person who has contributed assets to the trust, is a person described in clause (1), (2), or (4);
          </li>
          <li>any person, acting for its own account or the accounts of other qualified purchasers, who in the aggregate owns and invests on a discretionary basis, not less than $ 25,000,000 in Investments;</li>
          <li>any company (regardless of the amount of such company's Investments) beneficially owned exclusively by Qualified Purchasers or by a company's &quot;knowledgeable employees&quot; (as defined under Rule 3c-54 of the Investment Company Act);</li>
          <li>
            any company that, but for the exceptions provided for in Sections 3©(1) or 3©(7) under the Investment Company Act, would be an investment company (hereafter in this paragraph referred to as an &quot;excepted investment company&quot;), provided that all beneficial owners of its outstanding securities (other than short-term paper), determined in accordance with Section 3©(1)(A) thereunder, that acquired such securities on or before April 30, 1996 (hereafter in this paragraph referred to as &quot;pre-amendment beneficial owners&quot;), and all pre-amendment beneficial owners of the outstanding securities (other than short-term paper) or any excepted investment company that, directly or indirectly, owns any outstanding securities of such excepted investment company, have consented to its treatment as a qualified purchaser;
          </li>
          <li>
            any qualified institutional buyer as defined in Rule 144A under the Securities Act, acting for its own account, the account of another qualified institutional buyer, or the account of a qualified purchaser, provided that (1) a dealer described in paragraph (a)(1)(ii) of Rule 144A shall own and invest on a discretionary basis at least $25,000,000 in securities of issuers that are not affiliated persons of the dealer; and (2) a plan referred to in paragraph (a)(1)(D) or (a)(1)(E) of Rule 144A, or a trust fund referred to in paragraph (a)(1)(F) of Rule 144A that holds the assets of such a plan, will not be deemed to be acting for its own account if investment decisions with respect to the plan are made by the beneficiaries of the plan, except with respect to investment decisions made solely by the fiduciary, trustee or sponsor of such plan; or
          </li>
          <li>
            any person (&quot;Transferee&quot;) who acquires interests from a person (&quot;Transferor&quot;) that is (or was) a Qualified Purchaser other than the Company, provided that the Transferee is: (i) the estate of the Transferor; (ii) a person who acquires the interests as a gift or bequest pursuant to an agreement relating to a legal separation or divorce; or (iii) a company established by the Transferor exclusively for the benefit of (or owned exclusively by) the Transferor and the persons specified in this paragraph.
          </li>
          <li>
            The term Qualified Purchaser does not include a company that, but for the exceptions provided for in paragraph (1) or (7) of section 3© of the Investment Company Act, would be an investment company (here after in this paragraph referred to as an ''excepted investment company''), unless all beneficial owners of its outstanding securities (other than short-term paper), determined in accordance with section 3©(1)(A), that acquired such securities on or before April 30, 1996 (hereafter in this paragraph referred to as ''pre-amendment beneficial owners''), and all pre-amendment beneficial owners of the outstanding securities (other than short-term paper) of any excepted investment company that, directly or indirectly, owns any outstanding securities of such excepted investment company, have consented to its treatment as a qualified purchaser. Unanimous consent of all trustees, directors, or general partners of a company or trust referred to in clause (2) or (3) of subparagraph (i) shall constitute consent for purposes of this subparagraph.
          </li>
          <li>For the purposes of the definition of Qualified Purchaser, the term Investment (as defined under Rule 2a51-1 of the Investment Company Act) means:</li>
          <li>
            securities (as defined by section 2(a)(1) of the Securities Act of 1933), other than securities of an issuer that controls, is controlled by, or is under common control with, the prospective qualified purchaser that owns such securities, unless the issuer of such securities is: (i) an investment vehicle; (ii) a public company; or (iii) a company with shareholders' equity of not less than $50 million (determined in accordance with generally accepted accounting principles) as reflected on the company's most recent financial statements, provided that such financial statements present the information as of a date within 16 months preceding the date on which the prospective qualified purchaser acquires the securities of a section 3©(7) company;
          </li>
          <li>real estate held for investment purposes;</li>
          <li>commodity interests held for investment purposes;</li>
          <li>physical commodities held for investment purposes;</li>
          <li>to the extent not securities, financial contracts (as such term is defined in section 3©(2)(B)(ii) of the Investment Company Act entered into for investment purposes;</li>
          <li>
            in the case of a prospective qualified purchaser that is a Section 3©(7) Company, a company that would be an investment company but for the exclusion provided by section 3©(1) of the Investment Company Act, or a commodity pool, any amounts payable to such prospective qualified purchaser pursuant to a firm agreement or similar binding commitment pursuant to which a person has agreed to acquire an interest in, or make capital contributions to, the prospective qualified purchaser upon the demand of the prospective qualified purchaser; and
          </li>
          <li>
            cash and cash equivalents (including foreign currencies) held for investment purposes. For purposes of this section, cash and cash equivalents include: (i) bank deposits, certificates of deposit, bankers' acceptances and similar bank instruments held for investment purposes; and (ii) the net cash surrender value of an insurance policy.
          </li>
        </ol>
        <p>
          The Company is an entity offering the transmission, routing or providing of connections for digital online communications, between or among points specified by a user of material of the user's choosing, without modification of the content of the material sent or received, as well as system caching, storage of material residing on a system or network at the direction of a user, and referral or linkage of users to an online location using information location tools, each through the Site located at <a
          href="https://icotoday.io/">https://ICOToday.io</a>io and any linked pages or applications owned and operated by the Company.</p>
        <p>The Services are operated and provided by What'sPoppin LLC, 1200 Jefferson ave, Woodlyn, PA 19094. If you have questions about this Agreement, please contact us.</p>
        <p>Last updated: Sep 12, 2017 · ICOToday is a trademark of What'sPoppin LLC</p>


      </div>
      <div class="col-lg-9 col-md-8" v-else-if="type==='privacy'">
        <h2 class="mb-4">Privacy Policy</h2>

        <p>
          Welcome to ICOToday, offered by What'sPoppin LLC, (&quot;Protocol,&quot; &quot;we&quot; or &quot;us&quot;). We recognize that your privacy is very important and take it seriously. This Privacy Policy describes ICOToday's policies and procedures on the collection, use and disclosure of your information when you use the services, websites, and applications offered by ICOToday (collectively, the &quot;Services&quot;). By using the Services, you consent to our use of your information in accordance with this Privacy Policy. This Privacy Policy does not apply to personal information we collect by other means (including offline) or from other sources. Capitalized terms that are not defined in this Privacy Policy have the meaning given them in our Terms of Service.</p>
        <p><strong>Information We Collect and How We Use It</strong></p>
        <p>ICOToday collects personal information to provide you with a personalized, useful and efficient experience. The categories of information we collect can include:</p>
        <p><strong>Information You Directly Provide to Us</strong></p>
        <p>
          There are many occasions when you provide information that may enable us to identify you personally while using the Services, such as when you sign up for an account, verify your identity, make an investment, provide payment instructions, fill out tax form information, provide us with access to your profiles on third party sites, enter your academic or professional experience when creating a prospective employee profile. The personal information we collect may include your email address, name, phone number, birthday, age, address, Social Security number and/or taxpayer identification number, investment objectives, investment experience, and your educational or professional history.</p>
        <p>
          We may use your email address to send you newsletters, updates about the Service, and Services-related notices, including any notices required by law, in lieu of communication by postal mail. You can control receipt of certain Services-related messages on your ICOToday Settings page. We may also use your contact information to send you marketing messages. If you do not want to receive such messages, you may opt out by following the instructions in the message. (Please note it may take up to one week to process any opt-out requests.) If you correspond with us by email, we may retain the content of your email messages, your email address and our responses.</p>
        <p>
          You also provide us information in User Content you post to the Services. Your questions, answers, and other contributions on the Services, and metadata about them (such as when you posted them), are publicly viewable on the Services, along with your name (unless the Services permit you to post anonymously). This information may be searched by search engines and be republished elsewhere on the Internet in accordance with our Terms of Service.</p>
        <p>
          If you choose to use our invitation service to invite a contact to the Services, we will ask you for that person's email address and automatically send an email invitation. ICOToday stores this information to send this email, to register your contact if your invitation is accepted, and to track the success of our invitation service.</p>
        <p><strong>Information from other sources.</strong></p>
        <p>
          We may obtain information from other sources, such as our partners who provide a joint service, third-party information providers, or through mergers and acquisitions, and combine this with information previously collected. In these cases, our Privacy Policy governs the handling of the combined personal information.</p>
        <p><strong>Information We Collect Automatically through Cookies and Other Tracking Technology</strong></p>
        <p>
          We, and our third party partners, automatically collect certain types of usage information when you visit our website, use the online Service, read our emails, or otherwise engage with us. We typically collect this information through a variety of tracking technologies, including cookies, web beacons, file information and similar technology (collectively, &quot;tracking technologies&quot;). For example, we collect information about your device and its software, such as your IP address, browser type, Internet service provider, platform type, device type and manufacturer, mobile device carrier, operating system, date and time stamp, a unique ID that allows us to uniquely identify your browser, mobile device or your account, and other such information. We also collect information about the way you use our Sites, for example, the site from which you came and the site to which you are going when you leave our website, the pages you visit, the links you click, how frequently you access the Service, whether you open emails or click the links contained in emails, whether you access the Service from multiple devices, and other actions you take on the Service. Depending on your device settings, we may also collect your geographical location data, including GPS coordinates (e.g., latitude and/or longitude) or similar information regarding the location of your mobile device, or we may be able to approximate a device's location by analyzing other information, like an IP address. We may collect analytics data, or use third-party analytics tools such as Google Analytics or Mixpanel, to help us measure traffic and usage trends for the Service and to understand more about the demographics of our users. We may also work with third party partners to employ technologies, including the application of statistical modeling tools, which attempt to recognize you across multiple devices. Although we do our best to honor the privacy preferences of our users, we are unable to respond to Do Not Track signals set by your browser at this time.</p>
        <p>
          We use or may use the data collected through tracking technologies to: (a) remember information so that you will not have to re-enter it during your visit or the next time you visit the site; (b) provide custom, personalized content and information, including targeted content and advertising; © identify you across multiple devices; (d) provide and monitor the effectiveness of our Service; (e) monitor aggregate metrics such as total number of visitors, traffic, usage, and demographic patterns on our website; (f) to verify your identify and prevent fraud or other unauthorized or illegal activity; (g) diagnose or fix technology problems; and (h) otherwise to plan for and enhance our service.</p>
        <p>
          If you would prefer not to accept cookies, most browsers will allow you to: (i) change your browser settings to notify you when you receive a cookie, which lets you choose whether or not to accept it; (ii) disable existing cookies; or (iii) set your browser to automatically reject cookies. Please note that doing so may negatively impact your experience using the Service, as some features and services on our Sites may not work properly. Depending on your mobile device and operating system, you may not be able to delete or block all cookies. You may also set your e-mail options to prevent the automatic downloading of images that may contain technologies that would allow us to know whether you have accessed our e-mail and performed certain functions with it.</p>
        <p>We and our third party partners may also use cookies and tracking technologies for advertising purposes. For more information about tracking technologies, please see &quot;Third Party Tracking and Online Advertising&quot; below.</p>
        <p><strong>How We Use Your Information</strong></p>
        <p>
          In addition to some of the specific uses of information we describe in this Privacy Policy, we may use information that we receive for the following: to deliver and improve our Services; to manage your account and provide you with customer support; to perform research and analysis about your use of the Services; to improve and develop our Services; to communicate with you; to enforce or exercise any rights in our Terms of Use; and to perform functions or services as otherwise described to you at the time of collection.</p>
        <p>
          We will retain your information for as long as your account is active or is needed to provide you the Services and may retain Data after you discontinue use of the Services. We will retain and use your information as necessary to comply with our legal obligations, to resolve disputes, and to enforce our agreements.</p>
        <p><strong>How We Share Your Information</strong></p>
        <p>We will share your personal information with third parties in the instances described below.</p>
        <p><em>Other Users.</em>
          Your name and other information you choose to add to your profile will be available for public viewing on the Service. If you are an Entrepreneur, most of your Content will be accessible to other users. You may ask us to show your information only to a select set of Investors, and we will do our best to limit disclosure to those Investors, but we cannot promise that no one else will see your information on the Site, nor do we control what users who are allowed to see your information will do with it. If you want your information to remain private, don't make it available to other users on our Site. If you are an Investor, some of your Content may not be accessible to other users, but other users may still be able to infer certain facts about your income and net worth from your qualification as an Investor on ICOToday.
        </p>
        <p><em>Partners.</em> We share your personal information with our third party partners with whom we work to provide the Service to you or to provide a joint service, such as AngelList. These partners may use your personal information as permitted in the partner's own privacy policy.
        </p>
        <p><em>Service Providers.</em>
          ICOToday may share your personal information with third parties service providers or business partners who help us deliver or improve our Service or who perform services on our behalf, such as identifying and serving targeted advertisements, processing payments and funds, providing data hosting and management services.
        </p>
        <p><em>Business Transfers.</em>
          As we develop our business, we may buy or sell businesses or assets. In the event we sell or transfer all or a portion of our business, assets, or products and services as part of a sale, divestiture, merger, acquisition, bankruptcy, dissolution or similar corporate transaction, your personal information may be transferred as part of the sale.
        </p>
        <p><em>Your Content.</em> We may share or disclose your information with your consent, such as if you choose to sign on to the Services through a third-party service. We cannot control such third parties' use of your information.</p>
        <p><em>Legal Compliance.</em>
          ICOToday may disclose your personal information if required to do so by law or subpoena or if we believe that it is reasonably necessary to comply with a law, regulation or legal request; to protect the safety of any person; to address fraud, security or technical issues; enforce our Terms of Service, or to protect ICOToday's rights or property.
        </p>
        <p><em>Anonymized or Aggregate Data.</em> We may share information with third parties in an aggregated or otherwise anonymized form that does not reasonably identify you directly as an individual.</p>
        <p><strong>Third Party Tracking and Online Advertising</strong></p>
        <p>
          We may share, or we may permit third party online advertising networks, social media companies and other third party services, to collect, information about your use of our website over time so that they may play or display ads that may be relevant to your interests on our website and Service as well as on other websites or apps, or on other devices you may use. Typically, though not always, the information we share is provided through cookies or similar tracking technologies, which recognize the device you are using and collect information, including hashed data, click stream information, browser type, time and date you visited the site, and other information. We or the online advertising networks use this information to make the advertisements you see online more relevant to your interests and to track conversions and the success of an ad campaign. As noted above, depending on your browser or mobile device, you may be able set your browser to delete or notify you of cookies and other tracking technology by actively managing the settings on your browser or mobile device. You may also be able to limit interest-based advertising through the settings on your mobile device by selecting &quot;limit ad tracking&quot; (iOS) or &quot;opt-out of interest based ads&quot; (Android). To learn more about interest-based advertising and how you may be able to opt-out of some of this advertising, you may wish to visit the Network Advertising Initiative's online resources, at <a
          href="https://www.networkadvertising.org/choices">http://www.networkadvertising.org/choices</a>, and/or the DAA's resources at <a href="https://www.aboutads.info/choices">https://www.aboutads.info/choices</a>. You may also be able to opt-out of some – but not all – interest-based ads served by mobile ad networks by visiting <a
          href="http://youradchoices.com/appchoices">http://youradchoices.com/appchoices</a> and downloading the mobile AppChoices app.</p>
        <p><strong>How We Protect Your Information</strong></p>
        <p>
          ICOToday uses commercially reasonable physical, managerial, and technical safeguards to preserve the integrity and security of your personal information. We cannot, however, ensure or warrant the security of any information you transmit to ICOToday or guarantee that your information on the Services may not be accessed, disclosed, altered, or destroyed by a breach of any of our physical, managerial, or technical safeguards.</p>
        <p>
          ICOToday cannot ensure that your Personally Identifiable Information will be protected, controlled or otherwise managed pursuant to this Privacy Policy if you share your login and password information with any third party, including any third party operating a website or providing other services.</p>
        <p>
          In the event that personal information is compromised as a result of such a breach of security, ICOToday will promptly notify those persons whose personal information has been compromised, in accordance with the notification procedures set forth in this Privacy Policy, or as otherwise required by applicable law.</p>
        <p><strong>Your Choices About Your Information</strong></p>
        <p>
          You may, of course, decline to submit Personally Identifiable Information through the Services, in which case ICOToday may not be able to provide certain services to you. In addition, you may update or correct your account information and email preferences at any time by logging into your account. If you would like us to remove your personal information from our database, please send a request to:</p>
        <p><a href="/cdn-cgi/l/email-protection#1e6a7b7f735e575d514a717a7f67307771"><span class="__cf_email__" data-cfemail="423627232f020b010d162d26233b6c2b2d">[email&#160;protected]</span></a></p>
        <p>
          We are not responsible for revising or removing your Personally Identifiable Information obtained by any third party who has previously been provided your information by us in accordance with this policy or any third party to whom you have provided such information (whether by sharing your login and password, or otherwise).</p>
        <p><strong>Children's Privacy</strong></p>
        <p>
          Protecting the privacy of young children is especially important. ICOToday does not knowingly collect or solicit personal information from anyone under the age of 13. If we become aware that we have collected personal information from a child under age 13, we will take steps to remove that information.</p>
        <p><strong>Links to Other Web Sites</strong></p>
        <p>
          This Privacy Policy applies only to the Services. The Services may contain links to other websites not operated or controlled by ICOToday. We are not responsible for the content, accuracy or opinions expressed in such websites, and such websites are not investigated, monitored or checked for accuracy or completeness by us. Please remember that when you use a link to go from the Services to another website, our Privacy Policy is no longer in effect. Your browsing and interaction on any other website, including those that have a link on our Site, is subject to that website's own rules and policies. Such third parties may use their own cookies or other methods to collect information about you.</p>
        <p><strong>Changes to Our Privacy Policy</strong></p>
        <p>
          We reserve the right, in our sole discretion, to change, modify, add, or remove portions of this Privacy Policy at any time. Any changes or updates will be effective immediately upon posting to this page. You should review this Privacy Policy regularly for changes. You can determine if changes have been made by checking the Effective Date below. Your continued use of our Site following the posting of any changes to this Privacy Policy means you consent to such changes.</p>
        <p><strong>Where We Store Your Information</strong></p>
        <p>
          The Services are maintained in the United States of America. Although we welcome users from all over the world, by accessing the Services, you consent to and authorize the export of Personally Identifiable Information to the United States and its storage and use as specified in this Privacy Policy. Note the laws of the United States might not be as comprehensive or protective as laws in the country where you live.</p>
        <p><strong>How to Contact Us</strong></p>
        <p>If you have any questions about our practices or this Privacy Policy, please contact us at <a href="/cdn-cgi/l/email-protection#2b5f4e4a466b6268647f444f4a52054244"><span class="__cf_email__" data-cfemail="5a2e3f3b371a1319150e353e3b23743335">[email&#160;protected]</span></a>, or send mail to:
        </p>
        <p>What'sPoppin LLC</p>
        <p>Attn: Privacy</p>
        <p>1200 Jefferson ave,</p>
        <p>Woodlyn, PA 19094</p>
        <p><strong>Effective Date</strong></p>
        <p>This Privacy Policy was last updated on September 11, 2017.</p>


      </div>

      <div class="col-lg-9 col-md-8" v-else-if="type==='rating'">
        <h2 class="mb-4">Analyst Rating Guidelines</h2>

        <p>
          At ICOToday, our aim is to build a community platform where investors learn from each other and other community selected analysts. Therefore, we require each analyst to submit a report with each ICO company rating. This will enable new investors from on our platform to learn the ins and outs of the ICO market, thereby making more informed decisions regarding their investments in the future. Furthermore, this policy is meant to create transparency between the experts and the community. Experts will need to diligently rate each ICO since each detailed report will be publicly viewable by other experts and investors.</p>
        <p><strong>Ratings</strong><br>
          Although each analyst will have autonomy over their rating, there will be a few major considerations that each will take into account.</p>
        <p><strong>Methodology</strong><br>
          Rating on the ICOToday platform will be a number between 1 - 100. This range will enable analysts to take into account as many factors as they so please and allow for more differentiation than a 5 point scale would allow. Moreover, ratings will not be permanent. Experts will continually update their ratings based on new information and team progress. Below are the five main considerations that each expert will take into account.
        </p>
        <p><strong>Team</strong><br>
          The team is an important aspect of any successful startup. Therefore, deep analysis and research into every member of the team will be made. Each team will be different, but our analysts will be advised to follow Y-Combinator's team analysis process in order to accurately rate each team.
        </p>
        <p><strong>Prototype or Demo</strong><br>
          A lot of companies launching ICOs have no product or prototype. This is extremely risky and leads to ICOs raising insane amounts of money with no intent to deliver a product. At ICOToday, we believe that this is unacceptable. A prototype is an important indicator of the future success of any product. Seldom are startups able to raise any funds from Venture Capitalists without proof of that they have invested a significant amount of time working on their ideas and the same should be true for ICOs. Our analysts will examine each company's prototype and rate them accordingly.
        </p>
        <p><strong>Business Model</strong><br>
          Blockchain technology has the potential to change any imaginable industry. However, the same business ideologies of the past still hold true. Our analysts will analyze the product-market fit of any company's product diligently. They will take into account the perceived market size, the competitors and more importantly, whether a token economy could work for the industry. Also, ICOToday experts will take into account the go to market strategy that each company will employ to launch their product to the masses.
        </p>
        <p><strong>Website, White Paper, Video, Legal</strong><br>
          Launching an ICO is not easy nor should it be. The standard needs to be upheld. Each company's ICO marketing material will be analyzed deeply. A company that is not able invest their time and money for a good marketing campaign for investors will not be able to convince consumers to use their product.
        </p>
      </div>

    </div>
  </div>
</template>
<script>

  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'TermsAndPolicy',
    head: {
      title () {
        return {
          inner: 'ICOToday',
          complement: this.type_formal
        }
      }
    },
    components: {
      'vue-markdown': VueMarkdown
    },
    methods: {},
    computed: {
      type () {
        if (this.$route.query.hasOwnProperty('type'))
          return this.$route.query.type
        return false
      },
      type_formal () {
        if (this.type === 'term')
          return 'Terms and Services'
        else if (this.type === 'privacy')
          return 'Privacy Policy'
        else if (this.type === 'token')
          return 'Token Sale Agreement'
        else if (this.type === 'rating')
          return 'Analyst Rating Guidelines'
      }
    }
  }
</script>

<style scoped>
  a.list-group-item:hover, a.list-group-item:focus, a.list-group-item:active {
    background-color: #0da9ef !important;
    color: white !important;
  }
</style>
