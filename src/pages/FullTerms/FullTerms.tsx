import React from 'react'
import classes from './styles.module.scss'
import { useHistory } from 'react-router-dom'
import { Button } from 'components/solo-uswds'

export const FullTerms: React.FC = () => {
	const history = useHistory()
	return (
		<div className={classes.wrapper}>
			<div className={classes.backWrapper}>
				<Button unstyled onClick={() => history.goBack()}>
					&lt; back
				</Button>
			</div>
			<div>
				<h3>Full Terms & Conditions</h3>
				<ol>
					<li>
						<h5>Information from Visits to DDS.mil</h5>
						<p>
							<b>Automatically Collected.</b> When you visit mysymptoms.mil,
							information is automatically received and stored by the web servers
							hosting this site including:
						</p>
						<ul>
							<li>The originating Internet Protocol (IP) address;</li>
							<li>The internet domain name;</li>
							<li>The date and time of your visit;</li>
							<li>
								Information about your computer or mobile set-up (e.g. type and
								version of web browser, operating system, screen resolution,
								language, and connection speed);
							</li>
							<li>
								The date and time that you visit mysymptoms.mil, the time spend on
								each page, and scroll depth (how much of a page you viewed);
							</li>
							<li>User events (e.g. a click);</li>
							<li>
								The internet address, or URL, of the website that connected you to
								our site, if you accessed DDS.mil via a link on another page (i.e.
								“referral traffic”); and
							</li>
							<li>
								The amount of data transmitted from mysymptoms.mil to your computer.
							</li>
						</ul>
						<p>
							<b>Cookies.</b> The Defense Digital Service only uses web measurement
							persistent and customization technologies, such as cookies, for
							analytical purposes. You can get more information about how our
							analytics provider, Google Analytics, uses cookies that are on our site
							at https://www.google.com/policies/privacy/partners/. You can choose not
							to accept cookies from any website, including mysymptoms.mil, by
							changing your browser settings.For more information on cookies generally
							and opting out, see https://www.usa.gov/optout-instructions. You will
							still be able to access the information on mysymptoms.mil if you choose
							to opt-out of accepting cookies from our site.
						</p>
					</li>
					<li>
						<h5>Information You Give Us</h5>
						<p>
							<b>Generally.</b> You do not have to provide the Defense Digital Service
							with any personal information or create a user account to access
							information on mysymptoms.mil.
						</p>
						<p>
							<b>Third-party Sites.</b> The Defense Digital Service maintains official
							pages or accounts on third-party websites in order to better engage with
							the American public (these are generally social media). You can submit
							or publish information to these sites that the Defense Digital Service
							will receive, for example by sending a message, posting a comment,
							“following,” “friending,” or taking similar actions. This information
							may contain personal information, such as an individual’s username and
							other public account information, when such information is available
							based on your privacy settings and the terms of the site.
						</p>
						<p>
							<b>Direct communication</b> You can also send us feedback directly by
							the methods described under "Contact us" in the footer. This feedback is
							voluntary.
						</p>
					</li>
					<li>
						<h5>How Information is Used</h5>
						<p>
							<b>Generally.</b> If you choose to provide us with information, we may
							use that information to contact you or respond to your message. In order
							to serve you better, we may analyze multiple sources of data you have
							provided (for example, to look up whether you previously contacted the
							Defense Digital Service about the same topic so that we do not send you
							a duplicative response). We may also use messages or comments collected
							through mysymptoms.mil or official third-party pages to inform policy
							decisions or in public advocacy.
						</p>
						<p>
							<b>Aggregated.</b> We may use data you provide and automatically
							generated data for statistical analysis to assess, for example, what
							information is of interest to users, technical design specifications,
							and system performance. This allows us to make general improvements to
							our site and program. We will <b>not</b> link automatically collected
							information about your site visits with your personally identifiable
							information.
						</p>
					</li>
					<li>
						<h5>Sharing of this Information</h5>
						<p>
							<b>Generally.</b> Information you choose to share with the Defense
							Digital Service (directly and via third-party sites) may be treated as
							public information. We may, for example, publish compilations of
							messages or comments collected through official social media pages and
							provide them to national leaders, members of the press, or other
							individuals outside of the Federal Government. However, we exercise
							discretion to limit such disclosures to protect your privacy (for
							example, we generally do not publish last names of commenters).
						</p>
						<p>
							<b>Internally.</b> Within the Defense Digital Service, we restrict
							access to non-public personally identifiable information to employees,
							contractors, and vendors who require access to this information in order
							to perform their official duties and exercise controls to limit what
							data they can view based on the specific needs of their position. Access
							to official Defense Digital Service accounts on third-party sites is
							limited to the individuals who administer those accounts.
						</p>
						<p>
							<b>Additional Government Use.</b> In some cases, we may share
							information you have provided or automatically generated information
							with other government agencies in response to lawful law enforcement
							requests or to protect mysymptoms.mil from security threats.
							Additionally, if you seek assistance on a matter within the jurisdiction
							of a federal agency, we may share your information with that agency for
							the limited purpose of addressing your request for assistance.
						</p>
						<p>
							<b>Analytics.</b> The Defense Digital Service uses a third-party
							analytics provider (currently Google Analytics) to analyze data from
							cookies. The third-party analytics provider does not receive personally
							identifiable information through these cookies. We have also limited the
							provider’s ability to see your full IP address (a process known as “IP
							masking”). You can get more information about how Google Analytics uses
							cookies that are on our site at
							https://www.google.com/policies/privacy/partners/, or review Google
							Analytics privacy policy
							(https://www.google.com/intl/en/policies/privacy/) for additional
							information.
						</p>
					</li>
					<li>
						<h5>Third-Party Sites</h5>
						<p>
							<b>Third-Party Policies.</b> Your activity on those sites is governed by
							the website’s security and privacy policies. Users of third-party sites
							often share information with the general public, user community, and/or
							the third-party operating the site. Consequently, you should review the
							privacy policies of third-party sites before using them and ensure that
							you understand how your information may be shared and used. You should
							also adjust privacy settings on your account on any third-party site to
							match your preferences. All official Defense Digital Service accounts
							are clearly labeled
						</p>
						<p>
							<b>Analytics.</b> For aggregate statistical analysis and to improve the
							quality of our services, we may integrate web measurement tools with our
							social media pages. These tools enable basic analysis of social media
							traffic (such as the number of people visiting a certain page).
						</p>
						<p>
							<b>Links to External Sites.</b> mysymptoms.mil and other Defense Digital
							Service platforms and pages may link to websites created and maintained
							by other public or private organizations and individuals. When you
							follow a link to an external site, you are leaving mysymptoms.mil and
							are subject to the external site’s privacy and security policies. We do
							not control or guarantee the accuracy, relevance, timeliness, or
							completeness of information contained on an external site. We also do
							not endorse the site’s sponsor, any views they express, or any products
							or services they offer.
						</p>
					</li>
					<li>
						<h5>Data Retention</h5>
						<p>
							Under the Federal Records Act, the Defense Digital Service is required
							to retain some information that users submit or publish when engaging
							with the Defense Digital Service, for eventual transfer to the National
							Archives and Records Administration (NARA). NARA may eventually release
							this material to the public.
						</p>
					</li>
					<li>
						<h5>Children and Privacy</h5>
						<p>
							We believe in the importance of protecting the privacy of children
							online. The Children’s Online Privacy Protection Act governs information
							gathered online from or about children under the age of 13. Verifiable
							consent from a child’s parent or guardian is required before collecting,
							using, or disclosing personal information from a child under age 13. Our
							site is not intended to solicit information of any kind from children
							under age 13.
						</p>
					</li>
					<li>
						<h5>Security</h5>
						<p>
							We take reasonable precautions to protect our site and information
							collected by the Defense Digital Service. We utilize common practices
							and technical controls to protect the information in our possession or
							control, along with mysymptoms.mil itself. These practices and controls
							include, but are not limited to: encrypting the transfer of personal
							information over the internet via Transport Layer Security (TLS) and
							maintaining strict technical controls and procedures to ensure the
							integrity of all data on DDS.mil. We periodically review our processes
							and systems to verify compliance with industry best practices and to
							ensure the highest level of security for our website.
						</p>
						<p>
							Unauthorized attempts to upload information or change information on
							this site are strictly prohibited and may be punishable under the
							Computer Fraud and Abuse Act of 1987 and the National Information
							Infrastructure Protection Act.
						</p>
					</li>
					<li>
						<h5>Intellectual Property</h5>
						<p>
							Copyright Information created by the Defense Digital Service is in the
							public domain and you may reproduce, publish, or otherwise use it
							without our permission. Copyright and other intellectual property laws
							may apply to your use of those materials.
						</p>
					</li>
					<li>
						<h5>Updates to This Privacy Policy</h5>
						<p>
							We will revise or update this policy from time to time. If we make
							significant changes to how we handle personal information, we will post
							changes to the policy on our site and change the date at the top. We
							will provide additional notice in advance (e.g., a disclaimer on our
							website) if material changes are being made.
						</p>
					</li>
				</ol>
				<h5>Additional Legal Terms</h5>
				<ol>
					<li>
						<h5>Representation and Warranties</h5>
						<p>
							Through use of mysymptoms.mil, you represent and warrant to us that: (a)
							you are at least eighteen (18) years of age; and (b) your use of this
							website will be in compliance with these Terms.
						</p>
					</li>
					<li>
						<h5>No Warranties</h5>
						<p>
							USE OF THIS WEBSITE IS AT YOUR OWN RISK. TO THE MAXIMUM EXTENT PERMITTED
							BY APPLICABLE LAW, THE WEBSITE AND SERVICES ARE PROVIDED WITHOUT
							WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT
							LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
							PARTICULAR PURPOSE, OR NON-INFRINGEMENT. NO ADVICE OR INFORMATION,
							WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM DDS OR THROUGH THIS
							WEBSITE WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN. WITHOUT
							LIMITING THE FOREGOING, DDS, ANY AFFILIATED ENTITY, THEIR PROCESSORS,
							CONTENT PROVIDERS, COLLABORATORS LICENSORS (AND THEIR RESPECTIVE
							SUBSIDIARIES, AFFILIATES, AGENTS, DIRECTORS, TRUSTEES, OFFICERS,
							EMPLOYEES, CONTRACTORS, AND REPRESENTATIVES) (COLLECTIVELY “DDS
							PARTIES”) DO NOT WARRANT THAT THE CONTENT IS ACCURATE, RELIABLE OR
							CORRECT; THAT THIS WEBSITE WILL MEET YOUR REQUIREMENTS; THAT THIS
							WEBSITE WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION,
							UNINTERRUPTED OR SECURE; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED;
							OR THAT THIS WEBSITE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. ANY
							CONTENT DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THIS WEBSITE
							IS DOWNLOADED AT YOUR OWN RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR
							ANY DAMAGE TO YOUR PROPERTY OR LOSS OF DATA THAT RESULTS FROM SUCH
							DOWNLOAD. DDS DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
							RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A
							THIRD PARTY THROUGH THIS WEBSITE OR ANY HYPERLINKED WEBSITE OR SERVICE,
							OR FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND DDS WILL NOT BE A
							PARTY TO OR IN ANY WAY MONITOR ANY TRANSACTION BETWEEN YOU AND
							THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
						</p>
					</li>
					<li>
						<h5>Indemnity</h5>
						<p>
							BY VISITING THIS WEBSITE, YOU AGREE TO INDEMNIFY, DEFEND, AND HOLD
							HARMLESS DDS, AND DDS PARTIES FROM AND AGAINST ALL CLAIMS, ACTIONS,
							DEMANDS, LIABILITIES, JUDGMENTS, SETTLEMENTS, COSTS, LOSSES, DAMAGES,
							TAX ASSESSMENTS, PENALTIES, INTEREST AND EXPENSES (INCLUDING, WITHOUT
							LIMITATION, REASONABLE ATTORNEYS’ FEES) ARISING OUT OF ANY DIRECT,
							INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, PUNITIVE OR ANY
							OTHER CLAIM YOU MAY INCUR IN CONNECTION WITH YOUR USE OF THIS WEBSITE,
							INCLUDING, WITHOUT LIMITATION, ANY CLAIMS FOR DEFAMATION, VIOLATION OF
							PUBLICITY OR PRIVACY, COPYRIGHT OR TRADEMARK INFRINGEMENT RESULTING FROM
							YOUR SUBMISSIONS OF ANY CONTENT, TAGGED CONTENT OR OTHER MATERIALS, ANY
							ECONOMIC HARM, LOST PROFITS, DAMAGES TO BUSINESS, DATA OR COMPUTER
							SYSTEMS, OR ANY DAMAGES RESULTING FROM RELIANCE ON ANY CONTENT OR
							RESULTING FROM ANY INTERRUPTIONS, WORK STOPPAGES, COMPUTER FAILURES,
							DELETION OF FILES, ERRORS, OMISSIONS, INACCURACIES, DEFECTS, VIRUSES,
							DELAYS OR MISTAKES OF ANY KIND, EVEN IF YOU HAVE PREVIOUSLY ADVISED DDS
							OF THE POSSIBILITY OF SUCH CLAIM.
						</p>
					</li>
					<li>
						<h5>Limitation of Liability and Damages</h5>
						<p>
							THE USER’S SOLE REMEDY FOR DISSATISFACTION WITH THE WEBSITE AND ANY OF
							ITS SERVICES IS TO STOP USING THE WEBSITE OR SERVICE. YOU AGREE THAT
							UNDER NO CIRCUMSTANCE SHALL ANY OF DDS PARTIES BE LIABLE FOR ANY DAMAGE
							RESULTING FROM YOUR USE OR INABILITY TO USE THIS WEBSITE OR THE
							MATERIALS ON THIS WEBSITE. THIS PROTECTION COVERS CLAIMS BASED ON
							WARRANTY, CONTRACT, TORT, STRICT LIABILITY, AND ANY OTHER LEGAL THEORY.
							THIS PROTECTION COVERS ALL LOSSES AND CLAIMS OF ANY TYPE INCLUDING,
							WITHOUT LIMITATION, DIRECT OR INDIRECT, SPECIAL, INCIDENTAL, RELIANCE,
							CONSEQUENTIAL, EXEMPLARY, AND PUNITIVE DAMAGES, PERSONAL INJURY/WRONGFUL
							DEATH, LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA OR BUSINESS
							INTERRUPTION.
						</p>
					</li>
					<li>
						<p>
							If you contact DDS and request information about our programs or
							services, we will use your email or postal address to provide the
							information you requested. You agree that we may use and share
							information you provide us as described in our Online Privacy Policy.
						</p>
					</li>
					<li>
						<h5>Limitation on Time to Initiate a Dispute</h5>
						<p>
							Unless otherwise required by law, an action or proceeding by you
							relating to any Dispute must commence within one year after the cause of
							action accrues.
						</p>
					</li>
					<li>
						<h5>Links to Other Websites</h5>
						<p>
							This DDS website may contain links to third party websites as a
							convenience to you. The inclusion of any website link does imply an
							approval, endorsement, or recommendation by DDS. You agree that you
							access any such website at your own risk, and that the site is not
							governed by the terms and conditions contained in these Terms. DDS
							expressly disclaims any liability for these websites. Please remember
							that when you use a link to go from our website to another website, our
							Online Privacy Policy is no longer in effect. Your browsing and
							interaction on any other website, including those that have a link on
							our website, is subject to that website’s own rules and policies.
						</p>
					</li>
					<li>
						<h5>Downloadable Files and Email</h5>
						<p>
							DDS cannot and does not guarantee or warrant that email or files
							available for downloading from its website will be free of viruses or
							other code that may contaminate or destroy data on your computer. You
							are responsible for implementing sufficient protective procedures and
							checks to maintain the accuracy of your data for maintaining a data
							back-up or other means for the reconstruction of any lost data. DDS does
							not assume any responsibility or risk for damage to your computer or its
							files related to your use of the website or Services.
						</p>
					</li>
					<li>
						<h5>Notice for California Users</h5>
						<p>
							If you have a question or complaint regarding the Services provided to
							you by DDS please contact us at covid19feedback@dds.mil to receive
							further information regarding the Services or to resolve the complaint.
						</p>
					</li>
					<li>
						<h5>Assignment</h5>
						<p>
							You may not assign any rights or obligations under this Agreement
							without DDS’s prior written consent. DDS may assign all or part of this
							Agreement.
						</p>
					</li>
					<li>
						<h5>Survival</h5>
						<p>
							All sections of this Agreement which, by their nature are designed to
							survive expiration or termination of this Agreement, including, but not
							limited to, indemnity and limitation of liability clauses, shall
							survive.
						</p>
					</li>
					<li>
						<h5>Waiver</h5>
						<p>
							No waiver of any of these terms shall be deemed a further or continuing
							waiver of such term or condition or any other term or condition.
						</p>
					</li>
					<li>
						<h5>Notices</h5>
						<p>
							You agree that we may provide any and all notices to you by e-mail,
							telephone, fax, as well as by any other method.
						</p>
					</li>
					<li>
						<h5>Severability</h5>
						<p>
							If any of the provisions of this Agreement are held unenforceable by a
							court or other tribunal of competent jurisdiction, then those provisions
							shall be limited or eliminated to the minimum extent necessary to allow
							the remainder of this Agreement to retain its full force and effect.
						</p>
					</li>
					<li>
						<h5>Rights of Third Parties.</h5>
						<p>
							The DDS Parties are third-party beneficiaries of certain terms of this
							Agreement and have the full right to enforce such terms against you in
							their own names
						</p>
					</li>

					<li>
						<h5>Entire Agreement; Amendment</h5>
						<p>
							This Agreement constitutes the entire agreement between you and DDS
							applicable to its subject matter. It may not be modified except as
							described elsewhere in this Agreement.
						</p>
					</li>
					<li>
						<h5>Conflicting Terms</h5>
						<p>
							Anything on the website inconsistent or in conflict with the terms of
							this Agreement is superseded by the terms of this Agreement.
						</p>
					</li>
					<li>
						<h5>Contact Information</h5>
						<p>
							Please contact us with any questions or concerns regarding this
							Agreement at: DDS: covid19feedback@dds.mil
						</p>
					</li>
				</ol>
			</div>
		</div>
	)
}
