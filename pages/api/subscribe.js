require("dotenv").config();

import clientPromise from "../../lib/mongodb";

const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const uri = process.env.MONGODB_URI;
// const uri = "mongodb://127.0.0.1:27017/eic"

const handler = async (req, res) => {
	const data = req.body;
	console.log(data);

	if (req.method === "POST" && !Object.keys(data).includes("message")) {
		try {
			// const begin = performance.now();
			const response = await saveClientMailAddress(req.body);
			// console.log(performance.now() - begin);
			if (response.value === "SAVED") {
				await notifySubscriber();
				res.status(202).json({ resp: response.value });
			} else if (response.value === "ALREADY-SAVED") {
        console.log("sending data - already saved!")
				res.status(208).json({ resp: response.value });
			} else if (response.value === "ERROR") {
				res.status(503).json();
			}
		} catch (err) {
			console.log(err.message);
			res.status(500);
		}
	}

	async function saveClientMailAddress(mailData) {
		try {
			const client = await clientPromise;
			const db = client.db();

			const subscribedUsersCollection = db.collection("subscribedUsers");

			const userIsSubscribed = await subscribedUsersCollection.findOne({
				email: mailData.email,
			});

			if (userIsSubscribed) {
				return { value: "ALREADY-SAVED" };
			}

			await subscribedUsersCollection.insertOne(mailData);

			return { value: "SAVED" };
		} catch (error) {
			console.log(error);
			return { value: "ERROR" };
		}
	}

	async function notifySubscriber() {
		const transporter = nodemailer.createTransport(
			smtpTransport({
				port: 465,
				host: "mail.niteonstore.com",
				tls: {
					rejectUnauthorized: false,
				},
				auth: {
					user: process.env.NODEMAILERUSER,
					pass: process.env.NODEMAILERPASS,
				},
				secureConnection: false,
			})
		);

		const mailTemplate = `
          <div
            style="
            margin-top: 0;
            margin-right: 0;
            margin-bottom: 0;
            margin-left: 0;
            padding-top: 0;
            padding-right: 0;
            padding-bottom: 0;
            padding-left: 0;
          "
          >
          <div style="min-width: 100%; width: 100%; background-color: #ffffff">
            <table
              class="m_-6790023140919693228email"
              role="presentation"
              style="
                width: 100%;
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
                padding-left: 20px;
                padding-right: 20px;
                padding-bottom: 0px;
                color: #333332;
                line-height: 1.4;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
                  'Ubuntu', 'Open Sans', 'Helvetica Neue', sans-serif;
                background: #ffffff;
              "
            >
              <tbody>
                <tr>
                  <td
                    style="
                      min-width: 100%;
                      width: 100%;
                      padding: 0;
                    "
                  >
                    <div style="
                      text-align: center; 
                      background-color: #010232; 
                      height: 70px;" >
                      <img
                        src="https://cdn.zeplin.io/62554908f6f33f6c80ec9e8f/assets/5d406b10-3f48-47a7-9f76-f239d82454b8.png"
                        alt="EIC Wordmark"
                        width="70"
                        heigth="70"
                        style="width: 70px;height: 70px;"
                        class="CToWUd"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <table
            class="m_-6790023140919693228email"
            role="presentation"
            style="
              width: 100%;
              max-width: 600px;
              margin-left: auto;
              margin-right: auto;
              padding-left: 20px;
              padding-right: 20px;
              padding-bottom: 20px;
              color: #333332;
              line-height: 1.4;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
                'Ubuntu', 'Open Sans', 'Helvetica Neue', sans-serif;
              background: #ffffff;
            "
          >
            <tbody>
              <tr>
                <td
                  style="
                    min-width: 100%;
                    width: 100%;
                    padding-top: 0px;
                    padding-right: 0px;
                    padding-bottom: 0px;
                    padding-left: 0px;
                  "
                >
                  <div>
                    <div style="font-size: 16px">
                      <h1
                        class="m_-6790023140919693228email-title"
                        style="
                          font-family: Georgia, Cambria, 'Times New Roman', Times, serif;
                          color: #333332;
                          font-size: 32px;
                          font-weight: 300;
                          line-height: 1.2;
                          margin-bottom: 20px;
                        "
                      >
                        Congratulations!
                      </h1>
                      <p style="margin-top: 0; margin-bottom: 20px">
                        You made it to the exclusive list of people to be notified immediately our website is fully up and running. 
                      </p>
                      
                      <div
                        class="m_-6790023140919693228email-disclaimer"
                        style="
                          color: #b3b3b1;
                          font-size: 14px;
                          margin-top: 50px;
                          margin-right: 0;
                          margin-bottom: 50px;
                          margin-left: 0;
                        "
                      >
                        If you did not make this request, you can safely ignore this
                        email.
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div style="min-width: 100%; width: 100%; background-color: #ffffff">
            <table
              class="m_-6790023140919693228email"
              role="presentation"
              style="
                width: 100%;
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
                padding-left: 20px;
                padding-right: 20px;
                padding-bottom: 20px;
                color: #333332;
                line-height: 1.4;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
                  'Ubuntu', 'Open Sans', 'Helvetica Neue', sans-serif;
                background: #ffffff;
                background-color: #ffffff;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <div
                      style="
                        padding-top: 15px;
                        padding-right: 0;
                        padding-bottom: 0;
                        padding-left: 0;
                        margin-top: 30px;
                        color: rgba(0, 0, 0, 0.88);
                        font-size: 12px;
                        text-align: center;
                        border-top: 1px solid #8e8e8e;
                      "
                    >
                      Sent by EIC tech team
                      
                      · P.O. Box 602, Ikeja, Lagos 94104-0602
                      
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        `;

		const mailData = {
			from: "EIC <tech@niteonstore.com>",
			to: `${data.email}`,
			subject: "Congratulations!",
			html: mailTemplate,
		};

		transporter.sendMail(mailData).catch(err => console.log(err));
	}
};

