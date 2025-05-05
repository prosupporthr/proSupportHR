import resend from '~/server/utils/resend';
import { renderProductEmail } from '~/server/utils/email-templates/renderEmail';

export async function sendProductEmail({
    to,
    productDetails,
    productLinks,
}: {
    to: string;
    productDetails: {
        name: string;
        description: string;
        price: number;
        imageUrl?: string;
    };
    productLinks: string[];
}) {
    const html = await renderProductEmail({
        userEmail: to,
        productDetails,
        productLinks,
    });

    return resend.emails.send({
        from: 'support@chasescroll.com',// Replace with your verified sender email
        to,
        subject: `Product Details: ${productDetails.name}`,
        html,
    });
} 