const Visitor = require('../models/Visitor');
const sendEmail = require('../utils/sendEmail');

exports.logVisitorInfo = async (req, res) => {
    try {
        const { ip, headers } = req;
        const visitor = new Visitor({
            ipAddress: ip,
            userAgent: headers['user-agent'],
        });
        await visitor.save();

        // Send an email alert
        await sendEmail({
            to: 'your-email@example.com',
            subject: 'New Visitor Alert',
            text: `A new visitor from IP: ${ip} using ${headers['user-agent']} visited your site.`,
        });

        res.status(200).json({ message: 'Visitor logged successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error logging visitor information' });
    }
};
