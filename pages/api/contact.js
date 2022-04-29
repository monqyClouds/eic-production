require("dotenv").config();

const path = require("path");

const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const logoPath = path.join(__dirname, "../../public/images/Logo.png");
console.log(logoPath);

const handler = async (req, res) => {
	const begin = performance.now();

	const data = req.body;
	console.log(data);

	if (req.method === "POST" && data.message) {
		const transporter = nodemailer.createTransport(
			smtpTransport({
				port: 465,
				host: "mail.niteonstore.com",
				tls: {
					rejectUnauthorized: false,
				},
				auth: {
					user: "tech@niteonstore.com",
					pass: "xQhKGl-fa-72",
				},
				secureConnection: false,
			})
		);

		const mailTemplate = `
		  <div>
		    <p>from: ${data.email}</p>
		    <p style="font-size: 16px;">message: ${data.message}</p>
		  </div>
		`;

		const mailData = {
			from: "EIC contact page <tech@niteonstore.com>",
			to: "calimarcel23@gmail.com",
			subject: `Message From ${data.name}`,
			html: mailTemplate,
		};

		try {
			const mailResponse = await transporter.sendMail(mailData);

			console.log(performance.now() - begin);

			if (mailResponse instanceof Error) {
				throw Error(mailResponse.response);
			}

			if (mailResponse.messageId) {
				res.status(200).send();
			} else {
				console.log("isError");
				throw Error(mailResponse.response);
			}
		} catch (err) {
			console.log(err.message);
			res.status(500).send();
		}
	}
};

export default handler;
