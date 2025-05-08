import resend from '~/server/utils/resend';
import { renderProductEmail } from '~/server/utils/email-templates/renderEmail';

export async function sendProductEmail({
    to,
    productDetails,
    productLinks,
}: {
    to: string;
    productDetails: {
        customerFirstName: string;
        downloadUrl: string;
        downloadAttempts: number;
        downloadDays: number;
        supportEmail: string;
        moreTemplatesUrl: string[];
    };
    productLinks: string[];
}) {
    console.dir(productDetails);
    const html = await renderProductEmail({
        userEmail: to,
        productDetails,
        productLinks,
    });

    return resend.emails.send({
        from: 'support@chasescroll.com',// Replace with your verified sender email
        to,
        subject: `Your HR Template is Ready – Download & Get Started`,
        html,
    });
} 