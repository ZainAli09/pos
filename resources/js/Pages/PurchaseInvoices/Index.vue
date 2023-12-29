<template>

    <Head title="Purchase Invoices" />

    <AuthenticatedLayout>
        <template #header>
            Purchase Invoices
        </template>

        <div class="p-4 bg-white rounded-lg shadow-xs mt-6 space-y-6">
            <!-- <div class="inline-flex overflow-hidden mb-4 w-full bg-white rounded-lg shadow-md">
                <div class="flex justify-center items-center w-12 bg-blue-500">
                    <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z">
                        </path>
                    </svg>
                </div> -->

                <div class="px-4 py-2-mx-3 ">
                    <div class="mx-3">
                        <Link class="ml-6 text-lg font-bold text-gray-800" :href="route('purchaseinvoices.create')">
                            <button class="rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600">Generate New Invoice</button>
                        </Link>
                    </div>
                </div>
            <!-- </div> -->

            <div class="overflow-hidden mb-8 w-full rounded-lg border shadow-xs">
                <div class="overflow-x-auto w-full">
                    <table class="w-full whitespace-no-wrap">
                        <thead>
                            <tr
                                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b">
                                <!-- <th class="px-4 py-3">Sr</th> -->
                                <th class="px-4 py-3">Invoice No</th>
                                <th class="px-4 py-3">Total Quantity</th>
                                <th class="px-4 py-3">Gross Amount</th>
                                <th class="px-4 py-3">Total Discount</th>
                                <th class="px-4 py-3">Net Amount</th>
                                <th class="px-4 py-3">Service Charges</th>
                             
                                
                                <th class="px-4 py-3">Print</th>
                                
                            </tr>
                        </thead>
                       
                        <tbody class="bg-white divide-y">
                            <tr v-for="(purchaseinvoice, index) in purchaseinvoices.data" :key="purchaseinvoice.id"
                                class="text-gray-700">
                                <!-- <td class="px-4 py-3 text-sm">
                                    {{ index+1 }}
                                </td> -->
                                <td class="px-4 py-3 text-sm">
                                    {{ purchaseinvoice.id }}
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    {{ purchaseinvoice.total_quantity }}
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    {{ purchaseinvoice.gross_amount }}
                                </td>
                                
                                <td class="px-4 py-3 text-sm">
                                    {{ purchaseinvoice.total_discount }}
                                </td>

                                <td class="px-4 py-3 text-sm">
                                    {{ purchaseinvoice.net_amount }}
                                </td>
                                <td class="px-4 py-3 text-sm">
                                    {{ purchaseinvoice.service_charges }}
                                </td>
                              
                                <td class="px-4 py-3 text-sm">
                                    <a :href="generatePdfUrl(purchaseinvoice.id)" target="_blank">
                                        <button type="button"><svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 18a.969.969 0 0 0 .933 1h12.134A.97.97 0 0 0 15 18M1 7V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v5M6 1v4a1 1 0 0 1-1 1H1m0 9v-5h1.5a1.5 1.5 0 1 1 0 3H1m12 2v-5h2m-2 3h2m-8-3v5h1.375A1.626 1.626 0 0 0 10 13.375v-1.75A1.626 1.626 0 0 0 8.375 10H7Z"/>
                                            </svg></button>
                                    </a>
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div
                    class="px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9">
                    <pagination :links="purchaseinvoices.links" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import Pagination from '@/Components/Pagination.vue';

    import {
        Head, Link
    } from '@inertiajs/vue3';


    export default {
        components: {
            AuthenticatedLayout,
            Head,
            Pagination,
            Link
        },

        props: {
            purchaseinvoices: Object,
        },
        methods:{
            // generatePDF(id){
                
            //    this.$inertia.post('/generate-pdf/purchase', {invoiceid: id});

            // },
            generatePdfUrl(id) {
                // Return the URL for the PDF generation
                return `/generate-pdf/purchase?invoiceid=${id}`;
            },
        },
       
        
    }

</script>
