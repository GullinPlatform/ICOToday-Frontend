<template>

  <div class="offcanvas-wrapper">
       <!-- Page Title-->
       <div class="page-title">
         <div class="container">
           <div class="column">
             <h1>Help / FAQ</h1>
           </div>
           <div class="column">
             <ul class="breadcrumbs">
               <li><a href="index.html">Home</a>
               </li>
               <li class="separator">&nbsp;</li>
               <li>Help / FAQ</li>
             </ul>
           </div>
         </div>
       </div>
       <!-- Page Content-->
       <div class="container padding-bottom-3x">
         <div class="row">
           <!-- Side Menu-->
           <div class="col-lg-3 col-md-4">

             <nav class="list-group">

               <router-link class="list-group-item list-group-item-action"
                            :to="{name:'faq', query:{type:'faq'}}"
                            :class="{active:type==='faq'}">Popular Questions
               </router-link>
               <router-link class="list-group-item list-group-item-action"
                            :to="{name:'faq', query:{type:'ico'}}"
                            :class="{active:type==='ico'}">What is an ICO?
               </router-link>
               <router-link class="list-group-item list-group-item-action"
                            :to="{name:'faq', query:{type:'investing'}}"
                            :class="{active:type==='investing'}">How to Get Started Investing in ICOs
               </router-link>
               <router-link class="list-group-item list-group-item-action"
                            :to="{name:'faq', query:{type:'blockchain'}}"
                            :class="{active:type==='blockchain'}">What is Blockchain?
               </router-link>
               <router-link class="list-group-item list-group-item-action"
                            :to="{name:'faq', query:{type:'bitcoin'}}"
                            :class="{active:type==='bitcoin'}">What is Bitcoin?
               </router-link>
               <router-link class="list-group-item list-group-item-action"
                            :to="{name:'faq', query:{type:'ethereum'}}"
                            :class="{active:type==='ethereum'}">What is Ethereum?
               </router-link>
               <router-link class="list-group-item list-group-item-action"
                            :to="{name:'faq', query:{type:'smart_contract'}}"
                            :class="{active:type==='smart_contract'}">What is a Smart Contract?
               </router-link>
               <a class="list-group-item"</a>

               </nav>

             <div class="padding-bottom-3x hidden-md-up"></div>
           </div>
