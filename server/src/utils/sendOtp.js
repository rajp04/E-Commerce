const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require("twilio")(accountSid, authToken);

exports.sendOtp = async (mobile, msg) => {
    try {
        const message = await client.messages.create({
            to: `+91${mobile}`,
            from: "+19792272733",
            body: `${msg} Expires in 5 minutes`
        });
        // console.log("OTP message sent successfully:", message.sid);
        return true;
    } catch (error) {
        console.error("Error sending OTP message:", error.message);
        return false;
    }
};