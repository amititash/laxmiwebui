import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Strong, Image, Icon, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section, Override, StackItem, Stack, Formspree } from "@quarkly/components";
import { MdArrowDownward, MdLocationOn, MdEmail } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Laxmi AI
			</title>
			<meta name={"description"} content={"No Code, Lo Code Platform for startups"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Text
				margin="0px 0 24px 0"
				text-align="center"
				font="--headline2"
				md-font="--headline3"
				color="#f50505"
			>
				Laxmi.AI
			</Text>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1519645261061-3cee4d216668?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			height="600px"
			sm-height="300px"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0" />
					<Text
						as="h1"
						font="normal 900 100px/1.2 --fontFamily-sans"
						md-font="--headline2"
						margin="10px 0"
						color="#ffff"
					>
						We build{" "}
						<br />
						No Code and Low Code Startups.
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0" />
		</Section>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						margin-right="-20%"
						padding-bottom="120%"
						background="url(https://images.unsplash.com/photo-1522424427542-e6fc86ff5253?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 15%/cover"
						lg-margin-right="0"
						lg-padding-bottom="80%"
					/>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="98px 64px"
						margin-left="-20%"
						margin-top="36px"
						background="--color-red"
						color="--light"
						mix-blend-mode="lighten"
						lg-margin-left="0"
						lg-margin-top="0"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="0"
						font="--base"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						what we do
					</Text>
					<Text as="h1" margin="0 0 16px 0" font="--headline1" lg-font="--headline2">
						We turn ideas into digital products
					</Text>
					<Text as="p" margin="16px 0" font="--lead" max-width="400px">
						We are a Digital Products Lab.{" "}
						<br />
						<br />
						Entrepreneurs approach us with their vision.
						<br />
						We transform their ideas into world class digital products using No Code and Low Code tools
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://images.unsplash.com/photo-1507235071172-438ca6950a8e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover">
			<Box max-width="300px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					What is No Code?
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					The fastest way to build an MVP
				</Text>
				<Text font="--lead">
					We live in a world where AI is writing code. We don't need large teams of engineers, designers, big funding rounds. All we need is the right set of tools to get your ideas to life.{" "}
					<br />
					<br />
					At Laxmi.AI we have the expertise to select the right set of tools for any idea to MVP in under 100$.
				</Text>
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="300px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				WHY Us?
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Strong Ideas, Loosely Held
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text margin="0px" font="--lead">
						We work with you, to understand the business problem, map out a solution set and then let you choose the best suited option between many different options.{" "}
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Text margin="0px" font="--lead">
						Once we have a plan, we work closely with you - explaining our choice of No-Code platforms at each step. Being in No-Code allows us to quickly change or reconfigure things.{" "}
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				Second to none
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Our Work
			</Text>
			<Text as="p" font="--headline3" margin="40px 0 20px 0" text-align="left">
				Since 2009 we’ve built over  50 MVPs for entrepreneurs and helped launch 11 startup clients with a combined valuation of $5M.
			</Text>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--red"
				margin="0px 0px 8px 0px"
			>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Edtech
				</Strong>
			</Text>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						max-width="850px"
					>
						French Jobs
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Text margin="0px" font="--lead" text-transform="uppercase">
						A social platform dedicated to language learners of French.{" "}
					</Text>
				</StackItem>
			</Stack>
			<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fb7996f8996cc001edd1d7e/images/Screen%20Shot%202020-12-02%20at%207.57.25%20PM.png?v=2020-12-02T14:29:05.862Z" />
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--red"
				margin="0px 0px 8px 0px"
			>
				<Strong>
					HR TECH
				</Strong>
			</Text>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						max-width="850px"
					>
						Adaptiv
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Text margin="0px" font="--lead" text-transform="uppercase" color="#0c0c0c">
						Using AI and Social Data to help identify future-ready Career Paths.{" "}
					</Text>
				</StackItem>
			</Stack>
			<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fb7996f8996cc001edd1d7e/images/Screen%20Shot%202020-12-02%20at%207.56.57%20PM.png?v=2020-12-02T17:16:43.573Z" />
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--red"
				margin="0px 0px 8px 0px"
			>
				<Strong>
					Fintech
				</Strong>
			</Text>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						max-width="850px"
					>
						Paays
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Text margin="0px" font="--lead" text-transform="uppercase" color="#090909">
						Canadian Fintech for Point of Sale travel Loans using AI and Open Banking Tech Stack{"  "}
					</Text>
				</StackItem>
			</Stack>
			<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fb7996f8996cc001edd1d7e/images/Screen%20Shot%202020-12-02%20at%207.55.17%20PM.png?v=2020-12-02T18:00:08.349Z" />
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--red"
				margin="0px 0px 8px 0px"
			>
				<Strong>
					HR TECH
				</Strong>
			</Text>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						max-width="850px"
					>
						Gigs For Me
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Text margin="0px" font="--lead" text-transform="uppercase" color="#070707">
						A Job search Engine for the gig economy powered by NLP ANd Knowledge graph
					</Text>
				</StackItem>
			</Stack>
			<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fb7996f8996cc001edd1d7e/images/Screen%20Shot%202020-12-02%20at%2011.33.18%20PM.png?v=2020-12-02T18:10:29.068Z" />
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--red"
				margin="0px 0px 8px 0px"
			>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					CHATBOTs, Fintech
				</Strong>
			</Text>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						max-width="850px"
					>
						PREQ.AI
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Text margin="0px" font="--lead" text-transform="uppercase" color="#070707">
						A Chat and Conversational AI powered platform for Buy-Now, Pay-Later solutions
					</Text>
				</StackItem>
			</Stack>
			<Image width="100%" height="100%" src="https://uploads.quarkly.io/5fb7996f8996cc001edd1d7e/images/Screen%20Shot%202020-12-02%20at%2011.42.09%20PM.png?v=2020-12-02T18:13:48.598Z" />
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1510125594188-5afc74c8cc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						0 to MVP in 2 Weeks
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						Sometimes 100$ is all it takes.{" "}
						<br />
						<br />
						Turn your idea into a MVP that generates revenues.
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Get IN TOUCH
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
		>
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="32px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdLocationOn}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Our Address
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							306, Kolimi Heights, Ulsoor,{" "}
							<br />
							Bangalore 56008
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="64px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdEmail}
						/>
						<Text as="h4" margin="6px 0" font="--base">
							Email us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
								hello@gigsfor.me
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem width="50%" md-width="100%" />
			</Stack>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
		>
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Box
						max-width="360px"
						padding="56px 48px"
						margin="0 0 0 auto"
						md-max-width="100%"
						background="--color-primary"
					>
						<Text as="h3" font="--headline3" margin="0 0 20px 0">
							Leave us message
						</Text>
						<Formspree endpoint="https://formspree.io/f/mdopljkb" completeText="Thanks! We will get in touch soon.">
							<Stack gap="16px">
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Name
									</Text>
									<Input width="100%" name="name" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
									<StackItem>
										<Text font="--lead">
											Stack item
										</Text>
									</StackItem>
								</StackItem>
								<StackItem width="100%">
									<Button background="--color-dark">
										Send
									</Button>
								</StackItem>
							</Stack>
						</Formspree>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				Legal
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Terms and Conditions
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0" text-align="left">
				These “Terms” are a legal contract between you and laxmi.ai.Me. You must be able to enter into contract to use our “Platform”. This includes the age requirement that you must be at least 18 years old, or 13 and have the consent of your parent or guardian, to use it. These Terms include our Privacy Policy. We may change these Terms on occasion, and your continued use of the Platform means you accept the revised Terms. The Terms don’t apply to sites and services operated by other companies you may access through the Platform. Any legal claim involving these Terms, the site, or the services will be settled by arbitration, not through a trial in front of a judge or jury, or through a class action lawsuit.

a. These Terms and Conditions (the “ Terms”) are a legal agreement between you (“ Licensee” or “ you” and its derivatives) and laxmi.ai.Me Group, Inc. (“ laxmi.ai.Me” or “ we” and its derivatives). These Terms govern your use of laxmi.ai.Me’s website at https://laxmi.ai.Me, (the “ Site”) and your access to and use of our drag-and-drop application building, hosting, and management platform (the “ Platform”). Except where specifically noted below, all references to the Platform include the Site as well. laxmi.ai.Me’s Privacy Policy is incorporated by reference into these Terms and details how we collect, use, and protect information about individuals.

b. TO USE THE PLATFORM, YOU MUST BE 18 OR OLDER (or the age of majority in the jurisdiction from which you are accessing the Platform), OR BE 13 OR OLDER AND HAVE YOUR PARENT OR GUARDIAN’S CONSENT. If you are a parent or guardian agreeing to these Terms for your child, you are legally responsible for his or her use of the Platform. The Platform is not intended for anyone under 13 and individuals under 13 may not use the Platform.

c. By accessing or using the Platform, you represent and warrant that you have the legal right to do so, meet the age requirements in Section 1(b), and have the power to enter into a binding contract with us – either for yourself or on behalf of the entity on whose behalf you are using the Platform. YOU ARE REQUIRED TO AFFIRMATIVELY ACCEPT THESE TERMS WHEN INITIALLY SIGNING UP TO ACCESS THE PLATFORM.

d. These Terms do not apply to any third party websites, services and applications (“ Third Party Services”) that you may access through the Platform, such as payment processors or messaging applications. We are not responsible for the content or practices of Third Party Services and provide links to Third Party Services only for the convenience of our users. We encourage you to carefully review the terms of service of any Third Party Service you access through the Platform.

e. SECTION 14 OF THESE TERMS REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES ARISING OUT OF THESE TERMS, RATHER THAN JURY TRIALS OR CLASS ACTIONS, AND ALSO LIMITS THE REMEDIES AVAILABLE TO YOU IF THERE IS SUCH A DISPUTE.

f. We may change these Terms at any time. When we do so, we will make a new copy of the Terms available on this page and will also inform you through the administration panel of the Platform, as applicable. Any changes to the Terms will be effective immediately for new users and five (5) days after notice of such changes is posted on the Site for existing users.
			</Text>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				Legal
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Pricay Policy
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0" text-align="left">
				Information You Provide. 

We collect personal data from Direct Users when they register to use the laxmi.ai.me Service, post content on the laxmi.ai.me Service (such as in forums), or communicate with us (e.g., through the “Contact” page on our site, or when requesting customer service or technical support), make purchases through the laxmi.ai.me Service, or provide us with feedback about the laxmi.ai.me Service.

We may also collect personal data at other points in the laxmi.ai.me Service when clearly identified.
 

We do not collect personal data directly from End Users unless they contact us (i.e., through the “Contact” page on our site or to provide feedback about the laxmi.ai.me Service). Each individual operator of a laxmi.ai.me Site determines what End User information is required to operate their laxmi.ai.me Site, is required to comply with all applicable laws respecting the treatment of such information and is responsible for all use of such information. However, because laxmi.ai.me Sites run on our infrastructure, the “Information Collected via Technology” section below applies equally to End Users and Direct Users.

Registration. To create an account, Direct Users need to provide an email address and password. Direct Users may provide other optional information, such as profile photos, their location, or job title, and, if signing up for a paid account, will have to provide payment information to our third party payment provider, subject to the terms below. Direct Users may always go to the “My account” section of the laxmi.ai.me Service to update, change, or remove their information.
Forum Use. To post on our Forum, Direct Users need to provide their email address, password, a username and may provide other optional information, such as profile photos. Direct Users may always go to their “Account Preferences” page to update or change their information.
laxmi.ai.me Sites. We do not collect or use End User personal data, except to provide customer support, respond to direct requests, or as automatically collected through technical means as set forth below. As noted above, the operators of laxmi.ai.me Sites may collect and use the information of End Users of their sites, including personal data and content posted to laxmi.ai.me Sites. laxmi.ai.me does not control or monitor such collection and usage.

laxmi.ai.me Marketplace. We do not collect any personal data in the course of operating the laxmi.ai.me Marketplace, but in order to make available or license User Components on the laxmi.ai.me Marketplace, you must be a Direct User who has submitted payment information to our third party payment processor. Certain Direct User account information (including account name or other personal data) may be made available to the buyer and seller involved in a laxmi.ai.me Marketplace transaction. laxmi.ai.me does not control or monitor the use of such information by participants in a laxmi.ai.me Marketplace transaction.


Information Collected via Technology

Information Collected by Our Servers. To make the laxmi.ai.me Service more useful to you, our servers (which may be hosted by a third party service provider) collect information from you, which may include your browser type, operating system, Internet Protocol (“IP”) address (a number that is automatically assigned to your computer when you use the Internet, which may vary from session to session), domain name, and/or a date/time stamp for your visit. 

Log Files. As is true of most websites, we gather certain information automatically and store it in log files. This information may include IP addresses, browser type, Internet service provider (“ISP”), referring/exit pages, operating system, date/time stamp, data typed into the site, and clickstream data. We use this information to analyze trends, administer the laxmi.ai.me Service, track users’ movements around the laxmi.ai.me Service, gather demographic information about our user base as a whole, and better tailor the laxmi.ai.me Service to our users’ needs. For example, certain information may be collected so that when you visit the laxmi.ai.me Service again, it will recognize you and remember preferences (such as previous User Components viewed or licensed from the laxmi.ai.me Marketplace). Except as noted in this Policy, we do not link this automatically-collected data to personal data.

How We Respond to Do Not Track Signals.  We do not currently respond to “do not track” signals or other mechanisms that might enable you to opt out of tracking on our site. To find out more about “do not track,” please visit http://www.allaboutdnt.com.

Mobile Services. We may also collect non-personal data from your mobile device if you access the laxmi.ai.me Service from your mobile device. This information is generally used to help us deliver the most relevant information to you. Examples of information that may be collected and used include your geographic location and information about the type of device you use. In addition, if the laxmi.ai.me Service crashes on your mobile device, we may receive information about your mobile device model software version and device carrier, which allows us to identify and fix bugs and otherwise improve the performance of the service. This information is sent to us as aggregated information and cannot be used to identify an individual. 

Analytics Services. In addition to the tracking technologies we place, other companies may set their own Cookies or similar tools when you use the laxmi.ai.me Service. This includes third party analytics services, such as Google Analytics (“Analytics Services”), that we engage to help analyze how users use the laxmi.ai.me Service, as well as third parties that deliver content or offers. We may receive reports based on these parties’ use of these tools on an individual or aggregate basis. We use the information we get from Analytics Services only to improve the laxmi.ai.me Service. The information generated by the Cookies or other technologies about your use of the service (the “Analytics Information”) is transmitted to the Analytics Services. The Analytics Services use Analytics Information to compile reports on user activity. The Analytics Services may also transfer information to third parties where required to do so by law, or where such third parties process Analytics Information on their behalf. Each Analytics Services’ ability to use and share Analytics Information is restricted by such Analytics Services’ Terms of Use and Privacy Policy. By using the laxmi.ai.me Service, you consent to the processing of data about you by Analytics Services in the manner and for the purposes set out above. See https://laxmi.ai.me/subprocessors for a full list of Analytics Services. We may also partner with ad companies to support our marketing efforts, including by serving you ads better tailored to your likely interests. If you don’t want to take advantage of these services, you can opt-out by visiting http://www.aboutads.info/ or http://networkadvertising.org/choices/, or if you are located in the EU, http://www.youronlinechoices.eu/. 

SNS Log In. Direct Users may use certain social media site (“SNS”) credentials to log into the laxmi.ai.me Service. In such case, we collect personal data from the social media website. For example, when you log in with your Google credentials, we may collect the personal data you have made publicly available in Google, such as your email address, name, and profile picture or logo. You agree that you are solely responsible for your use of an SNS and that it is your responsibility to review the terms of use and privacy policy of such SNS. Any information that we collect from an SNS account will depend on the privacy settings you have with that SNS, so please consult the SNS’ privacy and data practices. We will not be responsible or liable for: (a) the availability or accuracy of such SNS; (b) the content, products or services on or availability of such SNS; or (c) your use of any such SNS. You can revoke our access to this information anytime by amending the appropriate settings from within your account settings on the applicable SNS.


Cookies

Like many online services, we use Cookies to collect information. “Cookies” are small pieces of information that a website sends to your computer’s hard drive while you are viewing the website. We may use both session Cookies (which expire once you close your web browser) and persistent Cookies (which stay on your computer until you delete them).

We use two broad categories of Cookies: (1) first party Cookies, served directly by us to your computer or mobile device, which are used only by us to recognize your computer or mobile device when it revisits the laxmi.ai.me Service; and (2) third party Cookies, which are served by service providers on the laxmi.ai.me Service, and can be used by such service providers to recognize your computer or mobile device when it visits other websites.

laxmi.ai.me uses Cookies to verify that you are properly signed in, to display information for your primary location, and to provide information about your laxmi.ai.me Sites (if applicable). We may also use Cookies from time to time to measure your response to new aspects of the laxmi.ai.me Service and/or emails in an effort to continually improve customer service and the laxmi.ai.me Service. Please be aware that a Cookie cannot spread computer viruses, retrieve any other data from your hard drive, or capture your email address.

Cookies we use. The laxmi.ai.me Service uses the following types of Cookies for the purposes set out below.

a. Essential Cookies. These Cookies are essential to provide you with services available through our Services and to enable you to use some of its features. For example, they allow you to log in to secure areas of our Services and help the content of the pages you request load quickly. Without these Cookies, the services that you have asked for cannot be provided, and we only use these Cookies to provide you with those services.

b. Functionality Cookies. These Cookies allow our Services to remember choices you make when you use our Services, such as remembering your language preferences, remembering your login details and remembering the changes you make to other parts of Services which you can customize. The purpose of these Cookies is to provide you with a more personal experience and to avoid you having to re-enter your preferences every time you visit our Services.

c. Analytics and Performance Cookies. These Cookies are used to collect information about traffic to Services and how users use our Services. The information gathered does not identify any individual visitor. The information is aggregated and anonymous. It includes the number of visitors to our Services, the websites that referred them to our Services, the pages they visited on our Services, what time of day they visited our Services, whether they have visited our Services before, and other similar information. We use this information to help operate our Services more efficiently, to gather broad demographic information and to monitor the level of activity on our Services.
We use Google Analytics, Mixpanel, and other third party analytics services for this purpose. Google Analytics and Mixpanel use their own cookies. They are only used to improve how our Services works. You can find out more information about Google Analytics Cookies here: https://developers.google.com/analytics/resources/concepts/gaConceptsCookies. You can find out more about how Google protects your data here: www.google.com/analytics/learn/privacy.html.
You can find out more information about Mixpanel cookies and how they protect your data here: https://mixpanel.com/legal/privacy-policy/.
You can prevent the use of Google Analytics relating to your use of our Services by downloading and installing the browser plugin available via this link: http://tools.google.com/dlpage/gaoptout?hl=en-GB.
You can prevent the use of Mixpanel Cookies relating to your use of our Services by filling out the Mixpanel opt-out form via this link: https://mixpanel.com/optout/.

d. Social Media Cookies. These Cookies are used when you share information using a social media sharing button or “like” button on our Services or you link your account or engage with our content on or through a social networking website such as Facebook, Twitter, or Google+. The social network will record that you have done this.

Disabling Cookies. You can typically remove or reject Cookies via your browser settings. In order to do this, follow the instructions provided by your browser (usually located within the “settings,” “help” “tools” or “edit” facility). Many browsers are set to accept Cookies until you change your settings. 
Further information about Cookies, including how to see what Cookies have been set on your computer or mobile device and how to manage and delete them, visit www.allaboutcookies.org and www.youronlinechoices.com.uk.

Direct Users must accept Cookies in order to access certain features of the laxmi.ai.me Service. You can erase or block Cookies from your computer if you wish to do so (your internet browser help screen or manual will thoroughly explain this process), but certain parts of the laxmi.ai.me Service will not work correctly or at all if your browser is set to not to accept Cookies.{"\n\n"}
			</Text>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});