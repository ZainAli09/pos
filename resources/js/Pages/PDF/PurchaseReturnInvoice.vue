<template>

    <Head title="Purchase Return Invoices" />

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <button @click="downloadPDF">Download PDF</button>
    <div id="pdf-content">
        <div class="row">
            <div class="col heading">
                <h2>{{  user.company_name  }}</h2>
            </div>
        </div>
        <div class="row">
            <div class="col heading">
                <h4>{{  user.address  }}</h4>
            </div>
        </div>
        <div class="row">
            <div class="col heading">
                <h4>{{  user.mobile_no  }}</h4>
            </div>
        </div>

        <div class="row">
            <div class="col heading">
                <h2>Purchase Return Invoice</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-2">
                <p>Vendor:</p>
            </div>
            <div class="col-lg-2">
                <p>{{ purchaseInvoice.vendor.name }}</p>

            </div>
            <div class="col-lg-4">
            </div>
            <div class="col-lg-2">
                <p>Invoice No:</p>
            </div>
            <div class="col-lg-2">
                <p>INV-{{ purchaseInvoice.id  }}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-2">
                <p>Address:</p>
            </div>

            <div class="col-lg-6">
                <p>{{ purchaseInvoice.vendor.address }}</p>

            </div>
            <div class="col-lg-2">
                <p>Purchase Return Date:</p>
            </div>
            <div class="col-lg-2">
                <p>{{ created_at }}</p>
            </div>
        </div>
        <table class="w-full whitespace-no-wrap">
            <thead>
                <tr
                    class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b">
                    <th class="px-4 py-3">Sr</th>
                    <th class="px-4 py-3">Product Name</th>
                    <th class="px-4 py-3">Quantity</th>
                    <th class="px-4 py-3">Price</th>
                    <th class="px-4 py-3">Net Total</th>
                    
                    
                </tr>
            </thead>
            <tbody class="bg-white divide-y">
                <tr v-for="(purchaseInvoiceDet, index) in purchaseInvoiceDetails" :key="purchaseInvoiceDet.id">
                    <td class="px-4 py-3 text-sm">{{ index + 1 }}</td>
                    <td class="px-4 py-3 text-sm">{{ purchaseInvoiceDet.product.name }}</td>
                    <td class="px-4 py-3 text-sm">{{ purchaseInvoiceDet.quantity }}</td>
                    <td class="px-4 py-3 text-sm">{{ purchaseInvoiceDet.product.purchase_rate }}</td>
                    <td class="px-4 py-3 text-sm">{{ purchaseInvoiceDet.total_rate }}</td>
                </tr>
                
            </tbody>
        </table>
        <br />

        <div class="flex space-x-4">
            
            <div class="w-1/3">
                <p>T. Item:</p>
            </div>
            <div class="w-1/3">
                <p>{{ purchaseInvoiceDetails.length }}</p>
            </div>
            <div class="w-1/3">
                <p>T. Qty:</p>
            </div>
            <div class="w-1/3">
                <p>{{ quantity }}</p>
            </div>

            <div class="w-1/3">
                <p>Dist %</p>
            </div>
            <div class="w-1/3">
                <p>{{purchaseInvoice.total_discount}}</p>
            </div>
            <div class="col-lg-2">
                <p>Net Payable:</p>
            </div>
            <div class="w-1/3">
                <p>{{net_payable}}</p>
            </div>
        </div>
        <br><br>

        <div class="flex space-x-4">
            <div class="w-1/3">
                <p>Recieved By:</p>
            </div>

            <div class="w-1/3">
                ________________________
            </div>
            <div class="w-1/3">
                <p>Payable:</p>
            </div>
            <div class="w-1/3">
                <p>{{net_payable}}</p>
            </div>
        </div>

        <hr>
        
        <div class="flex space-x-4">
            <div class="w-1/3">
                <p>Thanks for ur Kind Visit</p>
            </div>
        </div>
        <hr>
        <div class="flex space-x-4">
            <div class="w-1/2">
                <p>Developed By Relyma Solutions +92-333-6005212</p>
            </div>
            <div class="w-1/4">
                <p>Date: {{  currentDate  }}</p>
            </div>
            <div class="w-1/4">
                <p>Gen By: {{authUser}}</p>
            </div>
            
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
            purchaseInvoice: Object,
            purchaseInvoiceDetails: Array,
            authUser: String
        },
        data(){
            

            return{
                currentDate: new Date().toLocaleDateString(),
                currentTime: new Date().toLocaleTimeString(),
                quantity: this.purchaseInvoiceDetails.reduce((total, item) => total + parseFloat(item.quantity), 0),
                net_payable: this.purchaseInvoiceDetails.reduce((total, item) => total + parseFloat(item.total_rate), 0),
                created_at: '',
                user : usePage().props.auth.user,


            }
        },
        created() {
            this.created_at = new Date(this.purchaseInvoice.created_at).toLocaleDateString();

           
        },
        methods: {
            
            downloadPDF() {
                // console.log('downloadPDF called'); // Check if the method is called
                const element = document.getElementById('pdf-content');

                try {
                    // ... (rest of the code)
                    const pdfOptions = {
                    margin: 5,
                    filename: 'purchasereturninvoice.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
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

</style>
