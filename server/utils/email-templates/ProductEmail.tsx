import { defineComponent, h } from 'vue';

interface ProductDetails {
    customerFirstName: string;
    downloadUrl: string;
    downloadAttempts: number;
    downloadDays: number;
    supportEmail: string;
    moreTemplatesUrl: string[];
}

interface Props {
    productDetails: ProductDetails;
}

export default defineComponent({
    name: 'ProductEmail',
    props: {
        productDetails: {
            type: Object as () => ProductDetails,
            required: true
        }
    },
    setup(props) {
        return () => h('div', { class: 'email-container' }, [
            h('div', { class: 'email-content' }, [
                h('p', { class: 'email-greeting' }, `Hi ${props.productDetails.customerFirstName},`),
                h('p', { class: 'email-paragraph' },
                    'Thank you for your purchase from HRGenie – The HR Compliance Toolkit by ProSupport HR Partners!'
                ),
                h('p', { class: 'email-paragraph' },
                    'Your selected HR template is now ready for download. Click the button below to access your file:'
                ),
                h('div', { class: 'download-section' }, [
                    h('a', {
                        href: props.productDetails.downloadUrl,
                        class: 'download-button'
                    }, 'Download Now')
                ]),
                h('p', { class: 'download-note' },
                    `(Note: You have up to ${props.productDetails.downloadAttempts} download attempts within ${props.productDetails.downloadDays} days of your purchase.)`
                ),
                h('div', { class: 'whats-inside' }, [
                    h('h2', { class: 'section-heading' }, 'What\'s Inside:'),
                    h('p', { class: 'section-content' },
                        'Your purchase includes a professionally crafted, ready-to-use HR document designed to help you stay compliant and save time. Most templates include helpful instructions or notes to guide you.'
                    )
                ]),
                h('div', { class: 'help-section' }, [
                    h('h2', { class: 'section-heading' }, 'Need Help?'),
                    h('p', { class: 'section-content' },
                        `If you have any issues accessing your download, feel free to reach out at ${props.productDetails.supportEmail}. We're happy to assist!`
                    )
                ]),
                h('div', { class: 'more-solutions' }, [
                    h('h2', { class: 'section-heading' }, 'Want More HR Solutions?'),
                    h('p', { class: 'section-content' }, [
                        'Explore bundles and additional tools here: ',
                        h('a', {
                            href: props.productDetails.moreTemplatesUrl,
                            class: 'more-templates-link'
                        }, 'View More Templates')
                    ])
                ]),
                h('p', { class: 'closing' },
                    'Thanks again for choosing ProSupport HR Partners. We\'re proud to support your business growth and compliance!'
                ),
                h('div', { class: 'signature' }, [
                    h('p', { class: 'signature-text' }, 'Warm regards,'),
                    h('p', { class: 'signature-name' }, 'Vivian Okeke'),
                    h('p', { class: 'signature-title' }, 'Founder, ProSupport HR Partners'),
                    h('a', {
                        href: 'https://prosupporthr.ca',
                        class: 'website-link'
                    }, 'https://prosupporthr.ca')
                ])
            ])
        ]);
    }
}); 