export default handler;

// const mailTemplateCopy = `
// 	<div style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><div style="min-width:100%;width:100%;background-color:#ffffff"><table class="m_-6790023140919693228email" role="presentation" style="width:100%;max-width:600px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;padding-bottom:0px;color:#333332;line-height:1.4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Ubuntu','Open Sans','Helvetica Neue',sans-serif;background:#ffffff"><tbody><tr><td style="min-width:100%;width:100%;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px"><div style="text-align:left"><img src="https://ci3.googleusercontent.com/proxy/dM2MSY5MabcO15WFXdpS2pvu_uw8A4rdUmo18BS6ji24WL99EAi1UFF9Sj1_Y5fVpDkKPhBHdfJz-UUhCjDi_74zVsg3zTKYN_0xBYnmpKwYt2vEoQ=s0-d-e1-ft#https://cdn-images-1.medium.com/proxy/1*2ZxfreUF1MTJ_aC9njpMWg.png" alt="Medium Wordmark" width="200" style="width:200px;padding-top:30px;padding-bottom:30px" class="CToWUd"></div></td></tr></tbody></table></div><table class="m_-6790023140919693228email" role="presentation" style="width:100%;max-width:600px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;padding-bottom:20px;color:#333332;line-height:1.4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Ubuntu','Open Sans','Helvetica Neue',sans-serif;background:#ffffff"><tbody><tr><td style="min-width:100%;width:100%;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px"><img src="https://ci5.googleusercontent.com/proxy/E7aAtl7W96ngQ9rZ8JbgFStRQbi20-eAk8TBFZwdE1Qf-1S1IMcpaPxtNH-zdev4PVskXSFth9wKzjKBIoZQQjgbyf8wTJFnyFJxZHRbigReST2bk7z4Nr1AYkLB-O5YIl0-EsfVoqXFYtDfjTDT9fOGaWDZJBhehEAYoQIDlkaFLu5E5m_KJ1HJwyq-74NUOGxhfszNFSODuh9J8yJyUwPnlFUZpblYa2hEVJHBi7NQHfawfM46g9eBOSwvZzZlSCSkyy08hMvEZlDScHhoMMmJIXSmhCwkT16c7w=s0-d-e1-ft#https://medium.com/_/stat?event=email.opened&amp;emailId=eae89738-201a-4292-b170-af58c637f43c&amp;source=email--1651096213696-account.registration------0-------------------eae89738_201a_4292_b170_af58c637f43c" width="1" height="1" alt="" class="CToWUd" jslog="138226; u014N:xr6bB; 53:W2ZhbHNlXQ.."><div><div style="font-size:16px"><h1 class="m_-6790023140919693228email-title" style="font-family:Georgia,Cambria,'Times New Roman',Times,serif;color:#333332;font-size:32px;font-weight:300;line-height:1.2;margin-bottom:20px">You’re almost there.</h1><p style="margin-top:0;margin-bottom:20px">Click the link below to confirm your email and finish creating your Medium account.</p><p style="margin-top:0;margin-bottom:20px">This link will expire in 2 hours and can only be used once.</p><p style="margin-top:0;margin-bottom:20px"><a href="https://medium.com/m/callback/email?token=f7ae7cc67439&amp;operation=register&amp;state=medium&amp;source=email--1651096213696-account.registration------0-------------------eae89738_201a_4292_b170_af58c637f43c" style="color:#ffffff;text-decoration:none;display:inline-block;height:38px;line-height:38px;padding-top:0;padding-right:24px;padding-bottom:0;padding-left:24px;border:0;outline:0;background-color:#1a8917;font-size:14px;font-style:normal;font-weight:400;text-align:center;white-space:nowrap;border-radius:99em;margin-top:35px;margin-bottom:35px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://medium.com/m/callback/email?token%3Df7ae7cc67439%26operation%3Dregister%26state%3Dmedium%26source%3Demail--1651096213696-account.registration------0-------------------eae89738_201a_4292_b170_af58c637f43c&amp;source=gmail&amp;ust=1651183463900000&amp;usg=AOvVaw11zXn147Dl-aiJ8LFH1Kox">Create your account</a></p><div style="font-size:14px">If the button above doesn’t work, paste this link into your web browser:<p style="margin-top:0;margin-bottom:20px"><a href="https://medium.com/m/callback/email?token=f7ae7cc67439&amp;operation=register&amp;state=medium&amp;source=email--1651096213696-account.registration------0-------------------eae89738_201a_4292_b170_af58c637f43c" style="color:#333332;text-decoration:none" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://medium.com/m/callback/email?token%3Df7ae7cc67439%26operation%3Dregister%26state%3Dmedium%26source%3Demail--1651096213696-account.registration------0-------------------eae89738_201a_4292_b170_af58c637f43c&amp;source=gmail&amp;ust=1651183463900000&amp;usg=AOvVaw11zXn147Dl-aiJ8LFH1Kox">https://medium.com/m/callback/<wbr>email?token=f7ae7cc67439&amp;<wbr>operation=register&amp;state=<wbr>medium</a></p></div><div class="m_-6790023140919693228email-disclaimer" style="color:#b3b3b1;font-size:14px;margin-top:50px;margin-right:0;margin-bottom:50px;margin-left:0">If you did not make this request, you can safely ignore this email.</div></div></div></td></tr></tbody></table><div style="min-width:100%;width:100%;background-color:#ffffff"><table class="m_-6790023140919693228email" role="presentation" style="width:100%;max-width:600px;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px;padding-bottom:20px;color:#333332;line-height:1.4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Ubuntu','Open Sans','Helvetica Neue',sans-serif;background:#ffffff;background-color:#ffffff"><tbody><tr><td><div style="padding-top:15px;padding-right:0;padding-bottom:0;padding-left:0;margin-top:30px;color:rgba(0,0,0,0.88);font-size:12px;text-align:center;border-top:1px solid #8e8e8e">Sent by <a href="https://medium.com/?source=email--1651096213696-account.registration------0-------------------eae89738_201a_4292_b170_af58c637f43c" style="color:rgba(0,0,0,0.88);text-decoration:underline;white-space:nowrap" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://medium.com/?source%3Demail--1651096213696-account.registration------0-------------------eae89738_201a_4292_b170_af58c637f43c&amp;source=gmail&amp;ust=1651183463900000&amp;usg=AOvVaw20MRwJXErok3xkpebXNaJ8">Medium</a> · P.O. Box 602, San Francisco, CA 94104-0602<div><a href="https://medium.com/jobs-at-medium/work-at-medium-959d1a85284e?source=email--1651096213696-account.registration------0-------------------eae89738_201a_4292_b170_af58c637f43c" style="color:rgba(0,0,0,0.88);text-decoration:underline;white-space:nowrap" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://medium.com/jobs-at-medium/work-at-medium-959d1a85284e?source%3Demail--1651096213696-account.registration------0-------------------eae89738_201a_4292_b170_af58c637f43c&amp;source=gmail&amp;ust=1651183463900000&amp;usg=AOvVaw1N0OKPNN293yN3en732csM">Careers</a> · <a href="https://help.medium.com/hc/en-us" style="color:rgba(0,0,0,0.88);text-decoration:underline;white-space:nowrap" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://help.medium.com/hc/en-us&amp;source=gmail&amp;ust=1651183463900000&amp;usg=AOvVaw3LeXvXA-842HjQVSfEtnGa">Help center</a> · <a href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9" style="color:rgba(0,0,0,0.88);text-decoration:underline;white-space:nowrap" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://policy.medium.com/medium-privacy-policy-f03bf92035c9&amp;source=gmail&amp;ust=1651183463900000&amp;usg=AOvVaw0VwLwdQL4zvp8Ek7dMzBA3">Privacy policy</a> · <a href="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f" style="color:rgba(0,0,0,0.88);text-decoration:underline;white-space:nowrap" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://policy.medium.com/medium-terms-of-service-9db0094a1e0f&amp;source=gmail&amp;ust=1651183463900000&amp;usg=AOvVaw2TT0mrHsBOnh42UfT94p4p">Terms of service</a></div></div></td></tr></tbody></table></div><img src="https://ci6.googleusercontent.com/proxy/klPYy1UQXWbziULU7lmnrcD06iA-C61MTPMUyPL8OEJ423QV5qfCfRa9T8L-6KF31oBW0XOeRQN_VHweBwK2kklF_J6Aroe77ngQUAqRKTr5Zv2vVMBT0fTV6B-AuIALycZbvc8wvS4B_r2plfabAZEcNFJETcN1WH2AlyOMHqsdgb7wte6TWPoVbRep0v0oHG7lIBEUfppGK4jbJLePQQPcb8-io9BVumy7inddyL_gGNs2LcBTLwdvs766JTKtiuQXJo4e_9vYKi_ghcbp4_X2M1Fm9up0dhKDqdnxokf3QUuwksUXE3NEMfWZv8T8j18qQXSP4AsxolWo6kENQnXGO8X-U-24RFjb67oID-OJCqADdLNN5nThcm6Lf_mCirE1A1NY84Oa0xgz_I6ANM4z10XYlqc-cMGkTCH17PewAHT6wTaO2ld15E9tYeuv2jmnkETte6AUZkTekFushY_pdUrD2N1pdOpd4IoT884D6gWCKq2YhIiiOWrF7ciNiMX9p_CdlVqhmqYgSSdTGv_IlsOZKduf2gkzQksKSxh6U_WY1OOcyTmtXR2kj41BrH--MQ4HaDRjTuN8XPdcdNrMuX77wrDi5j6c=s0-d-e1-ft#https://u1871179.ct.sendgrid.net/wf/open?upn=2FAqJgrkq5WQP-2BHE9WjgbUWJ2C3Jc9ERG1nwMNigJvVBVSWZfS12zSwGigFFh-2BeQ3iOuMeHztcTRWeRLZyiw26v4UeDZ5dkfXTwfcZt2RKeZ8BvgBOCeoiUcYvPstCRvPK6QX1KP91iFVayJxVikYb0hsW6L1bhVn39TFQCltNGx3hUHjPbzgGv4mtnC0E6gusOVnysxdb1xLAZVlYDUdXIcOLJvzkzVCNQp1jtzGEWCJV72y0UUdgtOCKwXnRGlMQBLVpvJVxilOfNKsGaCHrPz7T9mtoHWfQU-2FSOXuqfA8posODE3UCxAyZrTNozC-2B5WGVoD5bwmqnrrSofIQbJAW2JrgAAd6HDRKFtD-2FVCXO2nZJMVawrW2EQEEeQ7dKR" alt="" width="1" height="1" border="0" style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important" class="CToWUd"></div>

// `;
