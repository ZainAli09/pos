<template>

    <Head title="Sale Invoice" />

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <button class="btn btn-primary" @click="downloadPDF">Download PDF</button>
    <div id="pdf-content">
        <div class="container" >
            <div class="flex space-x-4">
                <div class="w-1/1 mx-auto">
                    <h4>{{  user.company_name  }}</h4>
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-1/1 mx-auto">
                    <h5>{{  user.address  }}</h5>
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-1/1 mx-auto">
                    <h5>{{  user.mobile_no  }}</h5>
                </div>
            </div>

            <div class="flex space-x-4">
                <div class="w-1/1 mx-auto">
                    <h7>Sale Invoice</h7>
                </div>
            </div>

            <div class="flex space-x-4">
                <!-- <div class="w-2/12"> 
                    <p>Bill #:</p>
                </div>
                <div class="w-6/12"> 
                    <p>612 Bank Machine</p>
                </div> -->
                <!-- <div class="w-2/12"> 
                    <p>Invoice No:</p>
                </div> -->
                <div class="w-2/12"> <!-- 2/12 = 1/6 -->
                    <p>INV-{{ saleInvoice.id }}</p>
                </div>
            </div>

            <div class="flex space-x-4">
                <div class="w-2/12">
                    <p>Bill Type:</p>
                </div>

                <div class="w-6/12">
                    <p>Cash</p>

                </div>
                <div class="w-2/12">
                    <p>Date:</p>
                </div>
                <div class="w-2/12">
                    <p> {{ currentDate }}</p>
                </div>
            </div>

            <!-- <div class="row">
                <div class="col-lg-2">
                    <p>Bill Type:</p>
                </div>

                <div class="col-lg-6">
                    <p>Cash</p>

                </div>
                <div class="col-lg-2">
                    <p>Date:</p>
                </div>
                <div class="col-lg-2">
                    <p> {{ currentDate }}</p>
                </div>
            </div> -->
            <table class="w-full whitespace-no-wrap">
                <thead>
                    <tr
                        class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b">
                        <th class="px-1 fz py-3">Sr</th>
                        <th class="px-4 fz py-3">P-Name</th>
                        <th class="px-4 fz py-3">Quantity</th>
                        <th class="px-4 fz py-3">Price</th>
                        <th class="px-4 fz py-3">Net Total</th>
                        
                        
                    </tr>
                </thead>
                <tbody class="bg-white divide-y">
                    <tr v-for="(saleInvoiceDet, index) in saleInvoiceDetails" :key="saleInvoiceDet.id">
                        <td class="px-1 py-3 fz text-sm">{{ index + 1 }}</td>
                        <td class="px-4 py-3 fz text-sm">{{ saleInvoiceDet.product.name }}</td>
                        <td class="px-4 py-3 fz text-sm">{{ saleInvoiceDet.quantity }}</td>
                        <td class="px-4 py-3 fz text-sm">{{ saleInvoiceDet.product.sale_rate.toFixed(2) }}</td>
                        <td class="px-4 py-3 fz text-sm">{{ Math.round(saleInvoiceDet.amount) }}</td>
                    </tr>
                    
                </tbody>
            </table>
            <br />
            <div class="flex space-x-4 mt-0">
                <div class="w-1/3">
                    <p>T Item:</p>
                </div>
                <div class="w-2/12">
                    <p>{{ saleInvoiceDetails.length }}</p>
                </div>
                <div class="w-1/3">
                    <p>T Qty:</p>
                </div>
                <div class="w-2/12">
                    <p>{{ quantity }}</p>
                </div>

                <div class="w-2/12">
                    <p>Disc:</p>
                </div>
                <div class="w-2/12">
                    <p>{{saleInvoice.total_discount}}</p>
                </div>
                <div class="w-1/3">
                    <p>T-Amount:</p>
                </div>
                <div class="w-2/12">
                    <p>{{net_payable}}</p>
                </div>
            </div>
            <!-- <br> -->

            <hr class="mt-0">

            <div class="flex space-x-4">
                <div class="w-1/3">
                    <p>Thanks for ur Kind Visit</p>
                </div>
            </div>
            <hr class="mt-0">
            <div class="flex space-x-4">
                <div class="w-2/3">
                    <p>Relyma Solutions +92-333-6005212</p>
                </div>
                
                <div class="w-1/3">
                    <p>Gen By: {{authUser}}</p>
                </div>
                
            </div>
            <hr class="mt-0" />
        </div>
    </div>
    

</template>


<script>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import Pagination from '@/Components/Pagination.vue';
    import html2pdf from 'html2pdf.js';

    import {
        Head,
        Link, usePage
    } from '@inertiajs/vue3';


    export default {
        components: {
            AuthenticatedLayout,
            Head,
            Pagination,
            Link
        },
        props:{
            saleInvoice: Object,
            saleInvoiceDetails: Array,
            authUser: String
        },
        data() {
            return {
                currentDate: new Date().toLocaleDateString(),
                currentTime: new Date().toLocaleTimeString(),
                quantity: this.saleInvoiceDetails.reduce((total, item) => total + parseFloat(item.quantity), 0),
                net_payable: this.saleInvoiceDetails.reduce((total, item) => total + parseFloat(item.amount), 0),
                user : usePage().props.auth.user,

                


            };
        },
        methods: {
            
            downloadPDF() {
                console.log('downloadPDF called'); // Check if the method is called
                const element = document.getElementById('pdf-content');

                try {
                    // ... (rest of the code)
                    const pdfOptions = {
                    margin: 5,
                    filename: 'invoice.pdf',
                    
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'mm', orientation: 'portrait' }
                };
                
                html2pdf()
                    .from(element)
                    .set(pdfOptions)
                    .save();
                } catch (error) {
                    console.error('Error in downloadPDF:', error);
                }
                
                
            }
        }

    }

</script>
<style>
    body {
        margin: 0px;
        padding: 0px;
    }

    .heading {
        text-align: center;
    }
    p {
        font-size: 10px;
    }
    .fz{
        font-size: 10px;

    }
    .container{
        width: 28% !important;
    }

</style>
