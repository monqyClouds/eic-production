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
			const response = await saveClientMailAddress(req.body);
			if (response.value === "SAVED") {
        await notifySubscriber();
        res.status(202).json({ resp: response.value });
			} else if (response.value === "ALREADY-SAVED") {
				console.log("sending data - already saved!");
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

    try {
      const res = await transporter.sendMail(mailData)
      console.log(res);
    } catch (err) {
      console.log(err);
    }
	}
};

export default handler;

