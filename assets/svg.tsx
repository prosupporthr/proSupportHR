import { defineComponent } from "vue"

export default defineComponent({
    props: {
        name: {
            type: String,
            required: true,
            default: 'coin'
        }
    },
    render: function () {
        if (this.$props.name === "logo") {
            return (
                <svg class={` w-5 `} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_5713_2605)">
                        <path d="M12.0598 6.91345C12.69 7.1484 13.2508 7.53847 13.6903 8.04758C14.1298 8.5567 14.4339 9.16841 14.5743 9.82616C14.7148 10.4839 14.6871 11.1665 14.4938 11.8107C14.3006 12.4549 13.948 13.04 13.4688 13.5119C12.9895 13.9837 12.399 14.3271 11.7518 14.5103C11.1046 14.6934 10.4217 14.7105 9.76627 14.5598C9.11079 14.4091 8.50389 14.0955 8.0017 13.6481C7.49951 13.2007 7.11824 12.6339 6.89315 12.0001M4.66659 4.00004H5.33325V6.66671M11.1398 9.2533L11.6065 9.72663L9.72648 11.6066M9.33325 5.33337C9.33325 7.54251 7.54239 9.33337 5.33325 9.33337C3.12411 9.33337 1.33325 7.54251 1.33325 5.33337C1.33325 3.12424 3.12411 1.33337 5.33325 1.33337C7.54239 1.33337 9.33325 3.12424 9.33325 5.33337Z" stroke="#F4F4F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_5713_2605">
                            <rect width={"16"} height={"16"} fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            )
        }  
    }
})