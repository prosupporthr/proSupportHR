import { defineComponent, h } from 'vue';

interface ProductDetails {
    name: string;
    description: string;
    price: number;
    imageUrl?: string;
}

interface Props {
    userEmail: string;
    productDetails: ProductDetails;
    productLinks: string[];
}

export default defineComponent({
    name: 'ProductEmail',
    props: {
        userEmail: {
            type: String,
            required: true
        },
        productDetails: {
            type: Object as () => ProductDetails,
            required: true
        },
        productLinks: {
            type: Array as () => string[],
            required: true
        }
    },
    setup(props) {
        return () => h('div', { class: 'email-container' }, [
            h('div', { class: 'email-header' }, [
                h('h1', { class: 'email-heading' }, 'Product Details')
            ]),
            h('div', { class: 'email-content' }, [
                h('p', { class: 'email-greeting' }, `Hello ${props.userEmail},`),
                h('p', { class: 'email-paragraph' },
                    'Thank you for your interest in our products. Here are the details you requested:'
                ),
                h('div', { class: 'product-section' }, [
                    h('h2', { class: 'product-name' }, props.productDetails.name),
                    h('p', { class: 'product-description' }, props.productDetails.description),
                    h('p', { class: 'product-price' }, `$${props.productDetails.price.toFixed(2)}`)
                ]),
                h('div', { class: 'links-section' }, [
                    h('h3', { class: 'links-heading' }, 'Product Links:'),
                    ...props.productLinks.map((link, index) =>
                        h('a', {
                            key: index,
                            href: link,
                            class: 'product-link'
                        }, link)
                    )
                ]),
                h('hr', { class: 'email-divider' }),
                h('div', { class: 'email-footer' }, [
                    h('p', { class: 'footer-text' },
                        'If you have any questions, please don\'t hesitate to contact us.'
                    ),
                    h('a', {
                        href: 'mailto:support@example.com',
                        class: 'support-button'
                    }, 'Contact Support')
                ])
            ])
        ]);
    }
}); 