<!-- Content-->
          <div class="col-lg-8 col-md-8" v-if="type=='faq'">
            <div class="accordion" id="accordion" role="tablist">
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#collapseFive" data-toggle="collapse" data-parent="#accordion">How is ICOTOday better than competitors?</a></h6>
                </div>
                <div class="collapse" id="collapseFive" role="tabpanel">
                  <div class="card-body">
                    At ICOToday, we focus on three important things for our platform: Investor Security, Community and Ease of Use. Most or all of our current competitors are more like blogs, where they let companies submit an application, then manually upload them to their respective websites - they act as centralized middlemen between ICOs and investors. This is not how it should be. One of blockchain's biggest value propositions is that it negates the need for a middleman and connects people directly.<br><br>
                    At ICOToday, we created a decentralized platform where companies can submit their ICOs, have them rated by community experts, who are selected by the community. The community users are then able to invest automatically through our smart contract without the hassles that they have to endure with current platforms. Furthermore, ICO companies that get approved by our community experts will then be able to communicate critical information securely through our platform. Users will be able to subscribe to ICOs they are interested in and get updates on their feed. No critical information will ever be shared through emails. No other ICO platform offers these features - Investor Security, Community, Ease of Use.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#collapseSix" data-toggle="collapse" data-parent="#accordion">Why is ICOToday launching its own ICO?</a></h6>
                </div>
                <div class="collapse" id="collapseSix" role="tabpanel">
                  <div class="card-body">
                    We have two important reasons for launching the ICOToken. One, creating a decentralized platform with no economic incentives for the necessary parties involved is impossible. Therefore, ICOToken will be tightly integrated in the product. It's value will be directly correlated to the demand of the ICOToday platform.
                    <br><br>
                     Second, ICO investors are our target audience. We wanted to give our supporters a chance to be invested in our collective future. ICOToday was founded because we, as ICO investors, understood the pain and inefficiencies with the current process and we thought there could be a better way. We are creating the future of ICOs, but we cannot do it by ourselves. Therefore, our ICO will enable ICO investors to support us in building our collective vision.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a href="#collapseOne" data-toggle="collapse" data-parent="#accordion">How do I participate in a project's ICO?</a></h6>
                </div>
                <div class="collapse show" id="collapseOne" role="tabpanel">
                  <div class="card-body">
                    <p>
                      Every project's page has a right-hand sidebar that shows the total amount the project is looking to raise, and what types of cryptocurrencies are accepted. All you have to do is press the "Contribute" button next to the type of cryptocurrency you intend to use!

                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#collapseTwo" data-toggle="collapse" data-parent="#accordion">Before I participate in an ICO, is there anything I have to prepare in advance?</a></h6>
                </div>
                <div class="collapse" id="collapseTwo" role="tabpanel">
                  <div class="card-body">
                      Before you can participate in ICOs on ICOToday, you must have a valid account, have completed real-name verification, and deposited cryptocurrency into your ICOToday wallet. Once you've deposited cryptocurrency into your wallet, you can immediately participate in any active ICOs on the site. For a detailed overview of how to complete this process, see here.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#collapseThree" data-toggle="collapse" data-parent="#accordion">How do I make a deposit to my ICOToday wallet?</a></h6>
                </div>
                <div class="collapse" id="collapseThree" role="tabpanel">
                  <div class="card-body">
                    To make a deposit to your ICOToday Wallet, login to your account and go to account settings. Proceed to your wallet and copy the address of the specific wallet you want to deposit funds into (BTC, ETH, ICC). Go to your exchange or outside wallet and send the funds to that address.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#collapseFour" data-toggle="collapse" data-parent="#accordion">How long does it take for deposits to arrive in my ICOToday wallet?</a></h6>
                </div>
                <div class="collapse" id="collapseFour" role="tabpanel">
                  <div class="card-body">
                        The speed of blockchain deposits depends on how long it takes to get the requisite number of confirmations, which is different for different types of cryptocurrencies. If it's taking a long time for a deposit to arrive, please check the exchange or wallet you sent the deposit from and make sure the transaction was indeed sent out.
                    </div>
                </div>
              </div>
            </div>

            </div>

              <div class="col-lg-8 col-md-8" v-if="type==='ico'">
              <p><strong>What is an ICO?</strong></p>
              <p>ICOs (Initial Coin Offerings) have become a popular way to fund cryptocurrency projects. An ICO is an event in which a new cryptocurrency project sells part of its cryptocurrency tokens to early adopters and enthusiasts in exchange for money today. ICOs provide a way for cryptocurrency project creators to raise money for their operations. Most ICOs raise money in Bitcoin or other cryptocurrencies.</p>
              <p>The ICO usually takes place before the project is completed, and helps fund the expenses undertaken by the founding team until launch. For some of the larger projects, part of the ICO money goes into a foundation that provides ongoing support to the project. They also work as an initial distribution model for the cryptocurrency tokens, especially those with a <a href="https://www.smithandcrown.com/?p=12415">proof of stake</a> consensus algorithm.</p>
              <p>The ICO participants are invested in the success of the project. They can help get the word out and raise awareness in the broader community. They also provide early liquidity for the cryptocurrency tokens when they start trading. The ICO participants are also usually motivated by a profit potential if the project takes off and the tokens become worth more than the ICO price.</p>
              <p><strong>Are ICOs like IPOs?</strong></p>
              <p>ICOs have been compared to Initial Public Offerings (IPOs) of corporations. There are some notable similarities – both of them are used to sell a stake and raise money, and both have investors who see the potential and risk their capital in order to make a potential profit.</p>
              <p>However, there are significant differences as well. ICOs are mostly supported by early enthusiasts and not professional investors. In that respect, they are similar to 'kickstarter campaigns', but with the backers having a financial stake in the project. ICOs are also not regulated or registered with any government organization and there are usually no investor protections other than what is built into the platform itself.</p>
              <p>Most ICOs today are marketed as 'software presale tokens' akin to giving early access to an online game to early supporters. In order to try to avoid legal requirements that come with any form of a security sale, many ICOs today use language such as 'crowdsale' or 'donation' instead of ICOs. They also use legal disclaimers and language to the participants that this isn't a securities sale. It is unclear whether this is sufficient for global jurisdictions to treat it differently from a securities sale. To date, the matter hasn't been litigated in a court of law.</p>
              <p>The <a href="http://commodity-market-news.com/sec-official-says-ethereum-hack-illustrates-blockchain-concerns.html">first indication</a> that a government agency was looking into ICOs came in mid-2016. This was in response to The DAO, a crowd-funded vehicle on the Ethereum smart contract being attacked and drained of funds. The SEC (the government agency responsible for protecting investors and capital markets in the United States) is said to be looking into The DAO.</p>
              <p><strong>History of ICOs</strong></p>
              <p>One of the earliest documented uses of ICOs for a cryptocurrency project was Mastercoin, which was <a href="https://bitcointalk.org/index.php?topic=265488.0">crowdfunded on Bitcointalk forums</a>. Mastercoin is a meta-protocol on top of the Bitcoin blockchain that provides additional features that the base Bitcoin layer doesn't. The ICO took place during mid-2013. Mastercoin (MSC) raised over 5000 Bitcoin (BTC) at the rate of 100 MSC per BTC sent to an &quot; <a href="https://blockchain.info/address/1EXoDusjGwvnjZUyKkxZ4UHEf77z6A5S4P">exodus address</a>&quot; during the ICO phase.</p>
              <p>Then, the cryptocurrency project NXT had its own <a href="https://bitcointalk.org/index.php?topic=303898.0">ICO on Bitcointalk forums</a>, raising 21 BTC (valued around $6000 then). NXT created a cryptocurrency coded from scratch (i.e. not a fork of the original Bitcoin code) and implemented the first fully proof-of-stake system. The project was quite successful for the ICO investors, reaching a peak of 'market capitalization' of over $100 million, and currently over $10 million. This made it one of the most successful ICOs for investors.</p>
              <p>The successful ICOs kicked off a frenzy of new ICOs during late 2013 to early 2014, which coincided with the largest price rise in Bitcoin. Unfortunately, many of the ICOs failed to live up to their hype or were outright scams. However, this period also saw several successful ICOs like Ethereum.</p>
              <p>Today, Ethereum remains one of the largest ICOs to date, raising over $18 million with a current market capitalization of around $ 1 billion.</p>
              <p>The DAO, one of the projects using Ethereum, created a smart contract that would take in Ether and fund projects in the cryptocurrency space as a traditional venture capitalist would. The investments would be decided based on participant voting. In June 2016, a bug in the smart contract underlying The DAO was exploited to <a href="https://www.smithandcrown.com/?p=12214">drain around a third of all its funds</a>. Later, the stolen funds were returned to original backers using a hard fork.</p>
              <p><strong>Evolution of ICOs</strong></p>
              <p>ICOs are a mix between a donation and an investment. Owing to a number of scams in the industry, the community has adopted self-governing best practices and principles with respect to ICOs. Platforms like Koinify (now closed) promised due-diligence of projects before listing them, and releasing the money to the project team conditional upon realizing some pre-defined goals. Community members also demanded that projects use multi-signature wallets to enhance safety.</p>
              <p>Some ICOs use a single public Bitcoin address to raise funds, which is bad for privacy, but is good for a community audit of the health of the ICO and the money raised.</p>
              <p>Several ICOs use existing cryptocurrency protocols to create their tokens on top of them. This helps simplify the token-creation process. The most notable such protocols today include NXT, Counterparty, Bitshares, and Mastercoin. Waves, which itself was developed through an ICO ( <a href="https://www.smithandcrown.com/?p=7875">raising over $16 million</a>) is also developing a token platform.</p>
              <p>Some well-known cryptocurrencies that were developed through an ICO include: <a href="https://www.smithandcrown.com/?p=3108">NXT</a>, Mastercoin, <a href="https://www.smithandcrown.com/?p=3098">Bitshares</a>, <a href="https://www.smithandcrown.com/?p=3094">Ethereum</a>, <a href="https://www.smithandcrown.com/?p=3095">Maidsafecoin</a>, NEM, Synereo, Factom, <a href="https://www.smithandcrown.com/?p=6527">DigixDAO</a>, <a href="https://www.smithandcrown.com/?p=6336">Lisk</a>, and <a href="https://www.smithandcrown.com/?p=7875">Waves</a>.</p>
              <p><strong>How They Work</strong></p>
              <p>ICOs are typically announced on various cryptocurrency forums, notably on <a href="https://bitcointalk.org/">Bitcointalk</a>. The announcement thread contains key information about the project, such a whitepaper (if present), project goals, timelines for ICO and project development, team involved, previous experience of the team members, notable features of the project, and other ICO details.</p>
              <p>Funds are typically collected in Bitcoin, either via a global, public address (in which case the participants need to send Bitcoin from an address they control the private key for), or by creating accounts of each participant and providing them with a unique Bitcoin address. Best practices dictate that all funds ultimately be held in a multi-sig address that is made public.</p>
              <p>The specific dynamics of an ICO may vary. They typically include a few weeks of raising money, at least, and try to raise as much as there is demand. Occasionally, some ICOs will instead cap the total amount raised (such as DigixDAO which capped the total fundraising at around $5.5 million). A small percentage of tokens are usually reserved for early promotion bounties, such as forum signature campaigns or social media and newsletter campaigns.</p>
              <p>Once the ICO is completed and the project launched, the ICO tokens get listed of cryptocurrency exchanges to trade against other cryptocurrencies. The largest exchange by volume today is Poloniex. The price usually reflects the overall cryptocurrency market sentiment, project-specific news, and the addition of new features.</p>
              <p><strong>How to Learn about ICOs</strong></p>
              <p>For a list of current notable ICOs, check out <strong><a href="http://icotoday.io">icotoday.io</a></strong> for a comprehensive list of the best ongoing, upcoming, and past ICOs.</p>
              </div>

              <div class="col-lg-8 col-md-8" v-if="type==='investing'">
                <p><strong>HOW TO GET STARTED INVESTING IN ICOS?</strong></p>
                <p>ICOs have become increasingly popular in the last few months. However, the everyday buyer has no idea how this new technology works or how to get their hands on tokens. If you're thinking of purchasing some yourself, make sure to read these financial tips so you don't end up becoming a victim of crypto's dramatic 50% price swings. If you still want to try it out, here's a technical guide.</p>
                <p><strong>How To Buy During An ICO - THE OLD WAY</strong></p>
                <p><strong>1. Get bitcoin or ether.</strong></p>
                <p>This is easily done at leading cryptocurrency exchange and wallet Coinbase. Hook up your bank account or credit card, make a purchase, and then wait a few days for your bank to process it. Just make sure to do it at least a week in advance of the token sale you want to participate in, as it takes days for these transactions to go through since they use the traditional banking system. Also note that on Coinbase, the fee for using credit cards is higher — 3.99%, as opposed to 1.49% for bank transactions.</p>
                <p>If you plan to keep some bitcoin or ether here, move the bitcoin into the vault, and make sure not to use two-factor authentication via SMS but instead on Google Authenticator or a Yubikey. (More on why this could be a disaster for you below.)</p>
                <p><strong>2. Move your bitcoin or ether to a wallet you control.</strong></p>
                <p>This step is important because you cannot participate in an ICO from your Coinbase account. The reason for this is that when you use a centralized service such as a company like Coinbase, you do not own the private keys to your bitcoin or ether address. The way the ICOs typically work, you send them your ether or bitcoin, and the smart contract immediately sends the tokens back to your address. But since you don't have private keys in a Coinbase account, if you send ether or bitcoin to an ICO address from your Coinbase account, you'll simply be enriching Coinbase instead of getting your desired tokens.</p>
                <p>If you're using ether, which is commonly accepted in ICOs, you can use a site like My Ether Wallet to create a new Ethereum key there and transfer your ethers on Coinbase to that wallet. Another option is Parity, which enables you to do things like invest in an ICO at an exact time — a feature that you might want to use if you believe the ICO will sell out within seconds. If you're using Bitcoin, <a href="http://Blockchain.info">Blockchain.info</a> has a good user-controlled wallet. (Many token sales accept other coins as well, but bitcoin and ether are the two most popular.) Once you've transferred your coins to a user-controlled wallet, you'll have an ether or bitcoin address whose private key you control — and that means that you'll be able to receive tokens there as well.</p>
                <p><strong>3. Participate in the ICO by sending your crypto to their address.</strong></p>
                <p>The token sale will post an address where money is being collected during a certain window of time. Be very careful that the address to which you are sending coins is actually the address of the token sale. Scams trying to get people to send their ether and bitcoin elsewhere abound. In fact, yesterday, during its ICO, <a href="http://Coindash.io">Coindash.io</a>'s website got hacked, and the crooks appear to have made off with $7.9 million worth of ether simply by changing the address on the website to their own.</p>
                <p>It's also possible to use a smart contract to make your bid. During the crowdsale for prediction market Gnosis, which I wrote about in the July cover story, because there was concern the crowdsale would be over quickly, people who were, say, living in a part of the world where they'd likely be asleep during the ICO made their bids via smart-contract-powered bidding rings. Because of the time crunch that occurs during many ICOs, many investors try to get in before others during a limited window by paying exorbitant fees to make sure their transaction goes through quickly. For the Gnosis ICO, these bidding rings collected people's money beforehand and made the bid for them at the appropriate time, thereby saving individual investors money because the exorbitant fee was now split all bidding ring participants, rather than just one person shouldering it. This also meant that the investors didn't need to trust a person or institution to return their fair share of tokens to them.</p>
                <p><strong>4. Once you have your tokens, figure out how to store them.</strong></p>
                <p>If you have a significant amount of money invested, it's best to use a cold wallet (one not connected to the internet), and particularly a hardware wallet, which is a device specifically designed to hold bitcoin, ether, and other crypto tokens securely. The two most popular hardware wallets are Trezor and Ledger. Whichever you get, plug it into a USB port, transfer your coins to the address that comes with your hardware wallet, and afterward, unplug it from your computer. You've just stored your coins so they are secure even from viruses on your computer.</p>
                <p>If you lose your hardware wallet, you can re-create it using what's called a paper backup — a series of words that you can use to obtain your private keys again.</p>
                <p><strong>5. If you want to store a coin not supported by your hardware wallet …</strong></p>
                <p>This isn't very common now that almost all tokens follow what's called the ERC-20 standard (a standardized token on the Ethereum network), but in case you have an obscure coin that isn't supported, one option is to store those coins in an encrypted text file on a USB drive. Afterward, unplug it from your computer and keep it stored in a safe place such as a safety deposit box until you need to use the coins.</p>
                <p>Again, create a piece of paper with the information necessary to re-create the private keys. Each coin should have a guide on how to do this since the method differs slightly coin to coin.</p>
                <p>Another option would be to store those coins on an exchange. However, if you do so, be sure to secure those coins with what's called two-factor authentication, not with your phone number, but with either Google Authenticator or a Yubikey. (More on that below.)</p>
                <p><strong>HOW TO BUY DURING AN ICO - THE RECOMMENDED WAY</strong></p>
                <p>The old way of investing in ICOs is inefficient and involves too many unnecessary steps that give way for hackers to take advantage. As the frequency and number of fraudulent ICOs increased, there needed to be a better, secure and easier way for investors to support their favorite crowd sales.</p>
                <p>ICOToday was founded with the goal of lowering the barriers of entry for new investors and bringing security and credibility to the revolutionary new way of crowdfunding that ICOs have pioneered. Through ICOToday the process of investing in ICOs is much simpler and secure.</p>
                <p><strong>1.) Sign up for an account on ICOToday and verify your identity</strong></p>
                <p><strong>2.) Deposit Ethereum or Bitcoin in your account's wallet</strong></p>
                <p><strong>3.) Select an upcoming ICO, specify amount to invest and verify through two factor authentication.</strong></p>
                <p>Explore the comprehensive list of the best rated ICOs on ICOToday and select an ICO you would like to invest in. Click invest, select the amount in Ether or Bitcoin, verify through two factor authentication and you are done. Once the selected ICO's token sale goes live, our smart contract will automatically invest the specified amount for you. No hassle. Once the tokens are issued, you will be able to transfer them to an outside wallet or leave them in you ICOToday wallet.</p>
                <p>ICOToday greatly simplifies and improves the security of investing in ICOs over the old, insecure, time consuming process. <a href="http://icotoday.io">icotoday.io</a>.</p>


              </div>

              <div class="col-lg-8 col-md-8" v-if="type==='blockchain'">
                <p><strong>WHAT IS BLOCKCHAIN?</strong></p>
                <p>From a cruising altitude, a blockchain might not look that different from things you're familiar with, say Wikipedia.</p>
                <p>With a blockchain, many people can write entries into a record of information, and a community of users can control how the record of information is amended and updated. Likewise, Wikipedia entries are not the product of a single publisher. No one person controls the information.</p>
                <p>Descending to ground level, however, the differences that make blockchain technology unique become more clear. While both run on distributed networks (the internet), Wikipedia is built into the World Wide Web (WWW) using a client-server network model.</p>
                <p>A user (client) with permissions associated with its account is able to change Wikipedia entries stored on a centralized server.</p>
                <p>Whenever a user accesses the Wikipedia page, they will get the updated version of the 'master copy' of the Wikipedia entry. Control of the database remains with Wikipedia administrators allowing for access and permissions to be maintained by a central authority.</p>
                <p>Wikipedia's digital backbone is similar to the highly protected and centralized databases that governments or banks or insurance companies keep today. Control of centralized databases rests with their owners, including the management of updates, access and protecting against cyber-threats.</p>
                <p>The distributed database created by blockchain technology has a fundamentally different digital backbone. This is also the most distinct and important feature of blockchain technology.</p>
                <p>Wikipedia's 'master copy' is edited on a server and all users see the new version. In the case of a blockchain, every node in the network is coming to the same conclusion, each updating the record independently, with the most popular record becoming the de-facto official record in lieu of there being a master copy.</p>
                <p>Transactions are broadcast, and every node is creating their own updated version of events.</p>
                <p>It is this difference that makes blockchain technology so useful – It represents an innovation in information registration and distribution that eliminates the need for a trusted party to facilitate digital relationships.</p>
                <p>Yet, blockchain technology, for all its merits, is not a new technology.</p>
                <p>Rather, it is a combination of proven technologies applied in a new way. It was the particular orchestration of three technologies (the Internet, private key cryptography and a protocol governing incentivization) that made bitcoin creator Satoshi Nakamoto's idea so useful.</p>
                <p>The result is a system for digital interactions that does not need a trusted third party. The work of securing digital relationships is implicit — supplied by the elegant, simple, yet robust network architecture of blockchain technology itself.</p>
                <p>Defining digital trust</p>
                <p>Trust is a risk judgement between different parties, and in the digital world, determining trust often boils down to proving identity (authentication) and proving permissions (authorization).</p>
                <p>Put more simply, we want to know, 'Are you who you say you are?' and 'Should you be able to do what you are trying to do?'</p>
                <p>In the case of blockchain technology, private key cryptography provides a powerful ownership tool that fulfills authentication requirements. Possession of a private key is ownership. It also spares a person from having to share more personal information than they would need to for an exchange, leaving them exposed to hackers.</p>
                <p>Authentication is not enough. Authorization – having enough money, broadcasting the correct transaction type, etc – needs a distributed, peer-to-peer network as a starting point. A distributed network reduces the risk of centralized corruption or failure.</p>
                <p>This distributed network must also be committed to the transaction network's recordkeeping and security. Authorizing transactions is a result of the entire network applying the rules upon which it was designed (the blockchain's protocol).</p>
                <p>Authentication and authorization supplied in this way allow for interactions in the digital world without relying on (expensive) trust. Today, entrepreneurs in industries around the world have woken up to the implications of this development – unimagined, new and powerful digital relationshionships are possible. Blockchain technology is often described as the backbone for a transaction layer for the Internet, the foundation of the Internet of Value.</p>
                <p>In fact, the idea that cryptographic keys and shared ledgers can incentivize users to secure and formalize digital relationships has imaginations running wild. Everyone from governments to IT firms to banks is seeking to build this transaction layer.</p>
                <p>Authentication and authorization, vital to digital transactions, are established as a result of the configuration of blockchain technology.</p>
                <p>The idea can be applied to any need for a trustworthy system of record.</p>
                <p>Authored by Nolan Bauerle; images by Maria Kuznetsov; <a href="http://Coindesk.com">Coindesk.com</a></p>


              </div>

              <div class="col-lg-8 col-md-8" v-if="type==='bitcoin'">
                <p><strong>WHAT IS BITCOIN?</strong></p>
                <p>Bitcoin is a form of digital currency, created and held electronically. No one controls it. Bitcoins aren't printed, like dollars or euros – they're produced by people, and increasingly businesses, running computers all around the world, using software that solves mathematical problems.</p>
                <p>It's the first example of a growing category of money known as cryptocurrency.</p>
                <p>What makes it different from normal currencies?</p>
                <p>Bitcoin can be used to buy things electronically. In that sense, it's like conventional dollars, euros, or yen, which are also traded digitally.</p>
                <p>However, bitcoin's most important characteristic, and the thing that makes it different to conventional money, is that it is decentralized. No single institution controls the bitcoin network. This puts some people at ease, because it means that a large bank can't control their money.</p>
                <p>Who created it?</p>
                <p>A software developer called Satoshi Nakamoto proposed bitcoin, which was an electronic payment system based on mathematical proof. The idea was to produce a currency independent of any central authority, transferable electronically, more or less instantly, with very low transaction fees.</p>
                <p>Who prints it?</p>
                <p>No one. This currency isn't physically printed in the shadows by a central bank, unaccountable to the population, and making its own rules. Those banks can simply produce more money to cover the national debt, thus devaluing their currency.</p>
                <p>Instead, bitcoin is created digitally, by a community of people that anyone can join. Bitcoins are 'mined', using computing power in a distributed network.</p>
                <p>This network also processes transactions made with the virtual currency, effectively making bitcoin its own payment network.</p>
                <p>So you can't churn out unlimited bitcoins?</p>
                <p>That's right. The bitcoin protocol – the rules that make bitcoin work – say that only 21 million bitcoins can ever be created by miners. However, these coins can be divided into smaller parts (the smallest divisible amount is one hundred millionth of a bitcoin and is called a 'Satoshi', after the founder of bitcoin).</p>
                <p>What is bitcoin based on?</p>
                <p>Conventional currency has been based on gold or silver. Theoretically, you knew that if you handed over a dollar at the bank, you could get some gold back (although this didn't actually work in practice). But bitcoin isn't based on gold; it's based on mathematics.</p>
                <p>Around the world, people are using software programs that follow a mathematical formula to produce bitcoins. The mathematical formula is freely available, so that anyone can check it.</p>
                <p>The software is also open source, meaning that anyone can look at it to make sure that it does what it is supposed to.</p>
                <p>What are its characteristics?</p>
                <p>Bitcoin has several important features that set it apart from government-backed currencies.</p>
                <ol>
                  <li>It's decentralized</li>
                </ol>
                <p>The bitcoin network isn't controlled by one central authority. Every machine that mines bitcoin and processes transactions makes up a part of the network, and the machines work together. That means that, in theory, one central authority can't tinker with monetary policy and cause a meltdown – or simply decide to take people's bitcoins away from them, as the Central European Bank decided to do in Cyprus in early 2013. And if some part of the network goes offline for some reason, the money keeps on flowing.</p>
                <ol start="2">
                  <li>It's easy to set up</li>
                </ol>
                <p>Conventional banks make you jump through hoops simply to open a bank account. Setting up merchant accounts for payment is another Kafkaesque task, beset by bureaucracy. However, you can set up a bitcoin address in seconds, no questions asked, and with no fees payable.</p>
                <ol start="3">
                  <li>It's anonymous</li>
                </ol>
                <p>Well, kind of. Users can hold multiple bitcoin addresses, and they aren't linked to names, addresses, or other personally identifying information. However…</p>
                <ol start="4">
                  <li>It's completely transparent</li>
                </ol>
                <p>…bitcoin stores details of every single transaction that ever happened in the network in a huge version of a general ledger, called the blockchain. The blockchain tells all.</p>
                <p>If you have a publicly used bitcoin address, anyone can tell how many bitcoins are stored at that address. They just don't know that it's yours.</p>
                <p>There are measures that people can take to make their activities more opaque on the bitcoin network, though, such as not using the same bitcoin addresses consistently, and not transferring lots of bitcoin to a single address.</p>
                <ol start="5">
                  <li>Transaction fees are miniscule</li>
                </ol>
                <p>Your bank may charge you a £10 fee for international transfers. Bitcoin doesn't.</p>
                <ol start="6">
                  <li>It's fast</li>
                </ol>
                <p>You can send money anywhere and it will arrive minutes later, as soon as the bitcoin network processes the payment.</p>
                <ol start="7">
                  <li>It's non-repudiable</li>
                </ol>
                <p>When your bitcoins are sent, there's no getting them back, unless the recipient returns them to you. They're gone forever.</p>
                <p><a href="http://Coindesk.com">Coindesk.com</a>;</p>


              </div>

              <div class="col-lg-8 col-md-8" v-if="type==='ethereum'">
                <p><strong>WHAT IS ETHEREUM?</strong></p>
                <p>Before you can understand ethereum, it helps to first understand the internet.</p>
                <p>Today, our personal data, passwords and financial information are all largely stored on other people's computers – in clouds and servers owned by companies like Amazon, Facebook or Google. Even this CoinDesk article is stored on a server controlled by a company that charges to hold this data should it be called upon.</p>
                <p>This setup has a number of conveniences, as these companies deploy teams of specialists to help store and secure this data, and remove the costs that come with hosting and uptime.</p>
                <p>But with this convenience, there is also vulnerability. As we've learned, a hacker or a government can gain unwelcome access to your files without your knowledge, by influencing or attacking a third-party service – meaning they can steal, leak or change important information.</p>
                <p>Brian Behlendorf, creator of the Apache Web Server, has gone so far as to label this centralized design the &quot;original sin&quot; of the Internet. Some like Behlendorf argue the Internet was always meant to be decentralized, and a splintered movement has sprung up around using new tools, including blockchain technology, to help achieve this goal.</p>
                <p>Ethereum is one of the newest technologies to join this movement.</p>
                <p>While bitcoin aims to disrupt PayPal and online banking, ethereum has the goal of using a blockchain to replace internet third parties — those that store data, transfer mortgages and keep track of complex financial instruments.</p>
                <p>The 'World Computer'</p>
                <p>In short, ethereum wants to be a 'World Computer' that would decentralize – and some would argue, democratize – the existing client-server model.</p>
                <p>With ethereum, servers and clouds are replaced by thousands of so-called &quot;nodes&quot; run by volunteers from across the globe (thus forming a &quot;world computer&quot;).</p>
                <p>The vision is that ethereum would enable this same functionality to people anywhere around the world, enabling them to compete to offer services on top of this infrastructure.</p>
                <p>Scrolling through a typical app store, for example, you'll see a variety of colorful squares representing everything from banking to fitness to messaging apps. These apps rely on the company (or another third-party service) to store your credit card information, purchasing history and other personal data – somewhere, generally in servers controlled by third-parties.</p>
                <p>Your choice of apps is of course also governed by third parties, as Apple and Google maintain and curate (or in some cases, censor) the specific apps you're able to download.</p>
                <p>Take the example of an online document service like Evernote or Google Docs.</p>
                <p>Ethereum, if all goes according to plan, would return control of the data in these types of services to its owner and the creative rights to its author.</p>
                <p>The idea is that one entity will no longer have control over your notes and that no one could suddenly ban the app itself, temporarily taking all of your notebooks offline. Only the user can make changes, not any other entity.</p>
                <p>In theory, it combines the control that people had over their information in the past with the easy-to-access information that we're used to in the digital age. Each time you save edits, or add or delete notes, every node on the network makes the change.</p>
                <p>It's worth noting that the idea has been met with skepticism.</p>
                <p>Although the apps appear to be possible, it's unclear which blockchain applications will actually prove useful, secure, or scalable, and if they will ever be as convenient to use as the apps we use today.</p>
                <p>Authored by Alyssa Hertig; Images by Maria Kuznetsov; <a href="http://Coindesk.com">Coindesk.com</a>;</p>


              </div>

              <div class="col-lg-8 col-md-8" v-if="type==='smart_contract'">
                <p><strong>WHAT IS A SMART CONTRACT?</strong></p>
                <p>Like many ideas in the blockchain industry, a general confusion shrouds so called 'smart contracts'.</p>
                <p>A new technology made possible by public blockchains, smart contracts are difficult to understand because the term partly confuses the core interaction described.</p>
                <p>While a standard contract outlines the terms of a relationship (usually one enforceable by law), a smart contract enforces a relationship with cryptographic code.</p>
                <p>Put differently, smart contracts are programs that execute exactly as they are set up to by their creators.</p>
                <p>First conceived in 1993, the idea was originally described by computer scientist and cryptographer Nick Szabo as a kind of digital vending machine. In his famous example, he described how users could input data or value, and receive a finite item from a machine, in this case a real-world snack or a soft drink.</p>
                <p>In a simple example, ethereum users can send 10 ether to a friend on a certain date using a smart contract (See our guide &quot;What is Ether?&quot;).</p>
                <p>In this case, the user would create a contract, and push the data to that contract so that it could execute the desired command.</p>
                <p>Ethereum is a platform that's built specifically for creating smart contracts.</p>
                <p>But these new tools aren't intended to be used in isolation. It is believed that they can also form the building blocks for 'decentralized applications' (See: &quot;What is a Dapp?&quot;) and even whole decentralized autonomous companies (See: &quot;What is a DAO?')</p>
                <p>How smart contracts work</p>
                <p>It's worth noting that bitcoin was the first to support basic smart contracts in the sense that the network can transfer value from one person to another. The network of nodes will only validate transactions if certain conditions are met.</p>
                <p>But, bitcoin is limited to the currency use case.</p>
                <p>By contrast, ethereum replaces bitcoin's more restrictive language (a scripting language of a hundred or so scripts) and replaces it with a language that allows developers to write their own programs.</p>
                <p>Ethereum allows developers to program their own smart contracts, or 'autonomous agents', as the ethereum white paper calls them. The language is 'Turing-complete', meaning it supports a broader set of computational instructions.</p>
                <p>Smart contracts can:</p>
                <p>Function as 'multi-signature' accounts, so that funds are spent only when a required percentage of people agree<br>
                  Manage agreements between users, say, if one buys insurance from the other<br>
                  Provide utility to other contracts (similar to how a software library works)<br>
                  Store information about an application, such as domain registration information or membership records.<br>
                  Strength in numbers</p>
                <p>Extrapolating that last point, smart contracts are likely to need assistance from other smart contracts.</p>
                <p>When someone places a simple bet on the temperature on a hot summer day, it might trigger a sequence of contracts under the hood.</p>
                <p>One contract would use outside data to determine the weather, and another contract could settle the bet based on the information it received from the first contract when the conditions are met.</p>
                <p>Running each contract requires ether transaction fees, which depend on the amount of computational power required.</p>
                <p>Ethereum runs smart contract code when a user or another contract sends it a message with enough transaction fees.</p>
                <p>The Ethereum Virtual Machine then executes smart contracts in 'bytecode', or a series of ones and zeroes that can be read and interpreted by the network.</p>
                <p>Authored by Alyssa Hertig; images by Maria Kuznetsov; <a href="http://COINDESK.COM">COINDESK.COM</a></p>


              </div>



          </div>
        </div>
      </div>

</template>


<script>

  import VueMarkdown from 'vue-markdown'

  export default {
    name: 'UserGuide',
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
        if (this.type === 'faq')
          return 'Popular Questions'
        else if (this.type === 'ico')
          return 'What is an ICO?'
        else if (this.type === 'investing')
          return 'How to get Started Investing in ICOs'
        else if (this.type === 'blockchain')
          return 'What is Blockchain?'
        else if (this.type === 'bitcoin')
          return 'What is Bitcoin?'
        else if (this.type === 'ethereum')
          return 'What is Ethereum?'
        else if (this.type === 'smart_contract')
          return 'What is a Smart Contract?'
      }
    }
  }
</script>
